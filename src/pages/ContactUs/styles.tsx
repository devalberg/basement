import { makeStyles, Theme } from "@material-ui/core/styles";
import bgImage from "../../assets/images/background2.jpg";

const useStyles = makeStyles((theme: Theme) => ({
	container: {
		minHeight: 900,
		height: "calc(100vh - 96px)",
		backgroundImage: `url(${bgImage})`,
		backgroundSize: "cover",
		backgroundPosition: "center center",
		backgroundColor: "#000",
		paddingTop: theme.spacing(10),
		[theme.breakpoints.down("sm")]: {
			paddingTop: theme.spacing(5),
			height: "fit-content",
			minHeight: "calc(100vh - 64px)",
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
}));

export default useStyles;
