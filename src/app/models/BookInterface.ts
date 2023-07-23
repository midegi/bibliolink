// Interfaccia 
export interface BookType {
    title: string;
    author: string; 
    available: boolean;
    lent_to?: string;
    date?: string;
}