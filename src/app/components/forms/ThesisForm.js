import { useStateHandler } from "../stateHandlers";
import CitationBox from "../citationBox";

export function ThesisForm() {

    const initialState = {
        author: '',
        name: '',
        placeOfPublication: '',
        yearOfPublication: '',
        thesisType: 'diplomová práce',
        department: '',
        authorType: 'Autor',
        etAlia: false
    }

    const {
        citationData,
        clearForm,
        formData,
        handleBlur,
        handleInput,
        handleSelectChange
    } = useStateHandler(initialState);

    return (
        <>
            <div className='flex w-full min-h-75 pr-5 md:pr-10 justify-center'>
                <div className="mt-2 md:pl-0">
                    <div className="flex">
                        <label className="label">Autor</label>
                        <input className='input' type="text" name="author" value={formData.author} onBlur={handleBlur} onChange={handleInput} />
                    </div>
                    <div className="flex">
                        <label className="label">Název práce</label>
                        <input className='input' type="text" name="name" value={formData.name} onBlur={handleBlur} onChange={handleInput} />
                    </div>
                    <div className="flex pb-1">
                        <label className="label">Typ práce</label>
                        <select name="thesisType" className="select" value={formData.thesisType} onChange={handleSelectChange}>
                            <option className="option" value='bakalářská práce'>Bakalářská</option>
                            <option className="option" value='diplomová práce'>Diplomová</option>
                            <option className="option" value='rigorózní práce'>Rigorózní</option>
                            <option className="option" value='disertační práce'>Disertační</option>
                            <option className="option" value='habilitační práce'>Habilitační</option>
                        </select>
                    </div>
                    <div className="flex">
                        <label className="label">Katedra</label>
                        <input className='input' type="text" name="department" value={formData.department} onBlur={handleBlur} onChange={handleInput} />
                    </div>
                    <div className="flex">
                        <label className="label">Místo vydání</label>
                        <input className='input' type="text" name="placeOfPublication" value={formData.placeOfPublication} onBlur={handleBlur} onChange={handleInput} />
                    </div>
                    <div className="flex">
                        <label className="label">Rok vydání</label>
                        <input className='input' type="text" name="yearOfPublication" value={formData.yearOfPublication} onBlur={handleBlur} onChange={handleInput} />
                    </div>
                </div>
            </div>
            <CitationBox citationData={citationData} citationBuilder='thesis' clear={clearForm} />
        </>
    )
}