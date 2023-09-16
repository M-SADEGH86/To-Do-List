let $ = document ;
const inputBox = $.querySelector('#task-input') ;
const listContainer = $.querySelector('.container-list') ;
const btn = $.querySelector('#btn')

//console.log(inputBox) ;
//console.log(listContainer) ;
//console.log(btn) ; 

btn.addEventListener('click' , () => {
    if (inputBox.value === '') {
        alert('fill the input ... ')
    } else {
        let li = $.createElement('li') ;
        li.innerHTML = inputBox.value ;
        listContainer.appendChild(li) ;
        let span = $.createElement('span') ;
        span.innerHTML = '\u00d7' ;
        li.appendChild(span)
    }
    inputBox.value = '' ;
    saveData() ;

})

inputBox.addEventListener('keypress' , (e) => {
    if (e.keyCode == 13){
        if (inputBox.value === '') {
            alert('fill the item')
        } else {
            let li = $.createElement('li') ;
            li.innerHTML = inputBox.value ;
            listContainer.appendChild(li) ;
            let span = $.createElement('span') ;
            span.innerHTML = '\u00d7' ;
            li.appendChild(span)
        }
        inputBox.value = ''
        saveData() ;
    }
})


listContainer.addEventListener('click' , (e) => {
    console.log(e)
    console.log(e.target.tagName)
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked') ;
        saveData() ;
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove() ;
        saveData() ;
    }
}) ;

function saveData () {
    localStorage.setItem('data' , listContainer.innerHTML)
} 

function showTask () {
    listContainer.innerHTML = localStorage.getItem('data')
}

showTask()
console.log(localStorage.getItem('data'))
