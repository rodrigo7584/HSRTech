document.addEventListener('DOMContentLoaded', function () {
  const colMenu = document.querySelector('.col-menu .menu')
  const colMap = document.querySelector('.col-map')
  const popUp = document.querySelector('.pop-up')
  console.log(colMap)
  console.log(colMenu)
  function adjustHeight() {
    if (colMenu && colMap) {
      const colMenuHeight = colMenu.offsetHeight
      colMap.style.maxHeight = colMenuHeight + 'px'
    }
  }
  function initPopUp(){
    if(colMap && popUp){
      const closeButtons = popUp.querySelectorAll('.btn-close')
      colMap.addEventListener
      ('click', ()=>{
        popUp.classList.add('show')
      })
      closeButtons.forEach(btn=>{
          btn.addEventListener('click',()=>{
            event.stopPropagation();
          popUp.classList.remove('show')
        })
      })
    }
  }

  initPopUp()
  // Ajusta a altura quando o conteúdo é carregado
  adjustHeight()

  // Ajusta a altura quando a janela é redimensionada
  window.addEventListener('resize', adjustHeight)
})
