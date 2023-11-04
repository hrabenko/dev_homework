function unpackSausages(arr) {
    let regExp = /^\[(.)\1{3}\]$/
    let sausages = []

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (regExp.test(arr[i][j])) {
                sausages.push(arr[i][j]);
            }
        }
    }

    for (let i = 4; i < sausages.length; i += 4) {
        sausages.splice(i, 1);
    }

    let result = unpack(sausages)

    return result.join(" ");

}

function unpack(arr) {
    return arr.map(product => {
        const splitPack = product.slice(1, -1).split("");
        return splitPack.join(" ");
    });
}
