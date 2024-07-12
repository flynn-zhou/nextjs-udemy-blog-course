import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

import { getFeaturedPosts } from "../helper/posts-util";
import Head from "next/head";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Tang's Blog</title>
        <meta
          name="description"
          content="I post a propramming and web development "
        ></meta>
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps(context) {
  const featuredPosts = getFeaturedPosts();
  return {
    props: { posts: featuredPosts },
    revalidate: 100,
  };
}

export default HomePage;
