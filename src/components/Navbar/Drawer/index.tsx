import React from "react";
import useStyles from "./styles";
import { ListItem, List, Divider, Drawer } from "@material-ui/core";
import { Link } from "react-router-dom";

interface IProps {
	isOpen: boolean;
	onClose: () => void;
}

const SideDrawer: React.FC<IProps> = ({ isOpen, onClose }) => {
	const classes = useStyles();
	return (
		<Drawer
			anchor="right"
			open={isOpen}
			onClose={onClose}
			classes={{ paper: classes.drawer }}
		>
			<div className={classes.list}>
				<List>
					<ListItem
						component={Link}
						to="/contact-us"
						className={classes.link}
						onClick={onClose}
					>
						Contact Us
					</ListItem>
					<ListItem
						component={Link}
						to="/add-show"
						className={classes.link}
						onClick={onClose}
					>
						Add your show
					</ListItem>
					<Divider />
					<ListItem className={classes.basementRights}>
						Basement all rights reserved
					</ListItem>
				</List>
			</div>
		</Drawer>
	);
};

<<<<<<< HEAD
export default React.memo(SideDrawer);
=======
export default SideDrawer;
>>>>>>> f3062854598024edf727f2567d5ec873cd39cf70
