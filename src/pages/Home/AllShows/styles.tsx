import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
	container: {
		paddingTop: theme.spacing(5),
		paddingBottom: theme.spacing(5),
	},
	image: {
		width: "100%",
		height: "100%",
		display: "block",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		position: "absolute",
		objectFit: "cover",
		objectPosition: "center center",
	},
	imageContainer: {
		paddingTop: "41%",
		position: "relative",
		width: "100%;",
		overflow: "hidden",
		display: "block",
		[theme.breakpoints.down("sm")]: {
			paddingTop: "29.3%",
		},
	},
	seperator: {
		height: theme.spacing(3),
	},
	popular: {
		cursor: "pointer",
		transition: "all .2s ease-in-out",
		"&:hover": {
			transform: "scale(1.05)",
			opacity: "0.8",
		},
	},
	paginationActive: {
		backgroundColor: "#000",
		color: "#FFF",
	},
	pagination: {
		fontFamily: "Bebas",
		fontSize: "1.5rem",
		margin: "0 1rem",
		width: "2rem",
		height: "2rem",
		textAlign: "center",
		cursor: "pointer",
		transition: "all .2s ease-in-out",
		"&:hover": {
			transform: "scale(1.1)",
		},
	},
}));

export default useStyles;
