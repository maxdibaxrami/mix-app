import axios from "axios";

export const getLocation = (setError, setLocation, setCoordinates) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => onSuccess(position, setError, setLocation, setCoordinates),
      (error) => {
        // Handle geolocation errors
        setError('Error getting position: ' + error.message);
      }
    );
  } else {
    setError('Geolocation is not supported by this browser.');
  }
};

export const onSuccess = async (position, setError, setLocation, setCoordinates) => {
  const { latitude, longitude } = position.coords;

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
