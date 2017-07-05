export class Subscriber implements Observer {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }
    update(event) {
        console.log(`Hello ${this.name}, you have unread news:  \n >${JSON.stringify(event)}`);
    }
}

export class Newspaper implements Observable {
    private news  = [];
    observers: Observer[] = [];

    addNews(news) {
        this.news.push(news);
        this.notify(news);
    }
    notify(event: any) {
        this.observers.map( (o) => {
            o.update(event);
        })
    }

    attach(observer: Observer) {
        this.observers.push(observer);
    }

    detach(observer: Observer) {
        throw new Error("Method not implemented =(.");
    }
}
