let form = document.getElementById("note-Form");
form.addEventListener("submit", saveFunction);
let body = document.querySelector(".note-section")


let ed= new Date();
let edates = ed.toDateString();

let time1 = moment();
let time1Date = moment().format("h:mm a");
console.log(time1Date);








let dateContainers = document.getElementById("date-Container");
dateContainers.innerHTML = edates.toString();
dateContainers.marginTop = "-15px";


body.appendChild(dateContainers);




/*let times3 = new Date();
let currentTime = times3.toLocaleTimeString('en-US');*/






function saveFunction(e){

    e.preventDefault();


    let title = document.getElementById("form-title").value;
    let body = document.getElementById("form-body").value


    
    let noteObj = {
        noteTitle : title,
        noteBody : body,
      
    }

    if(localStorage.getItem("notes1")=== null){
        let notes = [];
        notes.push(noteObj);
        localStorage.setItem("notes1", JSON.stringify(notes));
    }
    else{
        let notes = JSON.parse(localStorage.getItem("notes1"));
        notes.push(noteObj);
        localStorage.setItem("notes1", JSON.stringify(notes));

    }

fetchNote();
}






function fetchNote(){
    let notes = JSON.parse(localStorage.getItem("notes1"));
    console.log(notes);


    

    let note_container = document.getElementById("note-container");
    note_container.innerHTML = " ";



    

    for(let i = 0; i< notes.length; i++){
    
        let title = notes[i].noteTitle;
        let body = notes[i].noteBody;
     
        note_container.innerHTML += 
                  
       ' <div class="notes">' +
       ' <h1 class="note-index">' + 'Note '+ i+ '</h1>'+

       
       '<p class = "time">'+ time1Date + "</p>"+
       
       ' <h2 class="note-heading">' +title+'</h2>'+

        '<p class="note-details">'+ body+ '</p>' +
        
        '<div class="action">'+
           '<button class="action-btn" id="edit" onclick="editNote(\''+title+'\', \''+body+'\')">' + 'Edit' +'</button>'+
            '<button class="action-btn" id="delete" onclick="deleteNote(\''+title+'\')">'+ 'Delete' + '</button>'+
        '</div>'+
        '</div>'
        
    
        
        
    }
  
     
  


}

function editNote(title, body){
    let newTitle = document.getElementById("form-title").value = title;
    
    let newBody = document.getElementById("form-body").value = body;

   
    console.log(`this is the title:${newTitle} and ${newBody}`);
}



function deleteNote(title){
let confirmDel = confirm("Are you sure you want to delete?");
let notes = JSON.parse(localStorage.getItem("notes1"));

for(let i =0; i< notes.length; i++){
    let title1 = notes[i].noteTitle;

    if(confirmDel == true){
        if(title1 == title){

            notes.splice(i,1);
        }
    }
}

fetchNote();
localStorage.setItem("notes1", JSON.stringify(notes));
}


let typing= document.querySelector(".typing");
let todo = ["Friendly note reminders", "Super easy to use", "Your best note app"]
let count = 0;
let index = 0;
let currentWord = " ";
let currentLetter = " ";

(function type(){
//let colorB = "#"+ Math.random().toString(16).substr(2,6);
    
if(count === todo){
    count = 0;
}

currentWord = todo[count];
currentLetter = currentWord.slice(0, ++index);
typing.innerHTML = currentLetter;
typing.style.color = "white";
typing.style.fontSize = "3rem";
typing.style.marginTop = "1rem";
if(currentLetter.length === currentWord.length){
    count++;
    index = 0;

}


setTimeout(type, 100);

}())



let firstLeft;
let secondLeft;
let thirdLeft;
let fourthLeft;
let fifthLeft;
let sixthLeft;
let seventhLeft;

function leftCircle1(){
   

let firstCircle = document.querySelector("#circle1 div:nth-child(1)");

let seventhCircle = document.querySelector("#circle1 div:nth-child(2)");


clearInterval(seventhLeft);
firstLeft = setInterval(function(){

 firstCircle.style.backgroundColor = "";
 seventhCircle.style.backgroundColor = "rgb(48, 48, 99)";
 leftCircle2();
}, 1000)


}





function leftCircle2(){


    let secondCircle = document.querySelector('#circle1 div:nth-child(3)')
    let firstCircle = document.querySelector("#circle1 div:nth-child(1)");

clearInterval(firstLeft);
    
    secondLeft = setInterval(function(){
        firstCircle.style.backgroundColor = "";
     secondCircle.style.backgroundColor = "rgb(48, 48, 99)";
     leftCircle3();
    }, 1000)
    
    
    }




function leftCircle3(){

    clearInterval(secondLeft);
   
    let secondCircle = document.getElementById('second');
    let thirdCircle = document.getElementById('third');
    
    thirdLeft = setInterval(function(){
        secondCircle.style.backgroundColor = "";
     thirdCircle.style.backgroundColor = "rgb(48, 48, 99)";
     leftCircle4();
    }, 1000)
    
    
    }

  

    function leftCircle4(){

        clearInterval(thirdLeft);
      
        let thirdCircle = document.getElementById('third');
        let fourthCircle = document.getElementById('fourth');
        
        fourthLeft = setInterval(function(){
            thirdCircle.style.backgroundColor = "";
         fourthCircle.style.backgroundColor = "rgb(48, 48, 99)";
         leftCircle5();
        }, 1000)
        
        
        }


   

        function leftCircle5(){

            clearInterval(fourthLeft);
          
            let fourthCircle = document.getElementById('fourth');
            let fifthCircle = document.getElementById('fifth');
            
            fifthLeft = setInterval(function(){
                fourthCircle.style.backgroundColor = "";
             fifthCircle.style.backgroundColor = "rgb(48, 48, 99)";
             leftCircle6();
            }, 1000)
            
            
            }


           

            function leftCircle6(){

                clearInterval(fifthLeft);
           
                let fifthCircle = document.getElementById('fifth');
                let sixthCircle = document.getElementById('sixth');
                
                sixthLeft = setInterval(function(){
                    fifthCircle.style.backgroundColor = "";
                 sixthCircle.style.backgroundColor = "rgb(48, 48, 99)";
                 leftCircle7();
                }, 1000)
                
                
                }


               

                function leftCircle7(){

                    clearInterval(sixthLeft);

                    let sixthCircle = document.getElementById('sixth');
                    let seventhCircle = document.getElementById('seventh');
                    
                    seventhLeft = setInterval(function(){
                        sixthCircle.style.backgroundColor = "";
                     seventhCircle.style.backgroundColor = "rgb(48, 48, 99)";
                     leftCircle1();
                    }, 1000)
                    
                    
                    } 