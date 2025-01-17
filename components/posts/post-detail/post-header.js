import Image from "next/image";
import classes from "./post-header.module.css";

function PostHeader(props) {
  const { image, title } = props;
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image
        src={image}
        alt={title}
        width={200}
        height={150}
        // layout="responsive"
      />
    </header>
  );
}
export default PostHeader;
