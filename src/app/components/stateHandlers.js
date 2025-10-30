import { useState } from "react";

export const useStateHandler = (initialState) => {

    const [citationData, setCitationData] = useState(initialState);
    const [formData, setFormData] = useState(initialState);

    // Absolutely generic methods

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleBlur = () => {
        setCitationData(formData);
    }

    const clearForm = () => {
        setFormData(initialState);
        setCitationData(initialState);
    }

    // Author handling

    const addAuthor = (e) => {
        const { name } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: [...prevState[name], ""],
        }));
    };

    const removeAuthor = (e, index) => {
        const { name } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: prev[name].filter((_, i) => i !== index),
        }));
        setCitationData((prev) => ({
            ...prev,
            [name]: prev[name].filter((_, i) => i !== index),
        }));
    };

    // TODO: generalize name
    const handleAuthorChange = (e, index) => {
        const { name, value } = e.target;
        const updatedAuthors = [...formData[name]];
        updatedAuthors[index] = value;
        setFormData((prev) => ({
            ...prev,
            [name]: updatedAuthors,
        }));
    };

    const handleAuthorBlur = (e) => {
        const { name } = e.target;
        setCitationData((prevState) => ({
            ...prevState,
            [name]: [...formData[name]]
        }))
    }

    // Other

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: checked,
        }))
        setCitationData((prevState) => ({
            ...prevState,
            [name]: checked,
        }))
    }

    const handleAuthorTypeChange = (e, option) => {
        e.preventDefault();
        setCitationData((prevState) => ({
            ...prevState,
            authorType: option,
        }));
        setFormData((prevState) => ({
            ...prevState,
            authorType: option,
        }));
    }

    const handleSelectChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        setCitationData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    return {
        addAuthor,
        clearForm,
        citationData,
        formData,
        handleAuthorBlur,
        handleAuthorChange,
        handleAuthorTypeChange,
        handleBlur,
        handleCheckboxChange,
        handleInput,
        handleSelectChange,
        removeAuthor
    }
}