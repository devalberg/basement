import React from "react";
import { Grid, Box, Button, Typography } from "@material-ui/core";
import useStyles from "./styles";

import base2 from "../../../assets/images/base2.png";
import base3 from "../../../assets/images/base3.png";

import useSm from "../../../hooks/useSm";

const InputTitle: React.FC<{ title: string; required: boolean }> = ({
	title,
	required,
}) => {
	const classes = useStyles();
	return (
		<div className={classes.inputTitle}>
			{title}
			{required && (
				<span className={classes.inputRequired}>(Required)</span>
			)}
		</div>
	);
};

const InputUpload: React.FC<{ title: string; required: boolean }> = ({
	title,
	required,
}) => {
	const classes = useStyles();
	const [isClicked, setIsClicked] = React.useState<boolean>(false);
	return (
		<Box onClick={() => setIsClicked(!isClicked)}>
			<InputTitle title={title} required={required} />
			<Box
				className={classes.uploadInput}
				display="flex"
				justifyContent="space-between"
				alignItems="center"
			>
				Upload Image
				<img
					src={isClicked ? base3 : base2}
					alt="upload"
					height={20}
					width={20}
				/>
			</Box>
		</Box>
	);
};

const Create = () => {
	const classes = useStyles();
	const isSm = useSm();

	const basicInput = (
		title: string,
		required: boolean,
		placeholder: string
	) => (
		<Box>
			<InputTitle title={title} required={required} />
			<input className={classes.basicInput} placeholder={placeholder} />
		</Box>
	);

	const textAreaInput = (
		title: string,
		required: boolean,
		placeholder: string
	) => (
		<Box>
			<InputTitle title={title} required={required} />
			<textarea
				className={classes.basicInput}
				placeholder={placeholder}
				rows={3}
			/>
		</Box>
	);

	const scrollToGuide = () => {};
	return (
		<div className={classes.container}>
			<Grid container>
				<Grid item xs={1} md={2} />
				<Grid item container xs={10} md={8} spacing={3}>
					<Grid item md={8} xs={12}>
						<Box
							width="100%"
							border="10px solid black"
							display="flex"
							justifyContent="center"
							className={classes.content}
							p={isSm ? 0 : 10}
						>
							<Grid container item spacing={3}>
								<Grid item container spacing={3} md={7} xs={12}>
									<Grid item xs={12} md={6}>
										<Grid item xs={12}>
											{basicInput(
												"Name",
												true,
												"e.g. Royall College"
											)}
										</Grid>
										<Grid item xs={12}>
											{basicInput(
												"Location",
												true,
												"e.g. Camden Town"
											)}
										</Grid>
										<Grid item xs={12}>
											{basicInput(
												"Date",
												true,
												"e.g. 24/August/2020"
											)}
										</Grid>
									</Grid>
									<Grid item xs={12} md={6}>
										<Grid item xs={12}>
											<InputUpload
												title="Header"
												required
											/>
										</Grid>
										<Grid item xs={12}>
											<InputUpload
												title="Poster"
												required
											/>
										</Grid>
										<Grid item xs={12}>
											<InputUpload
												title="Photos"
												required
											/>
										</Grid>
									</Grid>
									{!isSm && (
										<Grid item xs={12}>
											<Box
												display="flex"
												justifyContent="center"
											>
												<Box
													width={
														isSm ? "100%" : "80%"
													}
												>
													<Button variant="contained">
														Submit
													</Button>
												</Box>
											</Box>
										</Grid>
									)}
								</Grid>
								<Grid item container md={5} xs={12} spacing={3}>
									<Grid item xs={12}>
										{textAreaInput(
											"Artist Lineup",
											true,
											"Enter comma-seperated artists"
										)}
									</Grid>
									<Grid item xs={12}>
										{textAreaInput(
											"Artist Lineup",
											true,
											"Enter comma-sparated values"
										)}
									</Grid>
									{isSm && (
										<Grid item xs={12}>
											<Box
												display="flex"
												justifyContent="center"
											>
												<Box
													width={
														isSm ? "100%" : "80%"
													}
												>
													<Button variant="contained">
														Submit
													</Button>
												</Box>
											</Box>
										</Grid>
									)}
								</Grid>
							</Grid>
						</Box>
					</Grid>
					<Grid item md={4} xs={12}>
						<Box
							width="100%"
							border="10px solid black"
							className={classes.content}
							padding={3}
							textAlign="center"
						>
							<Typography variant="h5">
								Please read our Guide to Throwing a DIY House
								Show before adding your show to our website
							</Typography>
							<Box pt={3}>
								<Button
									variant="contained"
									onClick={scrollToGuide}
								>
									view guide
								</Button>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

export default Create;
