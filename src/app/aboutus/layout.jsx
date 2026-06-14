import { buildMetadata, buildPersonJsonLd, buildBreadcrumbJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export const metadata = buildMetadata({
  title: "درباره مربی",
  description:
    "آشنایی با همراز قاسمی (Hamraz Ghasemi)، مربی حرفه‌ای TRX و فیتنس در قزوین با بیش از ۱۲ سال تجربه، مدارک بین‌المللی و هزاران شاگرد موفق.",
  path: "/aboutus",
  keywords: ["همراز قاسمی", "مربی فیتنس قزوین", "مربی TRX", "Hamraz Ghasemi"],
  image: "/images/coach.png",
});

// SSG: صفحه درباره ما استاتیک ساخته می‌شود
export const dynamic = "force-static";

export default function AboutLayout({ children }) {
  return (
    <>
      <JsonLd data={buildPersonJsonLd()} />
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "خانه", path: "/" },
          { name: "درباره ما", path: "/aboutus" },
        ])}
      />
      {children}
    </>
  );
}
