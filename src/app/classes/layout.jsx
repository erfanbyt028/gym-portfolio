import { buildMetadata, buildBreadcrumbJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export const metadata = buildMetadata({
  title: "کلاس‌های ورزشی",
  description:
    "کلاس‌های حرفه‌ای کراس‌فیت، TRX، بدنسازی، چربی‌سوزی HIIT و فیتنس بانوان با همراز قاسمی، مربی فیتنس قزوین.",
  path: "/classes",
  keywords: ["کلاس ورزشی", "کراس فیت", "زومبا", "بدنسازی", "HIIT"],
  image: "/images/facility.jpg",
});

export const dynamic = "force-static";

export default function ClassesLayout({ children }) {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "خانه", path: "/" },
          { name: "کلاس‌ها", path: "/classes" },
        ])}
      />
      {children}
    </>
  );
}
