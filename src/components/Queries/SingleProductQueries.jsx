import { gql } from '@apollo/client';

export const GET_PRODUCT_DETAILS = gql`
  query GetSingleProduct($id: ID!) {
    product(id: $id, idType: DATABASE_ID) {
      id
      name
      description
      shortDescription
      featuredImage {
        node {
          sourceUrl
        }
      }
      galleryImages {
        nodes {
          id
          sourceUrl
          altText
        }
      }
      ... on ProductWithPricing {
        price
        regularPrice
        salePrice
      }
      ... on SimpleProduct {
        price
        regularPrice
        salePrice
        sku
        stockQuantity
      }
      ... on VariableProduct {
        price
        regularPrice
        salePrice
        sku
        stockQuantity
      }
      ... on ExternalProduct {
        price
        sku
      }
    }
  }
`;
