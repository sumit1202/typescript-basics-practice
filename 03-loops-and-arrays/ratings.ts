let ratings: number[] = [4, 4.2, 5, 3.6, 4.1];
let total:number=0;
for (let index = 0; index < ratings.length; index++) {
    console.log(ratings[index]);
    total+=ratings[index];
}
let average:number=total/ratings.length;
console.log("average ratings: " + average);
