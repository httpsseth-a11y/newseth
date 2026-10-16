const navLinks = document.querySelectorAll('.nav-link');
const panels = document.querySelectorAll('.mini-panel');
const homeQuote = document.querySelector('.home-quote');

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const panelId = link.dataset.panel;

    navLinks.forEach((item) => item.classList.remove('active'));

    if (!panelId) {
      panels.forEach((panel) => { panel.hidden = true; });
      homeQuote.hidden = false;
      link.classList.add('active');
      return;
    }

    event.preventDefault();
    const panel = document.getElementById(panelId);
    const shouldOpen = panel.hidden;

    panels.forEach((item) => { item.hidden = true; });
    if (shouldOpen) {
      panel.hidden = false;
      homeQuote.hidden = true;
      link.classList.add('active');
    } else {
      homeQuote.hidden = false;
    }
  });
});
