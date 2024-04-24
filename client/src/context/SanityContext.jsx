import React, { useState, useEffect } from "react";
import { client } from "../api/SanityClient";

export const SanityContext = React.createContext();

export const SanityProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);
  const [homeContent, setHomeContent] = useState(null);
  const [courses, setCourses] = useState(null);
  const [services, setServices] = useState(null);

  const getServices = async () => {
    try {
      const query = `*[_type == 'services']{
        ...,
        "image": image.asset->url,
        "serviceIntroducingVideo": serviceIntroducingVideo.asset->url
      }`;
      const result = await client.fetch(query);

      if (result) {
        setServices(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getCourses = async () => {
    try {
      const query = `*[_type == 'courses']{
        ...,
        "image": image.asset->url,
        "courseIntroducingVideo": courseIntroducingVideo.asset->url

      }`;
      const result = await client.fetch(query);

      if (result) {
        setCourses(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getHome = async () => {
    try {
      const query = `*[_type == 'home']{
        ...,
        "courses" : courses[]->{
          ...,
          "imageUrl": image.asset->url,
          "courseIntroducingVideo": courseIntroducingVideo.asset->url
        },
        "services" : services[]->{
          ...,
          "image": image.asset->url,
          "serviceIntroducingVideo": serviceIntroducingVideo.asset->url
        },
        "portfolio": portfolio[]->{
          ...,
          "image": image.asset->url
        }
      } | order(orderRank)`;
      const result = await client.fetch(query);

      if (result) {
        setHomeContent(result);
        setIsLoading(false);
        setFetchError(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setFetchError(true);
    }
  };

  useEffect(() => {
    getHome();
  }, []);

  const value = {
    isLoading,
    fetchError,
    homeContent,
    getHome,
    courses,
    setCourses,
    getCourses,
    services,
    getServices,
  };

  return (
    <SanityContext.Provider value={value}>{children}</SanityContext.Provider>
  );
};
