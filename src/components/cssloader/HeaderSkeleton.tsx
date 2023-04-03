import '../../scss/ProfileStatsSkeleton.scss';

const ProfileStatsSkeleton = () => {
	return (
		<div className='profileStatsSkeleton'>
			<div className='skeletonProfilePic' />
			<div className='skeletonContact' />
			<div className='skeletonAct' />
			<div className='skeletonSms' />
		</div>
	);
};

export default ProfileStatsSkeleton;
