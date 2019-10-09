import React, { useState, useEffect} from 'react';
import axios from 'axios';
import PhotoCard from "./PhotoCard";

export default function PhotoGrid() {
    const [photoData, setPhotoData] = useState([]);

    useEffect(() => {
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=5OJfH4G46HOISrf0mJx8LZs6h3XrtOUJR7g943u2`)
    .then(response => {
        console.log(response);
        setPhotoData(response.data);
    })
    .catch(error => {
        console.log('The data was not returned', error);
    })
    }, []);

    return (
        <div className="photo">
                <p>
                    <PhotoCard
                    title={photoData.title}
                    date={photoData.date}
                    hdurl={photoData.hdurl}
                    explanation={photoData.explanation}
                    />
                </p>
        </div>
    )
}