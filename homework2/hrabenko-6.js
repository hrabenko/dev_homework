function totalPerimeter(arr) {
    let perimeter = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === 'X') {

                if (i === 0 || arr[i - 1][j] !== 'X') {
                    perimeter += 1;
                }

                if (j === 0 || arr[i][j - 1] !== 'X') {
                    perimeter += 1;
                }

                if (i === arr.length - 1 || arr[i + 1][j] !== 'X') {
                    perimeter += 1;
                }

                if (j === arr[i].length || arr[i][j + 1] !== 'X') {
                    perimeter += 1;
                }
            }

        }
    }

    return "Total land perimeter: " + perimeter
}
