import { FC, useEffect } from 'react';
import '../scss/ProfileStats.scss';
import ContactInfo from './profilebar/ContactInfo';
import ActivityInfo from './profilebar/ActivityInfo';
import Sms from './profilebar/Sms';
import personData from '../api/fakedata/header.json';
import { calculateAge } from '../utils/ageConverter';
import { useAppDispatch, useAppSelector } from '../hooks';
import ProfileStatsSkeleton from './cssloader/HeaderSkeleton';

const ProfileStats: FC = () => {
	const age = calculateAge(personData.birth_date);
	const dispatch = useAppDispatch();
	const realData = useAppSelector(state => state.summaryReducer.summaryData);

	useEffect(() => {
		dispatch({ type: 'summary/fetchSummary' });
		//! emulate failed api call to see skeleton loading
		// uncomment setTimeOut and comment setData(realData);

		// setTimeout(() => {
		// 	setData(null);
		// }, 1000);
	}, [dispatch, realData]);

	if (!realData) {
		return <ProfileStatsSkeleton />;
	} else {
		return (
			<div className='profileStats'>
				<div className='profilePic'>
					<div className='innerFrame'>
						<i
							className='fa-user fal profileIcon'
							style={{ color: '#ffffff' }}
						/>
					</div>
					<div className='sexAge'>{`${realData.gender.toUpperCase()} ${age}`}</div>
				</div>
				<ContactInfo />
				<ActivityInfo />
				<Sms />
			</div>
		);
	}
};

export default ProfileStats;
