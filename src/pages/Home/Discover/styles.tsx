import { makeStyles, Theme } from "@material-ui/core/styles";
import bgImage from "../../../assets/images/background1.jpg";

const useStyles = makeStyles((theme: Theme) => ({
	container: {
		minHeight: 900,
		height: "calc(100vh - 96px)",
		backgroundImage: `url(${bgImage})`,
		backgroundSize: "cover",
		backgroundColor: "#000",
		backgroundPosition: "center center",
		paddingTop: theme.spacing(10),
		[theme.breakpoints.down("sm")]: {
			paddingTop: theme.spacing(5),
			paddingBottom: theme.spacing(5),
			height: "fit-content",
			minHeight: "calc(100vh - 64px)",
		},
	},
	content: {
		backgroundColor: "#FFF",
		transition: "all 0.5s ease-in-out",
	},
	resetFilter: {
		fontFamily: "Bebas",
		fontSize: "1.2rem",
		cursor: "pointer",
	},
}));

export default useStyles;
