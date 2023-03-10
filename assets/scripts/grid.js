// grid offers show more
const showMore = document.getElementById('showMore')
const offers = document.querySelectorAll('.flex-items .special-offer')
// show 8 offers by default and hide the rest, if there are more than 8 offers in the grid, show the show more button, otherwise hide it
if (offers.length > 8) {
  showMore.style.display = 'block'
  for (let i = 8; i < offers.length; i++) {
    offers[i].style.display = 'none'
  }
} else {
  showMore.style.display = 'none'
}

// show more offers
showMore.addEventListener('click', () => {
  for (let i = 8; i < offers.length; i++) {
    offers[i].style.display = 'block'
  }
  showMore.style.display = 'none'
})
