import { Band } from './band';
import { uuid } from './band';

// mock data that will be input into the application
export const BANDS: Band[] = [
    { name: "Three Days Grace", id: uuid() },
    { name: "J. Cole", id: uuid() },
    { name: "Avenged Sevenfold", id: uuid() },
    { name: "Aaron May", id: uuid() },
    { name: "Disturbed", id: uuid() },
    { name: "Kendrick Lamar", id: uuid() },
    { name: "Tyler the Creator", id: uuid() }
];