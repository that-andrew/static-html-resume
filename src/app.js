(function () {
  const STORAGE_KEY = "theme"; // "light" | "dark"
  const root = document.documentElement;

  const toggleBtn = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");
  const themeModeLabel = document.getElementById("themeModeLabel");
  const themeHint = document.getElementById("themeHint");

  function systemPref() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function savedTheme() {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === "dark" || v === "light" ? v : null;
  }

  function applyTheme(theme, source) {
    const isDark = theme === "dark";
    const isLight = theme === "light";
    const isSystem = source === "system";
    const currentSystemTheme = systemPref();

    if (isSystem) {
      root.setAttribute("data-theme-source", "system");
    } else {
      root.removeAttribute("data-theme-source");
    }

    root.classList.toggle("dark", isDark);
    root.setAttribute("data-theme", isDark ? "dark" : "light");

    if (toggleBtn) {
      toggleBtn.title =
        source === "saved"
          ? isLight
            ? `Click to use dark theme.`
            : `Click to follow system theme (${currentSystemTheme}).`
          : `Click to use ${currentSystemTheme === "dark" ? "light" : "dark"} theme.`;
    }
  }

  // init
  const initial = savedTheme() ?? systemPref();
  applyTheme(initial, savedTheme() ? "saved" : "system");

  toggleBtn.addEventListener("click", () => {
    const currentTheme = root.getAttribute("data-theme");
    const currentThemeSource = root.getAttribute("data-theme-source");

    if (currentThemeSource === "system") {
      const currentSystemTheme = systemPref();
      const next = currentSystemTheme === "dark" ? "light" : "dark";
      localStorage.setItem(STORAGE_KEY, next);
      applyTheme(next, "saved");
    } else if (currentTheme === "light") {
      localStorage.setItem(STORAGE_KEY, "dark");
      applyTheme("dark", "saved");
    } else if (currentTheme === "dark") {
      localStorage.setItem(STORAGE_KEY, null);
      applyTheme(systemPref(), "system");
    }
  });

  // If user has not chosen explicitly, follow OS changes
  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  mql.addEventListener?.("change", () => {
    if (savedTheme() === null) applyTheme(systemPref(), "system");
  });
})();
