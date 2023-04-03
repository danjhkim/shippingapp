import { FC } from 'react';
import { useAppSelector } from '../../hooks';

const ContactInfo: FC = () => {
	const realData = useAppSelector(state => state.summaryReducer.summaryData);

	return (
		<>
			{realData && (
				<div className='userInfo'>
					<div className='userInfoSub'>
						<div className='id'>
							<i
								className='fa-user fal icon'
								style={{ color: '#B0C6D8' }}
							/>
							<div className='data'>#{realData.id}</div>
						</div>

						<div className='cellPhone'>
							<i
								className='fa-mobile fal icon'
								style={{ color: '#B0C6D8' }}
							/>
							<a href='tel:+112345678' className='data cell'>
								{realData.mobile_phone}
							</a>
						</div>
						<div className='businessPhone'>
							<i
								className='fa-building fal icon'
								style={{ color: '#B0C6D8' }}
							/>
							<a href='tel:+112345678, 1023' className='data'>
								{realData.work_phone}
							</a>
						</div>
						<div className='homePhone'>
							<i
								className='fa-house fal icon'
								style={{ color: '#B0C6D8' }}
							/>
							<a href='tel:+112345678' className='data'>
								{realData.home_phone}
							</a>
						</div>
						<div className='email'>
							<i
								className='fa-at fal icon'
								style={{ color: '#B0C6D8' }}
							/>
							<a
								href='mailto:joe.smith@testemail.com'
								className='data'>
								{realData.email}
							</a>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default ContactInfo;
