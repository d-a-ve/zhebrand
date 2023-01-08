import { useColorMode, Switch, Box } from "@chakra-ui/react";
import MyDrawer from "components/drawer";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Box zIndex={999} position="fixed" top="1rem" right="1rem">
      <MyDrawer />

{/* Dark mode switch */}
      {/* <Switch
        zIndex={9999999}
        position="fixed"
        top="1rem"
        right="1rem"
        color="green"
        isChecked={isDark}
        onChange={toggleColorMode}
      /> */}
    </Box>
  );
};
