document.addEventListener('DOMContentLoaded', function () {
  const colMenu = document.querySelector('.col-menu .menu')
  const colMapa = document.querySelector('.col-mapa')
  console.log(colMapa)
  console.log(colMenu)
  function adjustHeight() {
    if (colMenu && colMapa) {
      const colMenuHeight = colMenu.offsetHeight
      colMapa.style.maxHeight = colMenuHeight + 'px'
    }
  }

  // Ajusta a altura quando o conteúdo é carregado
  adjustHeight()

  // Ajusta a altura quando a janela é redimensionada
  window.addEventListener('resize', adjustHeight)
})
