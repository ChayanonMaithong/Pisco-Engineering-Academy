// Prefix root-relative links ("/foo/") in Markdown/MDX content with Astro's `base`
// so the site works when deployed under a sub-path such as GitHub Pages project sites.
import { visit } from 'unist-util-visit';

export default function rehypeBaseLinks({ base = '/' } = {}) {
  const prefix = base.replace(/\/$/, '');
  const fix = (href) =>
    typeof href === 'string' && prefix && href.startsWith('/') && !href.startsWith('//') && !href.startsWith(prefix + '/')
      ? prefix + href
      : href;
  return (tree) => {
    visit(tree, (node) => {
      if (node.type === 'element' && node.tagName === 'a' && node.properties) {
        node.properties.href = fix(node.properties.href);
      }
      if ((node.type === 'mdxJsxFlowElement' || node.type === 'mdxJsxTextElement') && Array.isArray(node.attributes)) {
        for (const attr of node.attributes) {
          if (attr.type === 'mdxJsxAttribute' && attr.name === 'href') attr.value = fix(attr.value);
        }
      }
    });
  };
}
