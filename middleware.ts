import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  defaultLocale: "hr",
  // A list of all locales that are supported
  localePrefix: "always",
  locales: ["hr", "en"],
  // Used when no locale matches
  pathnames: {
    // If all locales use the same pathname, a single
    // external path can be used for all locales.
    "/": "/",
    "/blog": "/blog",

    // If locales use different paths, you can
    // specify each external path per locale.
    "/o-nama": {
      hr: "/o-nama",
      en: "/about",
    },
    "/kontakt": {
      hr: "/kontakt",
      en: "/contact",
    },
    "/pravne-usluge": {
      hr: "/pravne-usluge",
      en: "/legal-services",
    },
    "/nas-tim": {
      hr: "/nas-tim",
      en: "/our-team",
    },
  },
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(hr|en)/:path*"],
};
