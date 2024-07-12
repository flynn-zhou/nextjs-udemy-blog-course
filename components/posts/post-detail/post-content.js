import PostHeader from "./post-header";
import classes from "./post-content.module.css";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

import ReactMarkdown from "react-markdown";
import Image from "next/image";

function PostContent(props) {
  const { post } = props;

  const theSlug = post.slug;

  const theImage = post.image;
  console.log("theSlug:" + theSlug);

  const imagePath = `/images/posts/${theSlug}/${theImage}`;
  console.log("imagePath2:" + imagePath);
  //   /images/posts/getting-started-with-nextjs1/
  const customerRenderers = {
    paragraph(paragraph) {
      const { node } = paragraph;
      if (node.children[0].type === "image") {
        const image = node.children[0];
        return (
          <Image
            src={`/images/posts/${theSlug}/${image.url}`}
            alt={image.alt}
            // width={600}
            // height={300}
            fill
          />
        );
      }
    },

    code(code) {
      const { language, value } = code;
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          children={value}
        />
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customerRenderers}>
        {post.content}
      </ReactMarkdown>
    </article>
  );
}

export default PostContent;
