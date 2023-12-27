import React, { useEffect, useState } from 'react';
import '../App.css'
var fetchurl = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyD50GAaCSUSyNN8pqFMVRbwct4pQo9GLp8&channelId=UC16niRr50-MSBwiO3YDb3RA&part=snippet,id&order=date&maxResults=21';

export default function Cards() {

    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch(fetchurl)
            .then(res => res.json())
            .then(data => {
                const result = data.items.map(obj => ({ ...obj, videoLink: "https://www.youtube.com/embed/" + obj.id.videoId }));
                setItems(result);
            })
    })

    if (!items) {
        return (
            <div>
                <h5>Loading...</h5>
            </div>
        )
    }
    return (
        <div>
            <div className="row row-cols-auto justify-content-center container-fluid">
                {items.map(item => (
                    <div className="card col-sm-3 mx-4 mb-3">
                        <img src={item.snippet.thumbnails.medium.url} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.snippet.title}</h5>
                            <p className="card-text">item.</p>
                            <a href={item.videoLink} className="btn btn-primary">Watch the Full Video</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}