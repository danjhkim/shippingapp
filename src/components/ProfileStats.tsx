import React, { FC } from 'react';
import '../scss/ProfileStats.scss';
import ContactInfo from './profilebar/ContactInfo';
import ActivityInfo from './profilebar/ActivityInfo';
import Sms from './profilebar/Sms';
import personData from '../api/fakedata/header.json';
import { calculateAge } from '../utils/ageConverter';

const ProfileStats: FC = () => {
	const age = calculateAge(personData.birth_date);

	return (
		<div className='profileStats'>
			<div className='profilePic'>
				<div className='innerFrame'>
					<i
						className='fa-user fal profileIcon'
						style={{ color: '#ffffff' }}
					/>
				</div>
				<div className='sexAge'>{`${personData.gender.toUpperCase()} ${age}`}</div>
			</div>
			<ContactInfo />
			<ActivityInfo />
			<Sms />
		</div>
	);
};

export default ProfileStats;
