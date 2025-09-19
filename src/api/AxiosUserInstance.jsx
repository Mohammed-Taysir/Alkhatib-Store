import axios from "axios";


const token = localStorage.getITem('userToken');

const AxiosUserInstance = axios.create({
    baseURL: 'https://kashop1.runasp.net/api',
    headers: {
        Authorization: `Bearer ${userToken}`
    }
});

export default AxiosUserInstance;