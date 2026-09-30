// Filter chips for lists (thesis topics, publications).
// Markup: a [data-filter] container with <button data-value="..."> chips,
// and items with data-tags="a b" inside the element named by data-filter.
// Sections marked [data-filter-section] hide when none of their items match.
document$.subscribe(function () {
  document.querySelectorAll("[data-filter]").forEach(function (bar) {
    const scope = document.querySelector(bar.dataset.filter);
    if (!scope || bar.dataset.ready) return;
    bar.dataset.ready = "1";
    const chips = bar.querySelectorAll("button[data-value]");
    const items = scope.querySelectorAll("[data-tags]");
    const sections = scope.querySelectorAll("[data-filter-section]");
    const count = bar.querySelector("[data-filter-count]");

    function apply(value) {
      let shown = 0;
      items.forEach(function (item) {
        const match = value === "all" || item.dataset.tags.split(" ").includes(value);
        item.hidden = !match;
        if (match) shown++;
      });
      sections.forEach(function (section) {
        section.hidden = !section.querySelector("[data-tags]:not([hidden])");
      });
      chips.forEach(function (chip) {
        chip.setAttribute("aria-pressed", String(chip.dataset.value === value));
      });
      if (count) count.textContent = shown + (shown === 1 ? " item" : " items");
    }

    chips.forEach(function (chip) {
      chip.addEventListener("click", function () { apply(chip.dataset.value); });
    });
    apply("all");
  });
});


// Copy buttons: data-copy="text" or data-copy-from="#element".
document$.subscribe(function () {
  document.querySelectorAll(".ev-copy").forEach(function (btn) {
    if (btn.dataset.ready) return;
    btn.dataset.ready = "1";
    btn.addEventListener("click", function () {
      const source = btn.dataset.copyFrom && document.querySelector(btn.dataset.copyFrom);
      const text = source ? source.textContent.trim() : btn.dataset.copy;
      navigator.clipboard.writeText(text).then(function () {
        const label = btn.textContent;
        btn.textContent = "Copied";
        btn.classList.add("is-copied");
        setTimeout(function () {
          btn.textContent = label;
          btn.classList.remove("is-copied");
        }, 1600);
      });
    });
  });
});

// Research directions: the cards select which direction's questions are shown.
// Without JavaScript every direction stays visible and the cards are jump links.
document$.subscribe(function () {
  const cards = document.querySelectorAll("[data-dir]");
  const panels = document.querySelectorAll("[data-dir-panel]");
  if (!cards.length || !panels.length) return;

  function show(id, updateUrl) {
    let found = false;
    panels.forEach(function (panel) {
      const match = panel.dataset.dirPanel === id;
      panel.hidden = !match;
      if (match) found = true;
    });
    if (!found) return show(cards[0].dataset.dir, false);
    cards.forEach(function (card) {
      const active = card.dataset.dir === id;
      card.classList.toggle("is-active", active);
      if (active) card.setAttribute("aria-current", "true");
      else card.removeAttribute("aria-current");
    });
    if (updateUrl) history.replaceState(null, "", "#" + id);
  }

  cards.forEach(function (card) {
    card.addEventListener("click", function (event) {
      event.preventDefault();
      show(card.dataset.dir, true);
    });
  });
  show(location.hash.slice(1) || cards[0].dataset.dir, false);
  window.onhashchange = function () {
    if (location.hash) show(location.hash.slice(1), false);
  };
});
