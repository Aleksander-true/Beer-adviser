/** API */
export const BASE_API_URL = "https://random-data-api.com/api";
export const USER_DATA_URL = BASE_API_URL + "/users/random_user";
export const BEER_DATA_URL = BASE_API_URL + "/beer/random_beer";
export const ATTEMTS_GETING_USER_DATA = 10;
export const TIMEOUT_API_REQUEST_MS = 100;

/**Header */
export const HOME_LINK = "Your beer";
export const ABOUT_LINK = "About";

/**Beer Label */
export const ALCOHOL_LABEL = "Alc: ";
export const STYLE_LABEL = "Style: ";
export const BLG_LABEL = "Bitterness: ";
export const HOP_LABEL = "Hop variety: ";
export const YEAST_LABEL = "Yeast: ";
export const MALTS_LABEL = "Malts: ";

/**Update Beer */
export const UPDATE_BEER_ERROR_MESSAGE =
  "Hommer got distracted, please try again";

/**Strart Page */
export const ADVISE_BEER_BTN_TEXT = "Advise";
export const UPDATE_BEER_BTN_TEXT = "Another Beer";

/**Profile */
export const PROFILE_TITLE = "Profile";
export const POSITION_LABEL = "Position: ";
export const BIRTH_LABEL = "Birthday: ";
export const AGE_LABEL = "Age: ";
export const BEER_NAME_LABEL = "Beer: ";
export const ADVISE_BEER_BTN = "Click to advise";
export const INIT_PERSON_DATA = {
  id: 0,
  uid: "",
  password: "password",
  first_name: "Guest",
  last_name: "",
  username: "Guest",
  email: "test@test.com",
  avatar: "",
  gender: "gender",
  phone_number: "",
  social_insurance_number: "",
  date_of_birth: "0001-01-01",
  employment: { title: "Good Guy", key_skill: "Proactive" },
  address: {
    city: "",
    street_name: " ",
    street_address: "",
    zip_code: "",
    state: "",
    country: "",
    coordinates: { lat: -89.06155994553541, lng: -102.60809030892196 },
  },
  credit_card: { cc_number: "0000-0000-0000-0000" },
  subscription: {
    plan: "Standard",
    status: "Active",
    payment_method: "Alipay",
    term: "Payment in advance",
  },
};
