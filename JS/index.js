let koz = document.querySelector('.eseys')
let kozChiziq = document.querySelector('.eseysNone')
let inputPass = document.getElementById('inputPassword')
let inputTex = document.getElementById('inputPasswordText')
let form = document.getElementById('form')
let con = document.querySelector('.container')
let div = document.getElementById('div')

koz.addEventListener('click', ()=>{
    kozChiziq.className = "input-group-text eseys eseysNone"
    koz.className = "input-group-text eseys none"
    inputTex.value = inputPass.value
    inputTex.className = 'form-controlName'
    inputPass.className = 'form-controlName none'
})
kozChiziq.addEventListener('click', ()=>{
    kozChiziq.className = "input-group-text eseys eseysNone none"
    koz.className = "input-group-text eseys"
    inputPass.value = inputTex.value
    inputTex.className = 'form-controlName none'
    inputPass.className = 'form-controlName'
})

form.addEventListener('submit', (event)=>{
    event.preventDefault()
    console.log('notogri');
    switch (inputPass.value) {
        case 'Akmal':
            con.innerHTML = ''
            div.className = 'linkMain'
            break;
        case 'akmal':
            con.innerHTML = ''
            div.className = 'linkMain'
            break;
        case '20040308':
            con.innerHTML = ''
            div.className = 'linkMain'
            break;    
    }
    switch (inputTex.value) {
        case 'Akmal':
            con.innerHTML = ''
            div.className = 'linkMain'
            break;
        case 'akmal':
            con.innerHTML = ''
            div.className = 'linkMain'
            break;
        case '20040308':
            con.innerHTML = ''
            div.className = 'linkMain'
            break;    
    }

})
