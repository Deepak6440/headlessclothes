import { gql } from '@apollo/client';

export const GET_PRODUCTS_BY_CATEGORY = gql`
query GetProductBasedOnCategories($categoryNames: [String]!) {
  productCategories(where: {slug: $categoryNames}) {
    nodes {
      databaseId
      name
      count
      products(first: 100) {
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
  }
}
`;
