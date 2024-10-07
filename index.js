

// Register the CSSRulePlugi
// Animate the pseudo-element


  document.addEventListener('DOMContentLoaded', () => {
   
gsap.from('#aboutMe',{
    opacity:0, duration:1,y:100,delay:1
})
gsap.from('.aboutMe2',{
    opacity:0,x:-50, duration:1,delay:2,
    ease: "power1.out",
})

gsap.from('.devCard',{
    y:100,
    opacity:0,
    duration:.5,
    stagger: .61,
    scrollTrigger: {
      trigger: '.devCard', 
      start: 'top 95%', 
      end: 'bottom 10%', 
    //   scrub:true 
    
    }
  })

  gsap.from('.skill_icons',{
    opacity:0, scale:0, duration:1,
delay:2, stagger:.05,  ease: "power1.out", })
   
  gsap.from('.whatIDo',{
    opacity:0, x:-40,duration:1,
   
    ease: "power1.out",
    scrollTrigger: {
        trigger: 'footer', 
        start: 'top 80%', 
        end: 'bottom 20%'
      
      }
  });

  gsap.from('.contactForm-container',{
    opacity:0,  duration:3,
delay:0, stagger:.05,  ease: "power1.out",
scrollTrigger: {
  trigger: '.contactForm-container', 
  start: 'top 80%', 
  end: 'bottom 20%'

} })
   
  gsap.from('#contactForm_section',{  opacity:0, duration:3,
delay:0, stagger:.05,  ease: "power1.out", 
scrollTrigger: {
  trigger: '#contactForm_section', 
  start: 'top 80%', 
  end: 'bottom 20%'}

})
   
  });
 
 
/* To prevent repition and all of that even though a blog post title in each card is not clicked, but the read more is clicked, it should redirect to the intending corresponding link*/
const ReadmoreElements = document.querySelectorAll('.blogContainer  .readMore');
ReadmoreElements.forEach((readMore)=>{
    readMore.addEventListener('click',()=>{
const previousAnchorElement = readMore.parentElement.previousElementSibling;

const getElementanchor = previousAnchorElement.getAttribute('href');
window.location.href= getElementanchor;

    })
});
const call_me = document.querySelector('.call_me');
const phone_number = document.querySelector('.phone_num');

call_me.addEventListener('click', ()=>{
    phone_number.classList.toggle('hidden');
});




const workCategoryTabs= document.querySelectorAll('.workCategorytab');
const allContents= document.querySelectorAll('.portfolio_projects');


/* This code below creates a tab functionality  which display an item on the page when the corresponding tab button is clicked */
workCategoryTabs.forEach((tab,index)=>{  
tab.addEventListener('click',()=>{
workCategoryTabs.forEach((tab=> 
tab.classList.remove('rounded-full', 'bg-blue-700', 'text-white','shadow-lg')));


tab.classList.add('rounded-full', 'bg-blue-700', 'text-white', 'shadow-lg');

allContents.forEach((content)=>{
content.classList.add('hidden');
})
allContents[index].classList.remove('hidden');
})
});

const navLinks = document.querySelectorAll('.navLink');
navLinks.forEach((eachNav)=>{
eachNav.addEventListener('click',()=>{
    console.log(eachNav)
    navLinks.forEach((nav)=>{
   nav.classList.remove('rounded-full', 'bg-white', 'text-black', 'hover:text-gray-700');   
    })
 eachNav.classList.add('rounded-full', 'bg-white', 'text-black', 'hover:text-gray-700');   
})
})

/* this code below tries to add tailwind class to each  corresponding items  (cards) that share the same parent rather than burrowing through the html to add them individually  */
const blogCards = document.querySelectorAll('.blogContainer > .card');
const devcards = document.querySelectorAll('.development > .devCard');
const addClassToSomeGridItems = (items)=>{
 items.forEach((card)=>{
    return    card.classList.add('shadow', 'my-12', 'mx-auto');  
        });
}
addClassToSomeGridItems(blogCards);
addClassToSomeGridItems(devcards);


const contactForm = document.querySelector('#contactForm');
const contactMessage = document.querySelector('#contact_message');

const sendEmail = (e) => {
  const params ={

    name:document.getElementById('name').value,
    email:document.getElementById('email').value,
  message:document.getElementById('message').value,
 subject:document.getElementById('subject').value
  
   
  }
  e.preventDefault();
  add_spinnerAnimation();
  emailjs.send('service_wf11fks', 'template_tc8ve7a', params) // Everything ready to work
    .then((response) => {
      document.getElementById('name').value= '',
document.getElementById('email').value ='',
document.getElementById('message').value= '',
document.getElementById('subject').value
    console.log(response)
      contactMessage.innerHTML = 'Message sent &#9989;';
      contactForm.reset();
      remove_spinnerAnimation();
      setTimeout(() => {
        contactMessage.textContent = '';
      }, 2000);
      remove_spinnerAnimation();
    })
    .catch((error) => {
      contactMessage.textContent = 'Error sending message. Please try again.';
      console.log(error)
    });
};
function add_spinnerAnimation() {
  // Hide the submit button and show the spinner
  document.querySelector('.submit-btn').classList.add('hidden');
  
  // Check if the spinner is hidden and show it
  const spinner = document.querySelector('.animate-spin');
  if (spinner.classList.contains('hidden')) {
    spinner.classList.remove('hidden');
  }
}

function remove_spinnerAnimation() {
  // Show the submit button and hide the spinner
  document.querySelector('.submit-btn').classList.remove('hidden');
  document.querySelector('.animate-spin').classList.add('hidden');
}

contactForm.addEventListener('submit', sendEmail);