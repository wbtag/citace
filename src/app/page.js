'use client'
import './page.css';
import { useState } from "react";
import { ArticleForm } from "./components/forms/ArticleForm";
import { BookForm } from "./components/forms/BookForm";
import { ChapterForm } from './components/forms/ChapterForm';
import { CatalogueForm } from './components/forms/CatalogueForm';
import { ThesisForm } from './components/forms/ThesisForm';

export default function Home() {

  const [publicationType, setPublicationType] = useState('book');

  const formComponents = {
    article: ArticleForm,
    book: BookForm,
    chapter: ChapterForm,
    catalogue: CatalogueForm,
    thesis: ThesisForm
  }

  const FormRenderer = () => {
    const FormComponent = formComponents[publicationType] || JournalArticle;
    return <FormComponent />
  }

  const Switcher = ({ name, text }) => {
    return <button className={`button ${publicationType === name ? 'button-group-active' : 'button-group'}`} name={name} onClick={handleChange}>{text}</button>
  }

  const handleChange = (e) => {
    setPublicationType(e.target.name);
  }

  return (
    <>
      <div className="">
        <h1 className="text-center text-2xl py-5">Generátor citací</h1>
        <div className="flex flex-wrap justify-center mb-2 px-3">
          <Switcher name='book' text='Kniha' />
          <Switcher name='article' text='Článek' />
          <Switcher name='chapter' text='Kapitola' />
          <Switcher name='catalogue' text='Katalog' />
          <Switcher name='thesis' text='Kvalifikační práce' />
          {/*<button>Katalogové heslo</button>
          <button>Novinový článek</button>
          <button>Recenze</button>
          <button>Internet</button> */}
        </div>
        <FormRenderer style={{width: '100%', justifyContent: 'center'}}/>
      </div>
    </>
  );
}
