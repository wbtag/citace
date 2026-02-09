'use client'
import CitationBox from "../helpers/citationBox";
import { useStateHandler } from "../helpers/stateHandler";
import AuthorForm from "../helpers/authorForm";
import { Input, Toggle } from "../helpers/formComponents";

export function ReviewForm() {

    const initialState = {
        reviewer: '',
        authors: [''],
        authorType: 'Autor',
        name: '',
        bookPlaceOfPublication: '',
        bookYearOfPublication: '',
        yearOfPublication: '',
        journal: '',
        volume: '',
        issue: '',
        pageFrom: '',
        pageTo: '',
        etAlia: false,
        volumeToRoman: true
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
                    <Input label="Recenzent" name="reviewer" handler={stateHandler} />
                    <Input label="Periodikum" name="journal" handler={stateHandler} />
                    <Input label="Ročník" name="volume" handler={stateHandler} />
                    <Toggle label="Převést ročník na římské číslice" name="volumeToRoman" handler={stateHandler} />
                    <Input label="Číslo" name="issue" handler={stateHandler} />
                    <Input label="Rok publikace" name="yearOfPublication" handler={stateHandler} />
                    <div className="flex gap-1 items-center mb-5">
                        <p className="text-xs font-semibold">Rozsah stran</p>
                        <Input label="od" name="pageFrom" handler={stateHandler} width="82" />
                        <Input label="do" name="pageTo" handler={stateHandler} width="82" />
                    </div>
                    <AuthorForm type='authors' handler={stateHandler} />
                    <Input label="Název knihy" name="name" handler={stateHandler} />
                    <Input label="Místo vydání" name="bookPlaceOfPublication" handler={stateHandler} />
                    <Input label="Rok vydání" name="bookYearOfPublication" handler={stateHandler} />
                </div>
            </div>
            <CitationBox citationData={formData} citationBuilder='review' clear={clearForm} />
        </>
    )
}