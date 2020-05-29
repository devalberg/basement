import React from "react";
import useStyles from "./styles";
import { Grid, Box, Typography } from "@material-ui/core";
import BackToTopButton from "../../../components/BackToTopButton";
import useSm from "../../../hooks/useSm";

import PhotosModal from "./photosModal";

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
	poster: string[];
	banner: string;
}

interface IProps {
	data: data;
}

const Template: React.FC<IProps> = ({ data }) => {
	const classes = useStyles();
	const isSm = useSm();
	const [isPhotosOpen, setIsPhotosOpen] = React.useState<boolean>(false);
	const [photoIndex, setPhotoIndex] = React.useState<number>(0);
	const [isPosterOpen, setIsPosterOpen] = React.useState<boolean>(false);
	const [posterIndex, setPosterIndex] = React.useState<number>(0);

	const header = (title: string) => (
		<div className={classes.header}>{title}</div>
	);
	const item = (name: string) => <div className={classes.item}>{name}</div>;

	const togglePhotos = () => {
		setIsPhotosOpen(!isPhotosOpen);
	};

	const togglePoster = () => {
		setIsPosterOpen(!isPosterOpen);
	};

	const photoIndexSetter = (index: number) => {
		setPhotoIndex(index);
	};

	const posterIndexSetter = (index: number) => {
		setPosterIndex(index);
	};

	return (
		<div>
			<PhotosModal
				photos={data.photos}
				currentIndex={photoIndex}
				indexSetter={photoIndexSetter}
				isOpen={isPhotosOpen}
				toggle={togglePhotos}
			/>
			<PhotosModal
				photos={data.poster}
				currentIndex={posterIndex}
				indexSetter={posterIndexSetter}
				isOpen={isPosterOpen}
				toggle={togglePoster}
			/>
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
						<Grid container spacing={isSm ? 2 : 5}>
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
													style={{ marginBottom: 0 }}
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
										<Box minHeight={isSm ? 0 : 150}>
											<div
												className={
													classes.itemsContainer
												}
											>
												{data.artists.map((x) =>
													item(x)
												)}
											</div>
										</Box>
									</Grid>
									<Grid item xs={12} md={6}>
										{header("Genre")}
										<Box minHeight={isSm ? 0 : 150}>
											<div
												className={
													classes.itemsContainer
												}
											>
												{data.genres.map((x) =>
													item(x)
												)}
											</div>
										</Box>
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={12}>
								<Grid
									container
									spacing={isSm ? 1 : 6}
									direction={isSm ? "column-reverse" : "row"}
								>
									<Grid item xs={12} md={6}>
										{header("Event Photos")}
										<Box width="100%" py={2}>
											<Grid container spacing={2}>
												{data.photos.map((x, i) => (
													<Grid
														item
														xs={12}
														sm={6}
														key={x}
													>
														<Box
															width="100%"
															height={175}
															onClick={() => {
																setPhotoIndex(
																	i
																);
																setIsPhotosOpen(
																	true
																);
															}}
															className={
																classes.photoContainer
															}
														>
															<img
																src={x}
																alt={`img_${i}`}
																width="100%"
																height="100%"
																className={
																	classes.photo
																}
															/>
														</Box>
													</Grid>
												))}
											</Grid>
										</Box>
									</Grid>
									<Grid item xs={12} md={6}>
										{header("Event Poster")}
										<Box width="100%" py={2}>
											<Grid container spacing={2}>
												{data.poster.map((x, i) => (
													<Grid
														item
														xs={i === 0 ? 12 : 3}
														key={x}
													>
														<Box
															width="100%"
															height={
																i === 0
																	? "auto"
																	: 200
															}
															onClick={() => {
																setPosterIndex(
																	i
																);
																setIsPosterOpen(
																	true
																);
															}}
															className={
																classes.photoContainer
															}
														>
															<img
																src={x}
																alt={`img_${i}`}
																width="100%"
																height="100%"
																className={
																	i === 0
																		? ""
																		: classes.photo
																}
															/>
														</Box>
													</Grid>
												))}
											</Grid>
										</Box>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Box>
			<Box py={10} pt={isSm ? 0 : 10}>
				<BackToTopButton />
			</Box>
		</div>
	);
};

export default React.memo(Template);
