import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export const statsApi = axios.create({
	baseURL: apiUrl,
});

export const getOrdersData = async () => {
	try {
		const response = await statsApi.get('orders.json');
		return response.data;
	} catch (error: unknown) {
		if (error instanceof Error) {
			throw new Error(`Error fetching orders data: ${error.message}`);
		} else {
			throw new Error(
				'Error fetching orders data: An unexpected error occurred.',
			);
		}
	}
};

export const getSummaryData = async () => {
	try {
		const response = await statsApi.get('summary.json');
		return response.data;
	} catch (error: unknown) {
		if (error instanceof Error) {
			throw new Error(`Error fetching orders data: ${error.message}`);
		} else {
			throw new Error(
				'Error fetching orders data: An unexpected error occurred.',
			);
		}
	}
};
