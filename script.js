const inputBox = document.getElementById("inbox");
const listItem = document.getElementById("listitem");

function addbtn(){

    if(inputBox.value ===''){
        alert("You Must Write Something!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listItem.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }

    inputBox.value="";
    saveData();

}

listItem.addEventListener("click", function(e){
    if(e.target.tagName ==="LI"){                     //Two Method to target to variable 1st method is this .matches("Variable Name")
        e.target.classList.toggle("checked");
        saveData();

    } else if(e.target.tagName === "SPAN"){        //2nd method is tagName === "Variable Name"
        e.target.parentElement.remove();
        saveData();

    }
    
},false);

function saveData(){
    localStorage.setItem("data", listItem.innerHTML);
}

function showList(){
    listItem.innerHTML=localStorage.getItem("data");
}

showList();





// Add vent Listner

// listItem.addEventListener("click", function(e){
//     if(e.target.matches("LI")){                     //Two Method to target to variable 1st method is this .matches("Variable Name")
//         e.target.classList.toggle("checked");
//         saveData();

//     } else if(e.target.tagName === "SPAN"){        //2nd method is tagName === "Variable Name"
//         e.target.parentElement.remove();
//         saveData();

//     }
    
// },false);

// Using Arrow Function
// listItem.addEventListener("click",e => {
//     if(e.target.tagName ==="LI"){                     
//         e.target.classList.toggle("checked");        
//         saveData();

//     } else if(e.target.tagName === "SPAN"){        
//         e.target.parentElement.remove();
//         saveData();

//     }
    
// },false);

// if there is only one state the noe need {} curly brace also i.e

// listItem.addEventListener("click",e => 
    //     if(e.target.tagName ==="LI"){                     
    //         e.target.classList.toggle("checked");        
    //         saveData();
    //})
    