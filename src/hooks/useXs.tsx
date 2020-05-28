import { useMediaQuery, useTheme } from "@material-ui/core";

const useXs = () => {
	return useMediaQuery(useTheme().breakpoints.down("xs"));
};

export default useXs;
