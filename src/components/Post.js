import React from 'react'

export default function Post(props) {
    return (
        <div className="post">
            <div className="post__image" style={{backgroundImage: `url(${props.image})`}}></div>
            <div className="post__info">
            <h2 className="post__title">{props.title}</h2>
    <p className="post__description">{props.desc}</p>
            </div>
        </div>
    )
}
