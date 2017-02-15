function goodOldFn(params: any[], owner: any) {
    return params.filter(function (p) {
        return p.owner === owner;
    });
}

const fancyFn = (params: any[], owner: any) =>
    params.filter((p) =>
        p.owner === owner);

function comeBackOld(x) { return x; }
const comeBack = x => x;

const sum = (a: number, b: number) => a + b;

// multiline body
const check = (a: number, b: number) => {
    if (a < b) {
        // ...
    }
    return a + b;
};
