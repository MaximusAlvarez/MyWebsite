import React from 'react'
import { Link, Button, chakra, Heading, Stack, Text } from '@chakra-ui/react'
import useMediaQuery from '../hook/useMediaQuery'
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin'
import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope'
import { FaFileAlt } from '@react-icons/all-files/fa/FaFileAlt'
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible'

export default function ContactMe () {
  const isLargerThan800 = useMediaQuery(800)
  const handleClick = (event) => {
    trackCustomEvent({
      category: 'click',
      action: event
    })
  }
  return (
    <>
      <Stack
        spacing={10}
        minH='100vh'
        w='100%'
        alignItems='center'
        justifyContent='center'
      >
        <SlideUpWhenVisible>
          <Heading fontSize={{ base: '4xl', md: '5xl' }} textAlign='center'>
            Get In Touch.
          </Heading>
        </SlideUpWhenVisible>

        <SlideUpWhenVisible>
          <Stack isInline spacing={4}>
            <Link
              href='https://linkedin.com/in/nikhil-rajesh1999'
              isExternal
              onClick={() => handleClick('contact_linkedin')}
            >
              <Button
                leftIcon={<FaLinkedin fill='#3CCF91' />}
                position='static'
                size={isLargerThan800 ? 'md' : 'sm'}
                color='white'
              >
                LinkedIn
              </Button>
            </Link>
            <Link
              href='mailto:mail@nikhilrajesh.com'
              isExternal
              onClick={() => handleClick('contact_email')}
            >
              <Button
                color='white'
                leftIcon={<FaEnvelope fill='#3CCF91' />}
                transition='0.3s'
                position='static'
                size={isLargerThan800 ? 'md' : 'sm'}
              >
                Email
              </Button>
            </Link>
            <Link
              href='https://drive.google.com/file/d/1kzzJ-ImTnyvzJN_kNtGlc0Ev-mIyC3t5/view?usp=sharing'
              isExternal
              onClick={() => handleClick('contact_resume')}
            >
              <Button
                leftIcon={<FaFileAlt fill='#3CCF91' />}
                position='static'
                size={isLargerThan800 ? 'md' : 'sm'}
                color='white'
              >
                Resume
              </Button>
            </Link>
          </Stack>
        </SlideUpWhenVisible>
      </Stack>
    </>
  )
}
