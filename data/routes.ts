import { RESOURCE_TYPE } from "types";

export const routes = [
  { label: "All", path: "/" },
  { label: "About", path: "/about" },
  // { label: "Blog", path: "/blog" },
  { label: "Projects", path: "/projects" },
] as const;

export const resourceRoutes: Record<RESOURCE_TYPE, string> = {
  [RESOURCE_TYPE.POST]: "/blog",
  [RESOURCE_TYPE.PROJECT]: "/projects",
};
