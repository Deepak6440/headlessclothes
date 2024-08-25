import { gql } from '@apollo/client';

export const GET_CART_ITEMS = gql`
  query GetCartItems {
    cart {
      contents {
        nodes {
          key
          product {
            node {
              id
              name
              ... on SimpleProduct {
                price
                salePrice
                regularPrice
              }
              ... on VariableProduct {
                price
                salePrice
                regularPrice
              }
              ... on ExternalProduct {
                price
              }
              featuredImage {
                node {
                  sourceUrl
                }
              }
            }
          }
          quantity
          total
        }
      }
    }
  }
`;

