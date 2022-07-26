const buttonPress = document.getElementById('submit')

buttonPress.addEventListener('click', ()=> {
    document.getElementById('image').src = document.getElementById('addImage').value;
})