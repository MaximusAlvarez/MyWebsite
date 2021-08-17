import React, { useEffect, createRef } from 'react'
import { Link, Text, Stack, Heading, Box, Button, SlideFade, ScaleFade } from '@chakra-ui/react'
import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin'
import { useStaticQuery, graphql } from 'gatsby'
import useMediaQuery from '../hook/useMediaQuery'
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'
import { loadAnimation } from 'lottie-web/build/player/lottie_light'
import animation from '../animations/lf30_editor_azl8pqhr.json'

export default function Introduction () {
  const data = useStaticQuery(graphql`
        query MyQuery {
            contentfulPerson {
                linkedin
                name
                oneLineBio
                title
                github
                email
                extraPoints {
                    extraPoints
                }
            }
        }
    `)

  const isLargerThan800 = useMediaQuery(800)
  const handleClick = (event) => {
    trackCustomEvent({
      category: 'click',
      action: event
    })
  }

  const animationContainer = createRef()
  useEffect(() => {
    const anim = loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animation
    })
    return () => anim.destroy() // optional clean up for unmounting
  })

  return (
    <>
      <Stack
        spacing={10}
        minH='100vh'
        justifyContent='center'
        alignItems='flex-start'
        px={{ base: '5vw', md: '10vw' }}
      >
        <SlideFade
          direction='top'
          in
          transition={{ enter: { duration: 0.4, delay: 0.7 } }}
        >
          <Box position='relative'>
            <Text
              color='button1'
              fontSize='display2'
              fontWeight='medium'
              position='relative'
              zIndex={1}
            >
              Hey there!, I'm
            </Text>
          </Box>
          <Heading
            fontSize='display'
            lineHeight='95%'
            color='displayColor'
            letterSpacing={{ sm: '-1.2px', md: '-1.8px' }}
            position='relative'
            zIndex={1}
          >
            {data.contentfulPerson.name}
          </Heading>
        </SlideFade>
        <Box
          position='absolute'
          right={{ base: '0', md: '100' }}
          zIndex='-1'
        >
          <ScaleFade
            initialScale={0.5}
            in
            transition={{ enter: { duration: 0.4, delay: 0.4 } }}
          >
            <Box
              w={{ base: '150px', md: '450px' }}
              ref={animationContainer}
            />
          </ScaleFade>
        </Box>

        <SlideFade
          direction='top'
          in
          transition={{ enter: { duration: 0.4, delay: 0.8 } }}
        >
          <Heading
            color='textSecondary'
            fontSize='display2'
            fontWeight='medium'
            whiteSpace='pre-wrap'
            letterSpacing='-1.6px'
          >
            <Box color='displayColor' as='span'>
              {data.contentfulPerson.title}
            </Box>{' '}
            {data.contentfulPerson.oneLineBio[0]}
            {isLargerThan800
              ? '\n' + data.contentfulPerson.oneLineBio[1]
              : data.contentfulPerson.oneLineBio[1]}
          </Heading>
        </SlideFade>

        <SlideFade
          direction='top'
          in
          transition={{ enter: { duration: 0.4, delay: 0.9 } }}
        >
          <Text
            fontSize='display3'
            color='textSecondary'
            whiteSpace='pre-wrap'
          >
            {data.contentfulPerson.extraPoints.extraPoints}
          </Text>
        </SlideFade>
        <SlideFade
          direction='top'
          in
          transition={{ enter: { duration: 0.4, delay: 1.0 } }}
        >
          <Stack isInline spacing={4}>
            <Link href={data.contentfulPerson.github} isExternal>
              <Button
                leftIcon={<FaGithub color='#3CCF91' />}
                position='static'
                size={isLargerThan800 ? 'md' : 'sm'}
                color='white'
                onClick={() => handleClick('introduction_github')}
              >
                Github
              </Button>
            </Link>
            <Link href={data.contentfulPerson.linkedin} isExternal>
              <Button
                leftIcon={<FaLinkedin color='#3CCF91' />}
                position='static'
                size={isLargerThan800 ? 'md' : 'sm'}
                color='white'
                onClick={() => handleClick('introduction_linkedin')}
              >
                LinkedIn
              </Button>
            </Link>
            <Link href={'mailto:' + data.contentfulPerson.email} isExternal>
              <Button
                leftIcon={<FaEnvelope fill='#3CCF91' />}
                transition='0.3s'
                position='static'
                size={isLargerThan800 ? 'md' : 'sm'}
                color='white'
                onClick={() => handleClick('introduction_email')}
              >
                Email
              </Button>
            </Link>
          </Stack>
        </SlideFade>
      </Stack>
    </>
  )
}
