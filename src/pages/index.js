import React from 'react'
import { Helmet } from 'react-helmet'
import { Box, Stack } from '@chakra-ui/react'
import Introduction from '../components/Introduction'
import Navbar from '../components/Navbar'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'
import GlobalStyle from '../components/GlobalStyle'
import Footer from '../components/Footer'
import ContactMe from '../components/ContactMe'

const IndexPage = () => {
  return (
    <Box>
      <Helmet>
        <title>Nikhil Rajesh - Software Developer</title>
        <meta name='title' content='Nikhil Rajesh - Software Developer' />
        <meta name='keywords' content='ph4t3, ph4t3 website, nikhil rajesh, nikhil rajesh website' />
        <meta
          name='description'
          content='Software Engineer based in India, an undergraduate student at National Institute of Technology Calicut.'
        />

        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://nikhilrajesh.com' />
        <meta
          property='og:title'
          content='Nikhil Rajesh - Software Developer'
        />
        <meta
          property='og:description'
          content='Software Engineer based in India, an undergraduate student at National Institute of Technology Calicut.'
        />
        <meta property='og:image' content='https://i.imgur.com/74A0HG2.png' />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://nikhilrajesh.com/' />
        <meta
          property='twitter:title'
          content='Nikhil Rajesh - Software Developer'
        />
        <meta
          property='twitter:description'
          content='Software Engineer based in India, an undergraduate student at National Institute of Technology Calicut.'
        />
        <meta
          property='twitter:image'
          content='https://i.imgur.com/74A0HG2.png'
        />
      </Helmet>
      <GlobalStyle>
        <Navbar />
        <Introduction />
        <Stack
          as='main'
          spacing='144px'
          justifyContent='center'
          alignItems='flex-start'
          px={{ base: '5vw', md: '10vw' }}
        >
          <AboutMe />
          <Skills />
        </Stack>
        <ContactMe />
        <Footer />
      </GlobalStyle>
    </Box>
  )
}

export default IndexPage
