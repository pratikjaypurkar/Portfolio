const siteMetadata = {
  title: 'ByteUprise',
  author: 'ByteUprise Team',
  headerTitle: 'ByteUprise Portfolio',
  description: 'Innovative Technology and Education Solutions',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://byteuprise.com',
  siteRepo: 'https://github.com/ByteUprise',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.webp',
  socialBanner: '/static/images/twitter-card.png',
  email: 'info@byteuprise.com',
  github: 'https://github.com/ByteUprise',
  twitter: 'https://twitter.com/ByteUprise',
  facebook: 'https://facebook.com/ByteUprise',
  linkedin: 'https://www.linkedin.com/company/byteuprise/',
  locale: 'en-US',
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO || '',
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID || '',
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || '',
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || '',
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
    },
  },
};

module.exports = siteMetadata;
