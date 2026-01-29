import { useStateHandler } from "../stateHandlers";
import CitationBox from "../citationBox";
import AuthorForm from "../authorForm";
import { Input } from "../formComponents";

export function BookForm() {

    const initialState = {
        authors: [''],
        name: '',
        placeOfPublication: '',
        yearOfPublication: '',
        authorType: 'authors',
        etAlia: false
    }

    const stateHandler = useStateHandler(initialState);

    const {
        // citationData,
        clearForm,
        formData,
        handleAuthorTypeChange,
    } = stateHandler;

    return (
        <>
            <div className='flex w-full min-h-75 justify-center'>
                <div>
                    <div className="flex flex-wrap my-2 justify-center">
                        {['authors', 'editors'].map((option) => (
                            <button
                                key={option}
                                onClick={(e) => handleAuthorTypeChange(e, option)}
                                className={`button ${formData.authorType === option ? 'button-group-active' : 'button-group-inactive'}`}
                            >
                                {option === 'authors' ? 'Autor' : 'Editor'}
                            </button>
                        ))}
                    </div>
                    <div className="flex flex-col gap-1" >
                        <AuthorForm type='authors' naming={formData.authorType} handler={stateHandler} />
                        <Input label="Název knihy" name="name" handler={stateHandler} />
                        <Input label="Místo vydání" name="placeOfPublication" handler={stateHandler} />
                        <Input label="Rok vydání" name="yearOfPublication" handler={stateHandler} />
                    </div>
                </div>
            </div>
            <CitationBox citationData={formData} citationBuilder='book' clear={clearForm} />
        </>
    )
}