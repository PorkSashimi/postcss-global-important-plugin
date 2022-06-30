import type { Rule, PluginCreator } from 'postcss';

function ruleHandler(rule: Rule) {
  rule.nodes.forEach((node) => {
    if (node.type === 'decl') {
      node.important = true;
    }
    if (node.type === 'rule') {
      ruleHandler(node);
    }
  })
}

const plugin: PluginCreator<any> = () => {
  return {
    Root: (root) => {
      root.walkRules(/:global/, ruleHandler);
    },
    postcssPlugin: 'postcss-global-important-plugin'
  }
}

plugin.postcss = true;

export default plugin;