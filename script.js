document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((btn) => btn.classList.remove("active"));
    tab.classList.add("active");
  });
});

document.querySelector("form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thanks! You are subscribed to early access.");
});
