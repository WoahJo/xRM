const xRM = {
    appendTable: function(weight, reps) {
        const table = document.getElementById('results');
        const row = document.createElement('tr');
        const addWeight = document.createElement('td'); 
        const addReps = document.createElement('td'); 

        addWeight.textContent = weight +"lbs"; 
        addReps.textContent = reps + "RM";

        row.append(addReps, addWeight); 
        table.appendChild(row);

    }, 
    getWeight: function(){return this.weight;},
    getReps: function() {return this.reps;},
    oneMax: function () {
        const weight = document.getElementsByClassName('weight')[0].value;
        const reps = document.getElementsByClassName('reps')[0].value;

        let max = Math.floor(weight * (36/(37 - reps) ));
        this.appendTable(max, 1);     
    },
    // allMax: function () {

    // }
};

function calculate(){
    const goBtn = document.getElementsByName('go-button')[0];
    goBtn.addEventListener('click', function(){
        xRM.oneMax(xRM.weight, xRM.reps);
    });
};

calculate();