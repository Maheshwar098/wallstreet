import React from 'react'
import { BiUserCircle } from "react-icons/bi";
import {FaCoins } from 'react-icons/fa';
import { Icon, Badge, Flex, Box, Text } from "@chakra-ui/react";

export function Navbar() {

  let width = window.innerWidth;
  let isMobile = (width <= 768)
  return (
    <>
      <Flex bg={"blackAlpha"} height={"10vh"} alignItems={'center'} padding={3} boxShadow={"md"}>

        <Box flex={0}>
          <Icon as={FaCoins} boxSize={"4vh"} marginTop={2} />
        </Box>

        <Box flex={1} fontSize={"4vh"} fontWeight={"bold"} marginLeft={3} >
          Wallstreet
        </Box>

        <Box flex={0} >
          <Badge fontSize={"2.5vh"}>$1000</Badge>
        </Box>

        <Box flex={0} marginLeft={3} >
          <Icon as={BiUserCircle} boxSize={"5vh"} marginTop={2} />
        </Box>

        {
          isMobile ? <></>:
          <Box margin={3}>
            <Text fontWeight="bold">Mahesh</Text>
          </Box>
        }
      </Flex>
    </>
  )
}
