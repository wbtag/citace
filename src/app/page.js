'use client'
import { useState } from "react";
import { ArticleForm } from "./components/forms/ArticleForm";
import { BookForm } from "./components/forms/BookForm";
import { ChapterForm } from './components/forms/ChapterForm';
import { CatalogueForm } from './components/forms/CatalogueForm';
import { ThesisForm } from './components/forms/ThesisForm';
import { CatalogueEntryForm } from './components/forms/CatalogueEntryForm';
import { InternetSourceForm } from './components/forms/InternetSource';
import { NewsArticleForm } from './components/forms/NewsArticleForm';
import { ReviewForm } from "./components/forms/ReviewForm";

export default function Home() {

  const [publicationType, setPublicationType] = useState('book');

  const formComponents = {
    article: ArticleForm,
    book: BookForm,
    chapter: ChapterForm,
    catalogue: CatalogueForm,
    catalogueEntry: CatalogueEntryForm,
    internetSource: InternetSourceForm,
    newsArticle: NewsArticleForm,
    review: ReviewForm,
    thesis: ThesisForm
  }

  const FormRenderer = () => {
    const FormComponent = formComponents[publicationType] || ArticleForm;
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
        <div className="flex flex-wrap justify-center mb-5 px-3 gap-1">
          <Switcher name='book' text='Kniha' />
          <Switcher name='article' text='Článek' />
          <Switcher name='chapter' text='Kapitola' />
          <Switcher name='catalogue' text='Katalog' />
          <Switcher name='thesis' text='Kvalifikační práce' />
          <Switcher name='catalogueEntry' text='Katalogové heslo' />
          <Switcher name='newsArticle' text='Novinový článek' />
          <Switcher name='review' text='Recenze' />
          <Switcher name='internetSource' text='Internet' />
        </div>
        <div className="ml-4">
          <FormRenderer style={{ justifyContent: 'center' }} />
        </div>
      </div>
    </>
  );
}
