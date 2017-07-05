import {CircularListIterator, ListIterator} from "./iterator";

const elements = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const circularIterator = new CircularListIterator(elements);

console.log("Circular element iteration...");
for (let i = 0; i < 20; ++i) {
    console.log(`next element: ${circularIterator.next()}`);
}

const listIterator = new ListIterator(elements);

console.log("linear element iteration...");
while (listIterator.hasNext()) {
    console.log(`next element: ${listIterator.next()}`);
}
