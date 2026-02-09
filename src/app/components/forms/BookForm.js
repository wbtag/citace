import { useStateHandler } from "../helpers/stateHandler";
import CitationBox from "../helpers/citationBox";
import AuthorForm from "../helpers/authorForm";
import { Input, Toggle } from "../helpers/formComponents";

export function BookForm() {

    const initialState = {
        authors: [''],
        name: '',
        placeOfPublication: '',
        yearOfPublication: '',
        citeAsEditor: false,
        etAlia: false
    }

    const stateHandler = useStateHandler(initialState);

    const {
        clearForm,
        formData,
    } = stateHandler;

    return (
        <>
            <div className='flex w-full min-h-75 justify-center'>
                <div className="flex flex-col gap-1 mt-5" >
                    <AuthorForm type='authors' naming={formData.citeAsEditor ? 'editors' : 'authors'} handler={stateHandler} />
                    <Toggle label="Citovat editora" name="citeAsEditor" handler={stateHandler} />
                    <Input label="Název knihy" name="name" handler={stateHandler} />
                    <Input label="Místo vydání" name="placeOfPublication" handler={stateHandler} />
                    <Input label="Rok vydání" name="yearOfPublication" handler={stateHandler} />
                </div>
            </div>
            <CitationBox citationData={formData} citationBuilder='book' clear={clearForm} />
        </>
    )
}