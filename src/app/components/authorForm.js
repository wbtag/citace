import { BiPlusCircle, BiMinusCircle } from 'react-icons/bi';

export default function AuthorForm({ type, naming, add, remove, citationData, formData, blur, change, checkbox }) {

    naming = naming ? naming : type;

    return (
        <>
            <div className="flex w-full justify-center mb-3">
                <div className="flex-column">
                    {formData[type].map((author, index) => (
                        <div key={index} className="flex">
                            <label className="label">{naming === 'authors' ? 'Autor' : 'Editor'}</label>
                            <input className='input' type="text" name={type} value={author} onChange={(e) => change(e, index)} onBlur={(e) => blur(e)} />
                            <div className="w-10">
                                {index === 0 && formData[type].length <= 2 && ((type === 'authors' && !citationData.etAlia) || (type === 'editors' && !citationData.editorEtAlia)) ?
                                    <div>
                                        <button className="text-xl" name={type} onClick={(e) => add(e)}>+</button>
                                    </div> :
                                    <div />
                                }
                                {
                                    index != 0 ?
                                        <button type="button" className="text-xl" name={type} onClick={(e) => remove(e, index)}>–</button> :
                                        <div />
                                }
                            </div>
                        </div>
                    ))}
                    <div className="flex">
                        <input type="checkbox" name={type === 'authors' ? 'etAlia' : 'editorEtAlia'} checked={type === 'authors' ? formData.etAlia : formData.editorEtAlia} onChange={checkbox} />
                        <label>&nbsp;Více než 3 {naming === 'authors' ? 'autoři' : 'editoři'}</label>
                    </div>
                </div>
            </div>
        </>
    )
}