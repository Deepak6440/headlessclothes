import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
query GetProducts($termTaxonomId: [ID],$first: Int) {
  productCategories(where: { termTaxonomId: $termTaxonomId }) {
    nodes {
      products(first: $first) {
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
}`;
export const GET_ALL_PRODUCTS = gql`
query GetAllProducts {
  products(first: 50) {
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
}`;