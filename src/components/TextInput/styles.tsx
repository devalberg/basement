import { makeStyles, Theme } from "@material-ui/core/styles";
import bgImage from "../../assets/images/background2.jpg";

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
