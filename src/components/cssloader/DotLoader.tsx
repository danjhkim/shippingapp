import { FC } from 'react';
import '../../scss/DotLoader.scss';

const DotLoader: FC = () => {
	return (
		<div className='loader'>
			<div className='dot' />
			<div className='dot' />
			<div className='dot' />
		</div>
	);
};

export default DotLoader;
