import { SITE_URL } from "@/config/seo";

export const dynamic = "force-static";

/** The portfolio and the printable résumé. Section anchors (#work etc.) aren't separate pages. */
export default function sitemap() {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/resume`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
