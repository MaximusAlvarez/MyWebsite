import React from 'react'
import { Box, Flex, Text, Divider, Link } from '@chakra-ui/react'
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible'
import useMediaQuery from '../hook/useMediaQuery'

export default function Footer () {
  const isLargerThan600 = useMediaQuery(600)
  return (
    <SlideUpWhenVisible>
      <Divider />
      <Flex
        justifyContent={isLargerThan600 ? 'space-between' : 'center'}
        flexDirection={isLargerThan600 ? 'row' : 'column'}
        alignItems='center'
        m={5}
      >
        <Box>
          <Text fontSize='sm'>
            Developed by {' '}
            <Link
              href='https://nikhilrajesh.com'
              fontWeight='semibold'
              color='button1'
            >
              Nikhil Rajesh
            </Link>
          </Text>
          <Text fontSize='sm' display={isLargerThan600 ? 'block' : 'none'}>
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
        </Box>
        <Text textAlign={isLargerThan600 ? 'right' : 'center'} fontSize='sm'>
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
  )
}
