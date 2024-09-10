import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
 query GetCategories {
  productCategories {
    nodes {
      databaseId
      name
      count
    }
  }
}`