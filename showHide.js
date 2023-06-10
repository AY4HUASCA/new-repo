let currentStep = 1

const nextButton = document.querySelector(".nextButton");
const backButton = document.querySelector(".backButton");
const step1 = document.querySelector('step1');
const step2 = document.querySelector('step2');
const step3 = document.querySelector('step3');
const step4 = document.querySelector('step4');
    
nextButton.addEventListener('click', next);
backButton.addEventListener('click', back);

function next() {
    currentStep = currentStep + 1
    if (currentStep === 2) {
        step1.style.display = 'none'
        step2.style.display = 'flex'
        backButton.style.display = 'none'
    }
    if(currentStep === 3) {
        step2.style.display = 'none'
        step3.style.display = 'flex'
    }
    if(currentStep === 1) {
        backButton.style.display = 'none'
    }
    console.log(currentStep);
}

