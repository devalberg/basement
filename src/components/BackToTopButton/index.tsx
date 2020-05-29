import React from "react";
import * as Scroll from "react-scroll";
import { Box, Button } from "@material-ui/core";
import useSm from "../../hooks/useSm";

const BackToTopButton = () => {
	const isSm = useSm();

	const scrollToTop = () => {
		Scroll.animateScroll.scrollToTop({ duration: 500 });
	};

	return (
		<Box display="flex" justifyContent="center" width="100%">
			<Box width={isSm ? "80%" : "30%"}>
				<Button variant="contained" onClick={scrollToTop}>
					Back to the Top
				</Button>
			</Box>
		</Box>
	);
};

<<<<<<< HEAD
export default React.memo(BackToTopButton);
=======
export default BackToTopButton;
>>>>>>> f3062854598024edf727f2567d5ec873cd39cf70
