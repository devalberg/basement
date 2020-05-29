import { createMuiTheme } from "@material-ui/core/styles";
import "./styles/font.css";

const baseTheme = createMuiTheme();

const theme = createMuiTheme({
	typography: {
		fontFamily: [
			"Futura",
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),
		h1: {
			fontFamily: "Bebas",
			color: "#FFF",
			backgroundColor: "#000",
			textAlign: "center",
			fontSize: 72,
			padding: `0 ${baseTheme.spacing(2)}px`,
			[baseTheme.breakpoints.down("sm")]: {
				fontSize: "3rem",
				padding: `${baseTheme.spacing(3)}px 0`,
			},
			[baseTheme.breakpoints.down("xs")]: {
				fontSize: "2rem",
				padding: "1rem",
			},
		},
		h2: {
			fontFamily: "Bebas",
			color: "#000",
			fontSize: 60,
		},
		overline: {
			fontFamily: "Bebas",
			color: "#000",
			fontSize: 23,
			lineHeight: 0,
			fontWeight: 500,
		},
		caption: {
			fontFamily: "Bebas",
			color: "#000",
			fontSize: 17,
		},
		body1: {
			opacity: "0.8",
			fontSize: 22,
			[baseTheme.breakpoints.down("sm")]: {
				fontSize: "1.4rem",
			},
		},
		h3: {
			fontFamily: "Bebas",
			lineHeight: 2,
			[baseTheme.breakpoints.down("sm")]: {
				fontSize: "1.5rem",
			},
		},
	},
	palette: {
		primary: {
			main: "#FFF",
		},
		secondary: {
			main: "#000",
		},
		background: {
			default: "#fff",
		},
	},
	overrides: {
		MuiAppBar: {
			root: {
				paddingTop: 20,
				boxShadow: "none",
				borderBottom: "12px solid black",
				[baseTheme.breakpoints.down("sm")]: {
					paddingTop: 0,
					borderBottom: "5px solid black",
				},
			},
		},
		MuiDivider: {
			vertical: {
				width: 4,
				backgroundColor: "#000",
				height: "80%",
				margin: `0 ${baseTheme.spacing(2)}px`,
			},
			root: {
				backgroundColor: "#FFF",
				width: 218,
				margin: "0 auto",
				height: 4,
			},
		},
		MuiDrawer: {
			paper: {
				paddingTop: 71,
			},
		},
		MuiButton: {
			contained: {
				backgroundColor: "#000",
				borderRadius: 0,
				boxShadow: "none",
				color: "#FFF",
				fontSize: "1.8rem",
				boxSizing: "border-box",
				width: "100%",
				"&:hover": {
					backgroundColor: "#000",
				},
				padding: "0 0.5rem",
				[baseTheme.breakpoints.down("sm")]: {
					fontSize: "1.5rem",
				},
			},
			root: {
				fontFamily: "Bebas",
				padding: 0,
			},
			outlined: {
				backgroundColor: "#FFF",
				borderRadius: 0,
				boxShadow: "none",
				border: "5px solid black",
				fontSize: "1.3rem",
				padding: "0 0.5rem",
			},
		},
	},
	zIndex: {
		appBar: 500,
		modal: 400,
		drawer: 300,
	},
});

export default theme;
