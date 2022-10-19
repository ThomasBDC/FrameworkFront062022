/*

Todo list : 
-Ajoute un évènement sur le click sur une date
-Quand on clique sur la date, il faut la positionner sur l'input qu'on récupèrera grâce au 
data-target
calendar.dataset.target
*/


function getAllDatesInMonth(month, year) {
    month = month-1;
    let date = new Date(year, month, 1);
    let days = [];
    while (date.getMonth() === month) {
      //days.push(new Date(date).toLocaleDateString('fr-FR', { weekday: 'long' }));
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
}

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

// Pour chaque date, je vais devoir créer une case dans mon tableau
document.querySelectorAll(".calendar").forEach(calendar => {
    var today = new Date();
    
    fillCalendar(today.getMonth()+1, today.getFullYear(), calendar);
})

function fillCalendar(month, year, calendar){

    calendar.innerHTML = "";
    let allDates = getAllDatesInMonth(month, year);

    let allDatesWithWeek;
    let firstWeekOfMonth = getWeekNumber(allDates[0]);

    let table = document.createElement("table");
    let entete = document.createElement("tr");
    let btnPrev = document.createElement("th");
    btnPrev.innerHTML = '<button class="MonthPrev"><</button>';
    let entetecontent = document.createElement("th");
    entetecontent.colSpan = 8;

    entetecontent.innerHTML = 
        `
        ${allDates[0].toLocaleString('default', { month: 'long' })} ${allDates[0].getFullYear()}
        
        `;
        //Mois           ------------------------------------------- ANNEE

        let btnNext = document.createElement("th");
        btnNext.innerHTML = '<button class="MonthNext">></button>';
    entete.appendChild(btnPrev);
    entete.appendChild(entetecontent);
    entete.appendChild(btnNext);
    table.append(entete);
    let allDatesTried = twoDimensionArray(7, 7)
    allDates.forEach(date => {
        let noSemaine = getWeekNumber(date);    
        let DayNumber = date.getDay();
        if(DayNumber == 0){
            DayNumber = 7;
        }
        let ecartSemaine = noSemaine - firstWeekOfMonth;
        if(ecartSemaine < 0){
            ecartSemaine += 52;
        }
        allDatesTried[(ecartSemaine)][DayNumber] = date;
    });

    allDatesTried.forEach(semaine => {
        let line = document.createElement("tr");
        semaine.forEach(jour => {
            let caseTab = document.createElement("td");
            
            if((jour instanceof Date)){
                caseTab.innerHTML = jour.getDate();
                let today = new Date();
                if(jour.toDateString() == today.toDateString()){
                    caseTab.classList.add("Today");
                }
            }
            else{
            }
            line.append(caseTab)
        })
        table.append(line);
    })
    calendar.append(table);

    document.querySelectorAll(".MonthPrev").forEach(button=> {
        button.addEventListener("click", button => {
            if(month-1 < 1){
                fillCalendar(12, year-1, calendar);
            }
            else{
                fillCalendar(month-1, year, calendar);
            }
        });
    });
    document.querySelectorAll(".MonthNext").forEach(button=> {
        button.addEventListener("click", button => {
            if(month+1 > 12){
                fillCalendar(1, year+1, calendar);
            }
            else{
                fillCalendar(month+1, year, calendar);
            }
        });
    });
}

function getWeekNumber(d) {
    // Copy date so don't modify original
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    // Get first day of year
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    // Return array of year and week number
    return weekNo;
}

function twoDimensionArray(a, b) {
    let arr = [];

    // creating two dimensional array
    for (let i = 0; i< a; i++) {
        for(let j = 0; j< b; j++) {
            arr[i] = [];
        }
    }

    // inserting elements to array
    for (let i = 0; i< a; i++) {
        for(let j = 0; j< b; j++) {
            arr[i][j] = j;
        }
    }
    return arr;
}
