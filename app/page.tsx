import { Grid } from "components/common/grid/Grid";
import { ProjectTile } from "components/projects/tile/ProjectTile";
import { AboutTile } from "components/tile/about/AboutTile";
import { LatestPostTile } from "components/tile/latestPost/LatestPostTile";
import { NewsletterTile } from "components/tile/newsletter/NewsletterTile";
import { SocialTile } from "components/tile/social/SocialTile";
import { ThemeTile } from "components/tile/theme/ThemeTile";
import { getNewestPosts } from "lib/posts";
import { getBestProjects } from "lib/projects";
import { ResumeTile } from "components/tile/resume/Resume";

const Home = () => {
  const [firstProject, secondProject] = getBestProjects();
  const [post] = getNewestPosts();

  if (!firstProject || !secondProject || !post) {
    return null;
  }

  return (
    <Grid>
      <ResumeTile social="resume" />
      <AboutTile />
      <SocialTile social="whatsapp" />
      <ProjectTile project={firstProject} mockupPosition="right" />
      <ThemeTile />
      <LatestPostTile post={post} />
      <ProjectTile project={secondProject} mockupPosition="left" />
      <SocialTile social="github" />
      <SocialTile social="linkedin" />
      <NewsletterTile />
    </Grid>
  );
};

export default Home;
