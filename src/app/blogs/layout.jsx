import { buildMetadata, buildBreadcrumbJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export const metadata = buildMetadata({
  title: "بلاگ و مقالات",
  description:
    "مقالات تخصصی تناسب اندام، تغذیه ورزشی، چربی‌سوزی و عضله‌سازی از همراز قاسمی، مربی فیتنس قزوین.",
  path: "/blogs",
  keywords: ["مقالات فیتنس", "بلاگ ورزشی", "تغذیه", "تمرین"],
});

// ISR: لیست مقالات هر ۳۰ دقیقه به‌روز می‌شود
export const revalidate = 1800;

export default function BlogsLayout({ children }) {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "خانه", path: "/" },
          { name: "بلاگ", path: "/blogs" },
        ])}
      />
      {children}
    </>
  );
}
