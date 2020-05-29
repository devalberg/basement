import React from "react";
import useStyles from "./styles";
import { Grid, Box, Typography } from "@material-ui/core";
import BackToTopButton from "../../../components/BackToTopButton";
import useSm from "../../../hooks/useSm";

export interface data {
	title: string;
	artists: string[];
	photos: string[];
	info: {
		location: string;
		date: string;
		price: string;
		description: string;
	};
	genres: string[];
	poster: string;
	banner: string;
}

interface IProps {
	data: data;
}

const Template: React.FC<IProps> = ({ data }) => {
	const classes = useStyles();
	const isSm = useSm();

	const header = (title: string) => (
		<div className={classes.header}>{title}</div>
	);
	const item = (name: string) => <div className={classes.item}>{name}</div>;

	return (
		<div>
			<div className={classes.bannerContainer}>
				<img
					className={classes.bannerImg}
					src={data.banner}
					alt="banner"
				/>
			</div>
			<Box py={5}>
				<Grid container>
					<Grid item xs={1} md={2} />
					<Grid item xs={10} md={8}>
						<Grid container spacing={isSm ? 1 : 5}>
							<Grid item xs={12}>
								<Grid container spacing={isSm ? 2 : 6}>
									<Grid item xs={12} md={6}>
										<div className={classes.title}>
											{data.title}
										</div>
									</Grid>
									<Grid item xs={12} md={6}>
										{header("Event Info")}
										<div className={classes.infoContainer}>
											{data.info.location && (
												<div
													className={
														classes.infoTextContainer
													}
												>
													<Typography
														variant="body1"
														color="secondary"
													>
														Location:{" "}
														{data.info.location}
													</Typography>
												</div>
											)}
											{data.info.date && (
												<div
													className={
														classes.infoTextContainer
													}
												>
													<Typography
														variant="body1"
														color="secondary"
													>
														Date: {data.info.date}
													</Typography>
												</div>
											)}
											{data.info.price && (
												<div
													className={
														classes.infoTextContainer
													}
												>
													<Typography
														variant="body1"
														color="secondary"
													>
														Price: {data.info.price}
													</Typography>
												</div>
											)}

											{data.info.description && (
												<div
													className={
														classes.infoTextContainer
													}
												>
													<Typography
														variant="body1"
														color="secondary"
													>
														{data.info.description}
													</Typography>
												</div>
											)}
										</div>
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={12}>
								<Grid container spacing={isSm ? 2 : 6}>
									<Grid item xs={12} md={6}>
										{header("Artists")}
										<div className={classes.itemsContainer}>
											{data.artists.map((x) => item(x))}
										</div>
									</Grid>
									<Grid item xs={12} md={6}>
										{header("Genre")}
										<div className={classes.itemsContainer}>
											{data.genres.map((x) => item(x))}
										</div>
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={12}>
								<Grid container spacing={isSm ? 2 : 6}>
									<Grid item xs={12} md={6}>
										{header("Event Photos")}
									</Grid>
									<Grid item xs={12} md={6}>
										{header("Event Poster")}
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Box>
			<Box py={10}>
				<BackToTopButton />
			</Box>
		</div>
	);
};

export default Template;
