import React from "react";

import Carousel, {
	Modal,
	ModalGateway,
	CarouselStyles,
	ModalProps,
} from "react-images";

interface IProps {
	currentIndex: number;
	indexSetter: (index: number) => void;
	toggle: () => void;
	photos: string[];
	isOpen: boolean;
}

const PhotosModal: React.FC<IProps> = ({
	currentIndex,
	indexSetter,
	toggle,
	photos,
	isOpen,
}) => {
	const formattedPhotos = photos.map((x) => ({ source: x }));
	const carouselStyles: CarouselStyles = {
		view: (base) => ({
			...base,
			height: "calc(100vh - 54px)",
		}),
	};
	const modalProps: ModalProps = {
		styles: {
			dialog: (base) => ({
				...base,
			}),
		},
	};

	return (
		<ModalGateway>
			{isOpen && (
				<Modal onClose={toggle} styles={modalProps.styles}>
					<Carousel
						views={formattedPhotos}
						styles={carouselStyles}
						currentIndex={currentIndex}
					/>
				</Modal>
			)}
		</ModalGateway>
	);
};

export default React.memo(PhotosModal);
