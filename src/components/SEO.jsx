import React, { useEffect } from 'react';

const SITE_URL = 'https://fruitvault.netlify.app';
const DEFAULT_IMAGE = `${SITE_URL}/logo.png`;
const DEFAULT_TITLE = 'Fruit Vault | Freeze-Dried & Dehydrated Fruits and Vegetables';
const DEFAULT_DESC =
  'B2B supplier of shelf-stable freeze-dried and dehydrated fruits and vegetables for food manufacturers, wholesalers, bakeries, and commercial kitchens.';

function toAbsoluteUrl(url) {
  if (!url) return SITE_URL;
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  const cleanPath = url.startsWith('/') ? url : `/${url}`;
  return `${SITE_URL}${cleanPath}`;
}

function cleanCanonicalUrl(url) {
  const abs = toAbsoluteUrl(url);
  // Strip query parameters and hash fragments for canonical normalization
  return abs.split('?')[0].split('#')[0];
}

function setMetaTag(attrName, attrValue, content) {
  if (!content) return;
  let element = document.head.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function setCanonicalTag(url) {
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}

export default function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESC,
  canonical,
  ogType = 'website',
  image = DEFAULT_IMAGE,
  imageAlt,
  breadcrumbs,
  schema,
  noindex = false
}) {
  const canonicalUrl = cleanCanonicalUrl(canonical || window.location.pathname);
  const imageUrl = toAbsoluteUrl(image);
  const resolvedAlt = imageAlt || title;

  // Build breadcrumb list schema if provided
  const breadcrumbSchema =
    breadcrumbs && breadcrumbs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbs.map((crumb, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            name: crumb.name,
            item: cleanCanonicalUrl(crumb.url || crumb.path)
          }))
        }
      : null;

  // Assemble all structured data graphs
  const structuredDataList = [];
  if (breadcrumbSchema) {
    structuredDataList.push(breadcrumbSchema);
  }
  if (schema) {
    if (Array.isArray(schema)) {
      structuredDataList.push(...schema);
    } else {
      structuredDataList.push(schema);
    }
  }

  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // 2. Standard Meta Tags
    setMetaTag('name', 'description', description);
    setMetaTag(
      'name',
      'robots',
      noindex
        ? 'noindex, nofollow'
        : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    );

    // 3. Canonical Link
    setCanonicalTag(canonicalUrl);

    // 4. Open Graph Tags
    setMetaTag('property', 'og:site_name', 'Fruit Vault');
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:image', imageUrl);
    setMetaTag('property', 'og:image:secure_url', imageUrl);
    setMetaTag('property', 'og:image:alt', resolvedAlt);

    // 5. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', imageUrl);
    setMetaTag('name', 'twitter:image:alt', resolvedAlt);

    // 6. Dynamic JSON-LD Structured Data in Head
    let scriptTag = document.getElementById('dynamic-seo-schema');
    if (structuredDataList.length > 0) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'dynamic-seo-schema';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(
        structuredDataList.length === 1
          ? structuredDataList[0]
          : { '@context': 'https://schema.org', '@graph': structuredDataList }
      );
    } else if (scriptTag) {
      scriptTag.remove();
    }

    return () => {
      // Clean up dynamic schema on unmount/route change
      const dynamicTag = document.getElementById('dynamic-seo-schema');
      if (dynamicTag) {
        dynamicTag.remove();
      }
    };
  }, [
    title,
    description,
    canonicalUrl,
    ogType,
    imageUrl,
    resolvedAlt,
    noindex,
    JSON.stringify(structuredDataList)
  ]);

  return null;
}
