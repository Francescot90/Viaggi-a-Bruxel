/* Bruxelles & Bruges — interazioni */
(function () {
  'use strict';

  /* Salva il sito sul telefono: dopo la prima apertura funziona anche offline */
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js').catch(function () {});
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.body.classList.add('loaded');

    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var days = Array.prototype.slice.call(document.querySelectorAll('.day'));

    /* Comparsa progressiva delle giornate */
    if (days.length) {
      if (reduce || !('IntersectionObserver' in window)) {
        days.forEach(function (d) { d.classList.add('is-in'); });
      } else {
        var io = new IntersectionObserver(function (entries) {
          entries.forEach(function (e) {
            if (e.isIntersecting) {
              e.target.classList.add('is-in');
              io.unobserve(e.target);
            }
          });
        }, { rootMargin: '0px 0px -12% 0px', threshold: 0.15 });
        days.forEach(function (d) { io.observe(d); });
      }
    }

    /* Il filo d'ottone si riempie mentre si scorre */
    var thread = document.querySelector('.thread');
    var fill = document.querySelector('.thread__fill');

    if (thread && fill && !reduce) {
      var ticking = false;

      var draw = function () {
        var r = thread.getBoundingClientRect();
        var anchor = window.innerHeight * 0.62;
        var progress = (anchor - r.top) / r.height;
        if (progress < 0) progress = 0;
        if (progress > 1) progress = 1;
        fill.style.height = (progress * (r.height - 12)) + 'px';
        ticking = false;
      };

      var onScroll = function () {
        if (!ticking) {
          ticking = true;
          window.requestAnimationFrame(draw);
        }
      };

      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll);
      draw();
    } else if (fill) {
      fill.style.height = '100%';
    }

    /* Tasto "Portami lì": apre le indicazioni a piedi del telefono */
    var conMappa = document.querySelectorAll('.stop[data-maps]');
    Array.prototype.forEach.call(conMappa, function (s) {
      var body = s.querySelector('.stop__body');
      if (!body) return;
      var dest = s.getAttribute('data-maps');
      var a = document.createElement('a');
      a.className = 'gobtn';
      a.target = '_blank';
      a.rel = 'noopener';
      a.href = 'https://www.google.com/maps/dir/?api=1&travelmode=walking&destination=' +
               encodeURIComponent(dest);
      a.innerHTML =
        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
        'stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
        '<path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z"/>' +
        '<circle cx="12" cy="10" r="2.6"/></svg>' +
        '<span>Portami lì a piedi<small>si apre Google Maps</small></span>';
      body.appendChild(a);
    });

    /* Una tappa aperta chiude le altre: meno confusione sullo schermo */
    var stops = Array.prototype.slice.call(document.querySelectorAll('.stop'));
    stops.forEach(function (s) {
      s.addEventListener('toggle', function () {
        if (!s.open) return;
        stops.forEach(function (o) { if (o !== s) o.open = false; });
      });
    });
  });
})();
