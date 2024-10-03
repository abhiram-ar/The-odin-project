const sumAll = function(...num) {
    num.sort()
    for (let n of num){
        if(n < 0 || typeof(n) !== "number" || n%1 !== 0){
            return "ERROR"
        }
    }
    
   
    let res = 0;
    for(let i = num[0]; i<=num[1]; i++){
        res += i
    }
    return res
};

// Do not edit below this line
module.exports = sumAll;
