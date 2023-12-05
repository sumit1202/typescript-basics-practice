var ratings = [4, 4.2, 5, 3.6, 4.1];
var total = 0;
for (var index = 0; index < ratings.length; index++) {
    console.log(ratings[index]);
    total += ratings[index];
}
var average = total / ratings.length;
console.log("average ratings: " + average);
