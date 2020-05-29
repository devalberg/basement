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

<<<<<<< HEAD
export default React.memo(TextArea);
=======
export default TextArea;
>>>>>>> f3062854598024edf727f2567d5ec873cd39cf70
