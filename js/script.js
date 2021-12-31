
const links = document.querySelectorAll(".header-menu a")

function ativarLink(link){
  const url = location.href
  const href = link.href

  if(url.includes(href)){
    link.classList.add("ativo")
  }
}

links.forEach(ativarLink)

const parametros = new URLSearchParams(location.search)

function ativarParametro(parametro){
  const element = document.getElementById(parametro)
  if(element){
    element.checked = true
  }
}

parametros.forEach(ativarParametro)
