while (true) {
    let foo: string = 'bar';
    let foo1: string[] = ['bar', 'bar1'];

    let bar: number = 1;
    let bar1: number[] = [1, 2, 3];

    let baz: any = 'bar'; // 1 || {}...
    let baz1: any[] = ['bar', 1, {}];

    // custom types
    interface IUser {
        name: string;
        age: number;
        twitter?: string;
    }

    let user: IUser = {
        name:  'web-dave',
        age: 36,
        twitter: '@webdave_de'
    };

}