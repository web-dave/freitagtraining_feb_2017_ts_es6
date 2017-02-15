while (true) {
    // Aray
    const array = ['Peter', 'Paul', 'Marie'];
    const [a, b] = array;

    //*
    const c = array[0];
    const d = array[1];
    // */

    // reassignment easy way
    const [e, f] = [a, b];

    // Object
    let user = {
        name: 'web-dave',
        age: 36,
        twitter: '@webdave_de'
    };
    const {name, age} = user;
    console.log(`${name} is already ${age}!`); // web-dave is already 36!

}