module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_INIT_URL,
  deploymentType: process.env.NEXT_PUBLIC_ENV,
  apiBaseUrl: process.env.API_URL,
  imgBaseUrl: process.env.IMG_URI,
  publicationName: "KhabarGaon",

  // Analytics Configuration
  GoogleTagManager: "GTM-WTGQ8LH5",
  GoogleAnalyticsId: "G-SNC5Y96E13",
  GoogleDomainVerificationCode: "BSTZwSooqy0Zr61dxeEx_nvfGDOVBDm7jMz90BHmN1g",
  FacebookPixelCode: "496184356142201",
  TwitterAdsPixel: "DEFAULT", // Set to actual Twitter Pixel ID or "DEFAULT" to skip
  FacebookPageId: "DEFAULT", // Set to actual FB Page ID or "DEFAULT" to skip
  FacebookDomainVerification: "DEFAULT", // Set to actual code or "DEFAULT" to skip
  GoogleAdsensePubId: "DEFAULT", // Set to actual AdSense ID or "DEFAULT" to skip

  // Event Configuration
  FbeventspageView: "PageView",
  TwitterCode: "twq",

  publicationLanguage: "hi",
  OgLocale: "hi_IN",

  feeds: [
    {
      type: "rss-category",
      path: "/category/:id/feed",
      endpoint: "/api/seo/feeds/rss/category-feed.xml?id=:id",
    },
    {
      type: "rss-section",
      path: "/home/:location/feed",
      endpoint: "/api/seo/feeds/rss/section-feed.xml?location=:location",
    },
    {
      type: "google-news",
      path: "/google-news.xml",
      endpoint: "/api/seo/google-news/newssitemap.xml",
    },
  ],

  sitemaps: [
    {
      type: "section",
      path: "/home/:location/sitemap.xml",
      endpoint: "/api/seo/sitemaps/section-sitemap.xml?location=:location",
    },
    {
      type: "category-news",
      path: "/:slug/news/sitemap.xml",
      endpoint: "/api/seo/sitemaps/category-news.xml?slug=:slug",
    },
    {
      type: "category-index",
      path: "/category-sitemap.xml",
      endpoint: "/api/seo/sitemaps/category-sitemap.xml",
    },
  ],
};
