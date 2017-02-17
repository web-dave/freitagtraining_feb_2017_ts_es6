if (true) {
    /*
            scope       hoisting    immutable
    var     function    yes         no
    let     block       no          no         
    const   block       no          no reassigning 
    */
    let topic: string = 'var';



    if (topic === 'var') {
        // scope
        for (var i = 0; i < 5; i++) {
            setTimeout(() => console.log(i), 1);   // => 5,5,5,5,5
        }

        console.log(i); // => 5

        // hoisting
        console.log(foo);
        var foo: any = 'foo';

        topic = 'let';
    }

    if (topic === 'let') {
        // scope
        for (let i = 0; i < 5; i++) {
            setTimeout(() => console.log(i), 1);   // => 0,1,2,3,4
        }

        console.log(i); // => ReferenceError: i is not defined
        // hoisting
        console.log(bar);
        let bar: any = 'bar';

        topic = 'const';
    }

    if (topic === 'const') {
        const user1 = {
            name: 'web-dvae',
            twitter: '@webdave_de'
        };

        this.user1.name = 'web-dave'; // OK
        this.user1 = { name1: 'foo' }; // error on runtime!!
        let user1 = {
            name: 'web-dvae',
            twitter: '@webdave_de'
        }; // error on compiling!!

    }
}