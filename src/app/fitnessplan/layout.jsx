import { buildMetadata, buildBreadcrumbJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export const metadata = buildMetadata({
  title: "برنامه تمرینی و رژیم غذایی",
  description:
    "دریافت برنامه تمرینی و رژیم غذایی اختصاصی از همراز قاسمی، مربی فیتنس قزوین — بر اساس هدف، سن، قد و وزن شما.",
  path: "/fitnessplan",
  keywords: ["برنامه تمرینی", "رژیم غذایی", "برنامه اختصاصی", "عضله سازی"],
});

export const dynamic = "force-static";

export default function FitnessPlanLayout({ children }) {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "خانه", path: "/" },
          { name: "برنامه تمرینی", path: "/fitnessplan" },
        ])}
      />
      {children}
    </>
  );
}
