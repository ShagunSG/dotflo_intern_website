import React from 'react'
import '../App.css'

export default function Quote() {
    return (
        <div>
            <div className="card quote my-5">
                <div className="card-header">
                    Quote
                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p>It's amazing that the amount of news that happens in the world every day always just exactly fits the newspaper.</p>
                        <footer className="blockquote-footer"><cite title="Source Title">Jerry Seinfeld</cite></footer>
                    </blockquote>
                </div>
            </div>
        </div>
    )
}
