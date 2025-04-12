// src/components/MoviesList.jsx
import React, { useState } from 'react';
import'./MoviesList.css'

// 'Taken', 'The Magnificent Seven', 'The Foreigner', 'The Equalizer'

const MoviesList = () => {
    // Initialize state with a list of movies
    const [expand, setExpand] = useState({});
    const [showActionOnly, setShowActionOnly] = useState(false);
    const [movies, setMovies] = useState([
        {title: 'Taken', 
            description: 'A former government operative comes out of retirement and uses all his extensive training to rescue his estranged daughter from a slave trade operation.',
            genre: 'action'
        },
        {title: 'Fences',
            description: 'A working-class African-American father tries to raise his family in the 1950s, while coming to terms with the events of his life.',
            genre: 'drama'
        },
        {title: 'The Magnificent Seven', 
            description: 'Seven gunmen from a variety of backgrounds are brought together by a vengeful young widow to protect her town from the private army of a destructive industrialist.',
            genre: 'western'
        },
        {title: 'The Foreigner', 
            description: "A humble businessman with a buried past seeks justice when his daughter is killed in an act of terrorism. A cat-and-mouse conflict ensues with a government official, whose past may hold clues to the killers' identities.",
            genre: 'action'
        },
        {title: 'The Equalizer', 
            description: 'A man who believes he has put his mysterious past behind him cannot stand idly by when he meets a young girl under the control of ultra-violent Russian gangsters.',
            genre: 'action'
        },
        {title: 'Hidden Figures',
            description: "Three female African-American mathematicians play a pivotal role in astronaut John Glenn's launch into orbit while dealing with racial and gender discrimination.",
            genre: 'drama'
        }
    ]);

    // Implement required functionalities here
    const toggleMoreInfo = (index) => {
        setExpand((prev) => ({
            ...prev,[index]: !prev[index]
        }))
    };

    const removeMovie = (indexToRemove) => {
        setMovies(prev => prev.filter((_, i) => i !== indexToRemove));
    };

    const toggleGenre = () => {
        setShowActionOnly(prev => !prev);
    };

    const displayMovies = showActionOnly ? movies.filter(movie => movie.genre === 'action'): movies;

    return (
        <div>
            <h2>Here are your favorite movies:</h2>
            <button onClick={toggleGenre}>
                {showActionOnly ? 'Show All Movies' : 'Show Action Only'}
            </button>
            <ul>
                {displayMovies.map((movie, index) => (
                    <li className='list-style' key={index} onClick={() => toggleMoreInfo(index)}>
                    <strong>{movie.title}</strong>
                    {expand[index] && <p>{movie.description}</p>}
                    <button className='btn-style' onClick={(e) => {
                            e.stopPropagation();
                            removeMovie(index);
                        }}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default MoviesList;