import React, { useEffect, useState } from 'react';
import logo from '../Images/logo.png'
import '../App.css'
// const API = "AIzaSyD50GAaCSUSyNN8pqFMVRbwct4pQo9GLp8";
// const channelId = 'UC16niRr50-MSBwiO3YDb3RA';
var fetchurl = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyD50GAaCSUSyNN8pqFMVRbwct4pQo9GLp8&channelId=UC16niRr50-MSBwiO3YDb3RA&part=snippet,id&order=date&maxResults=20';

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

    return (
        <div>
            <div className="row row-cols-auto justify-content-center container-fluid">
                {items.map(item => (
                    <div className="card col-sm-3 mx-2">
                        <img src={item.snippet.thumbnails} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.snippet.title}</h5>
                            <p className="card-text">item.</p>
                            <a href={item.videoLink} className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                ))}
                {/* <div className="card col-sm-3 mx-4">
                    <img src={logo} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="card col-sm-3 mx-2">
                    <img src={logo} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div> */}
            </div>
        </div>
    )
}