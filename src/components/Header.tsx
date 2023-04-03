import React, { FC, useState, KeyboardEvent } from 'react';
import '../scss/Header.scss';
import personData from '../api/fakedata/header.json';
import FullScreenLoader from './cssloader/FullscreenLoader';

const Header: FC = () => {
	const [favourite, setFavourite] = useState<boolean>(false);
	const [modalIsOpen, setIsOpen] = useState<boolean>(false);

	const saveFavourite = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();
		setFavourite(prev => !prev);
	};

	const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
		if (e.key === 'Enter') {
			const reactMouseEvent =
				e.nativeEvent as unknown as React.MouseEvent<
					HTMLButtonElement,
					MouseEvent
				>;

			saveFavourite(reactMouseEvent);
		}
	};

	return (
		<>
			<FullScreenLoader modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
			<header className='App-header'>
				<div className='nameBox'>
					<i
						className={`fa-star star ${favourite ? 'fas' : 'fal'}`}
						style={{ color: '#aaaaaa' }}
						onClick={(
							e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
						) => saveFavourite(e)}
						onKeyDown={handleKeyDown}
						tabIndex={0}
					/>
					<span className='fullName'>
						{`${personData.first_name} ${personData.last_name}`}
					</span>
				</div>

				<button
					className='orderButton'
					type='button'
					onClick={() => setIsOpen(true)}
					tabIndex={0}>
					<span className='orderFont'>New Order</span>
				</button>
			</header>
		</>
	);
};

export default Header;
