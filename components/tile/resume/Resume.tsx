"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { memo } from "react";

import Arrow from "public/svg/right-top-arrow.svg";
import { SOCIALS } from "utils/consts";

import styles from "./socialTile.module.scss";

interface ResumeTileProps {
  readonly social: (typeof SOCIALS)[number]["name"];
}

const iconVariants = {
  hover: { scale: 1.05 },
};

export const ResumeTile = memo<ResumeTileProps>(({ social }) => {
  const selectedSocial = SOCIALS.find(({ name }) => name === social);

  if (!selectedSocial) return null;

  const Icon = dynamic(() => import(`public/svg/${selectedSocial.name}.svg`));

  const handleDownloadPDF = () => {
    // Replace 'your-pdf-file.pdf' with the actual URL or file path of your PDF.
    const pdfFilePath = "/resume.pdf";

    // Create an invisible anchor element and trigger a click event to download the PDF.
    const anchor = document.createElement("a");
    anchor.href = pdfFilePath;
    anchor.download = "idham_resume.pdf"; // Set the desired filename for the downloaded file.
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  return (
    <motion.a
      onClick={handleDownloadPDF}
      className={styles.tile}
      style={{ backgroundColor: selectedSocial.color }}
      target="_blank"
      rel="noreferrer"
      whileHover="hover"
      role="button" // Add role="button" for accessibility
    >
      <span className="sr-only">Download my {social} resume</span>
      <motion.div
        className={styles.icon}
        variants={iconVariants}
        initial={{ x: "-50%", y: "-50%" }}
      >
        <Icon />
      </motion.div>
      <div className={styles.arrow}>
        <Arrow />
      </div>
    </motion.a>
  );
});

ResumeTile.displayName = "ResumeTile";
