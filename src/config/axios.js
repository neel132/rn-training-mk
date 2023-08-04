import axios from "axios";
const axiosInstance = axios.create({
	baseURL: 'https://dummy.restapiexample.com/api/v1/',
	timeout: 15000,
	headers: {},
});

axiosInstance.interceptors.request.use(config => {
	console.log("Intercepting the request", config);
	let token = 'Bearer abc';
	if(token) {
		config.headers['Authorization'] = token;
	}
	return config;
})

axiosInstance.interceptors.response.use(response => {
	console.log("Intercepting the response", response);
	return response;
})

export default axiosInstance;