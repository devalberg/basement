import React from "react";
import { useClickOutsideListenerRef } from "../../hooks/useClickOutsideListenerRef";
import SelectItem from "./SelectItem";
import useStyles from "./styles";
import openedIcon from "../../assets/images/base3.png";
import closedIcon from "../../assets/images/base2.png";

interface IProps {
	placeholder: string;
	value: string | null;
	items: string[];
	onSelect: (item: string) => void;
}

const Select: React.FC<IProps> = ({
	placeholder = "placeholder",
	items,
	value,
	onSelect = () => {},
}) => {
	const [isOpen, setIsOpen] = React.useState<boolean>(false);
	const [hoveredIndex, setHoveredIndex] = React.useState<number>(0);
	const classes = useStyles();

	const closeHandler = () => {
		setIsOpen(false);
	};

	const toggleOpen = () => {
		setIsOpen(!isOpen);
	};

	const onSelectHandler = React.useCallback(
		(index: number) => () => {
			onSelect(items[index]);
			setIsOpen(false);
		},
		[onSelect, items]
	);

	const onHoverHandler = (index: number) => () => {
		setHoveredIndex(index);
	};

	const ref = useClickOutsideListenerRef(closeHandler);

	const keydownHandler = React.useCallback(
		(event) => {
			switch (event.keyCode) {
				// UP arrow key - set highlighted index to previous until min
				case 38:
					event.preventDefault();
					setHoveredIndex(
						hoveredIndex > 0 ? hoveredIndex - 1 : hoveredIndex
					);
					break;
				// DOWN arrow key - set highlighted to next index until max
				case 40:
					event.preventDefault();
					setHoveredIndex(
						hoveredIndex < items.length - 1
							? hoveredIndex + 1
							: hoveredIndex
					);
					break;
				// Enter key - call onSelectHandler and set current item
				case 13:
					onSelectHandler(hoveredIndex)();
					break;
				default:
			}
		},
		[hoveredIndex, items.length, onSelectHandler]
	);

	React.useEffect(() => {
		document.addEventListener("keydown", keydownHandler, false);

		return () => {
			document.removeEventListener("keydown", keydownHandler, false);
		};
	}, [keydownHandler]);

	return (
		<div ref={ref} className={classes.container}>
			<div onClick={toggleOpen} className={classes.selectButton}>
				<span>{value ?? placeholder}</span>
				<img
					className={classes.img}
					src={isOpen ? openedIcon : closedIcon}
					alt="icon"
				/>
			</div>
			{isOpen && (
				<div className={classes.options}>
					{items.map((item, i) => (
						<SelectItem
							key={item}
							isHovered={i === hoveredIndex}
							onSelect={onSelectHandler(i)}
							onHover={onHoverHandler(i)}
							item={item}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default React.memo(Select);
