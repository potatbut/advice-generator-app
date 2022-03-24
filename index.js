const link = 'https://api.adviceslip.com/advice'
const button = document.querySelector('.advice__button')
const adviceID = document.querySelector('.advice__number')
const adviceText = document.querySelector('.advice__main-text')
const container = document.querySelector('.advice')


window.onload = getAdvice()

setTimeout(addBlur, 500)

button.addEventListener('click', function () {
  getAdvice()
})

function getAdvice() {
  fetch(link)
  .then(response => {
    return response.json()
  })
  .then(adviceData => {
    const dataObj = adviceData.slip
    adviceID.innerText = `#${dataObj.id}`
    adviceText.innerText = `"${dataObj.advice}"`
  }).catch(error => {
    console.log(error);
  })
}

function addBlur() {
  container.classList.add('blur')
}
