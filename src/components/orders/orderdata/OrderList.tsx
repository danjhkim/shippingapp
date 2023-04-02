import { FC } from 'react';
import Errors from './Errors';
import '../../../scss/OrderList.scss';
import { OrderListProps, Orders } from '../../../types/OrderTypes';
import EmailTable from './EmailTable';
import data from '../../../api/fakedata/orders.json';
import { paramsAbstracter } from '../../../utils/paramsAbstracter';

const OrderList: FC<OrderListProps> = ({ page }) => {
	const orderID = paramsAbstracter();
	const orderGroup = data?.[`orders_${orderID}` as keyof Orders];
	const sentEmails = Array.isArray(orderGroup) ? [] : orderGroup.sent;

	return (
		<div className='list'>
			{page === 1 && <EmailTable data={sentEmails} />}
			{/* Errors should be refactored to have api call once backend is available */}
			{page === 2 && <Errors />}
		</div>
	);
};

export default OrderList;
