/* ===========================================================
   DANIEL PRAJSNAR — PORTFOLIO
   JavaScript jest minimalny i nie wymaga modyfikacji
   przy dodawaniu nowych projektów — karty (.project-card)
   działają samodzielnie dzięki natywnemu tagowi <a>.
   =========================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Kopiowanie adresu e-mail do schowka
  const emailBtn = document.getElementById('email-copy');
  if (emailBtn) {
    emailBtn.addEventListener('click', async () => {
      const email = emailBtn.dataset.email;
      const valueEl = emailBtn.querySelector('.contact__value');
      const originalText = valueEl.textContent;

      try {
        await navigator.clipboard.writeText(email);
        valueEl.textContent = 'Skopiowano!';
        valueEl.classList.add('is-copied');
      } catch (err) {
        valueEl.textContent = email; // fallback, np. brak HTTPS
      }

      setTimeout(() => {
        valueEl.textContent = originalText;
        valueEl.classList.remove('is-copied');
      }, 1800);
    });
  }
  // Rok w stopce — generowany automatycznie
  const rokEl = document.getElementById('rok-stopka');
  if (rokEl) {
    rokEl.textContent = new Date().getFullYear();
  }

});
