import React, { FC, useEffect } from 'react';
import '../../../scss/OrderData.scss';
import { OrderBarProps } from '../../../types/OrderTypes';
import { useAppDispatch } from '../../../hooks';

const OrderBar: FC<OrderBarProps> = ({ page, setPage }) => {
	const dispatch = useAppDispatch();

	const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
		e.preventDefault();
		const page = parseInt(e.currentTarget.dataset.page as string);
		setPage(page);
		dispatch({ type: 'orders/fetchOrders' }); // dispatch action to trigger fetchOrdersSaga in redux-saga
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			const page = parseInt(e.currentTarget.dataset.page as string);
			setPage(page);
			dispatch({ type: 'orders/fetchOrders' }); // dispatch action to trigger fetchOrdersSaga in redux-saga
		}
	};

	useEffect(() => {
		dispatch({ type: 'orders/fetchOrders' });
	}, [dispatch]);

	return (
		<div>
			<header className='dataHeader'>
				<nav>
					<span
						className={`${page === 1 ? 'activeOrder' : ''} sent`}
						data-page='1'
						onClick={handleClick}
						onKeyDown={handleKeyDown}>
						SENT
					</span>
					<span
						className={`${page === 2 ? 'activeOrder' : ''} errors`}
						data-page='2'
						onClick={handleClick}
						onKeyDown={handleKeyDown}>
						ERRORS
					</span>
				</nav>
				<h3>RECENT ORDERS</h3>
			</header>
		</div>
	);
};

export default OrderBar;
