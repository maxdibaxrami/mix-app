import {
  ChatIcon,
  FireIcon,
  HeartIcon,
} from "@/Icons";

export const BASEURL = "https://copychic.ru/"

    
export const getlookingfor = (t) => [
    {
      id: "1",
      title: t("Heretodate"),
      description: t("IwanttogoondatesandhaveagoodtimeNolabels"),
      color: "success" // Valid color
    },
    {
      id: "2",
      title: t("Opentochat"),
      description: t("ImheretochatandseewhereitgoesNopressure"),
      color: "warning" // Valid color
    },
    {
      id: "3",
      title: t("Readyforarelationship"),
      description: t("ImlookingforsomethingthatlastsNogames"),
      color: "danger" // Valid color
    },
];

export const getRealationStatus = (t) => [
    { key: "1", label: t("Single") },
    { key: "2", label: t("Taken") },
    { key: "3", label: t("open") },
    { key: "4", label: t("Irathernotsay") },
  ];

export const getlanguages = (t) => [
    { key: "en", label: t("en") },
    { key: "zh", label: t("zh") },
    { key: "es", label: t("es") },
    { key: "hi", label: t("hi") },
    { key: "ar", label: t("ar") },
    { key: "bn", label: t("bn") },
    { key: "fr", label: t("fr") },
    { key: "ru", label: t("ru") },
    { key: "pt", label: t("pt") },
    { key: "id", label: t("id") },
    { key: "ja", label: t("ja") },
    { key: "de", label: t("de") },
    { key: "pa", label: t("pa") },
    { key: "ur", label: t("ur") },
    { key: "ko", label: t("ko") },
    { key: "vi", label: t("vi") },
    { key: "fa", label: t("fa") },
    { key: "tr", label: t("tr") },
    { key: "ta", label: t("ta") },
    { key: "it", label: t("it") },
  ];
 
export const getSexualityStatus = (t) => [
    { key: "1", label: t("straight") },
    { key: "2", label: t("gay") },
    { key: "3", label: t("lesbian") },
    { key: "4", label: t("bisexual") },
    { key: "5", label: t("asexual") },
    { key: "6", label: t("pansexual") },
    { key: "7", label: t("queer") },
    { key: "8", label: t("questioning") },
    { key: "9", label: t("Irathernotsay") },

  ];

export const gethobbies = (t) => [
    { id: 1, name: t("Hiking") },
    { id: 2, name: t("Cooking") },
    { id: 3, name: t("Traveling") },
    { id: 4, name: t("Guitar") },
    { id: 5, name: t("Photography") },
    { id: 6, name: t("Yoga") },
    { id: 7, name: t("Painting") },
    { id: 8, name: t("Reading") },
    { id: 9, name: t("Running") },
    { id: 10, name: t("Meditation") },
    { id: 11, name: t("Cycling") },
    { id: 12, name: t("Surfing") },
    { id: 13, name: t("Gardening") },
    { id: 14, name: t("Fishing") },
    { id: 15, name: t("Rock Climbing") },
    { id: 16, name: t("Dancing") },
    { id: 17, name: t("Gaming") },
    { id: 18, name: t("Blogging") },
    { id: 19, name: t("Swimming") },
    { id: 20, name: t("Martial Arts") },
    { id: 21, name: t("Bird Watching") },
    { id: 22, name: t("Karaoke") },
    { id: 23, name: t("Skateboarding") },
    { id: 24, name: t("Board Games") },
    { id: 25, name: t("Archery") },
    { id: 26, name: t("Skydiving") },
    { id: 27, name: t("Scuba Diving") },
    { id: 28, name: t("Tennis") },
    { id: 29, name: t("Soccer") },
    { id: 30, name: t("Basketball") },
    { id: 31, name: t("Golf") },
    { id: 32, name: t("Skiing") },
    { id: 33, name: t("Snowboarding") },
    { id: 34, name: t("Bowling") },
    { id: 35, name: t("Wine Tasting") },
    { id: 36, name: t("Baking") },
    { id: 37, name: t("Knitting") },
    { id: 38, name: t("Sewing") },
    { id: 39, name: t("Pottery") },
    { id: 40, name: t("Astronomy") },
    { id: 41, name: t("Camping") },
    { id: 42, name: t("Woodworking") },
    { id: 43, name: t("Volunteering") },
    { id: 44, name: t("Writing") },
    { id: 45, name: t("Poetry") },
    { id: 46, name: t("Journaling") },
    { id: 47, name: t("Calligraphy") },
    { id: 48, name: t("Magic Tricks") },
    { id: 49, name: t("Stand-up Comedy") },
    { id: 50, name: t("Cosplay") },
    { id: 51, name: t("Tattoo Design") },
    { id: 52, name: t("Origami") },
    { id: 53, name: t("Chess") },
    { id: 54, name: t("Vegan Cooking") },
    { id: 55, name: t("Collecting Antiques") },
    { id: 56, name: t("Fencing") },
    { id: 57, name: t("Parkour") },
    { id: 58, name: t("Beekeeping") },
    { id: 59, name: t("Leather Crafting") },
    { id: 60, name: t("Mixology") },
    { id: 61, name: t("Ice Skating") },
    { id: 62, name: t("Puzzles") },
    { id: 63, name: t("Robotics") },
    { id: 64, name: t("Virtual Reality") },
    { id: 65, name: t("Home Brewing") },
    { id: 66, name: t("Carpentry") },
    { id: 67, name: t("Flower Arranging") },
    { id: 68, name: t("Metalworking") },
    { id: 69, name: t("Jewelry Making") },
    { id: 70, name: t("Animal Rescue") },
    { id: 71, name: t("Pilates") },
    { id: 72, name: t("Kayaking") },
    { id: 73, name: t("Bungee Jumping") },
    { id: 74, name: t("Running Marathons") },
    { id: 75, name: t("Dog Training") },
    { id: 76, name: t("Horseback Riding") },
    { id: 77, name: t("Sailing") },
    { id: 78, name: t("Stand-up Paddleboarding") },
    { id: 79, name: t("Weightlifting") },
    { id: 80, name: t("Bodybuilding") },
    { id: 81, name: t("Competitive Gaming") },
    { id: 82, name: t("Podcasting") },
    { id: 83, name: t("Vlogging") },
    { id: 84, name: t("Street Art") },
    { id: 85, name: t("Historical Reenactments") },
    { id: 86, name: t("Geocaching") },
    { id: 87, name: t("Hiking with Dogs") },
    { id: 88, name: t("DIY Projects") },
    { id: 89, name: t("Car Restoration") },
    { id: 90, name: t("Motorcycling") },
    { id: 91, name: t("4x4 Off-roading") },
    { id: 92, name: t("Mountain Biking") },
    { id: 93, name: t("Frisbee Golf") },
    { id: 94, name: t("LARPing") },
    { id: 95, name: t("Drone Racing") },
    { id: 96, name: t("Rollerblading") },
    { id: 97, name: t("Escape Rooms") },
    { id: 98, name: t("Trivia Nights") },
    { id: 99, name: t("Kite Surfing") },
    { id: 100, name: t("Astronaut Training") }
  ];

  export const getPetStatus = (t) => [
    { key: "1", label: t("has_pets") },
    { key: "2", label: t("no_pets") },
    { key: "3", label: t("likes_pets") },
    { key: "4", label: t("does_not_like_pets") },
    { key: "5", label: t("Irathernotsay") },

  ];

  export const getDrinkStatus =(t) => [
    { key: "1", label: t("drinks_regularly") },
    { key: "2", label: t("occasionally_drinks") },
    { key: "3", label: t("does_not_drink") },
    { key: "4", label: t("trying_to_quit_drinking") },
    { key: "5", label: t("Irathernotsay") },

  ];

  export const getSmokingStatus =(t) => [
    { key: "1", label: t("smokes_regularly") },
    { key: "2", label: t("occasionally_smokes") },
    { key: "3", label: t("does_not_smoke") },
    { key: "4", label: t("trying_to_quit_smoking") },
    { key: "5", label: t("Irathernotsay") },

  ];

  export const getKidStatus =(t) => [
    { key: "1", label: t("has_kids") },
    { key: "2", label: t("no_kids") },
    { key: "3", label: t("wants_kids") },
    { key: "4", label: t("does_not_want_kids") },
    { key: "5", label: t("open_to_kids") },
    { key: "6", label: t("Irathernotsay") },

  ];

export const getStaticData = (t: (key: string) => string) => ({
  Items: [
    {
      id: "1",
      title: t("Heretodate"),
      description: t("IwanttogoondatesandhaveagoodtimeNolabels"),
      icon: FireIcon,
      color: "success"
    },
    {
      id: "2",
      title: t("Opentochat"),
      description: t("ImheretochatandseewhereitgoesNopressure"),
      icon: ChatIcon ,
      color: "warning"
    },
    {
      id: "3",
      title: t("Readyforarelationship"),
      description: t("ImlookingforsomethingthatlastsNogames"),
      icon: HeartIcon ,
      color: "danger"
    }
  ],
  RealationStatus: getRealationStatus(t),
  languages: getlanguages(t),
  SexualityStatus: getSexualityStatus(t),
  hobbies: gethobbies(t),
  PetStatus: getPetStatus(t),
  DrinkStatus: getDrinkStatus(t),
  SmokingStatus: getSmokingStatus(t),
  KidStatus: getKidStatus(t),
});


export const getEducationStatus = (t) => [
  { key: "high_school", label: t("high_school") },
  { key: "some_college", label: t("some_college") },
  { key: "bachelor_degree", label: t("bachelor_degree") },
  { key: "master_degree", label: t("master_degree") },
  { key: "phd", label: t("phd") },
  { key: "prefer_not_to_say", label: t("prefer_not_to_say") },
];