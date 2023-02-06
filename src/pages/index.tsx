import React, { Suspense } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../layout/layout';
import { useWishlistContext } from '../contexts/wishlist';
import Products from '../components/Products';
import Container from '../components/Container';
import { ProductInterface } from '../interfaces';
const WishlistModal = React.lazy(() => import ('../components/wishlistModal/WishlistModal'));


interface ProductsQuery {
  allProductsJson: {
    nodes: ProductInterface[];
  }
}

const IndexPage = () => {
  const data: ProductsQuery = useStaticQuery(graphql`
    query Products {
      allProductsJson {
        nodes {
          id
          image
          title
          reviewScore
          description
          price
        }
      }
    }
  `);
  const products = data.allProductsJson.nodes;
  const { wishlistIds } = useWishlistContext();

  const storedWishlistProducts = wishlistIds.map((id) => products.find(product => product.id === id));

  return (
    <>
      <Container>
        <Products products={products} />
      </Container>

      {storedWishlistProducts.length > 0 && (
        <Suspense fallback={<div>Loading...</div>}>
          <WishlistModal products={storedWishlistProducts} />
        </Suspense>
      )}
    </>
  );
};

export default () => (
  <Layout>
    <IndexPage />
  </Layout>
);

export const Head = () => <title>Zoekresultaten | Bouwmarkt.nl</title>;
