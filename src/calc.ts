export class Calc {
    n1: string;
    n2: string;
    target = 'n1';
    result: number = null;
    operator: string = '';
    display: any = document.getElementById('display');

    constructor() {
        this.clear();
    }

    clear() {
        this.n1 = '';
        this.n2 = '';
        this.operator = '';
        this.target = 'n1';
        this.result = null;
        this.display.value = `${this.n1} ${this.operator} ${this.n2}`;
    }

    setOperator(op: string): void {
        this.operator = op;
        this.target = 'n2';
        this.display.value = `${this.n1} ${this.operator} ${this.n2}`;
    }

    typeNumber(val: string) {
        if (this.result !== null) {
            this.clear();
        }
        if (this.target === 'n1') {
            this.n1 += val;
        } else {
            this.n2 += val;
        }
        this.display.value = `${this.n1} ${this.operator} ${this.n2}`;
    }

    equals() {
        switch (this.operator) {
            case '+':
                this.result = parseFloat(this.n1) + parseFloat(this.n2);
                break;
            case '-':
                this.result = parseFloat(this.n1) - parseFloat(this.n2);
                break;
            case '*':
                this.result = parseFloat(this.n1) * parseFloat(this.n2);
                break;
            case '/':
                this.result = parseFloat(this.n1) / parseFloat(this.n2);
                break;
        }
        this.display.value = `${this.n1} ${this.operator} ${this.n2} = ${this.result}`;
    }



}
