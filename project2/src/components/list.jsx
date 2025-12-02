import React, { useState } from 'react'; 

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');

    const handleAuthor = (e) => setAuthor(e.target.value);
    const handleTitle = (e) => setTitle(e.target.value);
    const handleGenre = (e) => setGenre(e.target.value);

    const addBook = () => {

        if (!author.trim() || !title.trim() || !genre.trim()) {
            alert('fileds not filled');
            return;
        }
        const newBook = { author, title, genre };
        setBooks([...books, newBook]);

        setAuthor('');
        setTitle('');
        setGenre('');
    };

    return (
        <div className="flex flex-col border-2 p-8">
            <input
                type="text"
                placeholder="Author"
                value={author}
                onChange={handleAuthor}
            />
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={handleTitle}
            />
            <input
                type="text"
                placeholder="Genre"
                value={genre}
                onChange={handleGenre}
            />
            <button onClick={addBook}>Add Book</button>
            <ul>
                {books.map((book, index) => (
                    <li key={index}>
                        <p>Author: {book.author}</p>
                        <p>Title: {book.title}</p>
                        <p>Genre: {book.genre}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
