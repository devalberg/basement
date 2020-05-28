import React from "react";
import useStyles from "./styles";

interface IProps {
	placeholder: string;
}

const TextArea: React.FC<IProps> = ({ placeholder }) => {
	const classes = useStyles();
	return (
		<textarea
			placeholder={placeholder}
			className={classes.input}
			rows={10}
		/>
	);
};

export default TextArea;
