import { Base } from "./Base";

export class NewsArticle extends Base {

    constructor(citationData) {
        super(citationData);
        this.author = citationData.author;
        this.medium = citationData.medium;
        this.issue = citationData.issue;
        this.date = citationData.date;
    }

    build() {
        let citation = '';

        citation += `${this.author ? `${this.author}, ` : ''}`
            + `${this.name ? `${this.name}, ` : ''}`
            + `${this.medium ? `<i>${this.medium}</i>, ` : ''}`
            + `${this.yearOfPublication ? `${this.yearOfPublication}, ` : ''}`
            + `${this.issue ? `č. ${this.issue}, ` : ''}`;

        if (this.pageFrom) {
            if (this.pageTo) {
                citation += `, s. ${this.pageFrom}–${this.pageTo}`;
            } else {
                citation += `, s. ${this.pageFrom}`;
            }
        }

        citation += citation.length > 0 ? '.' : '';
        return citation
    }
}