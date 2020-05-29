import { data } from "./template";

import desktopBanner from "../../assets/images/desktop.jpeg";
import desktopPoster from "../../assets/images/desktopposter.png";
import rustCaveBanner from "../../assets/images/rustcave.png";
import rustCavePoster from "../../assets/images/rustcaveposter.png";
import brickBanner from "../../assets/images/brick.png";
import brickPoster from "../../assets/images/birckposter.png";

import basementBanner from "../../assets/images/basementgat.png";
import b1 from "../../assets/images/basement-flyer.png";
import b2 from "../../assets/images/lineup.png";
import b3 from "../../assets/images/set time2.png";
import b4 from "../../assets/images/basement-mapbetter.png";
import b5 from "../../assets/images/basement-poster.png";

const shows: data[] = [
	{
		title: "Desktop",
		artists: ["Manga Boys", "Red Passport", "Arteezy", "Evil Genius"],
		photos: [desktopBanner],
		info: {
			location: "Camden, NW1 ZTA",
			date: "13/July/2020",
			price: "£5 on doors",
			description: "",
		},
		genres: ["Indie", "Hip-Hop", "Electronic"],
		poster: [desktopPoster],
		banner: desktopBanner,
	},
	{
		title: "rust cave",
		artists: ["resouse", "faber-castle", "breakout"],
		photos: [rustCaveBanner],
		info: {
			location: "Camden, NW1 PVP",
			date: "18/May/2020",
			price: "£5 on doors",
			description: "",
		},
		genres: ["indie", "alternative", "rock"],
		poster: [rustCavePoster],
		banner: rustCaveBanner,
	},
	{
		title: "brickhouse",
		artists: ["cellox", "sam hyde", "the world is a fuck", "john mercy"],
		photos: [brickBanner],
		info: {
			location: "Camden, NW1 PTE",
			date: "24/August/2020",
			price: "£5 on doors",
			description: "",
		},
		genres: ["techno", "electronic", "folk"],
		poster: [brickPoster],
		banner: brickBanner,
	},
	{
		title: "basement gatherings",
		artists: [
			"bent",
			"thee dead cee",
			"scrolls",
			"less ambitious",
			"left temple",
			"ignorant fuck",
			"state funded propaganda",
			"utilitarian",
			"we used to be a funk band",
			"dope, man",
			"the answer is clear",
			"a place for us",
			"letsgo",
			"pigs",
			"watch me burn",
			"alvis kostello",
			"semper fi",
			"los karma hoarders",
			"onomatopoeic poetry",
		],
		photos: [brickBanner, desktopBanner, rustCaveBanner],
		info: {
			location: "",
			date: "",
			price: "",
			description:
				"A Musical Festival across our three most popular venue which includes Rust Cave, Desktop, Brickhouse",
		},
		genres: [
			"techno",
			"electronic",
			"folk",
			"indie",
			"hip-hop",
			"alternative",
			"rock",
		],
		poster: [b1, b2, b3, b4, b5],
		banner: basementBanner,
	},
];

export default shows;
