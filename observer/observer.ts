interface Observer {
    update(event);
}

interface Observable {
    observers: Array<Observer>;
    notify(event);
    attach(observer : Observer)
    detach(observer: Observer)
}
