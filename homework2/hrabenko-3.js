function groupAnagrams(arr) {

    let anagrams = {};

    for (let i = 0; i < arr.length; i++) {
        let sortedWord = arr[i].split("").sort().join("");

        if(sortedWord in anagrams) {
            anagrams[sortedWord].push(arr[i]);
        } else {
            anagrams[sortedWord] = [arr[i]];
        }
    }

    return Object.values(anagrams);

}
