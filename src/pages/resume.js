import React, { useRef, useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Box, Flex } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useStaticQuery, graphql } from 'gatsby'
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'

const ResumePage = () => {
  const data = useStaticQuery(graphql`
      query ResumeQuery {
        contentfulPerson {
          resume {
            file {
              url
            }
          }
        }
      }
    `)

  pdfjs.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf.worker.min.js'
  const [initialWidth, setInitialWidth] = useState(null)
  const pdfWrapper = useRef(null)

  const setPdfSize = () => {
    if (pdfWrapper && pdfWrapper.current) {
      setInitialWidth(Math.min(pdfWrapper.current.getBoundingClientRect().width * 0.9, 1000))
    }
  }

  useEffect(() => {
    window.addEventListener('resize', setPdfSize)
    setPdfSize()
    return () => {
      window.removeEventListener('resize', setPdfSize)
    }
  }, [])

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
      <Navbar link={data.contentfulPerson.resume.file.url} page='resume' />
      <Flex
        py='100px'
        justifyContent='center'
        alignItems='center'
        ref={pdfWrapper}
      >
        <Box
          p='10px'
          backgroundColor='#fafafa'
          borderRadius='8px'
          boxShadow='0 30px 40px 0 rgb(16 36 94 / 20%)'
        >
          <Document
            file={data.contentfulPerson.resume.file.url}
            renderMode='svg'
          >
            <Page
              pageNumber={1}
              width={initialWidth}
            />
          </Document>
        </Box>
      </Flex>
      <Footer />
    </Box>
  )
}

export default ResumePage
