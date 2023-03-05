import React from 'react'
import { Flex, Box, Text } from "@chakra-ui/react";
import { BiNews } from 'react-icons/bi';
import { AiOutlineStock } from 'react-icons/ai';
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaUsers } from 'react-icons/fa';

function eachMenu(menu) {
    return (
        <Box p="4" bg="blackAlpha.50" margin={3} mx="10%" display='flex' justifyContent={'center'} borderRadius="lg">
            {menu.icon}
            <Text fontWeight="bold" fontSize="lg" marginLeft={1}>
                {menu.name}
            </Text>
        </Box>
    )
}

function DesktopMenu(props) {
    const menuOptions = [
        { name: 'Stocks', icon: <AiOutlineStock size={25}/> },
        { name: 'News', icon: <BiNews size={25}/> },
        { name: 'Users', icon: <FaUsers size={25}/> },
        { name: 'IPOs', icon: <RiMoneyDollarCircleLine size={25} /> },
      ];

    return (
        <>
            <Flex direction="column" h="100vh" w={props.width} boxShadow={"md"} >
                <Box>
                    <Text p="1" display={'flex'} justifyContent='center' marginTop={4} color="gray.500">
                        MENU
                    </Text>
                </Box>
                {
                    menuOptions.map(eachMenu)
                }
            </Flex>
        </>
    )
}
DesktopMenu.defaultProps={
    width : "25%"
}
export default DesktopMenu
