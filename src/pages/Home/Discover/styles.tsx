import { makeStyles, Theme } from "@material-ui/core/styles";
import bgImage from "../../../assets/images/background1.jpg";

const useStyles = makeStyles((theme: Theme) => ({
	container: {
		minHeight: 900,
		height: "calc(100vh - 96px)",
		backgroundImage: `url(${bgImage})`,
		backgroundSize: "cover",
		backgroundPosition: "center center",
		paddingTop: theme.spacing(10),
		[theme.breakpoints.down("sm")]: {
			height: "calc(100vh - 64px)",
		},
	},
	content: {
		backgroundColor: "#FFF",
	},
	resetFilter: {
		fontFamily: "Bebas",
		fontSize: "1.2rem",
		cursor: "pointer",
	},
}));

export default useStyles;
