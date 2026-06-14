import { buildMetadata, buildBreadcrumbJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export const metadata = buildMetadata({
  title: "محاسبه BMI",
  description:
    "محاسبه آنلاین شاخص توده بدنی (BMI)، وزن ایده‌آل و وضعیت سلامتی. ابزار رایگان همراز قاسمی، مربی فیتنس قزوین.",
  path: "/bmi",
  keywords: ["BMI", "شاخص توده بدنی", "وزن ایده‌آل", "محاسبه وزن"],
});

export const dynamic = "force-static";

export default function BmiLayout({ children }) {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "خانه", path: "/" },
          { name: "محاسبه BMI", path: "/bmi" },
        ])}
      />
      {children}
    </>
  );
}
