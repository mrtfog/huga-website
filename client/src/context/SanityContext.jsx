import React,{ useState, useEffect } from "react";

export const SanityContext = React.createContext();

export const SanityProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);

  const value = {
    isLoading,
    fetchError
  }

  return (
    <SanityContext.Provider value={value}>{children}</SanityContext.Provider>
  )
}