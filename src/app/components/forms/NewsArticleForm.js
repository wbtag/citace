'use client'
import CitationBox from "../helpers/citationBox";
import { useStateHandler } from "../helpers/stateHandler";
import { Input, Toggle } from "../helpers/formComponents";

export function NewsArticleForm() {

    const initialState = {
        author: '',
        name: '',
        medium: '',
        issue: '',
        multipleArticles: false,
        articles: [{
            yearOfPublication: '',
            pageFrom: '',
            pageTo: '',
        }],
    }

    const stateHandler = useStateHandler(initialState);

    const {
        clearForm,
        formData
    } = stateHandler;

    return (
        <>
            <div className='flex w-full justify-center'>
                <div className="flex flex-col gap-1 mt-5">
                    <Input label="Autor" name="author" handler={stateHandler} />
                    <Input label="Název článku" name="name" handler={stateHandler} />
                    <Input label="Médium" name="medium" handler={stateHandler} />
                    <Toggle label="Více článků" name="multipleArticles" handler={stateHandler} /> 
                    
                    <Input label="Rok" name="yearOfPublication" handler={stateHandler} />
                    <Input label="Číslo" name="issue" handler={stateHandler} />
                    <Input label="Datum vydání" name="date" handler={stateHandler} />
                    <div className="flex gap-1 items-center">
                        <p className="text-xs font-semibold">Rozsah stran</p>
                        <Input label="od" name="pageFrom" handler={stateHandler} width="82" />
                        <Input label="do" name="pageTo" handler={stateHandler} width="82" />
                    </div>
                </div>
            </div>
            <CitationBox citationData={formData} citationBuilder='newsArticle' clear={clearForm} />
        </>
    )
}