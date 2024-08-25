// src/components/Queries/FeaturedProductQueries.jsx
import { gql } from '@apollo/client';

export const GET_FEATURED_PRODUCTS = gql`
  query GetFeaturedProducts {
  products(where: { featured: true }, first: 8) {
    edges {
      node {
        databaseId
        sku
        name
        reviewCount
        ... on SimpleProduct {
          id
          name
          price
          salePrice
          regularPrice
          featuredImage {
            node {
              id
              sourceUrl
              altText
            }
          }
        }
        ... on VariableProduct {
          id
          name
          price
          salePrice
          regularPrice
          featuredImage {
            node {
              id
              sourceUrl
              altText
            }
          }
        }
        ... on ExternalProduct {
          id
          name
          featuredImage {
            node {
              id
              sourceUrl
              altText
            }
          }
        }
        ... on GroupProduct {
          id
          name
          featuredImage {
            node {
              id
              sourceUrl
              altText
            }
          }
        }
      }
    }
  }
}

`;
