import './index.css'

function fetchAndShowColors() {
  const root = document.getElementById('root')
  const { url } = root.dataset

  root.innerHTML = ''

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)

      data.forEach((color) => {
        const fillCard = document.createElement('div')
        fillCard.classList.add('fillCard')

        const fillColor = document.createElement('div')
        fillColor.classList.add('fillColor')
        fillColor.style.backgroundColor = `#${color.rgb_hash}`

        const fillCardInfo = document.createElement('div')
        fillCardInfo.classList.add('fillCardInfo')
        fillCardInfo.innerText = color.rgb_hash

        fillCard.appendChild(fillColor)
        fillCard.appendChild(fillCardInfo)
        root.appendChild(fillCard)
      })
    })
}

document.addEventListener('DOMContentLoaded', () => {
  const bodyClass = document.body.classList[0]

  if (bodyClass == 'index' || bodyClass == 'colors') {
    console.log('TRUE')

    fetchAndShowColors()
  }
})
