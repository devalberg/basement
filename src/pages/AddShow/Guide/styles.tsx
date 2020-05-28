import { makeStyles, Theme } from "@material-ui/core/styles";
// import bgImage from "../../assets/images/background2.jpg";

const useStyles = makeStyles((theme: Theme) => ({
	container: {
		[theme.breakpoints.down("sm")]: {
			padding: theme.spacing(3),
		},
		paddingLeft: theme.spacing(5),
	},
	content: {
		backgroundColor: "#FFF",
		paddingTop: theme.spacing(5),
		paddingBottom: theme.spacing(5),
	},
	title: {
		fontFamily: "Bebas",
		backgroundColor: "#000",
		color: "#FFF",
		padding: "0 2rem",
		fontSize: "2.8rem",
		width: "fit-content",
		[theme.breakpoints.down("sm")]: {
			fontSize: "1.5rem",
			padding: "0 .5rem",
		},
	},
	limitations: {
		paddingLeft: theme.spacing(5),
	},
}));

export default useStyles;
