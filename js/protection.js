// =====================================================================
// Practical (not bulletproof) anti-download protections.
// Screenshots can never be fully prevented. These are deterrents.
// =====================================================================
(function () {
  // Disable right-click (allow it inside form fields so users can paste)
  document.addEventListener("contextmenu", function (e) {
    if (e.target.closest("input, textarea")) return;
    e.preventDefault();
  });

  // Disable drag for images and protected nodes
  document.addEventListener("dragstart", function (e) {
    var t = e.target;
    if (t && (t.tagName === "IMG" || (t.closest && t.closest("[data-protected]")))) {
      e.preventDefault();
    }
  });

  // Disable common shortcuts: F12, Ctrl+S, Ctrl+U, Ctrl+Shift+I/J/C
  document.addEventListener("keydown", function (e) {
    var k = (e.key || "").toLowerCase();
    if (e.key === "F12") { e.preventDefault(); return; }
    if ((e.ctrlKey || e.metaKey) && (k === "s" || k === "u")) { e.preventDefault(); return; }
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (k === "i" || k === "j" || k === "c")) {
      e.preventDefault();
    }
  });

  // Block text/image selection on protected zones (CSS .no-select also applies)
  document.addEventListener("selectstart", function (e) {
    if (e.target.closest && e.target.closest("[data-protected]")) e.preventDefault();
  });
})();
