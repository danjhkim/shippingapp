import '../../../scss/Errors.scss';
import { FC, useEffect, useState } from 'react';
import DotLoader from '../../cssloader/DotLoader';

const Errors: FC = () => {
	const [loading, setLoading] = useState<boolean>(false);

	//simulate fake api call time for loading
	useEffect(() => {
		setLoading(true);

		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	const renderItems = () => {
		return (
			<>
				{loading && <DotLoader />}
				{!loading && <span>No Items</span>}
			</>
		);
	};

	return <div className='errorsTable'>{renderItems()}</div>;
};

export default Errors;
