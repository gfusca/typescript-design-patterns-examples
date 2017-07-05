import {Newspaper, Subscriber} from "./observer";

let newspaper = new Newspaper();
const subscriber = new Subscriber("Gabriel");

newspaper.attach(subscriber);
newspaper.addNews({title: "Aliens exist!", body: "asdasldkasld 1l2k3 1l2k3 ñ123ñ12j3123l123"});