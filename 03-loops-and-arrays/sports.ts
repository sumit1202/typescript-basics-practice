let sports: string[] = ["Cricket", "Baseball", "Football", "Golf"];
// for (let index = 0; index < sports.length; index++) {
//     console.log(sports[index]);
// }

for (let sport of sports) {
    if (sport == "Cricket") {
        console.log(sport + " <- my favorite")
    } else {
        console.log(sport);
    }
}