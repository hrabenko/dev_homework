function findIndex(arr) {

    for (let i = 0; i < arr.length; i++) {

        let sumBeforeNumber = 0;
        let sumAfterNumber = 0;
        let bool = false;

        for (let j = 0; j < i; j++) {
            sumBeforeNumber += arr[j];
            bool = true;
        }

        for (let j = arr.length - 1; j > i; j--) {
            sumAfterNumber += arr[j];
            bool = true;
        }

        if ((sumAfterNumber === sumBeforeNumber && bool) || arr.length === 1) {
            return i;
        }
    }

    return -1;
}
