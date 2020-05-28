import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
	item: {
		fontFamily: "Bebas",
		fontSize: "1.2rem",
		color: "#000",
		paddingLeft: theme.spacing(2),
		cursor: "pointer",
		userSelect: "none",
	},
	isHovered: {
		backgroundColor: "#000",
		color: "#FFF",
	},
}));

export default useStyles;
