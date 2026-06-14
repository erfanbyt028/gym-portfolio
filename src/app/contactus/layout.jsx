import { buildMetadata, buildBreadcrumbJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export const metadata = buildMetadata({
  title: "تماس با ما",
  description:
    "برای مشاوره رایگان، ثبت‌نام کلاس‌ها و دریافت برنامه تمرینی با همراز قاسمی، مربی فیتنس قزوین تماس بگیرید.",
  path: "/contactus",
  keywords: ["تماس", "مشاوره رایگان", "ثبت نام", "پشتیبانی"],
});

export const dynamic = "force-static";

export default function ContactLayout({ children }) {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "خانه", path: "/" },
          { name: "تماس با ما", path: "/contactus" },
        ])}
      />
      {children}
    </>
  );
}
