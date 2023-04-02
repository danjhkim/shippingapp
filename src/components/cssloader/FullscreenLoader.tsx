import { FC } from 'react';
import '../../scss/FullscreenLoader.scss';
import Modal from 'react-modal';
import { FullScreenLoaderProps } from '../../types/LoaderTypes';

Modal.setAppElement('#root');

const FullScreenLoader: FC<FullScreenLoaderProps> = ({
	modalIsOpen,
	setIsOpen,
}) => {
	const customStyles = {
		overlay: {
			backgroundColor: 'rgba(0, 0, 0, 0.5)',
		},
	};

	function closeModal() {
		setIsOpen(false);
	}

	return (
		<Modal
			isOpen={modalIsOpen}
			onRequestClose={closeModal}
			style={customStyles}
			contentLabel='Modal'
			className='full-screen-loading'>
			<div
				className='close-button'
				tabIndex={0}
				onClick={closeModal}
				onKeyDown={e => {
					if (e.key === 'Enter' || e.key === ' ') {
						closeModal();
					}
				}}
				role='button'
				aria-label='Close'>
				<div className='close-icon' />
			</div>
			<div className='loaderBox'>
				<span className='loaderCircle' />
				<div className='text'>Processing...</div>
			</div>
		</Modal>
	);
};

export default FullScreenLoader;
