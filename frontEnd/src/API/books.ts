import axios from 'axios';

export interface BookResponse {
    authors: string[];
    genres: string[];
    image: string;
    price: number;
    title: string;
    _id: string;
}

export const getAllBooks = (): Promise<void | BookResponse[]> => {
    return axios
        .get<BookResponse[]>("http://localhost:3001/books")
        .then(response => response.data);
}
