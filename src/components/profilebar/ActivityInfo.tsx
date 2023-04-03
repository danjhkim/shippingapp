import { FC } from 'react';
import { useAppSelector } from '../../hooks';

const ActivityInfo: FC = () => {
	const realData = useAppSelector(state => state.summaryReducer.summaryData);

	return (
		<>
			{realData && (
				<div className='activity'>
					<div className='dayHeader'>
						90-DAY COMMUNICATION ACTIVITY
					</div>
					<div className='activityStatBar'>
						<div className='statBox'>
							<div className='statNumber'>
								{realData.activity.sms}
							</div>
							<div className='bottomBar'>
								<div className='bottomText'>SMS</div>
							</div>
						</div>
						<div className='statBox'>
							<div className='statNumber'>
								{realData.activity.email}
							</div>
							<div className='bottomBar'>
								<div className='bottomText'>EMAIL</div>
							</div>
						</div>
						<div className='statBox'>
							<div className='statNumber'>
								{realData.activity.orders}
							</div>
							<div className='bottomBar'>
								<div className='bottomText'>ORDERS</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default ActivityInfo;
