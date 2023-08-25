function ToggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag image
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    // se tivar em light mode, trocar a imagem para "avatar-light"
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //se tivar em dark mode, manter "avatar"
    img.setAttribute("src", "./assets/avatar.png")
  }
}
