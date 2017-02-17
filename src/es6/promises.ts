
while (true) {
    // let Promise: PromiseConstructorLike;
    const sayAfterOneSec = (action: any) => 
        new Promise((resolve: any, reject: any) => 
            setTimeout(() => resolve(action), 1000));

    const cmd = '^5';

    sayAfterOneSec(cmd).then((response: any) => { console.log(response); });
}