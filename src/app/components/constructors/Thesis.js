import { Base } from "./Base";

export class Thesis extends Base {
    constructor(citationData) {
        super(citationData);
        this.author = citationData.author;
        this.thesisType = citationData.thesisType;
        this.department = citationData.department;
    }

    build() {
        let citation = '';
        citation += `${this.author ? `${this.author}, ` : ''}`
            + `${this.name ? `<i>${this.name}</i> ` : ''}`
            + `${this.name && this.thesisType ? `(${this.thesisType}), ` : ''}`
            + `${this.department ? `${this.department}, ` : ''}`
            + `${this.placeOfPublication ? `${this.placeOfPublication} ` : ''}`
            + `${this.yearOfPublication ? `${this.yearOfPublication}` : ''}`
        citation += citation.length > 0 ? '.' : '';
        return citation
    }
}