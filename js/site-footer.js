(() => {
  // Single source of truth for social links used in both the homepage hero
  // and the shared footer component.
  const SOCIAL_LINKS = [
    {
      label: 'YouTube',
      href: 'https://www.youtube.com/@akramul_islam',
      svg: '<svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
    },
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/share/17P3bCRKXY/',
      svg: '<svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
    },
    {
      label: 'WhatsApp',
      href: 'https://wa.me/8801311928892',
      svg: '<svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.174.199-.297.299-.495.099-.198.05-.372-.025-.521-.074-.149-.669-1.612-.914-2.207-.241-.579-.486-.501-.669-.51-.173-.008-.37-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.49.709.306 1.262.49 1.694.626.712.226 1.36.194 1.872.118.572-.086 1.758-.719 2.006-1.414.248-.695.248-1.289.173-1.414-.074-.124-.272-.198-.57-.347zM12.003 2C6.486 2 2 6.485 2 12.002c0 2.117.6 4.086 1.64 5.76L2 22l4.343-1.139a9.97 9.97 0 0 0 5.66 1.612c5.517 0 10.002-4.486 10.002-10.003C22.005 6.485 17.52 2 12.003 2zm0 18.01a8.01 8.01 0 0 1-4.06-1.104l-.29-.173-2.574.675.687-2.507-.19-.29A8.025 8.025 0 0 1 3.99 12.002c0-4.43 3.59-8.02 8.013-8.02 4.42 0 8.01 3.59 8.01 8.02 0 4.43-3.59 8.01-8.01 8.01z"/></svg>',
    },
  ];

  function renderSocialLinks() {
    return SOCIAL_LINKS.map(({ href, label, svg }) => (
      `<a href="${href}" class="hs-link" target="_blank" rel="noopener noreferrer" aria-label="${label}">
        ${svg}
      </a>`
    )).join('\n');
  }

  function hydrateSocialLinkGroups(root = document) {
    root.querySelectorAll('[data-social-links]').forEach(container => {
      if (container.dataset.rendered === 'true') return;

      container.innerHTML = renderSocialLinks();
      container.dataset.rendered = 'true';
    });
  }

  function renderFooterComponent() {
    return `
<footer class="site-footer">
  <nav class="footer-social" data-social-links="footer" aria-label="Social media links"></nav>
  <p class="footer-legal">
    <a href="privacy-policy.html" data-i18n="footerPrivacy">Privacy Policy</a>
    <span class="footer-divider" aria-hidden="true">|</span>
    <a href="terms-and-conditions.html" data-i18n="footerTerms">Terms &amp; Conditions</a>
  </p>
  <p class="footer-copy">&copy; ${new Date().getFullYear()} <a href="index.html" class="footer-copy-link" data-i18n="footerName">Dr. Akramul Islam Utpol</a>. <span data-i18n="footerCopyright">All Rights Reserved.</span></p>
  <p class="footer-credit">Website Designed &amp; Developed by <span class="footer-credit-name">ShehZadi Nizhum</span></p>
</footer>`.trim();
  }

  class SiteFooter extends HTMLElement {
    connectedCallback() {
      if (this.dataset.rendered === 'true') return;

      this.style.display = 'contents';
      this.innerHTML = renderFooterComponent();
      hydrateSocialLinkGroups(this);
      this.dataset.rendered = 'true';
    }
  }

  if (!customElements.get('site-footer')) {
    customElements.define('site-footer', SiteFooter);
  }

  hydrateSocialLinkGroups();
})();