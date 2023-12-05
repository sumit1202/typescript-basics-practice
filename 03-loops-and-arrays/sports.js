var sports = ["Cricket", "Baseball", "Football", "Golf"];
// for (let index = 0; index < sports.length; index++) {
//     console.log(sports[index]);
// }
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var sport = sports_1[_i];
    if (sport == "Cricket") {
        console.log(sport + " <- my favorite");
    }
    else {
        console.log(sport);
    }
}
