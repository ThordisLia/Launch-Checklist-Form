// Write your JavaScript code here!
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
   response.json().then(function(json) {  
    const destination = document.getElementById("missionTarget");
        let index = Math.floor(Math.random()*json.length);
            destination.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[index].name}</li>
               <li>Diameter: ${json[index].diameter}</li>
               <li>Star: ${json[index].star}</li>
               <li>Distance from Earth: ${json[index].distance}</li>
               <li>Number of Moons: ${json[index].moons}</li>
            </ol>
            <img src="${json[index].image}">
            `;
                });
        });  
   let form = document.querySelector("form");
       form.addEventListener("submit", function(event){
       let pilotNameInput = document.querySelector("input[name=pilotName]");
       let copilotNameInput = document.querySelector("input[name=copilotName]");
       let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
       let cargoMassInput = document.querySelector("input[name=cargoMass]");
           if(typeof pilotNameInput.value !== "string" && isNaN(pilotNameInput.value) == true) {
               alert("Please enter a valid pilot name") }
           if(typeof copilotNameInput.value !== "string" && isNaN(copilotNameInput.value) ==true) {
               alert("Please enter a valid copilot name") }
           if(typeof fuelLevelInput.value !== "number" && isNaN(fuelLevelInput.value) == true) {
               alert("Please enter a valid fuel level")}
           if(typeof cargoMassInput.value !=="number" && isNaN(cargoMassInput.value) == true) {
               alert("Please enter a valid cargo mass")}
           if(pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === ""){
           alert("All fields are required!");
           }
           event.preventDefault();
       //submit event closed
           
         const faultItems = document.getElementById("faultyItems");
         const launchStatus = document.getElementById("launchStatus");
         const pilot = document.getElementById("pilotStatus");
         pilot.innerHTML = `Pilot ${pilotNameInput.value} Ready`;
         const copilot = document.getElementById("copilotStatus");
         copilot.innerHTML = `Copilot ${copilotNameInput.value} Ready`;
         const fuelStatus = document.getElementById("fuelStatus");
         const cargoStatus = document.getElementById("cargoStatus");
         if (fuelLevelInput.value >= 10000 && cargoMassInput.value <= 10000){
            launchStatus.innerHTML = `Shuttle is ready for launch`;
            launchStatus.style.color = "green";
            faultyItems.style.visibility = "hidden";
         } else {
            launchStatus.innerHTML = `Shuttle not ready for launch`;
            launchStatus.style.color = "red";
            faultyItems.style.visibility = "visible";
                if (fuelLevelInput.value < 10000){
                    fuelStatus.innerHTML = `Not enough fuel for the journey`
                } else { fuelStatus.innerHTML = `Fuel level high enough for launch`};

                if (cargoMassInput.value > 10000){
                    cargoStatus.innerHTML = `Too much cargo mass to take off`
                } else { cargoStatus.innerHTML = `Cargo mass low enough for launch`};
            }
            });
});//load event closed

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/


//If I channge fuel or cargo level from good to bad to good, then hidden panel doesn't change the status