var sortNumber = function (number) {
   number.sort(function (a, b) {
<<<<<<< HEAD
       if (a == b) {
=======
       if (a === b) {
>>>>>>> 5a4e86a27f2ecf53e964edf3c482f657fb5cc05e
           return 0;
       }
       return a < b ? -1 : 1;
   });
};

var number = [19, 3, 81, 1, 24, 21];
sortNumber(number);
console.log(number);