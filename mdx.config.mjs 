import rehypePrettyCode from 'rehype-pretty-code';

/** @type {import('rehype-pretty-code').Options} */
const rehypePrettyCodeOptions = {
  theme: 'github-dark',
  keepBackground: true,
  defaultLang: 'plaintext',
};

const mdxConfig = {
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
  },
};

export default mdxConfig;