import { useStateHandler } from "../stateHandlers";
import CitationBox from "../citationBox";
import AuthorForm from "../authorForm";

export function BookForm() {

    const initialState = {
        authors: [''],
        name: '',
        placeOfPublication: '',
        yearOfPublication: '',
        authorType: 'authors',
        etAlia: false
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
            <div className='flex w-full min-h-90 justify-center'>
                <div>
                    <div className="flex flex-wrap my-2 justify-center">
                        {['authors', 'editors'].map((option) => (
                            <button
                                key={option}
                                onClick={(e) => handleAuthorTypeChange(e, option)}
                                className={`button ${citationData.authorType === option ? 'button-group-active' : 'button-group-inactive'}`}
                            >
                                {option === 'authors' ? 'Autor' : 'Editor'}
                            </button>
                        ))}
                    </div>
                    <div className="pl-5 md:pl-0" >
                        <AuthorForm type='authors' naming={formData.authorType} add={addAuthor} remove={removeAuthor} citationData={citationData} formData={formData} blur={handleAuthorBlur} change={handleAuthorChange} typeChange={handleAuthorTypeChange} checkbox={handleCheckboxChange} />
                        <div className="flex">
                            <label className="label">Název knihy</label>
                            <input className='input' type="text" name="name" value={formData.name} onBlur={handleBlur} onChange={handleInput} />
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
            </div>
            <CitationBox citationData={citationData} citationBuilder='book' clear={clearForm} />
        </>
    )
}