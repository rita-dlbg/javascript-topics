// function calcVolume(length, breadth, height) {
//     return length * breadth * height;
// }
// console.log(calcVolume(4, 5, 6));

    function calcVolume(length) {
        return function (breadth) {
            return function (height) {
                return length * breadth * height;
            }
        }
    }
    console.log(calcVolume(4)(5)(6));