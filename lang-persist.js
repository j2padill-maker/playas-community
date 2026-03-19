// ── lang-persist.js ──────────────────────────────────────────────────────────
// Drop this script on any page in the site. It reads the language preference
// saved by the main index.html language-system.js (stored in localStorage as
// 'preferredLang', value 'es' or 'en') and applies it immediately on load.
//
// HOW TO USE ON SUB-PAGES:
//   1. Add this script to the page (before </body>):
//        <script src="lang-persist.js"></script>
//
//   2. Add a language toggle button anywhere (optional — shows current lang):
//        <button id="lang-toggle-btn" onclick="toggleLanguage()"></button>
//
//   3. On any element you want translated, add both attributes:
//        data-es="Texto en español"  data-en="Text in English"
//
//      Examples:
//        <h1 data-es="Servicios Legales" data-en="Legal Services">Legal Services</h1>
//        <p data-es="Abogados de confianza..." data-en="Trusted lawyers...">...</p>
//        <button data-es="Enviar" data-en="Submit">Submit</button>
//        <input data-ph-es="tu nombre" data-ph-en="your name" placeholder="your name">
//
//   4. For nav "← Back" links, add data attributes too:
//        <a href="services.html" data-es="← Servicios" data-en="← Services">← Services</a>
//
// That's it. The language choice made on the home page persists here automatically.
// ─────────────────────────────────────────────────────────────────────────────

(function () {
  'use strict';

  // ── Apply a language to the current page ──────────────────────────────────
  function applyLanguage(lang) {
    var isEs = lang === 'es';

    // 1. Translate all elements with data-es / data-en attributes
    document.querySelectorAll('[data-es], [data-en]').forEach(function (el) {
      var text = isEs ? el.getAttribute('data-es') : el.getAttribute('data-en');
      if (text !== null) el.textContent = text;
    });

    // 2. Translate placeholder attributes (data-ph-es / data-ph-en)
    document.querySelectorAll('[data-ph-es], [data-ph-en]').forEach(function (el) {
      var ph = isEs ? el.getAttribute('data-ph-es') : el.getAttribute('data-ph-en');
      if (ph !== null) el.setAttribute('placeholder', ph);
    });

    // 3. Update the language toggle button label (if present)
    var btn = document.getElementById('lang-toggle-btn');
    if (btn) btn.textContent = isEs ? '🌐 English' : '🌐 Español';

    // 4. Sync with the main language-system.js if it is also loaded on this page
    if (typeof translations !== 'undefined' && typeof idMap !== 'undefined') {
      var t = translations[lang];
      if (t) {
        for (var key in idMap) {
          var el = document.getElementById(idMap[key]);
          if (el && t[key] !== undefined) el.textContent = t[key];
        }
      }
    }

    // 5. Save & update html[lang]
    try { localStorage.setItem('preferredLang', lang); } catch (e) {}
    document.documentElement.lang = lang;
  }

  // ── Toggle between es ↔ en ────────────────────────────────────────────────
  window.toggleLanguage = function () {
    var current = 'es';
    try { current = localStorage.getItem('preferredLang') || 'es'; } catch (e) {}
    applyLanguage(current === 'es' ? 'en' : 'es');
  };

  // ── Run on DOMContentLoaded ───────────────────────────────────────────────
  function init() {
    var lang = 'es';
    try { lang = localStorage.getItem('preferredLang') || 'es'; } catch (e) {}
    applyLanguage(lang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init(); // already ready
  }

})();
