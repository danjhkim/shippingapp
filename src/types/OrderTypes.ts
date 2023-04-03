export interface OrderBarProps {
	page: number;
	setPage: (page: number) => void;
}

export interface OrderListProps {
	page: number;
}

export interface OrderBarProps {
	page: number;
	setPage: (page: number) => void;
}

export interface OrderBarProps {
	page: number;
	setPage: (page: number) => void;
}

export interface SentEmail {
	id: number;
	order_id: number;
	sent_dt: string;
	sent_tm: string;
	subject: {
		title: string;
		email: string;
	};
	type: string;
}

export interface Orders {
	orders_A:
		| {
				sent: SentEmail[];
		  }
		| never[];
	orders_AA:
		| {
				sent: SentEmail[];
		  }
		| never[];
	orders_AAA: {
		sent: SentEmail[];
	};
	orders_B:
		| {
				sent: SentEmail[];
		  }
		| never[];
	orders_C:
		| {
				sent: SentEmail[];
		  }
		| never[];
}

interface Activity {
	sms: number;
	email: number;
	orders: number;
}

interface CarrierStatus {
	since: string;
	status: string;
}

export interface User {
	id: number;
	first_name: string;
	last_name: string;
	photo_url: string | null;
	gender: string;
	birth_date: string;
	home_phone: string;
	mobile_phone: string;
	work_phone: string;
	email: string;
	activity: Activity;
	carrier_status: CarrierStatus;
}
