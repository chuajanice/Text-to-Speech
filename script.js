document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");
});

function smoothNavigate(url) {
  document.body.classList.remove("fade-in");
  setTimeout(() => {
    window.location.href = url;
  }, 600);
}

