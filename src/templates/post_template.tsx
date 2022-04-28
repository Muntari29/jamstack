import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'

type PostTemplateProps = {}

const PostTemplate: FunctionComponent<PostTemplateProps> = props => {
  console.log(props)

  return <div>Post Template</div>
}

export default PostTemplate

//Query 내에서 사용하기 위한 파라미터의 이름은 필드 이름과 구분하기 위해 $ 와 같은 접두사를 붙여줘야하며, 그에 맞는 타입을 명시해주어야 함
export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`
