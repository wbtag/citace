import { useStateHandler } from "../helpers/stateHandler";
import CitationBox from "../helpers/citationBox";
import AuthorForm from "../helpers/authorForm";
import { Input } from "../helpers/formComponents";

export function InternetSourceForm() {

    const initialState = {
        authors: [''],
        name: '',
        medium: '',
        link: '',
        accessedDate: new Date().toISOString().split('T')[0]
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
                    <AuthorForm type='authors' naming={formData.authorType} handler={stateHandler} />
                    <Input label="Název" name="name" handler={stateHandler} />
                    <Input label="Médium" name="medium" handler={stateHandler} />
                    <Input label="Odkaz" name="link" handler={stateHandler} />
                    <Input label="Datum vyhledání" name="accessedDate" type="date" handler={stateHandler} />
                </div>
            </div>
            <CitationBox citationData={formData} citationBuilder='internetSource' clear={clearForm} />
        </>
    )
}