  document.body.addEventListener("click", function () {
    document.body.classList.add("animate__tada");
    
    setTimeout(function() {
      document.body.classList.remove("animate__tada");
    }, 500);
  });
