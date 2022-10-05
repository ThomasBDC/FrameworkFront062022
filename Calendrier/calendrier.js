function getAllDatesInMonth(month, year) {
    let date = new Date(year, month, 1);
    let days = [];
    while (date.getMonth() === month) {
      //days.push(new Date(date).toLocaleDateString('fr-FR', { weekday: 'long' }));
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
}

let allDates = getAllDatesInMonth(9, 2022);
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    // Pour chaque date, je vais devoir créer une case dans mon tableau
document.querySelectorAll(".calendar").forEach(calendar => {
    allDates.forEach(date =>{
        calendar.append(date.toLocaleDateString("fr-FR", options))
            calendar.append(document.createElement("br"));
        })
})

