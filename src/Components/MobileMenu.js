import React from 'react'
import { useState } from 'react';
import { Flex, Box, Text } from "@chakra-ui/react";
import DesktopMenu from './DesktopMenu'
import { HamburgerIcon } from '@chakra-ui/icons';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export default function MobileMenu() {

    return (
        <>
            {
                <>
                    <Box>
                        <Link to="/">
                            <Flex >
                                <Box border={'2px'} borderColor={'blackAlpha.500'} borderRadius="lg" margin={4}>
                                    <FaTimes size={30} />
                                </Box>
                            </Flex>
                        </Link>
                        <DesktopMenu width={"80%"} />
                    </Box>
                </>
            }
        </>

    )
}
