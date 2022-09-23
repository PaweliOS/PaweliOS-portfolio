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
const sectionTwoDetails = document.querySelector('.section-two-details')
const pageOneSectionTwo = document.querySelector('.section-two-details-page-one')
const sectionThree = document.querySelector('.section-three')
const sectionFour = document.querySelector('.section-four')
const sectionGallery = document.querySelector('.section-gallery')



let sectionNumber
let pageNumber

//section One
const goToSectionOneDetails = () => {
    sectionNumber = 1
    pageNumber = 0
    programmingBtn.classList.add('inactive')
    sectionTwo.classList.add('inactive')
    sectionThree.classList.add('inactive')
    sectionFour.classList.add('inactive')
    sectionOneDetails.classList.remove('inactive')
    pageOne.classList.remove('inactive')

    if (pageNumber == 0) {
        backBtn.classList.add('inactive')
    }
        
        pageNumber +=1
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
        pageTwo.classList.add('inactive')
        pageOne.classList.remove('inactive')
        // backBtn.classList.add('inactive')
        // sectionNumber = 1
        pageNumber-=1
        // console.log('Robie 1 i 2 Next -> '+sectionNumber+', page: '+pageNumber)
    }

    if ((sectionNumber == 1) && (pageNumber == 3)) {
        console.log('SPR: Next -> '+sectionNumber+', page: '+pageNumber)
        pageThree.classList.add('inactive')
        pageTwo.classList.remove('inactive')
        // backBtn.classList.add('inactive')
        
        pageNumber-=1
        // console.log('Robie 1 i 2 Next -> '+sectionNumber+', page: '+pageNumber)
    }




    // pageNumber-=1


}
const goMain = () => {
        pageOne.classList.add('inactive')
        pageTwo.classList.add('inactive')
        pageThree.classList.add('inactive')
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
        // pageNumber -=1
    }
    sectionNumber = 1
    pageNumber += 1

}



// section Two

const goToSectionTwoDetails = () => {
    sectionNumber = 2
    pageNumber = 0
    photosBtn.classList.add('inactive')
    sectionOne.classList.add('inactive')
    sectionThree.classList.add('inactive')
    sectionFour.classList.add('inactive')
    sectionTwoDetails.classList.remove('inactive')
    pageOneSectionTwo.classList.remove('inactive')

    if (pageNumber == 0) {
        backBtn.classList.add('inactive')
    }
}

programmingBtn.addEventListener('click', goToSectionOneDetails);
backBtn.addEventListener('click', goBack)
mainBtn.addEventListener('click', goMain)
nextBtn.addEventListener('click', goNext)
// programmingBtn.addEventListener('click', goToSectionOneDetails);
photosBtn.addEventListener('click', goToSectionTwoDetails)
// hobbyBtn.addEventListener('click', goToSectionFour);
// aboutBtn.addEventListener('click', goToSectionAbout);
