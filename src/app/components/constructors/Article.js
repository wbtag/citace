import { Base } from "./Base";

export class Article extends Base {

    constructor(citationData) {
        super(citationData);
        this.journal = citationData.journal;
        this.volume = citationData.volume;
        this.volumeToRoman = citationData.volumeToRoman;
        this.issue = citationData.issue;
    }

    build() {
        let citation = '';
        const authors = this.getAuthors();
        citation += `${authors ? authors : ''}`
            + `${this.name ? `${this.name}, ` : ''}`
            + `${this.journal ? `<i>${this.journal}</i> ` : ''}`
            + `${this.volume ? this.volumeToRoman ? `${Article.toRoman(this.volume)}, ` : `${this.volume}, ` : ''}`
            + `${this.yearOfPublication ? `${this.yearOfPublication}, ` : ''}`
            + `${this.issue ? `č. ${this.issue}, ` : ''}`
            + `${this.pageFrom && this.pageTo ? `s. ${this.pageFrom}–${this.pageTo}` : ''}`;
        citation += citation.length > 0 ? '.' : '';
        return citation
    }

    static toRoman(number) {
        if (number) {
            number = parseInt(number);
            const numerals = {
                M: 1000,
                CM: 900,
                D: 500,
                CD: 400,
                C: 100,
                XC: 90,
                L: 50,
                XL: 40,
                X: 10,
                IX: 9,
                V: 5,
                IV: 4,
                I: 1
            };
            let romanizedNumber = '';

            for (let i of Object.keys(numerals)) {
                const q = Math.floor(number / numerals[i]);
                number -= q * numerals[i];
                romanizedNumber += i.repeat(q);
            }
            return romanizedNumber;
        }
    }
}