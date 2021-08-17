import React from 'react'
import { Box, Button, Flex, Image, Link, HStack } from '@chakra-ui/react'
import { HiOutlineDownload } from '@react-icons/all-files/hi/HiOutlineDownload'
import styled from '@emotion/styled'
import logo from '../images/logo_green.svg'

function NavbarRight (page, link) {
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

  if (page === 'resume') {
    return (
      <Link href={link} isExternal>
        <Button leftIcon={<HiOutlineDownload />} size='sm' color='button1' variant='outline'>
          Download
        </Button>
      </Link>
    )
  } else {
    return (
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
          href='/resume'
        >
          Resume
        </HoverLink>
      </HStack>
    )
  }
}

export default function Navbar ({ page, link }) {
  return (
    <>
      <Box
        as='nav'
        width='100%'
        px='3vw'
        py='4'
        borderBottom={page === 'resume' ? '' : '0.5px solid rgb(255 255 255 / 16%)'}
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
          <Link href='/'>
            <Image
              src={logo}
              filter='invert(0.1)'
              w={{ base: '40px', lg: '40px' }}
              alt=''
            />
          </Link>
          {NavbarRight(page, link)}
        </Flex>
      </Box>
    </>
  )
}
