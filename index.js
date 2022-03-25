const link = 'https://api.adviceslip.com/advice'
const container = document.querySelector('.advice')
const button = document.querySelector('.advice__button')
const adviceID = document.querySelector('.advice__number')
const adviceText = document.querySelector('.advice__main-text')


window.onload = getAdvice()
setTimeout(showBlock, 500)


button.addEventListener('click', function () {

  setTimeout(function(){
    getAdvice()
  },300)

  setTimeout(function(){
    container.style.height = adviceText.clientHeight + 100 + 'px'
  }, 600)

  addFadeEffect(adviceText)
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

function showBlock() {
  container.classList.add('show')
}

function addFadeEffect(element) {
  element.classList.add('fade')
  setTimeout(function(){
    element.classList.remove('fade')
  },600)
}
