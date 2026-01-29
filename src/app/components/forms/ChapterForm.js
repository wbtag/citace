'use client'
import CitationBox from "../citationBox";
import { useStateHandler } from "../stateHandlers";
import { Input } from "../formComponents";
import AuthorForm from "../authorForm";

export function ChapterForm() {

    const initialState = {
        authors: [''],
        chapterName: '',
        editors: [''],
        name: '',
        placeOfPublication: '',
        yearOfPublication: '',
        pageFrom: '',
        pageTo: '',
        authorType: 'Autor',
        etAlia: false,
        editorEtAlia: false
    }

    const stateHandler = useStateHandler(initialState);

    const {
        citationData,
        clearForm,
        formData
    } = stateHandler;

    return (
        <>
            <div className='flex w-full min-h-75 justify-center'>
                <div className="flex flex-col gap-1 mt-5">
                    <AuthorForm type="authors" handler={stateHandler} />
                    <Input label="Název kapitoly" name="chapterName" handler={stateHandler} />
                    <div className="flex gap-1 items-center">
                        <p className="text-xs font-semibold">Rozsah stran</p>
                        <Input label="od" name="pageFrom" handler={stateHandler} width="82" />
                        <Input label="do" name="pageTo" handler={stateHandler} width="82" />
                    </div>
                    <Input label="Název knihy" name="name" handler={stateHandler} />
                    <Input label="Místo vydání" name="placeOfPublication" handler={stateHandler} />
                    <Input label="Rok vydání" name="yearOfPublication" handler={stateHandler} />
                </div>
            </div>
            <CitationBox citationData={formData} citationBuilder='chapter' clear={clearForm} />
        </>
    )
}