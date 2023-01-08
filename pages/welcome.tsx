import { Text, Box, Input, Button } from "@chakra-ui/react";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Footer } from "../components/Footer";
import SlideShow from "components/slideer";
import { useState } from "react";
import * as FirestoreService from "../lib/firestore";

const HomePage = () => {
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const sendEmail = async () => {
    console.log(email);
    try {
      const check: any = FirestoreService.allowEmail(email);
      console.log(check);
      // if (check) {
      //   // console.log(check);
      //   setSubmitting(false)
      // } else {
      //   await FirestoreService.subscribe(email);
      //   alert("subscription successful");
      //   setSubmitting(false);
      // }
    } catch (e) {
      console.log(e);
    }
  };

  async function handleSubmit() {
    setSubmitting(true);
    sendEmail();
  }

  return (
    <Container height="100vh" overflow="hidden">
      <Box position={"absolute"}>
        <SlideShow />
      </Box>
      <Box
        w={"100%"}
        background={"blackAlpha.600"}
        position={"absolute"}
        h="100vh"
      />

      <Main zIndex={999} color="white">
        <Box
          display={"flex"}
          flexDirection="column"
          textAlign={"center"}
          justifyContent="center"
          alignItems={"center"}
        >
          <Box py={3}>
            <Box
              alt="altlogo"
              as="img"
              src="/logo_text.svg"
              h="4rem"
              display={"flex"}
              alignItems="Center"
            />
          </Box>
          <Box>ZHE Fall/Winter 2077 collection. Coming soon</Box>

          <Box display={"flex"} justifyContent="space-around" py={2}>
            <Input
              bg="whiteAlpha.400"
              color={"white"}
              width="60%"
              value={email}
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />

            <Button
              width="35%"
              bgGradient="linear(to-tr, teal.300,yellow.400)"
              borderRadius={"6px"}
              onClick={handleSubmit}
              disabled={email.length < 5 ? true : false}
            >
              <Text>{submitting ? "Submitting" : "Submit"}</Text>
            </Button>
          </Box>
          <Box fontSize={"xs"} textAlign="center" opacity={0.7}>
            Get Notified, be the first to know via email
          </Box>
        </Box>
      </Main>
      <DarkModeSwitch />

      <Footer>
        <Text color="white" fontSize={"xs"}>
          &copy; 2022, zhe online store
        </Text>
      </Footer>
    </Container>
  );
};

export default HomePage;
