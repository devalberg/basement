import React from "react";
import Select from "../../../components/Select";
import useStyles from "./styles";
import { Grid, Box, Typography, Button } from "@material-ui/core";
import useXs from "../../../hooks/useXs";
import useSm from "../../../hooks/useSm";
import { useHistory } from "react-router-dom";
import * as Scroll from "react-scroll";

const dates: string[] = [
	"All Months",
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

const genres: string[] = [
	"All genres",
	"Rock",
	"Techno",
	"Metal",
	"Jazz",
	"Alternative",
	"Drum and Bass",
	"Hip-Hop",
	"Folk",
	"Electronic",
	"Indie",
];

interface ISelectedItems {
	date: string | null;
	genre: string | null;
}

const Discover = () => {
	const classes = useStyles();
	const history = useHistory();
	const [selectedItems, setSelectedItems] = React.useState<ISelectedItems>({
		date: null,
		genre: null,
	});

	const isXs = useXs();
	const isSm = useSm();

	const setGenre = (genre: string) => {
		setSelectedItems({ ...selectedItems, genre });
	};

	const setDate = (date: string) => {
		setSelectedItems({ ...selectedItems, date });
	};

	const resetState = () => {
		setSelectedItems({ genre: null, date: null });
	};

	const navigateAllShows = () => {
		history.push("/all-shows");
		setTimeout(() => {
			Scroll.scroller.scrollTo("all-shows", {
				duration: 500,
				smooth: "easeOut",
				offset: -90,
			});
		}, 50);
	};

	return (
		<div className={classes.container}>
			<Grid container item>
				<Grid item xs={1} />
				<Grid item container xs={10}>
					<Box
						width="100%"
						border="10px solid black"
						display="flex"
						justifyContent="center"
						className={classes.content}
					>
						<Box
							py={isSm ? 1 : 20}
							width="90%"
							justifySelf="center"
						>
							<Grid container spacing={3}>
								<Grid item xs={12}>
									<Box
										width="100%"
										display="flex"
										justifyContent="center"
										boxSizing="borderBox"
									>
										<Box
											width={`${
												isSm ? "100%" : "fit-content"
											}`}
										>
											<Typography variant="h1">
												Discover {isXs && <br />}
												Underground Shows
											</Typography>
										</Box>
									</Box>
								</Grid>
								<Grid item xs={12}>
									<Box width="100%" textAlign="center">
										<Button
											variant="outlined"
											onClick={() =>
												history.push("/add-show")
											}
										>
											Add your own show here
										</Button>
									</Box>
								</Grid>
								<Grid item xs={12} spacing={4}>
									<Grid container spacing={5}>
										<Grid item xs={12} md={4}>
											<Select
												items={dates}
												placeholder="date"
												value={selectedItems.date}
												onSelect={setDate}
											/>
										</Grid>
										<Grid item xs={12} md={4}>
											<Select
												items={genres}
												placeholder="genre"
												value={selectedItems.genre}
												onSelect={setGenre}
											/>
										</Grid>
										<Grid item xs={12} md={4}>
											<Button variant="contained">
												Find Your Show
											</Button>
											<Box textAlign="right" pt={1}>
												<span
													className={
														classes.resetFilter
													}
													onClick={resetState}
												>
													Reset Filter
												</span>
											</Box>
										</Grid>
									</Grid>
								</Grid>
								<Grid item xs={12}>
									<Box
										width="100%"
										display="flex"
										justifyContent="center"
									>
										<Box
											width={isSm ? "100%" : "30%"}
											mb={isSm ? 3 : 1}
										>
											<Button
												variant="contained"
												onClick={navigateAllShows}
											>
												all shows
											</Button>
										</Box>
									</Box>
								</Grid>
							</Grid>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</div>
	);
};

export default React.memo(Discover);
