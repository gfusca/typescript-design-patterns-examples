interface IIterator {
    next(): any;
    hasNext(): boolean;
}

export class CircularListIterator implements IIterator {
    position: number;
    elements = [];

    constructor(elements = []) {
        this.elements = elements;
        this.position = 0;
    }

    next() {
        const next = this.elements[this.position % this.elements.length];
        this.position++;
        return next;
    }

    hasNext(): boolean {
        return true;
    }
}

export class ListIterator implements IIterator {
    position: number;
    elements = [];

    constructor(elements = []) {
        this.elements = elements;
        this.position = 0;
    }

    next() {
        const next = this.elements[this.position];
        this.position++;
        return next;
    }

    hasNext(): boolean {
        return this.position < this.elements.length;
    }
}
