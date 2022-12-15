import axios from 'axios';
const API = axios.create({
    baseURL: "https://test.einvoice-ksa.com/"
});
export default API;