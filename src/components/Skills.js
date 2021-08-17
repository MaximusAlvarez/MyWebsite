import React from 'react'
import { Stack, Heading, Flex, Tag, TagLeftIcon, TagLabel } from '@chakra-ui/react'
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible'
import { useStaticQuery, graphql } from 'gatsby'

// Icons
import { SiLinux } from '@react-icons/all-files/si/SiLinux'
import { SiGit } from '@react-icons/all-files/si/SiGit'
import { SiCplusplus } from '@react-icons/all-files/si/SiCplusplus'
import { SiAngular } from '@react-icons/all-files/si/SiAngular'
import { SiReact } from '@react-icons/all-files/si/SiReact'
import { SiNodeDotJs } from '@react-icons/all-files/si/SiNodeDotJs'
import { SiGo } from '@react-icons/all-files/si/SiGo'
import { SiJava } from '@react-icons/all-files/si/SiJava'
import { SiTypescript } from '@react-icons/all-files/si/SiTypescript'
import { SiJavascript } from '@react-icons/all-files/si/SiJavascript'
import { SiHtml5 } from '@react-icons/all-files/si/SiHtml5'
import { SiCss3 } from '@react-icons/all-files/si/SiCss3'
import { SiAmazonaws } from '@react-icons/all-files/si/SiAmazonaws'
import { SiGooglecloud } from '@react-icons/all-files/si/SiGooglecloud'
import { SiMicrosoftazure } from '@react-icons/all-files/si/SiMicrosoftazure'
import { SiPostgresql } from '@react-icons/all-files/si/SiPostgresql'
import { SiMysql } from '@react-icons/all-files/si/SiMysql'
import { SiMongodb } from '@react-icons/all-files/si/SiMongodb'
import { SiDocker } from '@react-icons/all-files/si/SiDocker'

const colors = ['gray', 'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'cyan', 'purple', 'pink', 'linkedin', 'facebook', 'messenger', 'whatsapp', 'twitter', 'telegram']

const icons = {
  'C/C++': SiCplusplus,
  HTML5: SiHtml5,
  CSS3: SiCss3,
  Javascript: SiJavascript,
  Typescript: SiTypescript,
  Java: SiJava,
  Golang: SiGo,
  Angular: SiAngular,
  React: SiReact,
  NodeJS: SiNodeDotJs,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Git: SiGit,
  Linux: SiLinux,
  AWS: SiAmazonaws,
  'Google Cloud': SiGooglecloud,
  Azure: SiMicrosoftazure,
  Docker: SiDocker
}

export default function Skills () {
  const data = useStaticQuery(graphql`
    query SkillsQuery {
        contentfulPerson {
            skills
        }
    }
    `)

  return (
    <>
      <SlideUpWhenVisible>
        <Stack spacing={4}>
          <Heading fontFamily='Ubuntu' fontSize='2xl'>
            ⚒️  Skills
          </Heading>
          <Flex
            wrap='wrap'
          >
            {data.contentfulPerson.skills.map((skill, i) => (
              <Tag
                size='lg'
                key={skill}
                variant='subtle'
                colorScheme={colors[i % colors.length]}
                m='1'
              >
                {skill in icons ? <TagLeftIcon boxSize='22px' as={icons[skill]} /> : ''}
                <TagLabel>{skill}</TagLabel>
              </Tag>
            ))}
          </Flex>
        </Stack>
      </SlideUpWhenVisible>
    </>
  )
}
