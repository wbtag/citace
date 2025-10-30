import { Base } from "./Base";

export class Book extends Base {

    constructor(citationData) {
        super(citationData);
    }

    build() {
        let citation = '';
        const authors = this.getAuthors();
        citation += `${authors ? authors : ''}`
            + `${this.name ? `<i>${this.name}</i>, ` : ''}`
            + `${this.placeOfPublication ? `${this.placeOfPublication} ` : ''}`
            + `${this.yearOfPublication ? `${this.yearOfPublication}` : ''}`
        citation += citation.length > 0 ? '.' : '';
        return citation
    }
}