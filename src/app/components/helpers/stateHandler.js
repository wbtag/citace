import { useState } from "react";

export const useStateHandler = (initialState) => {

    const [formData, setFormData] = useState(initialState);

    // Absolutely generic methods

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const clearForm = () => {
        setFormData(initialState);
    }

    // Array handling

    const addArrayItem = (e) => {
        const { name } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: [...prevState[name], ...initialState[name]],
        }));
    };

    const removeArrayItem = (e, index) => {
        const { name } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: prevState[name].filter((_, i) => i !== index),
        }));
    };

    const handleArrayItemChange = (e, index) => {
        const { name, value } = e.target;
        const updatedArray = [...formData[name]];
        updatedArray[index] = value;
        setFormData((prev) => ({
            ...prev,
            [name]: updatedArray,
        }));
    };

    const handleArticleArrayItemChange = (e, index) => {
        e.preventDefault();
        const { name, value } = e.target;
        const itemName = name.split('-')[0];
        const articles = formData.articles;
        articles[index][itemName] = value;
        setFormData((prev) => ({
            ...prev,
            articles,
        }));
    };

    // Other

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: checked,
        }))
    }

    const handleAuthorTypeChange = (e, option) => {
        e.preventDefault();
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
    }

    return {
        addArrayItem,
        clearForm,
        formData,
        handleArrayItemChange,
        handleAuthorTypeChange,
        handleCheckboxChange,
        handleArticleArrayItemChange,
        handleInput,
        handleSelectChange,
        removeArrayItem
    }
}