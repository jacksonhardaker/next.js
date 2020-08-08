# Example app with Skip Links

To improve the accessibility of your site, [Skip Links](https://a11y-101.com/development/skip-link) can provide a keyboard user a convenient way to navigate to specific locations within the document.

This example features:

- An app with two pages, one with default skip links, and one with page specific skip links
- Context API provider which gives the ability to conveniently register a skip location
- Example styling

## Deploy your own

Deploy the example using [Vercel](https://vercel.com/now):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/vercel/next.js/tree/canary/examples/with-skip-links)

## How to use

### Using `create-next-app`

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-skip-links with-skip-links-app
# or
yarn create next-app --example with-skip-links with-skip-links-app
```

### Download manually

Download the example:

```bash
curl https://codeload.github.com/vercel/next.js/tar.gz/canary | tar -xz --strip=2 next.js-canary/examples/with-skip-links
cd with-skip-links
```

Install it and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

Deploy it to the cloud with [Vercel](https://vercel.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
