import React, { useState, useEffect, Suspense } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../layout/layout';
import Products from '../components/Products';
import Container from '../components/Container';
const WishlistModal = React.lazy(() => import ('../components/wishlistModal/WishlistModal'));

const IndexPage = () => {
  const data = useStaticQuery(graphql`
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

  const wishlistFromLocalStorage = typeof window !== 'undefined' && localStorage.getItem('wishlist');
  const [wishlist, setWishlist] = useState(wishlistFromLocalStorage ? JSON.parse(wishlistFromLocalStorage) : []);
  
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);
  
  const toggleInWishlist = (id) => {
    if (wishlist.includes(id)) {
      return setWishlist(wishlist.filter(wish => wish !== id));
    }

    return setWishlist([...wishlist, id]);
  };

  const storedWishlistProducts = wishlist.map((id) => products.find(product => product.id === id));

  return (
    <Layout>
      <Container>
        <Products 
          products={products} 
          wishlist={wishlist}
          toggleInWishlist={toggleInWishlist}
        />
      </Container>

      {storedWishlistProducts.length > 0 && (
        <Suspense fallback={<div>Loading...</div>}>
          <WishlistModal 
            toggleInWishlist={toggleInWishlist} 
            products={storedWishlistProducts} 
          />
        </Suspense>
      )}
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Zoekresultaten | gamma.nl</title>;
