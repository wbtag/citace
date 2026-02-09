import { Base } from "./Base";

export class CatalogueEntry extends Base {
    constructor(citationData) {
        super(citationData);
        // this.initials = citationData.initials;
        this.editors = citationData.editors;
        this.entryName = citationData.entryName;
        this.entryNumber = citationData.entryNumber;
    }

    build() {
        const authors = this.getAuthors();
        const editors = this.getEditors();
        let citation = '';
        citation += (authors ? `${authors}` : '')
            + (this.entryName ? `heslo ${this.entryName},` : '');
        citation += (editors ? ` in: ${editors}` : '')
            + (this.name ? `<i>${this.name}</i> (kat. výst.), ` : '')
            + (this.placeOfPublication ? `${this.placeOfPublication} ` : '')
            + (this.yearOfPublication ? `${this.yearOfPublication}` : '')
        if (this.pageFrom) {
            if (this.pageTo) {
                citation += `, s. ${this.pageFrom}–${this.pageTo}`;
            } else {
                citation += `, s. ${this.pageFrom}`;
            }
        }
        citation += this.entryNumber ? `, č. kat. ${this.entryNumber}` : '';
        citation += citation.length > 0 ? '.' : '';
        return citation
    }
}