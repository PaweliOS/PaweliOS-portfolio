const sections = document.querySelectorAll('.sections')
const programmingBtn = document.querySelector('.section-one__programming-btn')
const photosBtn = document.querySelector('.section-two__photos-btn')
const aboutBtn = document.querySelector('.section-three__about-btn')
const contactBtn = document.querySelector('.sections-four__contact-btn')


const moveBox = document.querySelector('.move-btns')
const mainsBtns = document.querySelectorAll('.move-btns__main')
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
const sectionThreeDetails = document.querySelector('.section-three-details')
const pageOneSectionThree = document.querySelector('.section-three-details-page-one')

const sectionFour = document.querySelector('.section-four')
const sectionFourDetails = document.querySelector('.section-four-details')
const pageOneSectionFour = document.querySelector('.section-four-details-page-one')


const sectionGallery = document.querySelector('.section-gallery')

const linkTextEmail = document.querySelector('.section-four-details-page-one__text-email')

const emailPlace = document.querySelector('.section-four-details-page-one__email')
const emailAddress = document.createElement('a')


const pageBox = document.querySelector('.page')
const pageN = document.querySelector('.page__number')

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

    if (nextBtn.classList.contains('inactive')) {
        nextBtn.classList.remove('inactive')
    }
    if (mainBtn.classList.contains('inactive')) {
        mainBtn.classList.remove('inactive')
    }
    if (moveBox.classList.contains('inactive') && pageBox.classList.contains('inactive')) {
        moveBox.classList.remove('inactive')
        backBtn.classList.remove('inactive')
        mainBtn.classList.remove('inactive')
        nextBtn.classList.remove('inactive')
        
        pageBox.classList.remove('inactive')
        pageN.classList.remove('inactive')
    }

    pageNumber += 1
    console.log('Next -> ' + sectionNumber + ', page: ' + pageNumber)
    pageN.textContent = pageNumber
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

    pageNumber == 0 ? backBtn.classList.add('inactive') : null

    mainBtn.classList.contains('inactive') ?
        (mainBtn.classList.remove('inactive'),
        moveBox.classList.remove('inactive')
        ) : null
    
    pageBox.classList.remove('inactive')
    pageN.classList.remove('inactive')
}

const goToSectionThree = () => {
    sectionNumber = 3
    pageNumber = 0
    sectionOne.classList.add('inactive')
    sectionTwo.classList.add('inactive')
    sectionThree.classList.add('inactive')
    sectionFour.classList.add('inactive')
    sectionThreeDetails.classList.remove('inactive')
    pageOneSectionThree.classList.remove('inactive')

    pageNumber == 0 ? (backBtn.classList.add('inactive'), nextBtn.classList.add('inactive')) : null

    mainBtn.classList.contains('inactive') ? (mainBtn.classList.remove('inactive'), moveBox.classList.remove('inactive')) : null
    
    pageBox.classList.remove('inactive')
    pageN.classList.remove('inactive')
}

const goToSectionFour = () => {
    sectionNumber = 4
    pageNumber = 0
    sectionOne.classList.add('inactive')
    sectionTwo.classList.add('inactive')
    sectionThree.classList.add('inactive')
    sectionFour.classList.add('inactive')
    sectionFourDetails.classList.remove('inactive')
    pageOneSectionFour.classList.remove('inactive')

    pageNumber == 0 ? (backBtn.classList.add('inactive'), nextBtn.classList.add('inactive')) : null
    mainBtn.classList.contains('inactive') ? (mainBtn.classList.remove('inactive'), moveBox.classList.remove('inactive')) : null

    pageBox.classList.remove('inactive')
    pageN.classList.remove('inactive')
}


const goBack = () => {
    if ((sectionNumber == 1) && (pageNumber == 0)) {
        programmingBtn.classList.remove('inactive')
        sectionTwo.classList.remove('inactive')
        sectionThree.classList.remove('inactive')
        sectionFour.classList.remove('inactive')
        sectionOneDetails.classList.add('inactive')
        pageOne.classList.add('inactive')
        console.log('Robie 1 i 1 Next -> '+sectionNumber+', page: '+pageNumber)
    }

    if ((sectionNumber == 1) && (pageNumber == 1)) {
        console.log('SPR 1 1: Next -> '+sectionNumber+', page: '+pageNumber)
        pageTwo.classList.add('inactive')
        pageOne.classList.remove('inactive')
        backBtn.classList.add('inactive')
        console.log('Robie 1 i 2 Next -> '+sectionNumber+', page: '+pageNumber)
    }

    if ((sectionNumber == 1) && (pageNumber == 2)) {
        console.log('SPR 1 2: Next -> '+sectionNumber+', page: '+pageNumber)
        pageTwo.classList.add('inactive')
        pageOne.classList.remove('inactive')
        pageNumber -= 1
        pageN.textContent = pageNumber
    }

    if ((sectionNumber == 1) && (pageNumber == 3)) {
        console.log('SPR 1 3: Next -> '+sectionNumber+', page: '+pageNumber)
        pageThree.classList.add('inactive')
        pageTwo.classList.remove('inactive')
        
        pageNumber-=1
        pageN.textContent = pageNumber
    }
}

const goMain = () => {

    if (sectionNumber == 1) {
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
        console.log('Next -> ' + sectionNumber + ', page: ' + pageNumber)
    }

    if (sectionNumber == 2) {
        photosBtn.classList.remove('inactive')
        sectionOne.classList.remove('inactive')
        sectionThree.classList.remove('inactive')
        sectionFour.classList.remove('inactive')
        sectionTwoDetails.classList.add('inactive')
        pageOneSectionTwo.classList.add('inactive')
    
        sectionNumber = 2
        pageNumber = 0
    }

    if (sectionNumber == 3) {
        sectionOne.classList.remove('inactive')
        sectionTwo.classList.remove('inactive')
        sectionThree.classList.remove('inactive')
        sectionFour.classList.remove('inactive')
        sectionThreeDetails.classList.add('inactive')
        pageOneSectionThree.classList.add('inactive')
        
        sectionNumber = 3
        pageNumber = 0
    }

    if (sectionNumber == 4) {
        sectionOne.classList.remove('inactive')
        sectionTwo.classList.remove('inactive')
        sectionThree.classList.remove('inactive')
        sectionFour.classList.remove('inactive')
        sectionFourDetails.classList.add('inactive')
        pageOneSectionFour.classList.add('inactive')
        
        sectionNumber = 3
        pageNumber = 0
    }

    backBtn.classList.add('inactive')
    mainBtn.classList.add('inactive')
    nextBtn.classList.add('inactive')
    moveBox.classList.add('inactive')
    pageBox.classList.add('inactive')
    pageN.classList.add('inactive')

    pageNumber = 0;
    pageN.textContent = pageNumber+1
}

const goNext = () => {
    console.log('Next -> '+sectionNumber+', page: '+pageNumber)
    backBtn.classList.remove('inactive')
   
    if ((sectionNumber == 1) && (pageNumber == 1)) {
        pageOne.classList.add('inactive')
        pageTwo.classList.remove('inactive') 
    }

    if ((sectionNumber == 1) && (pageNumber == 2)) {
        pageTwo.classList.add('inactive')
        pageThree.classList.remove('inactive') 
        nextBtn.classList.add('inactive')
    }

    if ((sectionNumber == 3) && (pageNumber == 1)) {
        pageOneSectionThree.classList.add('inactive')
        nextBtn.classList.add('inactive')
    }

    sectionNumber = 1
    pageNumber += 1
    pageN.textContent = pageNumber
}

const setListenerForMain = () => {
    mainsBtns.forEach((btn) => {
        btn.addEventListener('click', goMain)
        
    })
}

const fillEmail = () => {
    let emailCoded = atob('bWlycm9ycGF3ZWwucGFiaXNpYWtAZ21haWwuY29t')
    emailAddress.textContent = emailCoded
    emailAddress.href = 'mailto:'+ emailCoded
    emailAddress.style.textDecoration = 'none'
    emailAddress.style.color = 'white'
    emailAddress.style.fontWeight = '100'
    emailAddress.classList.add('section-four-details-page-one__text')
    emailAddress.classList.add('section-four-details-page-one__text-email')
    emailPlace.append(emailAddress)
}

const setFirstView = () => {
    moveBox.classList.add('inactive')
    backBtn.classList.add('inactive')
    mainBtn.classList.add('inactive')
    nextBtn.classList.add('inactive')
    pageBox.classList.add('inactive')  
    pageN.classList.add('inactive')  
    
}

fillEmail();
setFirstView();

programmingBtn.addEventListener('click', goToSectionOneDetails);
backBtn.addEventListener('click', goBack)
mainBtn.addEventListener('click', goMain)
nextBtn.addEventListener('click', goNext)

// document.addEventListener('DOMContentLoaded', setListenerForMain)
photosBtn.addEventListener('click', goToSectionTwoDetails)
aboutBtn.addEventListener('click', goToSectionThree)
contactBtn.addEventListener('click', goToSectionFour)