document.addEventListener('DOMContentLoaded', function () {
  const colMenu = document.querySelector('.col-menu .menu')
  const colMap = document.querySelector('.col-map')
  const popUp = document.querySelector('.pop-up')

  function adjustHeight() {
    if (colMenu && colMap) {
      const colMenuHeight = colMenu.offsetHeight
      colMap.style.maxHeight = colMenuHeight + 'px'
    }
  }

  function initPopUp() {
    if (colMap && popUp) {
      const closeButtons = popUp.querySelectorAll('.btn-close')

      colMap.addEventListener('click', () => {
        popUp.classList.add('show')
      })
      closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          event.stopPropagation()
          popUp.classList.remove('show')
        })
      })
    }
  }

  // Função de arraste
  let offsetX,
    offsetY,
    isDragging = false

  popUp.addEventListener('mousedown', e => {
    isDragging = true
    offsetX = e.clientX - popUp.offsetLeft
    offsetY = e.clientY - popUp.offsetTop
  })

  document.addEventListener('mousemove', e => {
    if (isDragging) {
      popUp.style.left = `${e.clientX - offsetX}px`
      popUp.style.top = `${e.clientY - offsetY}px`
    }
  })

  document.addEventListener('mouseup', () => {
    isDragging = false
  })

  initPopUp()
  // Ajusta a altura quando o conteúdo é carregado
  adjustHeight()

  // Ajusta a altura quando a janela é redimensionada
  window.addEventListener('resize', adjustHeight)
})
