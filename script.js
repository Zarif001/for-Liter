
const slideParent = document.querySelector('.slider_wrapper'),
    img = [...slideParent.children],
    dots = document.querySelectorAll('.dot')
let index = 0
let dotIndex = 0
console.log(img);

function sliderNext() {
    if (index != (img.length - 1 ) * slideParent.clientWidth) {
        index += slideParent.clientWidth
        dotIndex++
    } else {
        index = 0
        dotIndex = 0
    }
    img.forEach(i => {
        i.style.transform = ` translateX(-${index}px)`
        i.style.transition = '1s'
    })

    remove(dotIndex)
    // setInterval(() => {
    //     sliderNext()
    // }, 12000);
}
sliderNext()

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        index = slideParent.clientWidth * i
        img.forEach(i => {
            i.style.transform = ` translateX(-${index}px)`
            i.style.transition = '1s'
        })
        dotIndex = i
        remove(dotIndex)
    })
})
function remove(index) {
    dots.forEach(dot => {
        dot.classList.remove('active')
    })
    dots[index].classList.add('active')
}





