/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { memo } from "react";

import { Link } from "../link/Link";

interface EditProps {
  readonly href: string;
}

export const Edit = memo<EditProps>(({ href }) => (
  <Link
    href={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/zagrodzki.me/tree/main/content${href}.mdx`}
  >
    Edit on Github
  </Link>
));

Edit.displayName = "Edit";
