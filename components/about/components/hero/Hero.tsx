import Image from "next/image";

import { Link } from "components/mdx/link/Link";
import Me from "public/img/idham.jpeg";

import styles from "./hero.module.scss";

export const Hero = () => (
  <section className={styles.hero}>
    <div className={styles.text}>
      <h2 className={styles.title}>Hi, I&#39;m Idham &nbsp;👋</h2>
      <p className={styles.description}>
        <span className={styles.paragraph}>
          I&#39;m a 25 year old software engineer based in Malaysia . I&#39;m passionate about
          building modern software that helps others (including me) to improve their lives.
        </span>
        <span className={styles.paragraph}>
          I&#39;m working as a Intermidiate Front End Developer at Xamble Group Limited (formerly
          known as Netccentric Limited) is a thriving digital ecosystem that is listed on the
          Australian Securities Exchange (ASX:XGL){" "}
          <Link href="https://www.xamble.com/">xamble.com</Link>, so if you want to hire me, check
          the sections below. I&#39;m always open to innovative ideas and solutions, so I think
          we&#39;re gonna get along. 😎
        </span>
        <span className={styles.paragraph}>
          I love talking to interesting people, in my free time I also like to just read or play a
          game of chess. I love swimming too. 💪
        </span>
        <span className={styles.paragraph}>
          Sounds interesting? Feel free to <Link href="/contact">contact me!</Link>
        </span>
      </p>
    </div>

    <div className={styles.image}>
      <Image src={Me} width="400" height="586" alt="" />
    </div>
  </section>
);
