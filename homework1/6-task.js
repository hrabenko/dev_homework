function highestNumber(num) {

    let arr = String(num).split("");

    for (let i = 0; i < arr.length; i++) {
        for (let j= arr.length - 1; j > i; j--) {
            console.log("Current array: ", arr)
            console.log("Current element 1: ", arr[i], " current index: ", i)
            console.log("Current element 2: ", arr[j], " current index: ", j)

            if (arr[i] < arr[j]) {

                let elem = arr[i];
                arr[i] = arr[j];
                arr[j] = elem;


            }

            console.log("Element 1: ", arr[i], " index: ", i)
            console.log("Element 2: ", arr[j], " index: ", j)
        }
    }

    return Number(arr.join(""));
}

console.log(highestNumber(123456789))