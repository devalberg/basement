import React from "react";
import useStyles from "./styles";

interface IProps {
	placeholder: string;
}

const TextInput: React.FC<IProps> = ({ placeholder }) => {
	const classes = useStyles();
	return (
		<div>
			<input
				type="text"
				className={classes.input}
				placeholder={placeholder}
			/>
		</div>
	);
};

export default TextInput;
