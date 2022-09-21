const sections = document.querySelectorAll('.sections')
const programmingBtn = document.querySelector('.section-one__programming-btn')
const photosBtn = document.querySelector('.section-two__photos-btn')
const hobbyBtn = document.querySelector('.section-three__hobby-btn')
const aboutBtn = document.querySelector('.section-four__about-btn')
const sectionsBtns = document.querySelectorAll('.sections-btns')
const sectionOne = document.querySelector('.section-one')
const sectionOneDetails = document.querySelector('.section-one-details')
const sectionTwo = document.querySelector('.section-two')
const sectionThree = document.querySelector('.section-three')
const sectionFour = document.querySelector('.section-four')
const sectionGallery = document.querySelector('.section-gallery')


const goToSectionOneDetails = () => {
    // sectionOne.classList.add('inactive-section-one')
    programmingBtn.classList.add('inactive')
    sectionTwo.classList.add('inactive')
    sectionThree.classList.add('inactive')
    sectionFour.classList.add('inactive')

    sectionOneDetails.classList.remove('inactive')
}

// const goToSectionThree = () => {
//     sectionOne.classList.add('inactive-section-one')
//     sectionThree.classList.remove('inactive')
// }
// const goToSectionFour = () => {
//     sectionOne.classList.add('inactive-section-one')
//     sectionFour.classList.remove('inactive')
// }



// let sectionOneBtnName

// const switchDisplaySection = () => {
//     sectionOne.classList.toggle('active')
// }

// const hideSectionOne = () => {
//     sectionOne.classList.toggle('inactive-section-one')
// }

// const sectionOneBtnsListenerSettings = () => {
//     sectionOneBtns.forEach((btn) => {
//         btn.addEventListener('click', checkSectionOneBtn)
//     })
// }

// const checkSectionOneBtn = (e) => {
//     if (e.target.classList.consist('.section-one__programming')) {
//         sectionTwo.classList.remove('.inactive')
//     }

// }

// document.addEventListener('DOMContentLoaded', sectionOneBtnsListenerSettings);
programmingBtn.addEventListener('click', goToSectionOneDetails);
// programmingBtn.addEventListener('click', goToSectionOneDetails);
// photosBtn.addEventListener('click', goToSectionThree);
// hobbyBtn.addEventListener('click', goToSectionFour);
// aboutBtn.addEventListener('click', goToSectionAbout);
