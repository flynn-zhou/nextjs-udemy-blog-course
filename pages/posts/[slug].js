import PostContent from "../../components/posts/post-detail/post-content";

import { getPostData } from "../../helper/posts-util";

function PostPage(props) {
  return <PostContent post={props.post} />;
}

export function getStaticProps(context) {
  const { params } = context;
  const slug = params.slug;

  const postData = getPostData(slug);
  return {
    props: {
      post: postData,
    },
  };
}

export function getStaticPaths() {
  return {
    paths: [{ params: { slug: "getting-started-with-nextjs1" } }],
    fallback: "blocking",
  };
}

export default PostPage;
