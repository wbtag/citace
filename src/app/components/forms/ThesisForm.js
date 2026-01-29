import { useStateHandler } from "../stateHandlers";
import CitationBox from "../citationBox";
import { Input, Select } from "../formComponents";

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

    const stateHandler = useStateHandler(initialState);

    const {
        citationData,
        clearForm,
        formData
    } = stateHandler;

    const thesisTypes = [
        { name: "Bakalářská", value: "bakalářská práce" },
        { name: "Diplomová", value: "diplomová práce" },
        { name: "Rigorózní", value: "rigorózní práce" },
        { name: "Disertační", value: "disertační práce" },
        { name: "Habilitační", value: "habilitační práce" },
    ];

    return (
        <>

            <div className='flex w-full justify-center'>
                <div className='pr-6 justify-center mt-5'>
                    <div className="flex flex-col gap-1">
                        <Input label="Autor" name="author" handler={stateHandler} />
                        <Input label="Název práce" name="name" handler={stateHandler} />
                        <Select label="Typ práce" handler={stateHandler} name="thesisType" options={thesisTypes} />
                        <Input label="Katedra" name="department" handler={stateHandler} />
                        <Input label="Místo vydání" name="placeOfPublication" handler={stateHandler} />
                        <Input label="Rok vydání" name="yearOfPublication" handler={stateHandler} />
                    </div>
                </div>
            </div>
            <CitationBox citationData={formData} citationBuilder='thesis' clear={clearForm} />
        </>
    )
}