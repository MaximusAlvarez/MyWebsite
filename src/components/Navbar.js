import React from 'react'
import { Box, Flex, Image, HStack } from '@chakra-ui/react'
import styled from '@emotion/styled'
import logo from '../images/logo_green.svg'

export default function Navbar () {
  const HoverLink = styled.a`
        position: relative;
        font-weight: var(--chakra-fontWeights-semibold);
        color: #fff;

        &:before {
            content: "";
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: -5px;
            left: 0;
            background-color: var(--chakra-colors-button1);
            visibility: hidden;
            transform: scaleX(0);
            transition: all 0.3s ease-in-out;
        }

        &:hover {
            color: var(--chakra-colors-button2);
            &:before {
                visibility: visible;
                transform: scaleX(1);
            }
        }
    `

  return (
    <>
      <Box
        as='nav'
        width='100%'
        px='3vw'
        py='4'
        borderBottom='0.5px solid rgb(255 255 255 / 16%)'
        position='fixed'
        background='#1a202c'
        zIndex='99'
      >
        <Flex
          flexDirection='row'
          justifyContent='space-between'
          alignItems='center'
          width='100%'
        >
          <Image
            src={logo}
            filter='invert(0.1)'
            w={{ base: '40px', lg: '40px' }}
            alt=''
          />
          <HStack spacing='3vw'>
            {/*
            <HoverLink href='/projects'>
              Projects
            </HoverLink>
            <HoverLink href='/blog'>
              Blog
            </HoverLink>
            */}
            <HoverLink
              href='https://drive.google.com/file/d/1IvhcdThnfMAcPEHy6Yvq4o8vSaIi_ArV/view?usp=sharing'
            >
              Resume
            </HoverLink>
          </HStack>
        </Flex>
      </Box>
    </>
  )
}
