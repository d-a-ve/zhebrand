import { extendTheme } from "@chakra-ui/react";
import { globalStyles } from "./styles";
import { breakpoints } from "./foundations/breakpoints";
import { buttonStyles } from "./components/button";
import { CardComponent } from "./components/card/card";
import { CardBodyComponent } from "./components/card/cardBody";
import { CardHeaderComponent } from "./components/card/cardHeader";

export default extendTheme(
  { breakpoints },
  globalStyles,
  buttonStyles,
  CardComponent,
  CardBodyComponent,
  CardHeaderComponent
);
