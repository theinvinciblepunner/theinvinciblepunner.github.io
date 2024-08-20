

function deleterow(button){
    button.parentNode.parentNode.remove();
}

function addrow()
{
    var table=document.getElementById("mytable");
    
    const author=document.getElementById("author");
    const book=document.getElementById("book");
    
    if(author.value===""||book.value==="")
    {
        console.log("no input")
    }

    else {
        var newbookentry=table.insertRow(-1);
    for(let i=0;i<3;i++)
        {
        newbookentry.insertCell(i);
        }
        newbookentry.cells[0].textContent=book.value;
        newbookentry.cells[1].textContent=author.value;
        
        var deletebutton=document.createElement("button");
        deletebutton.classList.add("btn", "btn-danger", "delete");
        deletebutton.textContent="Delete";
        
        newbookentry.cells[2].appendChild(deletebutton);
        deletebutton.addEventListener("click", function() {
            deleterow(this);
        });
    }
    
    
}


var addrowbutton=document.getElementById("save");
addrowbutton.addEventListener("click",addrow);


