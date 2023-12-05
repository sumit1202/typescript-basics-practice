var sports2 = ["Cricket", "Baseball", "Football", "Golf"];
sports2.push("Tennis");
sports2.push("Hockey");
for (var _i = 0, sports2_1 = sports2; _i < sports2_1.length; _i++) {
    var sport = sports2_1[_i];
    if (sport == "Cricket") {
        console.log(sport + " <- my favorite");
    }
    else {
        console.log(sport);
    }
}
