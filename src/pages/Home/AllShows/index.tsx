import React from "react";
import useStyles from "./styles";
import { Grid, Typography, Box } from "@material-ui/core";
import basementGatheringsPic from "../../../assets/images/basement-click.png";
import basementGatheringsPicMobile from "../../../assets/images/basement-click-mobile.png";
import rustCavePic from "../../../assets/images/rustcave.png";
import desktopPic from "../../../assets/images/desktop.jpeg";
import brickHousePic from "../../../assets/images/brick.png";
import rustCavePicMobile from "../../../assets/images/rustcave-mobile.png";
import desktopPicMobile from "../../../assets/images/desktop-mobile.png";
import brickHousePicMobile from "../../../assets/images/brick-mobile.png";
<<<<<<< HEAD
import { useHistory, Link } from "react-router-dom";
=======
import { useHistory } from "react-router-dom";
import useXs from "../../../hooks/useXs";
>>>>>>> f3062854598024edf727f2567d5ec873cd39cf70
import useSm from "../../../hooks/useSm";
import BackToTopButton from "../../../components/BackToTopButton";

const popularEvents = [
	{
		title: "Rust cave",
		image: rustCavePic,
		imageMobile: rustCavePicMobile,
		date: "18/May/2020",
<<<<<<< HEAD
		link: "/shows/1",
=======
>>>>>>> f3062854598024edf727f2567d5ec873cd39cf70
	},
	{
		title: "Desktop",
		image: desktopPic,
		imageMobile: desktopPicMobile,
		date: "13/July/2020",
<<<<<<< HEAD
		link: "/shows/0",
=======
>>>>>>> f3062854598024edf727f2567d5ec873cd39cf70
	},
	{
		title: "Brickhouse",
		image: brickHousePic,
		imageMobile: brickHousePicMobile,
		date: "24/August/2020",
<<<<<<< HEAD
		link: "/shows/2",
=======
>>>>>>> f3062854598024edf727f2567d5ec873cd39cf70
	},
];

const AllShows = () => {
	const classes = useStyles();
	const history = useHistory();
<<<<<<< HEAD
=======
	const isXs = useXs();
>>>>>>> f3062854598024edf727f2567d5ec873cd39cf70
	const isSm = useSm();

	const goToEvent = (link: string) => () => {
		history.push(link);
	};

	return (
		<div>
			<Grid container className={classes.container}>
				<Grid item xs={1} />
				<Grid item xs={10}>
					<Grid container spacing={6}>
						<Grid item xs={12}>
							<Typography variant="h2">Headline Event</Typography>
<<<<<<< HEAD
							<Link to="/shows/3">
								<div>
									<img
										src={
											isSm
												? basementGatheringsPicMobile
												: basementGatheringsPic
										}
										alt="basement gatherings"
										width="100%"
									/>
								</div>
							</Link>
=======
							<div>
								<img
									src={
										isSm
											? basementGatheringsPicMobile
											: basementGatheringsPic
									}
									alt="basement gatherings"
									width="100%"
								/>
							</div>
>>>>>>> f3062854598024edf727f2567d5ec873cd39cf70
						</Grid>

						<Grid item xs={12}>
							<Typography variant="h2">Popular Events</Typography>
							<Grid container spacing={2}>
								{popularEvents.map((event) => (
									<Grid
										key={event.title}
										item
										xs={12}
										md={4}
										className={classes.popular}
<<<<<<< HEAD
										onClick={goToEvent(event.link)}
=======
										onClick={goToEvent("/")}
>>>>>>> f3062854598024edf727f2567d5ec873cd39cf70
									>
										<div className={classes.imageContainer}>
											<img
												className={classes.image}
												src={
													isSm
														? event.imageMobile
														: event.image
												}
												alt="basement gatherings"
											/>
										</div>
										<Box
											textAlign="center"
											display={isSm ? "none" : "inherit"}
										>
											<div
												className={classes.seperator}
											/>

											<Typography variant="overline">
												{event.title}
											</Typography>
											<br />
											<Typography variant="caption">
												{event.date}
											</Typography>
										</Box>
									</Grid>
								))}
							</Grid>
						</Grid>
						<Grid item xs={12}>
							<Box
								width="100%"
								justifyContent="center"
								display="flex"
							>
								<div
									className={`${classes.pagination} ${classes.paginationActive}`}
								>
									1
								</div>
								<div className={classes.pagination}>2</div>
								<div className={classes.pagination}>3</div>
							</Box>
						</Grid>
						<Grid item xs={12}>
							<BackToTopButton />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

<<<<<<< HEAD
export default React.memo(AllShows);
=======
export default AllShows;
>>>>>>> f3062854598024edf727f2567d5ec873cd39cf70
