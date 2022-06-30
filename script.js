function clearTable() {
    const cells = document.getElementsByTagName('td');
    while(cells.length > 0){
        cells[0].remove();
    }
}

function appendTable (weight, reps) {
    const table = document.getElementById('results');
    const row = document.createElement('tr');
    const addWeight = document.createElement('td'); 
    const addReps = document.createElement('td'); 

    addWeight.textContent = weight; 
    addReps.textContent = reps + "RM";

    row.append(addReps, addWeight); 
    table.appendChild(row);

}
function calcMax () {
        const weight = document.getElementsByClassName('weight')[0].value;
        const reps = document.getElementsByClassName('reps')[0].value;

        let max = Math.round(weight * (36/(37 - reps))* 10) / 10;
        if(isNaN(max))(alert('Numbers only.'));
        else{
            appendTable(max, 1);

            for(let i = 2; i < 11; i++){
                let maxList = Math.round((max * (37 - i)) / 36 * 10) / 10;
                appendTable(maxList, i);
            }
        }

};

(function calculate(){
    const goBtn = document.getElementsByName('go-button')[0];
    goBtn.addEventListener('click', function(){
        clearTable();
        calcMax();
    });
})();

// calculate();