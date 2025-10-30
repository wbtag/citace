import { Base } from "./Base";

export class CatalogueEntry extends Base {
    constructor(citationData) {
        super(citationData);
        this.initials = citationData.initials;
        this.entryNumber = citationData.entryNumber;
    }

    build() {
        const authors = this.getAuthors();
        // const editors = this.getEditors();
        let citation = '';
        citation += authors ? authors : ''
    }
}