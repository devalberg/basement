import { makeStyles, Theme } from "@material-ui/core/styles";
import bgImage from "../../../assets/images/background3.jpg";

const useStyles = makeStyles((theme: Theme) => ({
	container: {
		minHeight: 900,
		height: "calc(100vh - 96px)",
		backgroundImage: `url(${bgImage})`,
		backgroundSize: "cover",
		backgroundPosition: "center center",
		paddingTop: theme.spacing(10),
		[theme.breakpoints.down("sm")]: {
			paddingTop: theme.spacing(1),
			height: "calc(150vh)",
		},
	},
	content: {
		backgroundColor: "#FFF",
		paddingTop: theme.spacing(5),
		paddingBottom: theme.spacing(5),
	},
	title: {
		fontFamily: "Bebas",
		width: "100%",
		backgroundColor: "#000",
		color: "#FFF",
		textAlign: "center",
		padding: "0.5rem 0.5rem",
		fontSize: "1.8rem",
	},
	inputTitle: {
		fontSize: "1.5rem",
		fontFamily: "Bebas",
	},
	inputRequired: {
		fontSize: "1rem",
		opacity: "0.8",
		fontFamily: "Futura",
		marginLeft: theme.spacing(1),
	},
	basicInput: {
		fontSize: "1.2rem",
		fontFamily: "Futura",
		border: "5px solid black",
		"&:focus": {
			online: "none",
		},
		padding: "0.2rem 0.5rem",
		width: "100%",
		lineHeight: 1.43,
		resize: "none",
	},
	uploadInput: {
		fontSize: "1.2rem",
		fontFamily: "Futura",
		border: "5px solid black",
		padding: "0.2rem 0.5rem",
		width: "100%",
		color: "#8e8e8e",
		boxSizing: "border-box",
		userSelect: "none",
		cursor: "pointer",
	},
}));

export default useStyles;
