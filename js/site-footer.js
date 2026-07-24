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