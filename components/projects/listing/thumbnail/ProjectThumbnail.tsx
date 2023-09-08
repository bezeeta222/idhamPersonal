// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import { memo } from "react";

// import { Skeleton } from "components/common/skeleton/Skeleton";
// import styles from "./projectThumbnail.module.scss";

// const imageVariants = {
//   hover: {
//     scale: 1.05,
//   },
// };

// // Define an array of static project data
// const staticProjects = [
//   {
//     slug: "project-1",
//     title: "Project 1",
//     excerpt: "This is the first project.",
//     stack: ["React", "Node.js", "MongoDB"],
//     image: "/path/to/project1.jpg",
//   },
//   {
//     slug: "project-2",
//     title: "Project 2",
//     excerpt: "This is the second project.",
//     stack: ["Vue.js", "Express.js", "MySQL"],
//     image: "/path/to/project2.jpg",
//   },
//   // Add more projects as needed
// ];

// export const ProjectThumbnail = memo(() => (
//   <Link href={`/projects/${project.slug}`}>
//     {staticProjects.map((project) => (
//       <motion.article className={styles.thumbnail} whileHover="hover" layout key={project.slug}>
//         <motion.div
//           className={styles.image}
//           variants={imageVariants}
//           layoutId={`image-container-${project.slug}`}
//           key="thumbnail"
//         >
//           <Image
//             src={project.image}
//             alt={project.title}
//             width={1200}
//             height={880}
//             placeholder="blur"
//             {...(blurredImage && { blurDataURL: blurredImage })}
//           />
//         </motion.div>
//         <div className={styles.content}>
//           <motion.h2 className={styles.title} layoutId={`title-container-${project.slug}`}>
//             {project.title}
//           </motion.h2>
//           <motion.p className={styles.excerpt} layoutId={`excerpt-container-${project.slug}`}>
//             {project.excerpt}
//           </motion.p>
//           <motion.div className={styles.stack} layoutId={`stack-container-${project.slug}`}>
//             {project.stack.map((tech) => (
//               <div className={styles.tech} key={tech}>
//                 {tech}
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </motion.article>
//     ))}
//   </Link>
// ));

// export const ProjectThumbnailSkeleton = () => (
//   <div className={styles.thumbnail}>
//     <div className={styles.image}>
//       <Skeleton h={32} />
//     </div>
//     <div className={styles.content}>
//       <div className={styles.title}>
//         <Skeleton h={4} w={15} />
//       </div>
//       <div className={styles.title}>
//         <Skeleton h={2} w={37} />
//       </div>
//       <div className={styles.excerpt}>
//         <Skeleton h={2} w={22} />
//       </div>
//       <div className={styles.stack}>
//         {Array(5)
//           .fill(null)
//           .map((_, i) => (
//             <Skeleton h={2.5} w={5} key={i} />
//           ))}
//       </div>
//     </div>
//   </div>
// );

// ProjectThumbnail.displayName = "ProjectThumbnail";
