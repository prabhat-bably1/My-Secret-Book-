// simple click demo
document.querySelectorAll(".menu span").forEach(item => {
  item.addEventListener("click", () => {
    alert(item.innerText + " clicked");
  });
});
