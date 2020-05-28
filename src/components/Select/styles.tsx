import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
	options: {
		position: "absolute",
		width: "100%",
		border: "5px solid black",
		borderTop: "none",
		backgroundColor: "#FFF",
		zIndex: 999,
	},
	container: {
		width: "100%",
		position: "relative",
	},
	selectButton: {
		fontFamily: "Bebas",
		fontSize: "1.8rem",
		cursor: "pointer",
		border: "5px solid black",
		boxSizing: "border-box",
		padding: `0 ${theme.spacing(2)}px`,
		userSelect: "none",
		backgroundColor: "#FFF",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},
	img: {
		height: "1.8rem",
		width: "1.8rem",
	},
}));

export default useStyles;
