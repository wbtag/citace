import { Article } from "../constructors/Article.js";
import { Book } from "../constructors/Book.js"
import { Catalogue } from "../constructors/Catalogue.js";
import { CatalogueEntry } from "../constructors/CatalogueEntry.js";
import { Chapter } from "../constructors/Chapter.js";
import { InternetSource } from "../constructors/InternetSource.js";
import { Thesis } from "../constructors/Thesis.js";
import Image from "next/image.js";
import { NewsArticle } from "../constructors/NewsArticle.js";
import { Review } from "../constructors/Review.js";

export default function CitationBox({ citationData, citationBuilder, clear }) {

    const citationBuilders = {
        'article': Article,
        'book': Book,
        'catalogue': Catalogue,
        'catalogueEntry': CatalogueEntry,
        'chapter': Chapter,
        'internetSource': InternetSource,
        'newsArticle': NewsArticle,
        'review': Review,
        'thesis': Thesis
    };

    const citationBuilderClass = new citationBuilders[citationBuilder](citationData)
    const citation = citationBuilderClass.build();

    const copyCitation = () => {
        let copyArea = document.getElementById("citationOutput");
        copyArea.innerHTML = citation;
        copyArea.focus();
        document.execCommand("selectAll");
        document.execCommand("copy");
        if (window.getSelection) {
            if (window.getSelection().empty) {
                window.getSelection().empty();
            } else if (window.getSelection().removeAllRanges) {
                window.getSelection().removeAllRanges();
            }
        } else if (document.selection) {
            document.selection.empty();
        }
        copyArea.blur();
    }

    const isEmpty = citation === "";

    return (
        <div className="py-6">
            <div className="flex min-h-20 justify-center gap-x-3 md:pl-0 px-4">
                <div className={`w-[80vw] md:w-[50vw] citation-glass ${isEmpty ? 'opacity-50' : ''} transition-opacity duration-300`}>
                    <div
                        className="p-4 text-sm leading-relaxed"
                        id='copyArea'
                        dangerouslySetInnerHTML={{
                            __html: isEmpty
                                ? '<span style="opacity:0.4; font-style:italic">Po zadání údajů se citace zobrazí zde.</span>'
                                : citation
                        }}
                    />
                </div>
                <button
                    className='button-icon self-start mt-1'
                    onClick={copyCitation}
                    title="Kopírovat citaci"
                >
                    <Image src="/icons/copy.svg" alt="Kopírovat" width={18} height={18} />
                </button>
            </div>
            <div className="flex justify-center pt-3">
                <button onClick={clear} className="button" style={{ fontSize: '0.8rem', opacity: 0.7 }}>
                    Vynulovat
                </button>
            </div>
            <div>
                <div contentEditable id="citationOutput" style={{ position: 'fixed', left: '-10000px', right: '-10000px', color: 'black' }}></div>
            </div>
        </div>
    )
}
