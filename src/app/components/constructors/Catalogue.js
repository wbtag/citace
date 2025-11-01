import { Base } from "./Base";

export class Catalogue extends Base {
    constructor(citationData) {
        super(citationData);
        this.editors = citationData.editors;
        this.chapterName = citationData.chapterName;
        this.citeChapter = citationData.citeChapter;
    }

    build() {
        const authors = this.getAuthors();
        const editors = this.getEditors();
        let citation = '';
        if (this.citeChapter) {
            citation += `${authors ? `${authors}` : ''}`
                + `${this.chapterName ? `${this.chapterName}, in: ` : ''}`
        }
        citation += `${editors ? editors : ''}`
            + `${this.name ? `<i>${this.name}</i> (kat. výst.), ` : ''}`
            + `${this.placeOfPublication ? `${this.placeOfPublication} ` : ''}`
            + `${this.yearOfPublication ? `${this.yearOfPublication}` : ''}`
        if (this.citeChapter && this.pageFrom && this.pageTo) {
            citation += `, s. ${this.pageFrom}–${this.pageTo}`;
        }
        citation += citation.length > 0 ? '.' : '';
        return citation
    }
}