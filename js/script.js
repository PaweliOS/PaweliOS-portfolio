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
const pageThree = document.querySelector('.section-one-details-page-three')

const sectionTwo = document.querySelector('.section-two')
const sectionThree = document.querySelector('.section-three')
const sectionFour = document.querySelector('.section-four')
const sectionGallery = document.querySelector('.section-gallery')

let sectionNumber = 1
let pageNumber = 0


const goToSectionOneDetails = () => {
    sectionNumber = 1
    pageNumber +=1
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
    if ((sectionNumber == 1) && (pageNumber == 0)) {
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

    if ((sectionNumber == 1) && (pageNumber == 1)) {
        console.log('SPR: Next -> '+sectionNumber+', page: '+pageNumber)
        pageTwo.classList.add('inactive')
        pageOne.classList.remove('inactive')
        backBtn.classList.add('inactive')
        // sectionNumber = 1
        // pageNumber-=1
        console.log('Robie 1 i 2 Next -> '+sectionNumber+', page: '+pageNumber)
    }

    if ((sectionNumber == 1) && (pageNumber == 2)) {
        console.log('SPR: Next -> '+sectionNumber+', page: '+pageNumber)
        pageThree.classList.add('inactive')
        pageTwo.classList.remove('inactive')
        // backBtn.classList.add('inactive')
        // sectionNumber = 1
        // pageNumber-=1
        // console.log('Robie 1 i 2 Next -> '+sectionNumber+', page: '+pageNumber)
    }



    sectionNumber = 1
    pageNumber-=1


}
const goMain = () => {
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
}

const goNext = () => {
    // sectionNumber = 1
    // pageNumber += 1
    console.log('Next -> '+sectionNumber+', page: '+pageNumber)
    backBtn.classList.remove('inactive')
   
    if ((sectionNumber == 1) && (pageNumber == 1)) {
        pageOne.classList.add('inactive')
        pageTwo.classList.remove('inactive') 
    }

    if ((sectionNumber == 1) && (pageNumber == 2)) {
        pageTwo.classList.add('inactive')
        pageThree.classList.remove('inactive') 
        // zabezpieczam dalsze zwiększanie numeru pageNumber:
        pageNumber -=1
    }
    sectionNumber = 1
    pageNumber += 1

}
const goToSectionThree = () => {
    sectionOne.classList.add('inactive-section-one')
    sectionThree.classList.remove('inactive')
}

programmingBtn.addEventListener('click', goToSectionOneDetails);
backBtn.addEventListener('click', goBack)
mainBtn.addEventListener('click', goMain)
nextBtn.addEventListener('click', goNext)
// programmingBtn.addEventListener('click', goToSectionOneDetails);
// photosBtn.addEventListener('click', goToSectionThree);
// hobbyBtn.addEventListener('click', goToSectionFour);
// aboutBtn.addEventListener('click', goToSectionAbout);
