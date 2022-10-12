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

let allDates = getAllDatesInMonth(05, 2022);
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

// Pour chaque date, je vais devoir créer une case dans mon tableau
document.querySelectorAll(".calendar").forEach(calendar => {
    let allDatesWithWeek;
    let firstWeekOfMonth = getWeekNumber(allDates[0]);

    let table = document.createElement("table");
    let allDatesTried = twoDimensionArray(7, 7)

    allDates.forEach(date => {
        let noSemaine = getWeekNumber(date);    
        let DayNumber = date.getDay();
        if(DayNumber == 0){
            DayNumber = 7;
        }
        allDatesTried[(noSemaine - firstWeekOfMonth)][DayNumber] = date;
    });

    allDatesTried.forEach(semaine => {
        let line = document.createElement("tr");
        semaine.forEach(jour => {
            let caseTab = document.createElement("td");
            if((jour instanceof Date)){
                caseTab.innerHTML = jour.getDate();
            }
            else{
            }
            line.append(caseTab)
        })
        table.append(line);
    })
    calendar.append(table);
})


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
