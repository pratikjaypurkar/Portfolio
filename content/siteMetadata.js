const siteMetadata = {
  title: 'ByteUprise',
  author: 'ByteUprise Team',
  headerTitle: 'ByteUprise Projects',
  description: 'Innovative Technology and Education Solutions',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'byteuprise.com',
  siteRepo: 'https://github.com/dlarroder/dalelarroder-blog',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.webp',
  socialBanner: '/static/images/twitter-card.png',
  email: 'dlarroder@gmail.com',
  github: 'https://github.com/byteuprise',
  twitter: 'https://twitter.com/byteuprise',
  facebook: 'https://facebook.com/byteuprise',
  linkedin: 'https://www.linkedin.com/byteuprise/',
  spotify: '#',
  steam: '#',
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
