'use client'
import { useState } from "react";
import { ArticleForm } from "./components/forms/ArticleForm";
import { BookForm } from "./components/forms/BookForm";
import { ChapterForm } from './components/forms/ChapterForm';
import { CatalogueForm } from './components/forms/CatalogueForm';
import { ThesisForm } from './components/forms/ThesisForm';
import { CatalogueEntryForm } from './components/forms/CatalogueEntryForm';
import { InternetSourceForm } from './components/forms/InternetSourceForm';
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
    return (
      <button
        className={`button ${publicationType === name ? 'button-group-active' : 'button-group-inactive'}`}
        name={name}
        onClick={handleChange}
      >
        {text}
      </button>
    )
  }

  const handleChange = (e) => {
    setPublicationType(e.target.name);
  }

  return (
    <div className="min-h-screen flex flex-col items-center">
      <header className="w-full max-w-4xl px-4 pt-10 pb-2 text-center">
        <h1 className="text-3xl" style={{ fontSize: '1.45rem' }}>
          Generátor citací
        </h1>
        <div className="mt-4 mx-auto w-10 h-px opacity-30" style={{ background: 'var(--accent)' }} />
      </header>

      <div className="type-switcher mx-4" style={{ maxWidth: '680px', width: '100%' }}>
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

      <div className="w-full">
        <FormRenderer />
      </div>
    </div>
  );
}
