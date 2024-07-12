import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/tang.jpg"
          alt="A Image Shows Tang"
          width={300}
          height={300}
          priority
        />
      </div>
      <h1>hi, i'm tang Yan</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        Angular or React
      </p>
    </section>
  );
}

export default Hero;
