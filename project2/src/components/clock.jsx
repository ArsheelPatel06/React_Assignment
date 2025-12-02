import React, { useState, useEffect } from 'react';

const Clock = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const getQuote = () => {
        fetch('https://dummyjson.com/quotes/random')
            .then(res => res.json())
            .then(data => {
                    setQuote(data.quote);
                    setAuthor(data.author);
                
            })
            .catch(() => {
                setQuote('Could not fetch quote.');
                setAuthor('');
            });
    };

    useEffect(() => {
        getQuote();
    }, []);

    return (
        <div class="flex flex-col border-2 p-15">
            <h1 class="text-3xl">{time}</h1>
            <p>{quote}</p>
            <p>{author}</p>
            <button onClick={getQuote}>Change Quote</button>
        </div>
    );
};

export default Clock;
