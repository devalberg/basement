import React from "react";
import { Grid, Box, Button } from "@material-ui/core";
import useStyles from "./styles";

import TextInput from "../../components/TextInput";
import TextArea from "./TextArea";
import useSm from "../../hooks/useSm";

const ContactUs = () => {
	const classes = useStyles();
	const isSm = useSm();
	return (
		<div className={classes.container}>
			<Grid container item>
				<Grid item xs={1} md={3} />
				<Grid item container xs={10} md={6}>
					<Box
						width="100%"
						border="10px solid black"
						display="flex"
						justifyContent="center"
						className={classes.content}
					>
						<Grid container xs={10} md={9} spacing={2}>
							<Grid item xs={12}>
								<Box
									width="100%"
									justifyContent="center"
									display="flex"
								>
									<Box width={isSm ? "60%" : "30%"}>
										<div className={classes.title}>
											Contact Us
										</div>
									</Box>
								</Box>
							</Grid>
							<Grid item xs={12} md={6}>
								<TextInput placeholder="Your email address" />
							</Grid>
							<Grid item xs={12} md={6}>
								<TextInput placeholder="Your name" />
							</Grid>
							<Grid item xs={12}>
								<TextArea placeholder="Your message" />
							</Grid>
							<Grid item xs={12} md={12}>
								<Box width="100%">
									<Button variant="contained">Send</Button>
								</Box>
							</Grid>
						</Grid>
					</Box>
				</Grid>
			</Grid>
		</div>
	);
};

export default ContactUs;
