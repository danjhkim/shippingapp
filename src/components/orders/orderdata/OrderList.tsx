import { FC } from 'react';
import Errors from './Errors';
import '../../../scss/OrderList.scss';
import { OrderListProps, Orders } from '../../../types/OrderTypes';
import EmailTable from './EmailTable';
import { paramsAbstracter } from '../../../utils/paramsAbstracter';
import { useAppSelector } from '../../../hooks';

const OrderList: FC<OrderListProps> = ({ page }) => {
	const ordersData = useAppSelector(state => state.ordersReducer.ordersData);
	const orderID = paramsAbstracter();
	const orderGroup = (ordersData as Orders)?.[
		`orders_${orderID}` as keyof Orders
	];
	const sentEmails = Array.isArray(orderGroup) ? [] : orderGroup?.sent;

	return (
		<div className='list'>
			{page === 1 && <EmailTable data={sentEmails} />}
			{/* Errors should be refactored to have api call once backend is available */
			/* Currently a fake api call is being made through setTimout inside Errors component */}
			{page === 2 && <Errors />}
		</div>
	);
};

export default OrderList;
