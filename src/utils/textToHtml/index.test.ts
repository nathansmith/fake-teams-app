import { textToHtml } from './';

// ====================
// Describe `fileName`.
// ====================

describe('utils/textToHtml', (): void => {
  // ======================
  // Test default scenario.
  // ======================

  test('handles default scenario', (): void => {
    // Dummy content.
    const str = `
      # Heading 1

      ---

      Mdash -- text

      > Blockquote text

      **Bold text**

      _Italic text_

      [Link text](https://example.com/ 'Title text')

      ![Alt text](/path/to/image.webp 'Title text')

      - UL first item

      1. OL First item
    `;

    // Update.
    document.body.innerHTML = textToHtml(str);

    // Get elements.
    const blockquote = document.querySelector('blockquote > p') as HTMLElement;
    const h1 = document.querySelector('h1') as HTMLElement;
    const hr = document.querySelector('hr') as HTMLElement;
    const pTag = document.querySelector('p') as HTMLElement;
    const pTagEm = document.querySelector('p > em') as HTMLElement;
    const pTagImage = document.querySelector('p > img') as HTMLElement;
    const pTagLink = document.querySelector('p > a') as HTMLElement;
    const pTagStrong = document.querySelector('p > strong') as HTMLElement;
    const olItem = document.querySelector('ol > li') as HTMLElement;
    const ulItem = document.querySelector('ul > li') as HTMLElement;

    // Test assertions.
    expect(hr).toBeTruthy();

    expect(pTagImage.getAttribute('alt')).toBe('Alt text');
    expect(pTagImage.getAttribute('src')).toBe('/path/to/image.webp');
    expect(pTagImage.getAttribute('title')).toBe('Title text');

    expect(pTagLink.textContent).toBe('Link text');
    expect(pTagLink.getAttribute('href')).toBe('https://example.com/');
    expect(pTagLink.getAttribute('title')).toBe('Title text');

    expect(blockquote.textContent).toBe('Blockquote text');
    expect(h1.textContent).toBe('Heading 1');
    expect(pTag.textContent).toBe('Mdash — text');
    expect(pTagEm.textContent).toBe('Italic text');
    expect(pTagStrong.textContent).toBe('Bold text');
    expect(olItem.textContent).toBe('OL First item');
    expect(ulItem.textContent).toBe('UL first item');
  });
});
