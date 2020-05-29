import { data } from "./template";

import desktopBanner from "../../assets/images/desktop.jpeg";
import rustCaveBanner from "../../assets/images/rustcave.png";
import brickBanner from "../../assets/images/brick.png";

const shows: data[] = [
	{
		title: "Desktop",
		artists: ["Manga Boys", "Red Passport", "Arteezy", "Evil Genius"],
		photos: [],
		info: {
			location: "Camden, NW1 ZTA",
			date: "13/July/2020",
			price: "£5 on doors",
			description: "",
		},
		genres: ["Indie", "Hip-Hop", "Electronic"],
		poster: "",
		banner: desktopBanner,
	},
	{
		title: "rust cave",
		artists: ["resouse", "faber-castle", "breakout"],
		photos: [],
		info: {
			location: "Camden, NW1 PVP",
			date: "18/May/2020",
			price: "£5 on doors",
			description: "",
		},
		genres: ["indie", "alternative", "rock"],
		poster: "",
		banner: rustCaveBanner,
	},
	{
		title: "brickhouse",
		artists: ["cellox", "sam hyde", "the world is a fuck", "john mercy"],
		photos: [],
		info: {
			location: "Camden, NW1 PTE",
			date: "24/August/2020",
			price: "£5 on doors",
			description: "",
		},
		genres: ["techno", "electronic", "folk"],
		poster: "",
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
		photos: [],
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
		poster: "",
		banner: brickBanner,
	},
];

export default shows;
