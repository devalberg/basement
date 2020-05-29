import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
	bannerContainer: {
		borderBottom: "12px solid black",
		height: 250,
		[theme.breakpoints.down("sm")]: {
			maxHeight: 100,
			borderBottom: "5px solid black",
		},
	},
	bannerImg: {
		width: "100%",
		maxHeight: 250,
		height: "100%",
		objectFit: "cover",
		objectPosition: "center center",
		[theme.breakpoints.down("sm")]: {
			maxHeight: 100,
		},
	},
	header: {
		backgroundColor: "#000",
		color: "#FFF",
		fontFamily: "Bebas",
		fontSize: "1.5rem",
		padding: "0.5rem 1rem",
	},
	title: {
		backgroundColor: "#000",
		fontSize: "3rem",
		fontFamily: "Bebas",
		color: "#FFF",
		height: 200,
		padding: "2rem 1.5rem",
		width: "70%",
		[theme.breakpoints.down("md")]: {
			width: "90%",
		},
		[theme.breakpoints.down("sm")]: {
			height: "fit-content",
			padding: "0 1rem",
			width: "100%",
		},
	},
	infoContainer: {
		padding: "1rem",
	},
	infoTextContainer: {
		marginBottom: theme.spacing(2),
	},
	item: {
		backgroundColor: "#000",
		fontFamily: "Bebas",
		fontSize: "1.3rem",
		color: "#FFF",
		padding: "0.2rem 2rem",
		whiteSpace: "nowrap",
		width: "fit-content",
		marginTop: theme.spacing(2),
		marginRight: theme.spacing(1),
		"&:hover": {
			cursor: "pointer",
		},
		[theme.breakpoints.down("sm")]: {
			padding: "0.1rem 1rem",
		},
	},
	itemsContainer: {
		display: "flex",
		flexWrap: "wrap",
		[theme.breakpoints.down("sm")]: {
			justifyContent: "center",
		},
	},
}));

export default useStyles;
