'use client'
import CitationBox from "../citationBox";
import { useStateHandler } from "../stateHandlers";
import AuthorForm from "../authorForm";

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

    const {
        addAuthor,
        citationData,
        clearForm,
        formData,
        handleAuthorBlur,
        handleAuthorChange,
        handleAuthorTypeChange,
        handleBlur,
        handleCheckboxChange,
        handleInput,
        removeAuthor
    } = useStateHandler(initialState);

    return (
        <>
            <div className='flex w-full min-h-75 justify-center'>
                <div className="mt-2 pl-5 md:pl-0">
                    <AuthorForm type='authors' add={addAuthor} remove={removeAuthor} citationData={citationData} formData={formData} blur={handleAuthorBlur} change={handleAuthorChange} typeChange={handleAuthorTypeChange} checkbox={handleCheckboxChange} />
                    <div className="pad-vertical" />
                    <div className="flex">
                        <label className="label">Název článku</label>
                        <input className='input' type="text" name="name" value={formData.name} onChange={handleInput} onBlur={handleBlur} />
                    </div>
                    <div className="flex">
                        <label className="label">Periodikum</label>
                        <input className='input' type="text" name="journal" value={formData.journal} onChange={handleInput} onBlur={handleBlur} />
                    </div>
                    <div className="flex">
                        <label className="label">Ročník</label>
                        <input className='input' type="text" name="volume" value={formData.volume} onChange={handleInput} onBlur={handleBlur} />
                    </div>
                    <div className="flex">
                        <input type="checkbox" name='volumeToRoman' checked={formData.volumeToRoman} onChange={(e) => handleCheckboxChange(e)} />
                        <label className="ml-2">Převést ročník na římské číslice</label>
                    </div>
                    <div className="flex">
                        <label className="label">Číslo</label>
                        <input className='input' type="text" name="issue" value={formData.issue} onChange={handleInput} onBlur={handleBlur} />
                    </div>
                    <div className="flex">
                        <label className="label">Rok publikace</label>
                        <input className='input' type="text" name="yearOfPublication" value={formData.yearOfPublication} onChange={handleInput} onBlur={handleBlur} />
                    </div>
                    <div className="flex">
                        <label className="label">Rozsah stran:</label>
                        <label>&nbsp;od&nbsp;</label>
                        <input className='input input-thin' type="text" name="pageFrom" value={formData.pageFrom} onChange={handleInput} onBlur={handleBlur} />
                        <label>&nbsp;do&nbsp;</label>
                        <input className='input input-thin' type="text" name="pageTo" value={formData.pageTo} onChange={handleInput} onBlur={handleBlur} />
                    </div>
                </div>
            </div>
            <CitationBox citationData={citationData} citationBuilder='article' clear={clearForm} />
        </>
    )
}