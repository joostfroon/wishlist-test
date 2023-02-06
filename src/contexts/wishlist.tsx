import React, { createContext, useState, useContext, useEffect } from 'react';

const WISHLIST_NAME_FOR_LOCALSTORAGE = 'wishlist';

interface Context {
  showWishlistItems: boolean; 
  setShowWishlistItems: (arg: boolean) => void;
  wishlistIds: string[];
  toggleWishlistId: (arg: string) => void;
}

const wishlistContext = createContext<Context | null>(null);

export const useWishlistContext = () => {
  const context = useContext(wishlistContext);
  
  if (!context) throw new Error('useWishlistContext was called outside the wishlist context provider');

  return context;
};

interface Provider {
  children: React.ReactNode | React.ReactNode[];
}

export const WishlistContextProvider = ({ children }: Provider) => {
  const [showWishlistItems, setShowWishlistItems] = useState(false);
  const wishlistFromLocalStorage = typeof window !== 'undefined' && localStorage.getItem(WISHLIST_NAME_FOR_LOCALSTORAGE);
  const [wishlistIds, setWishlist] = useState<string[]>(wishlistFromLocalStorage ? JSON.parse(wishlistFromLocalStorage) : []);
  
  useEffect(() => {
    localStorage.setItem(WISHLIST_NAME_FOR_LOCALSTORAGE, JSON.stringify(wishlistIds));
  }, [wishlistIds]);
  
  const toggleWishlistId = (id: string) => {
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

