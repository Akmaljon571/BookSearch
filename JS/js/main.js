import UserName from "./userName.js";
import temp from "./temp.js";
let list = document.getElementById('list')
let frg = document.createDocumentFragment()
let con = document.querySelector('.container')

async function main() {
    let fet = await fetch('https://reqres.in/api/users?page=2')
    let copy = (await fet.json()).data
    copy.forEach(key => {
        let obj = new UserName(key)
        let item = temp(obj)
        frg.append(item)
    });
    list.innerHTML = '';
    list.append(frg)
    
}

main()

let quyosh = document.querySelector('.quyosh')
let oy = document.querySelector('.oy')


quyosh.addEventListener('click', ()=>{
    oy.classList = 'bi bi-moon-stars-fill oy'
    con.classList = 'container tun'
    quyosh.classList = 'bi bi-brightness-high-fill quyosh none'
})
oy.addEventListener('click', ()=>{
    oy.classList = 'bi bi-moon-stars-fill oy none'
    con.classList = 'container'
    quyosh.classList = 'bi bi-brightness-high-fill quyosh'
})