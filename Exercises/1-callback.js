'use strict';

const iterate = (obj, callback) => {
    for (let key in obj) {
        callback(key, obj[key], obj)
    }
};

const object = {a: 1, b: 2, c: 3};
iterate(object, (key, value) => {
    console.log({key, value});
})

