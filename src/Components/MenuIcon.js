import React from 'react'
import { Flex, Box, Text } from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons';

import {Link} from 'react-router-dom'

export default function MenuIcon() {
    return (
        <>
        <Link to={'/MobileMenu'}>
        <Flex >
                <Box border={'2px'} borderColor={'blackAlpha.500'} borderRadius="lg" margin={5}>
                    <HamburgerIcon boxSize={"2vh"} margin="2" marginTop="1.5" textColor={'blackAlpha.600'} />
                </Box>
            </Flex>
        </Link>
            
        </>
    )
}
