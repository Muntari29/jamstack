import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

export type CategoryListProps = {
  selectedCategory: string
  categoryList: {
    [key: string]: number
  }
}
// type CategoryItemProps = {
//   active: boolean
// }

// type GatsbyLinkProps = {
//   children: ReactNode
//   className?: string
//   to: string
// } & CategoryItemProps

const CategoryListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 768px;
  margin: 100px auto 0;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 50px;
    padding: 0 20px;
  }
`

const CategoryItem = styled(Link)<{ active: string }>`
  margin-right: 20px;
  padding: 5px 0;
  font-weight: ${({ active }) => (active === 'true' ? '800' : '400')};
  font-size: 18px;
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }
  @media (max-width: 768px) {
    font-size: 15px;
  }
`

const CategoryList: FunctionComponent<CategoryListProps> = function ({
  selectedCategory,
  categoryList,
}) {
  return (
    <CategoryListWrapper>
      {Object.entries(categoryList).map(([name, count]) => (
        <CategoryItem
          to={`/?category=${name}`}
          active={name === selectedCategory ? 'true' : 'false'}
          key={name}
        >
          #{name}({count})
        </CategoryItem>
      ))}
    </CategoryListWrapper>
  )
}

export default CategoryList
