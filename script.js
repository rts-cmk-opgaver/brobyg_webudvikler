document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("body").addEventListener("click", function () {
    document.querySelector("body").classList.add("animate__tada");
    setTimeout(() => {
      document.querySelector("body").classList.remove("animate__tada");
    }, 500);
  });
});
