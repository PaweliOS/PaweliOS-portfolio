const sections = document.querySelectorAll('.sections')
const programmingBtn = document.querySelector('.section-one__programming-btn')
const photosBtn = document.querySelector('.section-two__photos-btn')
const hobbyBtn = document.querySelector('.section-three__hobby-btn')
const aboutBtn = document.querySelector('.section-four__about-btn')

const sectionsBtns = document.querySelectorAll('.sections-btns')
const backBtn = document.querySelector('.move-btns__back')
const mainBtn = document.querySelector('.move-btns__main')
const nextBtn = document.querySelector('.move-btns__next')

const sectionOne = document.querySelector('.section-one')
const sectionOneDetails = document.querySelector('.section-one-details')
const pageOne = document.querySelector('.section-one-details-page-one')
const pageTwo = document.querySelector('.section-one-details-page-two')


const sectionTwo = document.querySelector('.section-two')
const sectionThree = document.querySelector('.section-three')
const sectionFour = document.querySelector('.section-four')
const sectionGallery = document.querySelector('.section-gallery')

let sectionNumber = 1
let pageNumber = 0


const goToSectionOneDetails = () => {
    sectionNumber = 1
    pageNumber +=1
    // sectionOne.classList.add('inactive-section-one')
    programmingBtn.classList.add('inactive')
    sectionTwo.classList.add('inactive')
    sectionThree.classList.add('inactive')
    sectionFour.classList.add('inactive')
    sectionOneDetails.classList.remove('inactive')
    pageOne.classList.remove('inactive')

    if (pageNumber == 1) {
        backBtn.classList.add('inactive')
    }

    console.log('Next -> '+sectionNumber+', page: '+pageNumber)
}


const goBack = () => {
    // if ((sectionNumber = 1) && (pageNumber = 1)) {
    //     sectionOneDetails.classList.add('inactive')
    //     programmingBtn.classList.remove('inactive')
    //     sectionTwo.classList.remove('inactive')
    //     sectionThree.classList.remove('inactive')
    //     sectionFour.classList.remove('inactive')
    // }
    
    
    if ((sectionNumber == 1) && (pageNumber == 1)) {
        programmingBtn.classList.remove('inactive')
        sectionTwo.classList.remove('inactive')
        sectionThree.classList.remove('inactive')
        sectionFour.classList.remove('inactive')
        sectionOneDetails.classList.add('inactive')
        pageOne.classList.add('inactive')
        // sectionNumber = 1
        // pageNumber -= 1
        
        console.log('Robie 1 i 1 Next -> '+sectionNumber+', page: '+pageNumber)
    }

    if ((sectionNumber == 1) && (pageNumber == 2)) {
        console.log('SPR: Next -> '+sectionNumber+', page: '+pageNumber)
        pageTwo.classList.add('inactive')
        pageOne.classList.remove('inactive')
        backBtn.classList.add('inactive')
        // sectionNumber = 1
        // pageNumber-=1
        console.log('Robie 1 i 2 Next -> '+sectionNumber+', page: '+pageNumber)
    }
    sectionNumber = 1
    pageNumber-=1


}
const goMain = () => {
    // if ((sectionNumber = 1) && (pageNumber = 1)) {
        pageOne.classList.add('inactive')
        pageTwo.classList.add('inactive')
        sectionOneDetails.classList.add('inactive')
        programmingBtn.classList.remove('inactive')
        sectionTwo.classList.remove('inactive')
        sectionThree.classList.remove('inactive')
        sectionFour.classList.remove('inactive')
        sectionNumber = 1
        pageNumber = 0
    
        console.log('Next -> '+sectionNumber+', page: '+pageNumber)
    // }
}

const goNext = () => {
    sectionNumber = 1
    pageNumber += 1
    console.log('Next -> '+sectionNumber+', page: '+pageNumber)
   
    if ((sectionNumber == 1) && (pageNumber == 2)) {
        pageOne.classList.add('inactive')
        pageTwo.classList.remove('inactive')
        
    }
    
    backBtn.classList.remove('inactive')



}


const goToSectionThree = () => {
    sectionOne.classList.add('inactive-section-one')
    sectionThree.classList.remove('inactive')
}
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
backBtn.addEventListener('click', goBack)
mainBtn.addEventListener('click', goMain)
nextBtn.addEventListener('click', goNext)
// programmingBtn.addEventListener('click', goToSectionOneDetails);
// photosBtn.addEventListener('click', goToSectionThree);
// hobbyBtn.addEventListener('click', goToSectionFour);
// aboutBtn.addEventListener('click', goToSectionAbout);
