// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/auth/:path*',
        destination: 'https://onboarding-dev-api.synexis.io/auth/:path*',
      },
      {
        source: '/api/onboarding/:path*',
        destination: 'https://onboarding-dev-api.synexis.io/onboarding/:path*',
      },
      {
        source: '/api/dicts/:path*',
        destination: 'https://onboarding-dev-api.synexis.io/dicts/:path*',
      },
      {
        source: '/api/analytics/:path*',
        destination: 'https://onboarding-dev-api.synexis.io/analytics/:path*',
      },
    ];
  },
};
