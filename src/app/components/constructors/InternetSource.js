import { Base } from "./Base";

export class InternetSource extends Base {

    constructor(citationData) {
        super(citationData);
        this.medium = citationData.medium;
        this.accessedDate = new Date(citationData.accessedDate).toLocaleDateString('cs-CZ')
        this.link = citationData.link;
    }

    build() {
        let citation = '';
        const authors = this.getAuthors();
        citation += `${authors ? authors : ''}`
            + `${this.name ? `${this.name}, ` : ''}`
            + `${this.medium ? `<i>${this.medium}</i>, ` : ''}`
            + `${this.link ? `${this.link}, ` : ''}`
            + `${this.accessedDate ? `vyhledáno ${this.accessedDate}` : ''}`
        citation += citation.length > 0 ? '.' : '';
        return citation
    }
}