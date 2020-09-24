import axios from "axios";

export default axios.create({
  baseURL: "http://128.199.190.225:3000/api/",
  headers: {
    "Content-type": "application/json"
  }
});
