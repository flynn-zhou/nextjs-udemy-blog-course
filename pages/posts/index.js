import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../helper/posts-util";

function AllPostsPage(props) {
  return <AllPosts posts={props.posts} />;
}

export function getStaticProps(context) {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
