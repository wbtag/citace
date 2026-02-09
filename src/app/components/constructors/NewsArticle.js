import { Base } from "./Base";

export class NewsArticle extends Base {

    constructor(citationData) {
        super(citationData);
        this.author = citationData.author;
        this.medium = citationData.medium;
        this.issue = citationData.issue;
        this.date = citationData.date;
        this.articles = citationData.articles;
        this.multipleArticles = citationData.multipleArticles;
    }

    build() {
        let citation = '';

        citation += `${this.author ? `${this.author}, ` : ''}`
            + `${this.name ? `${this.name}, ` : ''}`
            + `${this.medium ? `<i>${this.medium}</i>, ` : ''}`
            + `${this.yearOfPublication ? `${this.yearOfPublication}, ` : ''}`

        if (this.multipleArticles) {

            let first = true;

            this.articles.forEach(article => {

                if (!first) {
                    citation += '; '
                }

                citation += `${article.issue ? `${article.issue}, ` : ''}`
                    + `${article.date ? `${article.date}` : ''}`

                if (article.pageFrom) {
                    if (article.pageTo) {
                        citation += `, s. ${article.pageFrom}–${article.pageTo}`;
                    } else {
                        citation += `, s. ${article.pageFrom}`;
                    }
                }

                first = false;
            });
        } else {
            citation += `${this.articles[0].issue ? `${this.articles[0].issue}, ` : ''}`
                + `${this.articles[0].date ? `${this.articles[0].date}, ` : ''}`
                + `${this.articles[0].pageFrom ? `${this.articles[0].pageFrom}, ` : ''}`
                + `${this.articles[0].pageTo ? `${this.articles[0].pageTo}, ` : ''}`

            if (this.articles[0].pageFrom) {
                if (this.articles[0].pageTo) {
                    citation += `, s. ${this.articles[0].pageFrom}–${this.articles[0].pageTo}`;
                } else {
                    citation += `, s. ${this.articles[0].pageFrom}`;
                }
            }
        }

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