var rows = [];
var countID=0;


var parseLateSwitch = (value)=> {
    if(value){
        return "Tarde";
    }
    return "A tiempo";
};

function addRow(carnet, schedule, late, tBody){
    var newRow = document.createElement("tr");
    var date = new Date();

    rows.push({
        "id":0,
        "carnet": carnet,
        "schedule": schedule,
        "late": late
    });

    

    newRow.innerHTML = `<td><b>${carnet}</b></td> 
    <td>${schedule}</td> 
    <td>${date.toLocaleString()}</td>
    <td>${late}</td>`;

    var cellContainer= document.createElement("td");
    var deleteButton= document.createElement("button");
    var checkInput= document.createElement("input");

    deleteButton.classList.add("btn");
    deleteButton.classList.add("btn-danger");

    deleteButton.innerText= "Eliminar";
    deleteButton.value= countID;
    var carnetv = document.querySelector("#carnet_field");




    checkInput.addEventListener("keyup", function(event){
        var carnet= carnetv.value;
        var idEvent= event.srcElement.value;
        if(carnet==idEvent){
            deleteButton.addEventListener("click", function(event){
                var idElement = event.srcElement.value;
                var trToDelete = document.querySelector(`button[value='${idElement}']`).parentElement.parentElement;
                
        
                tBody.removeChild(trToDelete);
                rows.forEach((item, index)=>{
                    if(item.id==idElement){
                        rows.splice(index, 1);
                    }
                });
            });
            
        }
  

    });

    




    cellContainer.appendChild(deleteButton);
    newRow.appendChild(cellContainer);

    cellContainer.appendChild(checkInput);
    newRow.appendChild(checkInput);


    tBody.appendChild(newRow);
    countID++;

};



window.onload = function()
{
    var submit_btn = document.querySelector("#submit_btn");
    var carnet_field = document.querySelector("#carnet_field");
    var schedule_field = document.querySelector("#schedule_field");
    var late_switch = document.querySelector("#late_switch");
    var tBody = document.querySelector("#table_body");

    var carnetRegex = new RegExp('[0-9]{8}');

    
    submit_btn.addEventListener("click", ()=>{
        var carnet = carnet_field.value;
        var schedule = schedule_field.options[schedule_field.selectedIndex].text;
        var late = parseLateSwitch (late_switch.checked);
        if (carnetRegex.test(carnet)){
            addRow(carnet, schedule, late, tBody);
        }
        else{
            alert("formato no valido")
        }

    });

    carnet_field.addEventListener("keyup", (event)=> {
        var carnet = carnet_field.value;
        //console.log(event.keyCode);
        if (carnetRegex.test(carnet)){
            submit_btn.disabled = false;
        }
        else{
            submit_btn.disabled = true;
        }

    });
}