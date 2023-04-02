import axios from 'axios';

export const statsApi = axios.create({
	baseURL: 'https://evoteam-verasoft.github.io/data/',
});
