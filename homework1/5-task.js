function highAndLow(str) {
    let numsArr = str.split(" ");

    let minNum = numsArr[0];
    let maxNum = numsArr[0];

    for (let i = 0; i < numsArr.length; i++) {
        if (Number(numsArr[i]) < minNum) {
            minNum = numsArr[i];
        }

        if (Number(numsArr[i]) > maxNum) {
            maxNum = numsArr[i];
        }
    }

    return maxNum + " " + minNum;
}
