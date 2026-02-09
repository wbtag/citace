'use client'
import CitationBox from "../helpers/citationBox";
import { useStateHandler } from "../helpers/stateHandler";
import AuthorForm from "../helpers/authorForm";
import { Input, Toggle } from "../helpers/formComponents";

export function CatalogueEntryForm() {

    const initialState = {
        authors: [''],
        entryName: '',
        editors: [''],
        name: '',
        placeOfPublication: '',
        yearOfPublication: '',
        pageFrom: '',
        pageTo: '',
        authorType: 'Autor',
        etAlia: false,
        editorEtAlia: false,
        entryNumber: ''
    }

    const stateHandler = useStateHandler(initialState);

    const {
        citationData,
        clearForm,
        formData,
    } = stateHandler;

    return (
        <>
            <div className='flex w-full min-h-75 justify-center'>
                <div className="flex flex-col gap-1 mt-5">
                    <AuthorForm type="authors" handler={stateHandler} />
                    <Input label="Heslo" name="entryName" handler={stateHandler} />
                    <Input label="Číslo v katalogu" name="entryNumber" handler={stateHandler} />
                    <div className="flex gap-1 items-center">
                        <p className="text-xs font-semibold">Rozsah stran</p>
                        <Input label="od" name="pageFrom" handler={stateHandler} width="82" />
                        <Input label="do" name="pageTo" handler={stateHandler} width="82" />
                    </div>
                    <AuthorForm type="editors" handler={stateHandler} />
                    <Input label="Název knihy" name="name" handler={stateHandler} />
                    <Input label="Místo vydání" name="placeOfPublication" handler={stateHandler} />
                    <Input label="Rok vydání" name="yearOfPublication" handler={stateHandler} />
                </div>
            </div>
            <CitationBox citationData={formData} citationBuilder='catalogueEntry' clear={clearForm} />
        </>
    )
}