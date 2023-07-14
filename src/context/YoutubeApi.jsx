import React, { createContext, useState, useEffect } from "react";

import { ApiData } from "../utils/api";
export const Context = createContext();

export const YoutubeApi = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    SelectedCategoryData(selectedCategory);
  }, [selectedCategory]);

  const SelectedCategoryData = (query) => {
    setLoading(true);
    ApiData(`search/?q=${query}`).then(({ contents }) => {
      console.log(contents);
      setSearchResults(contents);
      setLoading(false);
    });
  };

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResults,
        selectedCategory,
        setSelectedCategory,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
