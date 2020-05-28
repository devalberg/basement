import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
	list: {
		width: 250,
		fontFamily: "Bebas",
		fontSize: 30,
		color: "#FFF",
	},
	drawer: {
		backgroundColor: "rgba(0,0,0,0.8)",
	},
	link: {
		color: "#FFF",
	},
	basementRights: {
		textAlign: "center",
		fontSize: 21,
	},
}));

export default useStyles;
