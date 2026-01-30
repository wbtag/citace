export class Base {
    constructor(citationData) {
        this.authors = citationData.authors;
        this.name = citationData.name;
        this.etAlia = citationData.etAlia;
        this.authorType = citationData.authorType;
        this.placeOfPublication = citationData.placeOfPublication;
        this.yearOfPublication = citationData.yearOfPublication;
        this.pageFrom = citationData.pageFrom;
        this.pageTo = citationData.pageTo;
    }

    getAuthors() {
        let citation = '';
        if (this.authors) {
            if (this.authors[0] === '') {
                return undefined;
            }
            if (this.etAlia && this.authors[0] != '') {
                citation += `${this.authors[0]} et al.`
                    + `${this.authorType === 'editors' ? ' (edd.), ' : ', '}`
            } else {
                if (this.authors.length === 1) {
                    if (this.authors[0] != '') {
                        citation += `${this.authors[0]}${this.authorType === 'editors' ? ' (ed.)' : ''}, `
                    }
                } else {
                    for (const [index, author] of this.authors.entries()) {
                        if (author != '') {
                            if (index != this.authors.length - 1) {
                                citation += `${author} – `
                            } else {
                                citation += `${author}${this.authorType === 'editors' ? ' (edd.)' : ''}, `
                            }
                        }
                    }
                }
            }
        }
        return citation;
    }

    getEditors() {
        let citation = '';
        if (this.editors) {
            if (this.editors[0] === '') {
                return undefined
            }
            if (this.etAlia && this.editors[0] != '') {
                citation += `${this.editors[0]} et al. (edd.), `
            } else {
                if (this.editors.length === 1) {
                    if (this.editors[0] != '') {
                        citation += `${this.editors[0]} (ed.), `
                    }
                } else {
                    for (const [index, editor] of this.editors.entries()) {
                        if (editor != '') {
                            if (index != this.editors.length - 1) {
                                citation += `${editor} – `
                            } else {
                                citation += `${editor} (edd.), `
                            }
                        }
                    }
                }
            }
        } else {
            return undefined
        }
        return citation;
    }
}