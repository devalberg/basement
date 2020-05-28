import { useMediaQuery, useTheme } from "@material-ui/core";

const useSm = () => {
	return useMediaQuery(useTheme().breakpoints.down("sm"));
};

export default useSm;
