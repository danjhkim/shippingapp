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
