import { FC } from 'react';
import personData from '../../api/fakedata/header.json';

const ActivityInfo: FC = () => {
	return (
		<div className='activity'>
			<div className='dayHeader'>90-DAY COMMUNICATION ACTIVITY</div>
			<div className='activityStatBar'>
				<div className='statBox'>
					<div className='statNumber'>{personData.activity.sms}</div>
					<div className='bottomBar'>
						<div className='bottomText'>SMS</div>
					</div>
				</div>
				<div className='statBox'>
					<div className='statNumber'>
						{personData.activity.email}
					</div>
					<div className='bottomBar'>
						<div className='bottomText'>EMAIL</div>
					</div>
				</div>
				<div className='statBox'>
					<div className='statNumber'>
						{personData.activity.orders}
					</div>
					<div className='bottomBar'>
						<div className='bottomText'>ORDERS</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ActivityInfo;
