function Vector(vector) {
    this.vector = vector;

    this.lengthCheck = function (vector1, vector2) {
        if (vector1.length !== vector2.length) {
            throw new Error("Vectors with different lengths");
        }
    }

    this.add = function (secondVector) {
        this.lengthCheck(this.vector, secondVector.vector);
        let resArr = this.vector.map((elem, index) => elem + secondVector.vector[index])
        return new Vector(resArr);
    }

    this.subtract = function (secondVector) {
        this.lengthCheck(this.vector, secondVector.vector);
        let resArr = this.vector.map((elem, index) => elem - secondVector.vector[index])
        return new Vector(resArr);
    }

    this.dot = function (secondVector) {
        this.lengthCheck(this.vector, secondVector.vector);
        let res = this.vector.reduce((accumulator, elem, index) => accumulator + elem * secondVector.vector[index], 0);
        return res;
    }

    this.norm = function () {
        let res = this.vector.reduce((accumulator, elem) => accumulator + Math.pow(elem, 2), 0);
        return Math.sqrt(res);
    }

    this.toString = function () {
        return '(' + this.vector.join(',') + ')'
    }

    this.equals = function (secondVector) {
        if (this.vector.length !== secondVector.vector.length) {
            return false;
        }

        for (let i = 0; i < this.vector.length; i++) {
            if (this.vector[i] !== secondVector.vector[i]) {
                return false;
            }
        }

        return true;
    }
}
