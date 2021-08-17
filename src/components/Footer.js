import React from 'react'
import { Box, Flex, Text, Divider, Link } from '@chakra-ui/react'
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible'

export default function Footer () {
  return (
    <Box
      position='absolute'
      zIndex='99'
      w='100%'
      bottom='0'
    >
      <SlideUpWhenVisible>
        <Divider />
        <Flex justifyContent='space-between' alignItems='center' m={5}>
          <Text fontSize='sm'>
            Developed by {' '}
            <Link
              href='https://nikhilrajesh.com'
              fontWeight='semibold'
              color='button1'
            >
              Nikhil Rajesh
            </Link>
            <br />
            Built with{' '}
            <Link
              href='http://gatsbyjs.com'
              fontWeight='semibold'
              color='button1'
              isExternal
            >
              Gatsby.js
            </Link>
            {' '}&{' '}
            <Link
              href='https://chakra-ui.com/'
              fontWeight='semibold'
              color='button1'
              isExternal
            >
              Chakra UI
            </Link>
          </Text>
          <Text textAlign='right' fontSize='sm'>
            Inspired from{' '}
            <Link
              href='https://abdulrahman.id'
              fontWeight='semibold'
              color='button1'
              isExternal
            >
              abdulrahman.id
            </Link>
            <br />
            Icon by{' '}
            <Link
              href='https://www.vectorstock.com/royalty-free-vector/letter-nr-ar-r-n-logo-design-simple-vector-27225013'
              fontWeight='semibold'
              color='button1'
              isExternal
            >
              VectorStock / vectorstock
            </Link>
          </Text>
        </Flex>
      </SlideUpWhenVisible>
    </Box>
  )
}
