const $ = s => document.querySelector(s);
const mb = $('.mb');
mb && mb.addEventListener('click', () => { const o = mb.getAttribute('aria-expanded') === 'true'; mb.setAttribute('aria-expanded', String(!o)); $('#nv').classList.toggle('open'); });
document.querySelectorAll('.f button').forEach(b => b.addEventListener('click', () => {
  document.querySelectorAll('.f button').forEach(x => x.setAttribute('aria-pressed', String(x === b)));
  document.querySelectorAll('.card').forEach(c => { c.hidden = b.dataset.c !== 'all' && c.dataset.cat !== b.dataset.c; });
}));
const r = $('#res');
if (r) {
  const q = (new URLSearchParams(location.search).get('q') || '').toLowerCase().trim();
  $('.sf input').value = q;
  fetch('/search-index.json').then(x => x.json()).then(d => {
    const t = q.split(/\s+/).filter(Boolean);
    const m = t.length ? d.filter(a => t.every(w => (a.title + ' ' + a.desc + ' ' + a.text).toLowerCase().includes(w))) : [];
    r.innerHTML = m.length ? m.map(a => `<li><a href="${a.url}">${a.title}</a><p>${a.desc}</p></li>`).join('') : '<li>No results. Try a different word.</li>';
  });
}
const cf = $('#cf');
cf && cf.addEventListener('submit', e => { e.preventDefault(); const f = new FormData(cf); location.href = 'mailto:' + cf.dataset.to + '?subject=' + encodeURIComponent(f.get('s')) + '&body=' + encodeURIComponent(f.get('m') + '\n\nFrom: ' + f.get('n')); });
