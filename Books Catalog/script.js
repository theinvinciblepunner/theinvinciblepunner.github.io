
function addRow(book) {
    const table = document.getElementById("booklistbody");
    const newbookentry = table.insertRow(-1);
    for (let i = 0; i < 3; i++) {
        newbookentry.insertCell(i);
    }
    newbookentry.cells[0].textContent = book.title;
    newbookentry.cells[1].textContent = book.author;
    newbookentry.cells[2].textContent = book.price;
}

document.getElementById('searchBox').addEventListener('input', function() {
    const query=document.getElementById('searchBox').value;
    document.getElementById("booklistbody").innerHTML = ``;
    fetch(`https://api.assignment3.rohanhussain.com/books/search/27110009?query=${query}`, {
        method: 'GET'
    })
    .then(response => response.json())
    .then(response => {
        response.books.forEach(nthbook => addRow(nthbook));
    })

}
)
const inputform = document.getElementById("inputform");
inputform.addEventListener('submit', function(event) {
    event.preventDefault();

    const author = document.getElementById("author");
    const title = document.getElementById("title");
    const price = document.getElementById("price");

    const formData = new FormData();
    formData.append('title', title.value);
    formData.append('author', author.value);
    formData.append('price', price.value);

    fetch("https://api.assignment3.rohanhussain.com/books/27110009", {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(formdataparsed => {
        console.log(formdataparsed, "\nSuccess");
       
        document.getElementById("booklistbody").innerHTML = ``;
   
        fetch("https://api.assignment3.rohanhussain.com/books/27110009", {
            method: 'GET'
        })
        .then(response => response.json())
        .then(response => {
            response.books.forEach(nthbook => addRow(nthbook));
        })
        
    })
    
});

window.onload = function() {
    fetch("https://api.assignment3.rohanhussain.com/books/27110009", {
        method: 'GET'
    })
    .then(response => response.json())
    .then(response => {
        response.books.forEach(nthbook => addRow(nthbook));
    })
    
};
