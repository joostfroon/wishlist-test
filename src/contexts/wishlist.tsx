import React, { createContext, useState, useContext, useEffect } from 'react';

const LOCALSTORAGE_FOR_WISHLIST_NAME = 'wishlist';

interface Context {
  showWishlistItems: boolean; 
  setShowWishlistItems: (prop: boolean) => void;
  wishlistIds: string[];
  toggleWishlistId: (prop: string) => void;
}

const wishlistContext = createContext<Context | null>(null);

export const useWishlistContext = () => {
  const context = useContext(wishlistContext);
  
  if (!context) throw new Error('useWishlistContext was called outside the wishlist context provider');

  return context;
};

interface Provider {
  children: React.ReactNode;
}

export const WishlistContextProvider = ({ children }: Provider) => {
  const [showWishlistItems, setShowWishlistItems] = useState(false);
  const wishlistFromLocalStorage = typeof window !== 'undefined' && localStorage.getItem(LOCALSTORAGE_FOR_WISHLIST_NAME);
  const [wishlistIds, setWishlist] = useState<string[]>(wishlistFromLocalStorage ? JSON.parse(wishlistFromLocalStorage) : []);
  
  useEffect(() => {
    localStorage.setItem(LOCALSTORAGE_FOR_WISHLIST_NAME, JSON.stringify(wishlistIds));
  }, [wishlistIds]);
  
  const toggleWishlistId = (id) => {
    if (wishlistIds.includes(id)) {
      return setWishlist(wishlistIds.filter(wish => wish !== id));
    }

    return setWishlist([...wishlistIds, id]);
  };

  return (
    <wishlistContext.Provider value={{ showWishlistItems, setShowWishlistItems, wishlistIds, toggleWishlistId }}>
      {children}
    </wishlistContext.Provider>
  );
};

