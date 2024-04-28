import { readFile as RF } from 'fs/promises';
// console.log(import.meta.url); -> To get file path in ES6 Moduling

const filePath = new URL('./index.html', import.meta.url);
let contents = await RF(filePath, { encoding: 'utf8' });
console.log(contents);

const data = {
    Name: 'Ashutosh Shukla',
    Occupation: 'Student',
    Age: 19
}

for (const [key, value] of Object.entries(data)) {
    contents = contents.replace(`{${key}}`, value);
}