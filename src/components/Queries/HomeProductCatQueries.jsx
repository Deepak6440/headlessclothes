// src/components/Queries/FeaturedProductQueries.jsx
import { gql } from '@apollo/client';

export const GET_PRODUCT_CATEGORIES = gql`
 query GetProductCategories {
  productCategories {
    nodes {
      id
      name
      slug
      image {
        guid
      }
    }
  }
}
`;
