let botton = document.querySelector('#button-addon2')
let div1 = document.querySelector('#listaTareas')
let input1=document.querySelector('.form-control')


const List = (event) => {
    event.preventDefault()

    let div = document.createElement('div')
    let input =  document.createElement('input')
    let button1 =  document.createElement('button')
    let button2 =  document.createElement('button')
    div.classList.add("input-group", "mb-3")
    input.classList.add("form-control")
    button1.classList.add("btn", "btn-outline-primary")
    button2.classList.add("btn", "btn-outline-danger")
   
    button1.innerText="Eliminar"
    button2.innerText="Completado"
    input.readOnly=true
    input.value=input1.value
    input1.value=''
    
    div1.appendChild(div)
    div.appendChild(input)
    div.appendChild(button1)
    div.appendChild(button2)
   

    button1.addEventListener('click',()=>{
        div.remove()
    })

    button2.addEventListener('click',()=>{
        input.classList.add('text-decoration-line-through')
    })

}


botton.addEventListener('click',List)

