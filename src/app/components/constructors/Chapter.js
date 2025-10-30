import { Base } from "./Base";

export class Chapter extends Base {
    constructor(citationData) {
        super(citationData);
        this.chapterName = citationData.chapterName;
        this.editors = citationData.editors;
        this.editorEtAlia = citationData.editorEtAlia;
    }

    build() {
        let citation = '';
        const editors = this.getEditors();
        const authors = this.getAuthors();
        citation += `${authors ? authors : ''}`
            + `${this.chapterName ? `${this.chapterName}, ` : ''}`
            + `${editors || this.name ? 'in: ' : ''}`
            + `${editors ? editors : ''}`
            + `${this.name ? `<i>${this.name}</i>, ` : ''}`
            + `${this.placeOfPublication ? `${this.placeOfPublication} ` : ''}`
            + `${this.yearOfPublication ? `${this.yearOfPublication}, ` : ''}`
            + `${this.pageFrom && this.pageTo ? `s. ${this.pageFrom}–${this.pageTo}` : ''}`
        citation += `${citation.length > 0 ? '.' : ''}`;
        return citation
    }
}