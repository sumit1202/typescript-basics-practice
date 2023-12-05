let sports2: string[] = ["Cricket", "Baseball", "Football", "Golf"];
sports2.push("Tennis");
sports2.push("Hockey");

for (let sport of sports2) {
    if (sport == "Cricket") {
        console.log(sport + " <- my favorite")
    } else {
        console.log(sport);
    }
}