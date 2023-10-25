
// You should implement your task here.

// module.exports = function towelSort(matrix) {
//     if (matrix === undefined)
//         matrix = [];
//     else {
//         for (let i = 0; i < matrix.length; i++) {
//             if (i % 2 === 0) {
//                 matrix[i] = matrix[i].reverse()
//             }
//             else {
//                 matrix[i] = matrix[i]
//             }
//         }
//     }
//     return matrix.flatMap(matrix[i])
// }


// module.exports = function towelSort (matrix) {
//     if (matrix === undefined)
//     matrix = [];
//     else {
//         matrix.reduce((accumulator, currentValue, index) => {
//             if (index % 2) {
//                 return  accumulator.concat(currentValue.reverse())
//             } else {
//                 return  accumulator.concat(currentValue)
//             }})
//         }
//         }



module.exports = function towelSort(matrix) {
    if (matrix === undefined)
    return [];
else {
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 > 0) {
            matrix[i] = matrix[i].reverse();
        }
    }
    return matrix.flatMap((num) => num)
}
}
