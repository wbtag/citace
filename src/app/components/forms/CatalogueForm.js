'use client'
import CitationBox from "../citationBox";
import { useStateHandler } from "../stateHandlers";
import AuthorForm from "../authorForm";
import { useState } from "react";

export function CatalogueForm() {

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
        editorEtAlia: false,
        citeChapter: true
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
            <div className='flex w-full  min-h-90 justify-center'>
                <div className="pl-5 md:pl-0">
                    <div className="flex">
                        <input type="checkbox" name='citeChapter' checked={formData.citeChapter} onChange={(e) => handleCheckboxChange(e)} />
                        <label>&nbsp;Citovat stať v katalogu</label>
                    </div>
                    {formData.citeChapter ?
                        <div>
                            <AuthorForm type='authors' add={addAuthor} remove={removeAuthor} citationData={citationData} formData={formData} blur={handleAuthorBlur} change={handleAuthorChange} typeChange={handleAuthorTypeChange} checkbox={handleCheckboxChange} />
                            <div className="flex">
                                <label className="label">Název kapitoly</label>
                                <input className='input' type="text" name="chapterName" value={formData.chapterName} onChange={handleInput} onBlur={handleBlur} />
                            </div>
                            <div className="flex">
                                <label className="label">Rozsah stran:</label>
                                <label>&nbsp;od&nbsp;</label>
                                <input className='input input-thin' type="text" name="pageFrom" value={formData.pageFrom} onChange={handleInput} onBlur={handleBlur} />
                                <label>&nbsp;do&nbsp;</label>
                                <input className='input input-thin' type="text" name="pageTo" value={formData.pageTo} onChange={handleInput} onBlur={handleBlur} />
                            </div>
                            <div className="pad-bottom" />
                        </div> : <div />
                    }
                    <AuthorForm type='editors' add={addAuthor} remove={removeAuthor} citationData={citationData} formData={formData} blur={handleAuthorBlur} change={handleAuthorChange} typeChange={handleAuthorTypeChange} checkbox={handleCheckboxChange} />
                    <div className="flex">
                        <label className="label">Název knihy</label>
                        <input className='input' type="text" name="name" value={formData.name} onChange={handleInput} onBlur={handleBlur} />
                    </div>
                    <div className="flex">
                        <label className="label">Místo vydání</label>
                        <input className='input' type="text" name="placeOfPublication" value={formData.placeOfPublication} onChange={handleInput} onBlur={handleBlur} />
                    </div>
                    <div className="flex">
                        <label className="label">Rok vydání</label>
                        <input className='input' type="text" name="yearOfPublication" value={formData.yearOfPublication} onChange={handleInput} onBlur={handleBlur} />
                    </div>
                </div>
            </div>
            <CitationBox citationData={citationData} citationBuilder='catalogue' clear={clearForm} />
        </>
    )
}