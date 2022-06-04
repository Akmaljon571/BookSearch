let temp = ({ Id, Email, Firt_name, Last_name, Avatar })=>{
   let template = document.getElementById('template')
   let templateCopy = template.content.cloneNode(true)

   templateCopy.querySelector('.rigth_item').dataset.id = Id;
   templateCopy.querySelector('.CardImg').src = Avatar;
   templateCopy.querySelector('.card-title').textContent = Last_name;
   templateCopy.querySelector('.card-text').textContent = Firt_name;
   templateCopy.querySelector('.text1').textContent = Email;
   return templateCopy

}

export default temp