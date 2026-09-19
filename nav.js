/* Navigatie · gedeeld door alle pagina's
   ------------------------------------------------------------------
   Boven 800px staat het menu gewoon in de balk (CSS regelt dat met
   display:contents, de opmaak is dan exact als vroeger). Onder 800px
   vouwt alles achter één knop, zodat de balk altijd één regel blijft:
   woordmerk links, knop rechts. Nooit meer een CTA die half boven de
   links hangt.

   Dit bestand staat bewust in de <head> zonder defer: het zet meteen
   .js-nav op <html>, en pas met die klasse klapt het menu in. Zonder
   JavaScript blijft het menu dus gewoon openstaan en zijn alle links
   bereikbaar. Zou het script met defer laden, dan zag je op de telefoon
   eerst het volledige menu en klapte het daarna weg. */
(function () {
  var doc = document.documentElement;
  doc.className += ' js-nav';

  function start() {
    var knop = document.querySelector('.nav-toggle');
    var menu = document.getElementById('hoofdmenu');
    if (!knop || !menu) return;
    var balk = knop.closest('nav');

    function isOpen() { return knop.getAttribute('aria-expanded') === 'true'; }
    function zet(open) {
      knop.setAttribute('aria-expanded', open ? 'true' : 'false');
      balk.classList.toggle('menu-open', open);
    }

    knop.addEventListener('click', function (e) {
      e.stopPropagation();
      zet(!isOpen());
    });

    // Escape sluit het menu en zet de focus terug op de knop
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isOpen()) { zet(false); knop.focus(); }
    });

    // klikken buiten de balk sluit het menu
    document.addEventListener('click', function (e) {
      if (isOpen() && !balk.contains(e.target)) zet(false);
    });

    // een link volgen sluit het menu (nodig bij ankerlinks op dezelfde pagina)
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) zet(false);
    });

    // draait iemand het scherm of maakt hij het venster breder, dan hoort de
    // knop-stand te verdwijnen; anders blijft .menu-open hangen op desktop
    var breed = window.matchMedia('(min-width: 801px)');
    var opWissel = function () { if (breed.matches) zet(false); };
    if (breed.addEventListener) breed.addEventListener('change', opWissel);
    else if (breed.addListener) breed.addListener(opWissel);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
