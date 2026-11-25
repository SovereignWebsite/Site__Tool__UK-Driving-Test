/* Practice quizzes. No third-party code, no network. Results are kept only in this browser (localStorage) and can be cleared. */
(function () {
  var KEY = 'ukdt-progress-v1';
  document.documentElement.className += ' js';
  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }
  function save(o) { try { localStorage.setItem(KEY, JSON.stringify(o)); return true; } catch (e) { return false; } }

  function setup(form) {
    var slug = form.getAttribute('data-quiz');
    var qs = Array.prototype.slice.call(form.querySelectorAll('.q'));
    var result = form.querySelector('.result');
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var right = 0, blank = 0;
      qs.forEach(function (q) {
        var picked = q.querySelector('input:checked');
        var ok = picked && Number(picked.value) === Number(q.getAttribute('data-answer'));
        q.classList.remove('right', 'wrong', 'blank');
        var vt = q.querySelector('.vtext');
        if (ok) { right++; q.classList.add('right'); vt.textContent = 'Correct.'; }
        else if (!picked) { blank++; q.classList.add('wrong', 'blank'); vt.textContent = 'Not answered.'; }
        else { q.classList.add('wrong'); vt.textContent = 'Not quite.'; }
      });
      form.classList.add('checked');
      var total = qs.length;
      var msg = 'You scored ' + right + ' out of ' + total + '.' + (blank ? ' ' + blank + ' not answered.' : '') + ' Read the explanation under each question.';
      var all = load();
      var prev = all[slug] && all[slug].best;
      if (prev === undefined || right > prev) { all[slug] = { best: right, total: total, at: new Date().toISOString().slice(0, 10) }; if (save(all)) msg += ' Saved in this browser as your best for this topic.'; }
      else msg += ' Your best for this topic is ' + prev + ' out of ' + total + '.';
      result.textContent = msg;
      result.focus();
    });
    form.addEventListener('reset', function () {
      form.classList.remove('checked');
      qs.forEach(function (q) { q.classList.remove('right', 'wrong', 'blank'); });
      result.textContent = '';
    });
  }
  function showBest() {
    var all = load();
    Array.prototype.forEach.call(document.querySelectorAll('[data-best]'), function (el) {
      var r = all[el.getAttribute('data-best')];
      el.textContent = r ? '(best: ' + r.best + ' of ' + r.total + ')' : '';
    });
  }
  function init() {
    Array.prototype.forEach.call(document.querySelectorAll('form.quiz'), setup);
    showBest();
    Array.prototype.forEach.call(document.querySelectorAll('[data-clear]'), function (b) {
      b.addEventListener('click', function () {
        try { localStorage.removeItem(KEY); } catch (e) {}
        showBest();
        var s = document.querySelector('.cleared'); if (s) s.textContent = 'Saved results cleared from this browser.';
      });
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
