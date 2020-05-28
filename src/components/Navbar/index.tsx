import React from "react";
import {
	AppBar,
	Toolbar,
	Grid,
	Box,
	Divider,
	IconButton,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import logo from "../../assets/images/base1.png";
import useStyles from "./styles";
import useSm from "../../hooks/useSm";
import { Link } from "react-router-dom";
import Drawer from "./Drawer";

const Navbar = () => {
	const classes = useStyles();
	const isSm = useSm();
	const [openDrawer, setOpenDrawer] = React.useState<boolean>(false);

	const toggleDrawer = () => {
		setOpenDrawer(!openDrawer);
	};

	const closeDrawer = () => {
		setOpenDrawer(false);
	};

	const desktopMenu = (
		<Grid item container sm={9} lg={8} justify="flex-end">
			<Box display="flex" alignItems="center">
				<Divider orientation="vertical" />
				<Link
					to="/contact-us"
					className={`${classes.link} ${classes.hoverEffect}`}
				>
					Contact Us
				</Link>
			</Box>
			<Box display="flex" alignItems="center">
				<Divider orientation="vertical" />
				<Link
					to="/add-show"
					className={`${classes.link} ${classes.hoverEffect}`}
				>
					Add your show
				</Link>
			</Box>
			<Box
				display="flex"
				alignItems="center"
				className={classes.basementRights}
			>
				<Divider orientation="vertical" />
				<span>Basement all rights reserved</span>
			</Box>
		</Grid>
	);

	const mobileMenu = (
		<Grid item xs={6} sm={7}>
			<Box
				display="flex"
				justifyContent="flex-end"
				alignItems="center"
				width="100%"
				height="100%"
			>
				<IconButton color="secondary" onClick={toggleDrawer}>
					<Menu fontSize="large" />
				</IconButton>
			</Box>
		</Grid>
	);

	return (
		<>
			<AppBar position="sticky">
				<Toolbar>
					<Grid container>
						<Grid item lg={1}></Grid>
						<Grid item xs={6} sm={5} md={3}>
							<Box
								display="flex"
								alignItems="center"
								className={classes.hoverEffect}
								height="100%"
							>
								<Link to="/" className={classes.logo}>
									<Box display="flex" alignItems="center">
										<img
											src={logo}
											alt="logo"
											className={classes.logoImage}
										/>
										<span className={classes.logoName}>
											Basement
										</span>
									</Box>
								</Link>
							</Box>
						</Grid>
						{isSm ? mobileMenu : desktopMenu}
					</Grid>
				</Toolbar>
			</AppBar>
			<Drawer isOpen={openDrawer} onClose={closeDrawer} />
		</>
	);
};

export default React.memo(Navbar);
