import '../../scss/ProfileStatsSkeleton.scss';

const ProfileStatsSkeleton = () => {
	return (
		<div className='profileStatsSkeleton'>
			<div className='skeleBox'>
				<div className='skeletonProfilePic' />
				<div className='skeletonContact' />
			</div>
			<div className='skeletonAct' />
			<div className='skeletonSms' />
		</div>
	);
};

export default ProfileStatsSkeleton;
