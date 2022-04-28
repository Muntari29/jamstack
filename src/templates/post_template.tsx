import React, { FunctionComponent } from 'react'

type PostTemplateProps = {}

const PostTemplate: FunctionComponent<PostTemplateProps> = function (props) {
  console.log(props, 'template')

  return <div>Post Template</div>
}

export default PostTemplate
