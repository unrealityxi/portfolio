(function(){
    

let sample = [];

for (let i = 0; i < 10000; i++ ){
    sample[i] = getRandom(10000);
}


var toPython = sample.reduce((acc, num) => {
    return acc + num;
}, 0) % 2 == 0;

console.log(toPython);














    function getRandom(max){
        return Math.floor(Math.random() * max);
    }
})();