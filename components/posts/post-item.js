import Link from "next/link";
import classes from "./post-item.module.css";
import Image from "next/image";

function PostItem(props) {
  const { title, date, excerpt, image, slug } = props.post;
  const formatedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <li className={classes.post}>
      <Link legacyBehavior href={`/posts/${slug}`}>
        <a>
          <div className={classes.image}>
            <Image
              src={`/images/posts/${slug}/${image}`}
              alt="title"
              width={300}
              height={200}
              responsive="true"
            />
          </div>
          <div className={classes.content}>
            <h1>{title}</h1>
            <time>{formatedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default PostItem;
