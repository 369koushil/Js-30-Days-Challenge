const parent=document.querySelector('.parent')
const submit=document.querySelector('.submit')
const input=document.querySelector('#input')
parent.addEventListener('mouseover',e=>{
    console.log(e.target)
    e.target.style.listStyleType='square'
})

submit.addEventListener('click',(e)=>{
  e.preventDefault()
})

input.addEventListener('keyup',e=>{
  console.log(e.code)
})