import React from "react";
import App, { AppInitialProps, AppContext } from "next/app";
import { wrapper } from "../store";


import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import Image from "../components/Image";
import PostList from "../components/PostList";
import Layout from "../components/Layout";
import SinglePost from "../components/SinglePost";
import { STORYBLOK_TOKEN } from "../config";
import FilterProjects from "../components/FilterProjects";
import { Provider } from "react-redux";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  Image: Image,
  PostList: PostList,
  post: SinglePost,
  filterprojects: FilterProjects
};

storyblokInit({
  accessToken: STORYBLOK_TOKEN,
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }) {
  const { store, props } = wrapper.useWrappedStore(pageProps);

  return (    <Provider store={store}>
    <Layout><Component {...pageProps} /></Layout></Provider>);
}

export default MyApp;

