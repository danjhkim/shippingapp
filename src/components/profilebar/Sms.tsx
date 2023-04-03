import { FC } from 'react';
import { sinceDataFormatter } from '../../utils/stringConverter';
import { useAppSelector } from '../../hooks';

const Sms: FC = () => {
	const realData = useAppSelector(state => state.summaryReducer.summaryData);

	return (
		<>
			{realData && (
				<div className='smsBox'>
					<div className='smsHeader'>SMS CARRIER STATUS</div>
					<div className='activityStatBar'>
						<div className='statBox smsBoxOverRide'>
							<div className='statNumber'>
								{realData.carrier_status.status}
							</div>
							<div className='bottomBar smsBottomBarOverRide'>
								<div className='bottomText'>
									{sinceDataFormatter(
										realData.carrier_status.since,
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Sms;
