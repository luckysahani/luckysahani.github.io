/** Ways to reach me — shared by the footer and the homepage intro. */
export interface ContactLink {
  label: string;
  href: string;
  rel?: string;
}

export const contact: ContactLink[] = [
  { label: 'Email', href: 'mailto:luckythegreat4@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/luckysahani', rel: 'me noopener' },
  { label: 'GitHub', href: 'https://github.com/luckysahani', rel: 'me noopener' },
];
