import markdownIt from 'markdown-it';

// ==========
// Constants.
// ==========

const markdown = markdownIt({
  breaks: true,
  linkify: true,
});

// ======================
// Open links in new tab.
// ======================

markdown.renderer.rules.link_open = (tokens, index, options, _env, self): string => {
  // Add attributes.
  tokens[index].attrSet('target', '_blank');

  // Expose string.
  return self.renderToken(tokens, index, options);
};

// =====================
// Helper: text to HTML.
// =====================

const textToHtml = (text: string): string => {
  // Cleanup.
  let newText = String(text).trim();

  // Fix double line breaks.
  newText = newText.replace(/\n\n\s+/g, '\n\n');

  // Create mdash, without affecting `<hr>`.
  newText = newText.replace(/(?<!-)(--)(?!-)/g, '&mdash;');

  // Expose string.
  return markdown.render(newText);
};

export { textToHtml };
