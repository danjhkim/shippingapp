import { FC } from 'react';
import personData from '../../api/fakedata/header.json';
import { sinceDataFormatter } from '../../utils/stringConverter';

const Sms: FC = () => {
	return (
		<div className='smsBox'>
			<div className='smsHeader'>SMS CARRIER STATUS</div>
			<div className='activityStatBar'>
				<div className='statBox smsBoxOverRide'>
					<div className='statNumber'>
						{personData.carrier_status.status}
					</div>
					<div className='bottomBar smsBottomBarOverRide'>
						<div className='bottomText'>
							{sinceDataFormatter(
								personData.carrier_status.since,
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sms;
