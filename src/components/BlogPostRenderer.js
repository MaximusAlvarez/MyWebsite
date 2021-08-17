import React from 'react'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { Text, Link } from '@chakra-ui/react'

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return (
        <>
          <Text color='textSecondary'>{children}</Text>
          <br />
        </>
      )
    },
    [INLINES.HYPERLINK]: (node, children) => {
      return (
        <Link color='button1' href={node.data.uri}>
          {children}
        </Link>
      )
    },
    [BLOCKS.EMBEDDED_ASSET]: node => {
      return (
        <>
          <h2>Embedded Asset</h2>
          <pre>
            <code>{JSON.stringify(node, null, 2)}</code>
          </pre>
        </>
      )
    }
  }
}

export default function BlogPostRenderer ({ data }) {
  return <div>{data && renderRichText(data, options)}</div>
}
