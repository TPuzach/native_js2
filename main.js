const students = [
    {
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: 'Alex',
        age: 21,
        isMarried: true,
        scores: 89,
    },
    {
        name: 'Nick',
        age: 20,
        isMarried: false,
        scores: 85,
    },
    {
        name: 'John',
        age: 19,
        isMarried: false,
        scores: 100,
    },
];

// const getNames = (array) => {
//     const result = []
//     const getValueForResult = (el) => el.name
//     for (let i  = 0; i < array.length; i++) {
//         result[i] = getValueForResult(array[i])
//     }
//     return result
// }
// console.log(getNames(students))

// const getUpdatedStudents = (array) => {
//     const result = []
//     const getValueForResult = (el) => ({...el, students:true})
//     for (let i  = 0; i < array.length; i++) {
//         result[i] = getValueForResult(array[i])
//     }
//     return result
// }
// console.log(getUpdatedStudents(students))

// const getMappedArray = (array, func) => {
//     const result = []
//     for (let i  = 0; i < array.length; i++) {
//         result[i] = func(array[i])
//      }
//    return result
// }
// console.log(getMappedArray(students, (el) => el.name))
// console.log(getMappedArray(students, (el) =>({...el,students: true})))


// const getFilteredArray = (array, func) => {
//     const result = []
//     for (let i  = 0; i < array.length; i++){
//        if (func(array[i]) === true){
//             result.push(array[i])
//        }
//     }
//     return result
// }
// console.log(getFilteredArray(students, st => st.age > 21))



//concat
// const myConcat = (array,param) => {
//     const result = []
//     for (let i  = 0; i < array.length; i++){
//         result.push(array[i])
//     }
//     if(Array.isArray(param)){
//
//         for(let i = 0; i < param.length; i++){
//             result.push(param[i])
//         }
//     } else {
//         result.push(param)
//     }
//     return result
// }
// console.log(myConcat(students, students))

//reverse
// const myReverse = (array) => {
//     for (let i = 0; i < Math.floor(array.length/2); i++){
//         let temp = array[i]
//         array[i] = array[array.length - 1 - i]
//         array[array.length - 1 - i] = temp
//     }
//     return array
// }
//
// console.log(myReverse(students))

//Slice
//  const mySlice = (array, startIndex, endIndex) => {
//      const result = []
//      for (let i  = startIndex; i < endIndex; i++) {
//          result.push(array[i])
//      }
//      return result
// }
// console.log(mySlice(students, 1, 3))


//includes
// const myIncludes = (array, item) => {
//     for (let i  = 0 ; i < array.length ; i++){
//         if(array[i] === item) {
//             return true
//         }
//     }
//     return false
// }
// console.log(myIncludes(students, 1))

//indexOf

// const myIndexOf = (array, item) =>{
//     for (let i  = 0 ; i < array.length ; i++){
//        if(array[i] === item) {
//              return i
//         }
//     }
//     return -1
// }
// console.log(myIndexOf(students, students[0]))

//every

// const myEvery = (array, func) => {
//     for (let i  = 0 ; i < array.length ; i++){
//        if ((func(array[i])) === false){
//            return false
//        }
//     }
//     return true
// }
// console.log(myEvery(students, st => st.isMarried === true))


//flat
const myFlat = (array, lavel = 1) => {
    const result = []

        for (let i = 0; i < array.length; i++) {

            if (Array.isArray(array[i]) && lavel > 0) {
                const newLavel = myFlat(array[i], lavel - 1)
                result.push(...newLavel)
            } else {
                result.push(array[i])
            }
        }

    return result
}
console.log(myFlat([1,2,[3,[[4,5],[6,7]]]], 2))

