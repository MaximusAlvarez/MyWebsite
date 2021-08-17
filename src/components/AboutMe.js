import React from 'react'
import { SimpleGrid, Stack, Heading, Image, Flex, Box } from '@chakra-ui/react'
import { useStaticQuery, graphql } from 'gatsby'
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible'
import BlogPostRenderer from '../components/BlogPostRenderer'

export default function AboutMe () {
  const data = useStaticQuery(graphql`
        query AboutQuery {
            contentfulPerson {
                bio {
                    raw
                }
                image {
                    title
                    file {
                        url
                    }
                }
            }
        }
    `)
  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        <SlideUpWhenVisible>
          <Stack spacing={4}>
            <Heading fontFamily='Ubuntu' fontSize='2xl'>
              ⚡ About Me
            </Heading>
            <BlogPostRenderer data={data.contentfulPerson.bio} />
          </Stack>
        </SlideUpWhenVisible>
        <SlideUpWhenVisible>
          <Flex alignItems='center' justifyContent='center' position='relative'>
            <Box
              maxW={{ base: '300px', lg: '350px' }}
              maxH={{ base: '300px', lg: '350px' }}
            >
              <Image
                src='https://svgsilh.com/svg/26432.svg'
                filter='invert(0.1)'
                zIndex={3}
                position='absolute'
                top={0}
                right={0}
                w={{ base: '100px', lg: '150px' }}
                alt=''
              />
              <Image
                src={data.contentfulPerson.image.file.url}
                w={{ base: '300px', lg: '350px' }}
                h={{ base: '300px', lg: '350px' }}
                alt={data.contentfulPerson.image.title}
              />
            </Box>
          </Flex>
        </SlideUpWhenVisible>
      </SimpleGrid>
    </>
  )
}
