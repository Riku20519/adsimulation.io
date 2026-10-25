const openAd = (id) => {
  const el = document.getElementById(id);
  el.classList.add('open');
  el.setAttribute('aria-hidden', 'false');
};

const closeAd = (el) => {
  el.classList.remove('open');
  el.setAttribute('aria-hidden', 'true');
};

// ボタン → 広告を開く
document.querySelectorAll('.btn').forEach((btn) => {
  btn.addEventListener('click', () => openAd(btn.dataset.ad));
});

// ×ボタン → 閉じる
document.querySelectorAll('.overlay .close').forEach((x) => {
  x.addEventListener('click', () => closeAd(x.closest('.overlay')));
});

// Escキーでも閉じられる
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.overlay.open').forEach(closeAd);
  }
});
