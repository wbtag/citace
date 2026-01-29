import { Label, Toggle } from "./formComponents";
import Image from "next/image";

export default function AuthorForm({ type, naming, handler }) {

    const {
        addAuthor,
        removeAuthor,
        handleAuthorChange,
        handleAuthorBlur,
        formData,
        citationData,
    } = handler;

    naming = naming ? naming : type;

    return (
        <>
            <div className="flex w-full">
                <div className="flex flex-col gap-1">
                    {formData[type].map((author, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <div className="stretch">
                            <Label label={naming === 'authors' ? 'Autor' : 'Editor'} />
                            <input
                                type="text" name={type} value={author} onChange={(e) => handleAuthorChange(e, index)} onBlur={(e) => handleAuthorBlur(e)}
                                className="input w-[250px] px-[10px] py-[11px] border-1 rounded-[5px] focus:outline-none placeholder:text-black/25"
                            />
                            </div>
                            <div>
                                {index === 0 && formData[type].length <= 2 && ((type === 'authors' && !citationData.etAlia) || (type === 'editors' && !citationData.editorEtAlia)) ?
                                    <div>
                                        <button className="text-xl" name={type} onClick={(e) => addAuthor(e)}>
                                            <Image src="/icons/add.svg" name={type} alt="" width={20} height={20} />
                                        </button>
                                    </div> :
                                    <div />
                                }
                                {
                                    index != 0 ?
                                        <button type="button" className="text-xl" name={type} onClick={(e) => removeAuthor(e, index)}>
                                            <Image src="/icons/remove.svg" name={type} alt="" width={20} height={20} />
                                        </button> :
                                        <div />
                                }
                            </div>
                        </div>
                    ))}
                    <Toggle label={`Více než 3 ${naming === 'authors' ? 'autoři' : 'editoři'}`} name={type === 'authors' ? 'etAlia' : 'editorEtAlia'} handler={handler} />
                </div>
            </div>
        </>
    )
}