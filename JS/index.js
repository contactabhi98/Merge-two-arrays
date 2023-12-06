function mergeArray(arr1, arr2) {
    let arr = [...arr1, ...arr2]; // Merge arrays correctly
    console.log(arr);
       for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
       }

       return arr;
}

// Example usage
const myArray1 = [5, 2, 1, 4, 3];
const myArray2 = [7, 6, 8, 10, 9];
console.log(mergeArray(myArray1, myArray2));
