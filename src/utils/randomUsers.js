import axios from "axios";

const URL = `https://randomuser.me/api/?results=10&nat=us`;

export default {
  getEmployees() {
    return axios.get(URL);
  },
};
