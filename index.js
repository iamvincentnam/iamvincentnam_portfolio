

// Register the CSSRulePlugi
// Animate the pseudo-element


  document.addEventListener('DOMContentLoaded', () => {
   
gsap.from('#aboutMe',{
    opacity:0, duration:1,y:100,delay:1
})

gsap.from('.devCard',{
    y:-100,
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

  gsap.from('.whatIDo',{
    opacity:0, x:-40,duration:1,
   
    ease: "power1.out",
    scrollTrigger: {
        trigger: 'footer', 
        start: 'top 80%', 
        end: 'bottom 20%'
      
      }
  });
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
tab.classList.remove('rounded-full', 'bg-gray-900', 'text-white','shadow-lg')));


tab.classList.add('rounded-full', 'bg-gray-900', 'text-white', 'shadow-lg');

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
   nav.classList.remove('rounded-full', 'bg-gray-900', 'text-white', 'hover:text-white');   
    })
 eachNav.classList.add('rounded-full', 'bg-gray-900', 'text-white', 'hover:text-white');   
})
})

/* this code below tries to add tailwind class to each  corresponding items  (cards) that share the same parent rather than burrowing through the html to add them individually  */
const blogCards = document.querySelectorAll('.blogContainer > .card');
const devcards = document.querySelectorAll('.development > .devCard');
const addClassToSomeGridItems = (items)=>{
 items.forEach((card)=>{
    return    card.classList.add('shadow-lg', 'my-12', 'mx-auto');  
        });
}
addClassToSomeGridItems(blogCards);
addClassToSomeGridItems(devcards);