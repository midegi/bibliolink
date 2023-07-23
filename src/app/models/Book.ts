import { BookType } from "./BookInterface";

export class Book implements BookType {
    id: number;
    title: string;
    author: string; 
    available: boolean;
    lent_to?: string;
    date?: string;

    constructor(id: number, title: string, author: string, available: boolean, lent_to?: string, date?: string) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.available = available;
        this.lent_to = !lent_to ? "" : lent_to;
        this.date = date;
    }
}