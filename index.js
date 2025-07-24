const headers = document.querySelectorAll(".faq__header");

headers.forEach(header => {
  header.addEventListener("click", () => {
    const answer = header.nextElementSibling;
    const icon = header.querySelector("img");

    const isOpen = answer.classList.contains("show");

   
    document.querySelectorAll(".ans").forEach(ans => ans.classList.remove("show"));
    document.querySelectorAll(".faq__header img").forEach(img => {
      img.src = "assets/images/icon-plus.svg";
    });

   
    if (!isOpen) {
      answer.classList.add("show");
      icon.src = "assets/images/icon-minus.svg";
    }
  });
});
