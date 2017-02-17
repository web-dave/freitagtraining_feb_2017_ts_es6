export class Count {
    $count: any;
    count = 0;
    constructor(c) {
        this.$count = document.getElementsByClassName('count')[0];
        this.count = c;
        this.$count.innerHTML = this.count;
    }

    increment = () => { this.$count.innerHTML = ++this.count; };
    decrement = () => { this.$count.innerHTML = --this.count; };


}