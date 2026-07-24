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
      svg: '<svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.166-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.786-1.48-1.755-1.653-2.052-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.15-.173.2-.297.3-.495.099-.198.05-.372-.025-.52-.075-.149-.67-1.612-.916-2.212-.242-.579-.487-.5-.67-.51l-.57-.01c-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.693.626.712.226 1.36.194 1.872.118.571-.085 1.758-.72 2.006-1.414.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347zm-5.42 7.242c-4.715 0-8.542-3.826-8.542-8.543 0-4.715 3.827-8.542 8.542-8.542 4.715 0 8.542 3.827 8.542 8.542 0 4.716-3.827 8.543-8.542 8.543zm0-19.973c-6.294 0-11.43 5.136-11.43 11.43 0 6.294 5.136 11.43 11.43 11.43 6.293 0 11.43-5.136 11.43-11.43 0-6.294-5.137-11.43-11.43-11.43z"/></svg>',
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