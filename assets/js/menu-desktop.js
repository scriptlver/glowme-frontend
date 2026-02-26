fetch("/assets/pages/header-desktop.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("header-desktop-container").innerHTML = html;
  })
  .catch(err => console.error("Erro ao carregar header:", err));