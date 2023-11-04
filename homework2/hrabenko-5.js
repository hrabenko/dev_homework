function getRootProperty(obj, num) {
    for (let key in obj) {

        if (Array.isArray(obj[key]) && obj[key].includes(num)) {
            return key;
        } else if (typeof obj[key] === 'object') {
            let property = getRootProperty(obj[key], num);

            if (property) {
                return key;
            }
        }
    }

    return null;
}