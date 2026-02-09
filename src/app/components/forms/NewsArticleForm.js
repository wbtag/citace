'use client'
import CitationBox from "../helpers/citationBox";
import { useStateHandler } from "../helpers/stateHandler";
import { Label, Input, Toggle } from "../helpers/formComponents";
import Image from "next/image";

export function NewsArticleForm() {

    const initialState = {
        author: '',
        name: '',
        medium: '',
        yearOfPublication: '',
        multipleArticles: false,
        articles: [{
            date: '',
            issue: '',
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
                    <Input label="Rok" name="yearOfPublication" handler={stateHandler} />
                    <Toggle label="Více článků" name="multipleArticles" handler={stateHandler} />
                    <Article handler={stateHandler} />
                </div>
            </div>
            <CitationBox citationData={formData} citationBuilder='newsArticle' clear={clearForm} />
        </>
    )
}

function Article({ handler }) {
    const {
        addArrayItem,
        removeArrayItem,
        handleArticleArrayItemChange,
        formData,
    } = handler;

    return (
        <>
            <div className="flex w-full">
                <div className="flex flex-col gap-5">
                    {formData.articles.map((article, index) => (
                        <div key={index} className="flex flex-row gap-2 items-center">
                            <div className="flex flex-col items-center gap-1">
                                <div className="flex flex-row">
                                    <Label label="Číslo" />
                                    <input
                                        type="issue" name={`issue-${index}`} value={formData.articles[index].issue} onChange={(e) => handleArticleArrayItemChange(e, index)}
                                        className="input w-[250px] px-[10px] py-[11px] border-1 rounded-[5px] focus:outline-none placeholder:text-black/25"
                                    />
                                </div>
                                <div className="flex flex-row">
                                    <Label label="Datum vydání" />
                                    <input
                                        type="text" name={`date-${index}`} value={formData.articles[index].date} onChange={(e) => handleArticleArrayItemChange(e, index)}
                                        className="input w-[250px] px-[10px] py-[11px] border-1 rounded-[5px] focus:outline-none placeholder:text-black/25"
                                    />
                                </div>
                                <div className="flex flex-row gap-1 items-center">
                                    <p className="text-xs font-semibold">Rozsah stran</p>
                                    <div className="flex flex-col w-fit relative">
                                        <Label label="od" />
                                        <input
                                            type="pageFrom" name={`pageFrom-${index}`} value={formData.articles[index].pageFrom} onChange={(e) => handleArticleArrayItemChange(e, index)}
                                            className="input px-[10px] py-[11px] border-1 rounded-[5px] focus:outline-none placeholder:text-black/25 w-[82px]"
                                        />
                                    </div>
                                    <div className="flex flex-col w-fit relative">
                                        <Label label="do" />
                                        <input
                                            type="pageTo" name={`pageTo-${index}`} value={formData.articles[index].pageTo} onChange={(e) => handleArticleArrayItemChange(e, index)}
                                            className="input px-[10px] py-[11px] border-1 rounded-[5px] focus:outline-none placeholder:text-black/25 w-[82px]"
                                        />
                                    </div>
                                </div>
                            </div>
                            {
                                formData.multipleArticles ?
                                    <div>
                                        {
                                            index === 0 && formData.articles.length <= 10 ?
                                                <div>
                                                    <button className="text-xl" name="articles" onClick={(e) => addArrayItem(e)}>
                                                        <Image src="/icons/add.svg" name="articles" alt="" width={20} height={20} />
                                                    </button>
                                                </div> :
                                                <div />
                                        }
                                        {
                                            index != 0 ?
                                                <button type="button" className="text-xl" name="articles" onClick={(e) => removeArrayItem(e, index)}>
                                                    <Image src="/icons/remove.svg" name="articles" alt="" width={20} height={20} />
                                                </button> :
                                                <div />
                                        }
                                    </div> :
                                    <div className="w-[20px]" />
                            }
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}