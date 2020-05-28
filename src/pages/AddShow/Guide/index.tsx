import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import useStyles from "./styles";
import BackToTopButton from "../../../components/BackToTopButton";
import useSm from "../../../hooks/useSm";

const Guide = () => {
	const classes = useStyles();
	const isSm = useSm();
	return (
		<Box pt={17} className={classes.container}>
			<Grid container>
				<Grid item md={2} />
				<Grid item md={6} xs={12}>
					<div className={classes.title}>
						Guide to Throwing a DIY House Show
					</div>
					<div>
						<Typography variant="h3">Logistics</Typography>
						<Typography variant="body1">
							What do you hope to achieve or gain from this
							experience? Here are some questions to help prepare
							you for the first stages of organization:
						</Typography>
						<ul>
							<li>
								<Typography variant="body1">
									Will the musicians be people you know, local
									artists, or touring artists you’re fans of?
								</Typography>
							</li>
							<li>
								<Typography variant="body1">
									Should the bands promote the show
									themselves, or will you invite your friends
									and contacts?
								</Typography>
							</li>
							<li>
								<Typography variant="body1">
									Are you actually comfortable having
									strangers in your home?
								</Typography>
							</li>
							<li>
								<Typography variant="body1">
									Do you want to promote the release of an
									album or music video?
								</Typography>
							</li>
							<li>
								<Typography variant="body1">
									After the show, will everyone leave or are
									you interested in throwing a party?
								</Typography>
							</li>
							<li>
								<Typography variant="body1">
									Are you going to provide food for the bands
									or everyone in attendance?
								</Typography>
							</li>
						</ul>
						<Typography variant="body1">
							These should help you start to conceptualize what
							type of house show you’ll throw.
						</Typography>
					</div>
					<div>
						<Typography variant="h3">
							Know Your Limitations
						</Typography>
						<Typography variant="body1">
							There are limitations that might hinder lofty
							aspirations or prevent you from doing certain things
							to a certain level.
						</Typography>
						<div className={classes.limitations}>
							<Typography variant="h3">1. sound</Typography>
							<Typography variant="body1">
								Every city has its own noise ordinances. Learn
								the legal dB limit, and get to know a thing or
								two about wall insulation, sound proofing and
								diffusion, and neighborly relations!
							</Typography>
							<Typography variant="h3">2. space</Typography>
							<Typography variant="body1">
								How many people can fit in the performance
								space? Make sure the musicians you’re booking
								will be able to sound good and perform well at
								your house show. Think about acoustics, where
								the band will set up, and where the audience
								will stand or sit.
							</Typography>
							<Typography variant="h3">3. safety</Typography>
							<Typography variant="body1">
								If your building is up to code for a residence,
								you may be fine to have people gather in your
								space up to a certain number. Make sure there
								are sprinklers, fire alarms, and safe pathways
								to clear exits!
							</Typography>
							<Typography variant="h3">4. gear</Typography>
							<Typography variant="body1">
								What sort of gear and equipment do you have
								access to? It’s common for bands to bring their
								own gear to shows, but make sure you communicate
								what is expected. How will you stage the show?
								You’ll have to consider what you’ll need to set
								up.
							</Typography>
							<Typography variant="h3">5. musician</Typography>
							<Typography variant="body1">
								Who can you get to play at your house? You need
								to know bands and talk to musicians in order to
								book them. If you’re interested in throwing a
								house show, go to traditional shows at venues
								and talk to the bands afterward.
							</Typography>
						</div>
					</div>
					<div>
						<Typography variant="h3">
							Choose a Suitable Location for the Show
						</Typography>
						<Typography variant="body1">
							If you don’t have a stage, that’s fine. Think about
							using lighting to delineate the “stage area,” and
							make sure that people will be able to see the band
							from wherever they’re sitting. Consider these common
							locations for your house show.
						</Typography>
						<ul>
							<li>
								<Typography variant="body1">
									Living room
								</Typography>
							</li>
							<li>
								<Typography variant="body1">
									Backyard
								</Typography>
							</li>
							<li>
								<Typography variant="body1">
									Basement
								</Typography>
							</li>
							<li>
								<Typography variant="body1">Roof</Typography>
							</li>
						</ul>
						<Typography variant="body1">
							These should help you start to conceptualize what
							type of house show you’ll throw.
						</Typography>
					</div>
					<div>
						<Typography variant="h3">
							Make Cleaning Up Easy
						</Typography>
						<Typography variant="body1">
							Once everyone leaves, it’ll often just be you and
							the mess people leave behind. While there’s no way
							to totally escape cleaning up, you can do some
							things to make it easier, like put out extra trash
							cans. If you’re handing out cups, write people’s
							names on them so they’re more likely to reuse them
							for multiple drinks. Also, if you have house rules
							or want to set certain boundaries for the show, just
							be clear and direct with the audience.
						</Typography>
					</div>
					<div>
						<Typography variant="h3">
							Come Up With a Post-Show Plan
						</Typography>
						<Typography variant="body1">
							Decide whether you want people to go home after the
							show or stick around for a post-show experience of
							some kind, like a pot-luck dinner. Make
							announcements throughout the evening, so people know
							what they should do.
						</Typography>
					</div>
				</Grid>
				<Grid item xs={12}>
					<Box mt={isSm ? 10 : 17} mb={isSm ? 5 : 17}>
						<BackToTopButton />
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Guide;
