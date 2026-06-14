import Ability from "@/components/Ability";
import AboutUs from "@/components/AboutUs";
import BlogSection from "@/components/BlogSection";
import Hero from "@/components/Hero";
import JoinUs from "@/components/JoinUs";
import Services from "@/components/Services";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "خانه",
  description:
    "همراز قاسمی، مربی فیتنس قزوین — برنامه تمرینی اختصاصی، تغذیه تخصصی، کلاس‌های ورزشی و مشاوره آنلاین.",
  path: "/",
  keywords: ["صفحه اصلی", "مربی فیتنس قزوین", "همراز قاسمی"],
});

// ISR: محتوای صفحه اصلی هر ساعت بازتولید می‌شود
export const revalidate = 3600;

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <Ability />
      <BlogSection />
      <JoinUs />
    </>
  );
}
