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
            if (window.getSelection().empty) {  // Chrome
                window.getSelection().empty();
            } else if (window.getSelection().removeAllRanges) {  // Firefox
                window.getSelection().removeAllRanges();
            }
        } else if (document.selection) {  // IE?
            document.selection.empty();
        }
        copyArea.blur();
    }

    return (
        <>
            <div className="py-5">
                <div className="flex min-h-20 justify-center gap-x-2 pl-5 md:pl-0">
                    <div className="w-[80vw] md:w-[50vw] citation bg-[rgba(17,24,39,0.5)] border-1 rounded" >
                        <div className="p-2" id='copyArea' dangerouslySetInnerHTML={{ __html: citation === "" ? "Po zadání údajů se citace zobrazí zde." : citation }} />
                    </div>
                    <button className='button-icon' onClick={copyCitation}>
                        <Image src="/icons/copy.svg" alt="" width={20} height={20} />
                    </button>
                </div>
                <div className="flex w-full justify-center pt-2" >
                    <button onClick={clear} className="button justify-content">Vynulovat</button>
                </div >
                <div>
                    <div contentEditable id="citationOutput" style={{ position: 'fixed', left: '-10000px', right: '-10000px' }}></div>
                </div>
            </div>
        </>
    )
}