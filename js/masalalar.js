//Masala-4:
const arr = [1,3,3,3,5,6,2,8,9,0,11,12,13,14,15,16,17,18,19,20]

function calcSum(arr) {
    const toqArr = []
    const juftArr =[]
    for(let i of arr){
        if(arr[i] % 2 === 0){
            juftArr.push(arr[i])
            // console.log(arr[i]);
        }else{
            toqArr.push(arr[i])
        }

    }
    return `Juft array: ${juftArr}  Toq array: ${toqArr}`
}
console.log(calcSum(arr));
