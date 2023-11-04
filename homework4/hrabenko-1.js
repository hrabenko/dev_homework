function VigenèreCipher(key, alphabet) {
    this.key = key;
    this.alphabet = alphabet;

    this.encode = function (str) {
        let res = '';

        for (let i = 0; i < str.length; i++) {
            let strIndex = this.alphabet.indexOf(str[i]);

            if (strIndex === -1) {
                res += str[i];
            } else {
                let keyIndex = this.alphabet.indexOf(this.key[i % this.key.length]);
                let index = (strIndex + keyIndex) % this.alphabet.length;
                res += this.alphabet[index];
            }

        }
        return res;
    }

    this.decode = function (str) {
        let res = '';

        for (let i = 0; i < str.length; i++) {
            let strIndex = this.alphabet.indexOf(str[i]);

            if (strIndex === -1) {
                res += str[i];
            } else {
                let keyIndex = this.alphabet.indexOf(this.key[i % this.key.length]);
                let index = (strIndex - keyIndex + this.alphabet.length) % this.alphabet.length;
                res += this.alphabet[index];
            }
        }
        return res;
    }
}
