const ReadmoreElements = document.querySelectorAll('.blogContainer  .readMore');
ReadmoreElements.forEach((readMore)=>{
    readMore.addEventListener('click',()=>{
const previousAnchorElement = readMore.parentElement.previousElementSibling;

const getElementanchor = previousAnchorElement.getAttribute('href');
window.location.href= getElementanchor;

    })
// console.log(readMore);
})
const call_me = document.querySelector('.call_me');
const phone_number = document.querySelector('.phone_num');

call_me.addEventListener('click', ()=>{
    phone_number.classList.toggle('hidden');
});




const workCategoryTabs= document.querySelectorAll('.workCategorytab');
const allContents= document.querySelectorAll('.portfolio_projects');



workCategoryTabs.forEach((tab,index)=>{  
// console.log(tab)
tab.addEventListener('click',()=>{


workCategoryTabs.forEach((tab=> 
tab.classList.remove('rounded-full', 'bg-gray-900', 'text-white')));


tab.classList.add('rounded-full', 'bg-gray-900', 'text-white');

allContents.forEach((content)=>{
content.classList.add('hidden');
})
allContents[index].classList.remove('hidden');
})
});

