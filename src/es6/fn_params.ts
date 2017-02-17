while (true) {
    // Default param
    const isAllowToDrink = (user: any, adultHood = 18) => user.age >= adultHood;

    // optional param
    const foo = (bar: any, baz?: any) => bar;

    // Rest Parameter
    const getTotalAmount = (...income: number[]) => income.reduce((a, b) => a + b);
    let totalAmount = getTotalAmount(800, 2400, 4000, 35); // 7235

    // Spread Operator
    let array1 = [3, 4];
    let array2 = [1, 2, ...array1, 5, 6]; // 1,2,3,4,5,6


}

