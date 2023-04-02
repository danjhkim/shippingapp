import { FC, useState } from 'react';
import OrderBar from './OrderBar';
import OrderList from './OrderList';

const OrderMain: FC = () => {
	const [page, setPage] = useState<number>(1);

	return (
		<>
			<OrderBar page={page} setPage={setPage} />
			<OrderList page={page} />
		</>
	);
};

export default OrderMain;
