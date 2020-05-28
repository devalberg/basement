import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
	logo: {
		color: theme.palette.secondary.main,
		textDecoration: "none",
	},
	logoImage: {
		width: 46,
		height: 36,
		[theme.breakpoints.down("sm")]: {
			width: 36,
			height: 26,
		},
	},
	logoName: {
		fontFamily: "Bebas",
		fontSize: 48,
		marginBottom: -5,
		userSelect: "none",
		[theme.breakpoints.down("sm")]: {
			fontSize: 32,
			marginBottom: -4,
		},
	},
	link: {
		textDecoration: "none",
		color: theme.palette.secondary.main,
		fontFamily: "Bebas",
		fontSize: 36,
		userSelect: "none",
	},
	hoverEffect: {
		cursor: "pointer",
		transition: "all 0.2s ease-in-out",
		"&:hover": {
			opacity: 0.6,
		},
		userSelect: "none",
	},
	basementRights: {
		fontFamily: "Bebas",
		fontSize: 24,
	},
}));

export default useStyles;
