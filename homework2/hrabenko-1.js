function largestSummedHonor(arr, d) {
    let distance = arr.length / d;
    let i = 0;
    let summedHonor = []

    while (i < distance) {
        summedHonor.push(0)
        for(let j = i; j < arr.length; j += distance) {
            summedHonor[i] += arr[j];
        }
        i++;
    }

    return Math.max(...summedHonor);
}