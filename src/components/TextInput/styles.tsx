import { makeStyles, Theme } from "@material-ui/core/styles";
<<<<<<< HEAD
=======
import bgImage from "../../assets/images/background2.jpg";
>>>>>>> f3062854598024edf727f2567d5ec873cd39cf70

const useStyles = makeStyles((theme: Theme) => ({
	input: {
		width: "100%",
		border: "5px solid black",
		padding: 10,
		fontFamily: "Futura",
		fontSize: "1.2rem",
		"&:focus": {
			outline: "none",
		},
	},
}));

export default useStyles;
