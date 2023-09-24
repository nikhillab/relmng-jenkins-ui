import axios from 'axios';
import CONSTANTS from "../common/Constants"

export default axios.create({
  baseURL: CONSTANTS.SERVER_URL
});