import React, { useState, useEffect} from 'react';
import axios from 'axios';

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
            {photoData.map((item, index) => {
                return (
                    <PhotoCard
                    key={index}
                    title={item.title}
                    date={item.date}
                    hdurl={item.hdurl}
                    explanation={item.explanation}
                    />
                    

                );
            })}
        </div>
    )
}