import { withGuildDocs } from '@theguild/components/next.config';

export default withGuildDocs({
  output: 'export',
  redirects: () =>
    Object.entries({
      '/docs/2.0/caching': '/v2/caching/configuration',
      '/docs/2.0/data': '/v2/data/queries',
      '/docs/2.0/local-state': '/v2/local-state/management',
      '/docs/2.0/development-and-testing': '/v2/development-and-testing/using-typescript',
      '/docs/2.0/performance': '/v2/performance/improving-performance',
      '/docs/2.0/recipes': '/v2/recipes/simple-example',
      '/docs/2.0/migration': '/v2/migration',
      '/docs/1.0/basics': '/v1/basics/setup',
      '/docs/1.0/features': '/v1/features/error-handling',
      '/docs/1.0/guides': '/v1/guides/state-management',
      '/docs/1.0/recipes': '/v1/recipes/simple-example',

      '/docs/1.0/basics/:slug*': '/v1/basics/:slug',
      '/docs/1.0/features/:slug*': '/v1/features/:slug',
      '/docs/1.0/guides/:slug*': '/v1/guides/:slug',
      '/docs/1.0/recipes/:slug*': '/v1/recipes/:slug',
      '/1.0/basics/:slug*': '/v1/basics/:slug',
      '/1.0/features/:slug*': '/v1/features/:slug',
      '/1.0/guides/:slug*': '/v1/guides/:slug',
      '/1.0/recipes/:slug*': '/v1/recipes/:slug',

      '/docs/2.0/caching/:slug*': '/v2/caching/:slug',
      '/docs/2.0/data/:slug*': '/v2/data/:slug',
      '/docs/2.0/local-state/:slug*': '/v2/local-state/:slug',
      '/docs/2.0/development-and-testing/:slug*': '/v2/development-and-testing/:slug',
      '/docs/2.0/performance/:slug*': '/v2/performance/:slug',
      '/docs/2.0/recipes/:slug*': '/v2/recipes/:slug',
      '/docs/2.0/migration/:slug*': '/v2/migration',
      '/2.0/caching/:slug*': '/v2/caching/:slug',
      '/2.0/data/:slug*': '/v2/data/:slug',
      '/2.0/local-state/:slug*': '/v2/local-state/:slug',
      '/2.0/development-and-testing/:slug*': '/v2/development-and-testing/:slug',
      '/2.0/performance/:slug*': '/v2/performance/:slug',
      '/2.0/recipes/:slug*': '/v2/recipes/:slug',
      '/2.0/migration/:slug*': '/v2/migration',
      '/docs/features/subscriptions.html': '/docs/data/subscriptions',

      '/v1/guides': '/v1/guides/state-management',
      '/v1/features': '/v1/features/error-handling',
      '/v1/basics': '/v1/guides/state-management',
      '/v1/recipes': '/v1/recipes/simple-example',
      '/v2/caching': '/v2/caching/configuration',
      '/v2/data': '/v2/data/queries',
      '/v2/local-state': '/v2/local-state/management',
      '/v2/development-and-testing': '/v2/development-and-testing/using-typescript',
      '/v2/performance': '/v2/performance/improving-performance',
      '/v2/recipes': '/v2/recipes/simple-example',
      '/docs/2.0': '/v2', // Redirect direct to path
      '/docs/1.0': '/v1', // Redirect direct to path
      '/docs/basics/:slug*': '/docs/data/:slug',
      '/docs/1.0/features/cache-updates': '/v1/features/caching',
      '/docs/features/developer-tooling': '/docs/development-and-testing/developer-tools',
      '/docs/features/developer-tooling.html': '/docs/development-and-testing/developer-tools',
      '/docs/features/multiple-clients.html': '/docs/recipes/multiple-clients',
      '/docs/features/optimistic-ui.html': '/docs/performance/optimistic-ui',
      '/docs/recipes/pagination.html': '/docs/data/pagination',
      '/docs/recipes/prefetching.html': '/docs',
      '/docs/recipes/prefetching': '/docs',
      '/docs/recipes/server-side-rendering.html': '/docs/performance/server-side-rendering',
      '/docs/features/static-typing.html': '/docs',
      '/docs/features/caching.html': '/docs',
      '/docs/features/cache-updates': '/docs',
      '/docs/features/subscriptions': '/docs/data/subscriptions',
      '/docs/features/cache-updates.html': '/docs',
      '/docs/features/fragments.html': '/docs/data/fragments',
      '/docs/guides/testing.html': '/docs/development-and-testing/testing',
      '/docs/guides/testing': '/docs/development-and-testing/testing',
      '/docs/recipes': '/docs/recipes/simple-example',
      '/docs/data': '/docs/data/queries',
      '/docs/caching': '/docs/caching/configuration',
      '/docs/local-state': '/docs/local-state/management',
      '/docs/development-and-testing': '/docs/development-and-testing/using-typescript',
      '/docs/performance': '/docs/performance/improving-performance',
      '/docs/features/error-handling': '/docs/data/error-handling',
      '/docs/guides/tools-and-packages': '/docs/development-and-testing/developer-tools',
      '/docs/basics/network-layer': '/docs/data/network',
      '/docs/guides/state-management': '/docs/local-state/management',
      '/docs/basics/caching': '/docs/caching/configuration',
      '/2.0/data/error-handling': '/v2/data/error-handling',
      '/docs/features/optimistic-ui': '/docs/performance/optimistic-ui',
      '/docs/recipes/query-splitting': '/docs/data/queries',
      '/docs/features/static-typing': '/docs',
      '/docs/basics/mutations': '/docs/data/mutations',
      '/docs/recipes/pagination': '/docs/data/pagination',
      '/docs/basics/queries': '/docs/data/queries',
      '/docs/recipes/meteor': '/docs',
      '/docs/recipes/server-side-rendering': '/docs/performance/server-side-rendering',
      '/docs/features/multiple-clients': '/docs/recipes/multiple-clients',
      '/docs/1.0/features/subscriptions': '/v1/features/subscriptions',
      '/docs/features/fragments': '/docs/data/fragments',
      '/get-started': '/docs/get-started',
      '/docs/data/setup#using-dependency-injection': '/docs/data/queries',
      '/docs/data/setup.html#using-dependency-injection': '/docs/data/queries',
      '/docs/data/setup': '/docs/data/queries',
      '/v1/performance/improving-performance': '/docs/performance/improving-performance',
    }).map(([from, to]) => ({
      source: from,
      destination: to,
      permanent: true,
    })),
});
