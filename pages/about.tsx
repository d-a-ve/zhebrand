import { Box, Container, Text, VStack } from "@chakra-ui/react";
import { DarkModeSwitch } from "components/DarkModeSwitch";
import { Footer } from "components/Footer";
import { Main } from "../components/Main";

const About = () => {
  return (
    <>
      <Container height="100vh" overflow="hidden">
        <Main>
          <VStack>
            <Text>About</Text>

            <Box>
              From Southern Nigeria,

              <br/> <br/>
              
              A blend of luxury and streetwear

              <br />
              <br/>
              Zhe is showcases its clothing line in different collections and editions,
              from ready-to-wears, to essentials, to seasonal limited collections. 
              

              <br />
              <br/>
     
              Designs are inspired by my childhood and everyday life,  bringing a
              reflection of Gen-z socioeconomics, hip pop and Afrobeats music culture, and
              the vabriant UK street scene, borrowing from plenty other cultures around the world

              <br />
              <br/>
              
             Our goal is to not only represent a particular group but
              promote cultural diversity and inclusiveness, 

              <br />
              <br/>
              
              The roadmap for the brand 
              rolls with the founder's vision as the year and season goes by
              
              <br />
              <br/>
              This also reflects on the creatives of each collections as time goes with the
              fanbase known as The KIDZ
            </Box>
          </VStack>
        </Main>

        <DarkModeSwitch />

        <Footer>
          <Text color="white" fontSize={"xs"}>
            &copy; 2022, zhe online store
          </Text>
        </Footer>
      </Container>
    </>
  );
};

export default About;
