import React from "react"
import { Stack } from '@chakra-ui/react'

export const Main = (props) => (
  <Stack
    width="100%"
    justifyContent={"center"}
    h="100vh"
    display={"flex"}
    flexDirection="column"
    alignItems={"center"}
    maxWidth="48rem"
    px="1rem"
    {...props}
  />
)
