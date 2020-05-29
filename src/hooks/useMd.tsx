import { useMediaQuery, useTheme } from "@material-ui/core";

const useMd = () => {
	return useMediaQuery(useTheme().breakpoints.down("md"));
};

export default useMd;
