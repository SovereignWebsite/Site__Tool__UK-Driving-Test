/* Practice quizzes. No third-party code, no network. Results are kept only in this browser (localStorage) and can be cleared. */
(function () {
  var KEY = 'ukdt-progress-v1';
  document.documentElement.className += ' js';
  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }
  function save(o) { try { localStorage.setItem(KEY, JSON.stringify(o)); return true; } catch (e) { return false; } }

  function finish(form, slug, right, total, blank) {
    var result = form.querySelector('.result');
    var msg = 'You scored ' + right + ' out of ' + total + '.' + (blank ? ' ' + blank + ' not answered.' : '') + ' Read the explanation under each question.';
    var all = load();
    var prev = all[slug] && all[slug].best;
    if (prev === undefined || right > prev) { all[slug] = { best: right, total: total, at: new Date().toISOString().slice(0, 10) }; if (save(all)) msg += ' Saved in this browser as your best for this topic.'; }
    else msg += ' Your best for this topic is ' + prev + ' out of ' + total + '.';
    result.textContent = msg;
    result.focus();
  }
  // One question per screen, with progress, and the rule shown after each answer (used by the Quiz first design).
  function stepper(form) {
    var slug = form.getAttribute('data-quiz');
    var qs = Array.prototype.slice.call(form.querySelectorAll('.q'));
    var actions = form.querySelector('.actions');
    var result = form.querySelector('.result');
    form.classList.add('stepper');
    var prog = document.createElement('p'); prog.className = 'progress'; prog.setAttribute('aria-live', 'polite');
    form.insertBefore(prog, form.firstChild);
    var check = document.createElement('button'); check.type = 'button'; check.className = 'btn'; check.textContent = 'Check answer'; check.disabled = true;
    var next = document.createElement('button'); next.type = 'button'; next.className = 'btn'; next.textContent = 'Next question'; next.hidden = true;
    var again = document.createElement('button'); again.type = 'button'; again.className = 'btn alt'; again.textContent = 'Start again'; again.hidden = true;
    actions.innerHTML = ''; actions.appendChild(check); actions.appendChild(next); actions.appendChild(again);
    var i = 0, right = 0, started = false;
    function show() {
      qs.forEach(function (q, n) { q.classList.toggle('cur', n === i); });
      prog.innerHTML = 'Question ' + (i + 1) + ' of ' + qs.length + '<span class="bar2" aria-hidden="true"><i style="width:' + Math.round(100 * i / qs.length) + '%"></i></span>';
      check.hidden = false; check.disabled = !qs[i].querySelector('input:checked'); next.hidden = true;
      var first = qs[i].querySelector('input'); if (first && started) first.focus();
      started = true;
    }
    form.addEventListener('change', function () { if (!qs[i].classList.contains('done')) check.disabled = !qs[i].querySelector('input:checked'); });
    check.addEventListener('click', function () {
      var q = qs[i], picked = q.querySelector('input:checked'); if (!picked) return;
      var ok = Number(picked.value) === Number(q.getAttribute('data-answer'));
      if (ok) right++;
      q.classList.add('done', ok ? 'right' : 'wrong');
      q.querySelector('.vtext').textContent = ok ? 'Correct.' : 'Not quite.';
      Array.prototype.forEach.call(q.querySelectorAll('input'), function (r) { r.disabled = true; });
      check.hidden = true; next.hidden = false;
      next.textContent = i === qs.length - 1 ? 'See my score' : 'Next question';
      next.focus();
    });
    next.addEventListener('click', function () {
      if (i < qs.length - 1) { i++; show(); return; }
      prog.textContent = 'Finished';
      qs.forEach(function (q) { q.classList.remove('cur'); });
      next.hidden = true; again.hidden = false;
      finish(form, slug, right, qs.length, 0);
    });
    again.addEventListener('click', function () {
      qs.forEach(function (q) { q.classList.remove('done', 'right', 'wrong'); Array.prototype.forEach.call(q.querySelectorAll('input'), function (r) { r.disabled = false; r.checked = false; }); });
      i = 0; right = 0; result.textContent = ''; again.hidden = true; show();
    });
    show();
  }

  function setup(form) {
    if (document.body.classList.contains('d-app')) { stepper(form); return; }
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
    var any = Object.keys(all).length > 0;
    Array.prototype.forEach.call(document.querySelectorAll('[data-lit]'), function (el) {
      el.classList.toggle('lit', any);
      var st = document.querySelector('[data-state="practice"]'); if (st) st.textContent = any ? 'Quiz results saved' : 'Not started';
      var host = el.closest('li') || el; var old = host.querySelector('.sr'); if (old) old.remove();
      if (any) { var t = document.createElement('span'); t.className = 'sr'; t.textContent = '(you have saved quiz results)'; host.appendChild(t); }
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
