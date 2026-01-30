'use client'
import CitationBox from "../citationBox";
import { useStateHandler } from "../stateHandlers";
import AuthorForm from "../authorForm";
import { Input, Toggle } from "../formComponents";

export function ArticleForm() {

    const initialState = {
        authors: [''],
        name: '',
        journal: '',
        volume: '',
        issue: '',
        yearOfPublication: '',
        pageFrom: '',
        pageTo: '',
        authorType: 'Autor',
        etAlia: false,
        volumeToRoman: true
    }

    const stateHandler = useStateHandler(initialState);

    const {
        // citationData,
        clearForm,
        formData
    } = stateHandler;

    return (
        <>
            <div className='flex w-full justify-center'>
                <div className="flex flex-col gap-1 mt-5">
                    <AuthorForm type='authors' handler={stateHandler} />
                    <Input label="Název článku" name="name" handler={stateHandler} />
                    <Input label="Periodikum" name="journal" handler={stateHandler} />
                    <Input label="Ročník" name="volume" handler={stateHandler} />
                    <Toggle label="Převést ročník na římské číslice" name="volumeToRoman" handler={stateHandler} />
                    <Input label="Číslo" name="issue" handler={stateHandler} />
                    <Input label="Rok publikace" name="yearOfPublication" handler={stateHandler} />
                    <div className="flex gap-1 items-center">
                        <p className="text-xs font-semibold">Rozsah stran</p>
                        <Input label="od" name="pageFrom" handler={stateHandler} width="82" />
                        <Input label="do" name="pageTo" handler={stateHandler} width="82" />
                    </div>
                </div>
            </div>
            <CitationBox citationData={formData} citationBuilder='article' clear={clearForm} />
        </>
    )
}