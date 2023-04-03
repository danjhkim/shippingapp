import { FC } from 'react';
import { BrowserRouter as Browser, Route, Routes } from 'react-router-dom';
import '../scss/App.scss';
import Header from './Header';
import ProfileStats from './ProfileStats';
import NavBar from './NavBar';
import OrdersA from './orders/OrdersA';
import OrdersAA from './orders/OrdersAA';
import OrdersAAA from './orders/OrdersAAA';
import OrdersB from './orders/OrdersB';
import OrdersC from './orders/OrdersC';

const App: FC = () => {
	return (
		<div className='wrapper'>
			<div className='App'>
				<Browser>
					<Header />
					<ProfileStats />
					<NavBar />
					<Routes>
						<Route path='/A' element={<OrdersA />} />
						<Route path='/AA' element={<OrdersAA />} />
						<Route path='/AAA' element={<OrdersAAA />} />
						<Route path='/B' element={<OrdersB />} />
						<Route path='/C' element={<OrdersC />} />
						<Route path='/*' element={<OrdersA />} />
					</Routes>
				</Browser>
			</div>
		</div>
	);
};

export default App;
