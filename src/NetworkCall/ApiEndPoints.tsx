import { APPConfig } from "../Helper";

const image_url = "";
const API_URL = "https://api-shield.rukkor.dev/";
 

const ApiEndPoints = {
  imagepath: image_url,
  register: `${API_URL}api/users/register`,
  login: `${API_URL}api/users/login`,
  updateprofile: `${API_URL}api/users/update_profile`,
  get_country: `${API_URL}api/users/get_country`,
   

};

export default ApiEndPoints;
