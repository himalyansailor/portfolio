import { SITE_URL } from "@/config/seo";

export const dynamic = "force-static";

/** One-page site: a single URL. Section anchors (#work etc.) aren't separate pages. */
export default function sitemap() {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
