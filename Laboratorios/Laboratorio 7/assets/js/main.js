var parseLateSwitch = (value)=> {
    if(value){
        return "Tarde";
    }
    return "A tiempo";
};

function addRow(carnet, schedule, late, tBody){
    var newRow = document.createElement("tr");
    var date = new Date();

newRow.innerHTML = `<td><b>${carnet}</b></td> 
<td>${schedule}</td> 
<td>${date.toLocaleString()}</td>
<td>${late}</td>`

tBody.appendChild(newRow);

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