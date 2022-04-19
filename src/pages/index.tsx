import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from 'components/base/GlobalStyle'
import CategoryList from 'components/base/CategoryList'
import Introduction from 'components/domain/Introduction'
import PostList from 'components/domain/PostList'
import Footer from 'components/base/Footer'

const CATEGORY_LIST = {
  All: 5,
  Web: 3,
  Mobile: 2,
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const IndexPage: FunctionComponent = function () {
  return (
    <Container>
      <GlobalStyle />
      <Introduction />
      <CategoryList selectedCategory="Web" categoryList={CATEGORY_LIST} />
      <PostList />
      <Footer />
    </Container>
  )
}

export default IndexPage
