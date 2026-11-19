import './index.css'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root')

  fetch('http://localhost:3000/api/v1/welcome/index.json')
    .then((response) => response.json())
    .then((data) => {
      console.log(data)

      data.forEach((color) => {
        console.log(color)

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
})
