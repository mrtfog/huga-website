import React,{ useState } from "react";
import { client } from "../api/SanityClient";

export const SanityContext = React.createContext();

export const SanityProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);
  const [homeContent, setHomeContent] = useState(null);

  const getHome = async () => {
    try {
      const query = `*[_type == 'home']{
        ...,
        "courses" : courses[]->,
        "services" : services[]->{
          ...,
          "imageUrl": image.asset->url
        },
      } | order(orderRank)`;
      const result = await client.fetch(query);

      if(result) {
        setHomeContent(result);
        setIsLoading(false);
        setFetchError(false);
      }
    } catch (error) {
      console.log(error)
      setIsLoading(false);
      setFetchError(true);
    }
  }

  const value = {
    isLoading,
    fetchError,
    homeContent,
    getHome,
  }

  return (
    <SanityContext.Provider value={value}>{children}</SanityContext.Provider>
  )
}