let editP = document.getElementById('editablePara')
    // console.log(editP.innerText);


let btn = document.createElement('button')
let btnSave = document.createElement('button')
let btnDel = document.createElement('button')
let body = document.querySelector('body');
let access = document.getElementById('btnsDiv')

// Button Edit Button
body.appendChild(btn)
access.appendChild(btn)
btn.innerText = 'Edit'
btn.classList.add('btn-outline-primary')
btn.classList.add('btn')
    // btn.id.add
btn.style.margin = '25px 200px';


// Button Save
btnSave.classList.add('btn-outline-success')
btnSave.classList.add('btn')
    // btn.id.add
btnSave.style.margin = '25px 200px';
btnSave.innerText = 'Save'
body.appendChild(btnSave)
access.appendChild(btnSave)

// Button Delete
btnDel.innerText = 'Delete'
btnDel.classList.add('btn-outline-danger')
btnDel.classList.add('btn')
    // btn.id.add
btnDel.style.margin = '25px 200px';
body.appendChild(btnDel)
access.appendChild(btnDel)


// Accessing the div
let div = document.getElementById("editSuccess")
let divS = document.getElementById('saveSuccess')
let divD = document.getElementById('delete')

// click commands
btn.addEventListener('dblclick', function() {
    editP.setAttribute('contenteditable', "true")
    div.style.display = '';
    btnSave.classList.remove('disabled')
    btnDel.classList.remove('disabled')


})

btnSave.addEventListener('click', function() {
    editP.setAttribute('contenteditable', "false")
    console.log(editP.innerText)
    localStorage.setItem("data", editP.innerText)
    divS.style.display = '';
    if (editP.innerText === 'WRITE YOUR IMPORTANT NOTES HERE') {
        btnDel.classList.add('disabled')
            // btnSave.classList.add('disabled')
    }

})

btnDel.addEventListener('click', function() {
    editP.innerText = 'WRITE YOUR IMPORTANT NOTES HERE';
    localStorage.setItem("data", editP.innerText);
    divD.style.display = '';

    if (editP.innerText === 'WRITE YOUR IMPORTANT NOTES HERE') {
        btnDel.classList.add('disabled')
        btnSave.classList.add('disabled')
    }

})