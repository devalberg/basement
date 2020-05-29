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

<<<<<<< HEAD
export default React.memo(TextInput);
=======
export default TextInput;
>>>>>>> f3062854598024edf727f2567d5ec873cd39cf70
