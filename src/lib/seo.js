import { siteConfig } from "./site";

const defaultOgImage = "/images/banner.png";

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image = defaultOgImage,
  type = "website",
  noIndex = false,
  publishedTime,
  authors,
}) {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
  const desc = description || siteConfig.description;
  const url = `${siteConfig.url}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${siteConfig.url}${image}`;
  const allKeywords = [...siteConfig.keywords, ...keywords].join(", ");

  return {
    title: fullTitle,
    description: desc,
    keywords: allKeywords,
    authors: authors || [{ name: siteConfig.author }],
    creator: siteConfig.author,
    publisher: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
      languages: {
        "fa-IR": url,
      },
    },
    icons: {
      icon: "/images/logo-dark.png",
      apple: "/images/logo-dark.png",
    },
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      ...(publishedTime && { publishedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: [imageUrl],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  };
}

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: siteConfig.name,
    alternateName: siteConfig.nameEn,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.region,
      addressCountry: "IR",
      streetAddress: siteConfig.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    sameAs: Object.values(siteConfig.social),
    founder: {
      "@type": "Person",
      name: siteConfig.author,
      alternateName: siteConfig.authorEn,
      jobTitle: siteConfig.authorTitle,
    },
  };
}

export function buildPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author,
    alternateName: siteConfig.authorEn,
    jobTitle: siteConfig.authorTitle,
    url: `${siteConfig.url}/aboutus`,
    knowsAbout: [
      "Fitness",
      "Personal Training",
      "TRX",
      "Sports Nutrition",
      "Bodybuilding",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.region,
      addressCountry: "IR",
    },
    sameAs: Object.values(siteConfig.social),
    worksFor: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };
}

export function buildArticleJsonLd(blog) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.desc,
    author: {
      "@type": "Person",
      name: blog.author || siteConfig.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/logo-dark.png`,
      },
    },
    datePublished: blog.dateISO || blog.date,
    image: blog.imagePath
      ? `${siteConfig.url}${blog.imagePath}`
      : `${siteConfig.url}/images/trainer.jpg`,
    mainEntityOfPage: `${siteConfig.url}/blogs/${blog.id}`,
  };
}

export function buildBreadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}
