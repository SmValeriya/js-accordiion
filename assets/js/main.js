const accordion = document.querySelector(".accordion");

accordion.addEventListener("click", (e) => {
  const panel = e.target.closest(".accordion__item");
  if (!panel || !accordion.contains(panel)) return;

  const current = accordion.querySelector(".accordion__item.active");

  if (current !== panel && current) {
    togglePanelActivity(current);
  }

  togglePanelActivity(panel);
})

function togglePanelActivity(panel) {
  const btn = panel.querySelector(".accordion__btn");
  const contentId = btn.getAttribute('aria-controls');
  const contentEl = document.getElementById(contentId);

  panel.classList.toggle("active");
  contentEl.style.height = panel.classList.contains('active')
    ? `${contentEl.scrollHeight}px` : "";

  toggleARIA(btn, 'aria-expanded');
  toggleARIA(contentEl, 'aria-hidden');
}

function toggleARIA(element, attributeName) {
  const currentValue = element.getAttribute(attributeName);
  element.setAttribute(attributeName, !currentValue);
}