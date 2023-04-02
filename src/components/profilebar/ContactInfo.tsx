import { FC } from 'react';
import personData from '../../api/fakedata/header.json';

const ContactInfo: FC = () => {
	return (
		<div className='userInfo'>
			<div className='id'>
				<i className='fa-user fal icon' style={{ color: '#B0C6D8' }} />
				<div className='data'>#{personData.id}</div>
			</div>

			<div className='cellPhone'>
				<i
					className='fa-mobile fal icon'
					style={{ color: '#B0C6D8' }}
				/>
				<a href='tel:+112345678' className='data cell'>
					{personData.mobile_phone}
				</a>
			</div>
			<div className='businessPhone'>
				<i
					className='fa-building fal icon'
					style={{ color: '#B0C6D8' }}
				/>
				<a href='tel:+112345678, 1023' className='data'>
					{personData.work_phone}
				</a>
			</div>
			<div className='homePhone'>
				<i className='fa-house fal icon' style={{ color: '#B0C6D8' }} />
				<a href='tel:+112345678' className='data'>
					{personData.home_phone}
				</a>
			</div>
			<div className='email'>
				<i className='fa-at fal icon' style={{ color: '#B0C6D8' }} />
				<a href='mailto:joe.smith@testemail.com' className='data'>
					{personData.email}
				</a>
			</div>
		</div>
	);
};

export default ContactInfo;
