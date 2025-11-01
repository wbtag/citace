import { Article } from "./constructors/Article.js";
import { Book } from "./constructors/Book.js"
import { Catalogue } from "./constructors/Catalogue.js";
import { Chapter } from "./constructors/Chapter.js";
import { Thesis } from "./constructors/Thesis.js";
import CopyIcon from "./icons/copy.js";
import './citationBox.css';

export default function CitationBox({ citationData, citationBuilder, clear }) {

    const citationBuilders = {
        'article': Article,
        'book': Book,
        'chapter': Chapter,
        'catalogue': Catalogue,
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
            <div className="pt-5">
                <div className="flex min-h-20 justify-center gap-x-2">
                    <div className="citation bg-[rgba(17,24,39,0.5)] border-1 rounded" >
                        <div className="p-2" id='copyArea' dangerouslySetInnerHTML={{ __html: citation === "" ? "Po zadání údajů se citace zobrazí zde." : citation }} />
                    </div>
                    <button className='button-icon' onClick={copyCitation}><CopyIcon /></button>
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