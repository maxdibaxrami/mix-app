import axios from "axios";


// Check if running inside Telegram Mini App 
// @ts-ignore
const isTelegramWebApp = window && window.Telegram && window.Telegram.WebApp;

export const getLocation = (setError: (error: string) => void, setLocation: (location: string) => void, setCoordinates: (coordinates: { lat: number, lon: number }) => void) => {
  if (isTelegramWebApp) {
    // Request location permission from Telegram
    // @ts-ignore
    window.Telegram.WebApp.requestLocation({
      timeout: 5000, // optional: timeout for the location request
      accuracy: 'high' // optional: accuracy level of the location data
    })
    .then((position) => {
      onSuccess(position, setError, setLocation, setCoordinates);
    })
    .catch((error) => {
      setError('Error getting position from Telegram: ' + error.message);
    });
  } else if (navigator.geolocation) {
    // Fallback to browser's geolocation if not in Telegram WebApp
    navigator.geolocation.getCurrentPosition(
      (position) => onSuccess(position, setError, setLocation, setCoordinates),
      (error) => {
        setError('Error getting position: ' + error.message);
      }
    );
  } else {
    setError('Geolocation is not supported by this browser or Telegram Mini App.');
  }
};

export const onSuccess = async (position: { latitude: number, longitude: number } | GeolocationPosition, setError: (error: string) => void, setLocation: (location: string) => void, setCoordinates: (coordinates: { lat: number, lon: number }) => void) => {
  const { latitude, longitude } = 'coords' in position ? position.coords : position; // Handle both browser and Telegram location object

  // Set the coordinates
  console.log('Coordinates:', latitude, longitude);
  setCoordinates({ lat: latitude, lon: longitude });

  // Reverse geocode to get city and country
  try {
    const response = await axios.get('https://nominatim.openstreetmap.org/reverse', {
      params: {
        lat: latitude,
        lon: longitude,
        format: 'json',
      },
    });

    const city = response.data.address.city || response.data.address.town || '';
    const country = response.data.address.country || '';
    const location = `${city}, ${country}`;

    if (location) {
      console.log('Location:', location);
      setLocation(location);  // Set location in parent
    } else {
      setError('Unable to retrieve city or country from location data.');
    }
  } catch (err) {
    console.error('Error fetching location:', err.message);
    setError('Error fetching location data: ' + err.message);
  }
};
