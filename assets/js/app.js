// all id collect form html 
const searchInput = document.getElementById('search-input');
const bookContainer = document.getElementById('book-container');
const errorMessage = document.getElementById('error-message');
const countData = document.getElementById('count');
// add spinner function 
const toggleSpinner = displayStyle =>{
    document.getElementById('spinner-container').style.display = displayStyle;
}
// search btn function
const loadBook = () => {
    const searchField = searchInput.value;
    if(searchField === ""){
        errorMessage.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Please input Your Book Name!</strong>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
    return;
    }
    // show spinner 
    toggleSpinner('block');
    // clear data 
    bookContainer.innerHTML = "";
    searchInput.value = "";
    const url = `http://openlibrary.org/search.json?q=${searchField}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayBook(data.docs))
}
//display data
const displayBook = books => {
    const count = books.length;
    countData.innerHTML = `Show Result : ${count}`;
    console.log(books)
    if(books.length === 0){
        errorMessage.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong> No Result Found !</strong>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
    }
    else{
        errorMessage.innerHTML = "";
    }
    books.forEach(book => {
        console.log(book);
        const imgUrl = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
           <img src="${imgUrl ? imgUrl : 'Not Avaible'}" class="card-img-top" style="height:300px" alt="${book.title}" />
            <h6 class="card-title p-3"><span class="fw-bold">Name:</span> ${book.title}</h6>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><span class="fw-bold">Author:</span> ${book.author_name}</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Vestibulum at eros</li>
            </ul>
            <div class="card-footer">
                
            </div>
        </div>`;
        bookContainer.appendChild(div);
    });
    toggleSpinner('none');
}
const displayImg = img =>{
            
}