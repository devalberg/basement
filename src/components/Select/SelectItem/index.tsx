import React from "react";
import useStyles from "./styles";

interface IProps {
	isHovered: boolean;
	item: string;
	onSelect: () => void;
	onHover: () => void;
}

const SelectItem: React.FC<IProps> = ({
	isHovered,
	onSelect,
	onHover,
	item,
}) => {
	const classes = useStyles();
	return (
		<div
			className={`${classes.item} ${isHovered ? classes.isHovered : ""}`}
			onClick={() => onSelect()}
			onMouseEnter={() => onHover()}
		>
			{item}
		</div>
	);
};

export default React.memo(SelectItem);
