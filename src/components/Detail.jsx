import React from 'react'
import Image from "../Images/default.png";

function Detail() {
    const currentArticle = JSON.parse(localStorage.getItem("currentArticle") || "{}");
    let { title, abstract, imgUrl, newsUrl, author, date } = currentArticle;
    if (!newsUrl) {
        return null;
    }
    return (
        <>
            <div className="card" style={{paddingTop: 50}}>
                <div className="card-body" style={{height: '100%'}}>
                    <h3 className="card-title">{title}</h3>
                    <p className="card-text"><small className="text-muted"> {!author?"By Unknown": author} on {date}</small></p>
                    <img src={imgUrl == null ? Image : imgUrl} alt="..." width="50% !important"/>
                    <p className="card-text" style={{height: '100px'}}>{
                        [0,1,2].map((item, index) => {
                            return <p key={index}>{abstract}</p>
                        })
                    }</p>
                    {/*<button onClick={() => handleItemClick(newsUrl)} className="btn btn-outline-success btn-sm">Read More</button>*/}
                </div>
            </div>
        </>
    )
}

export default Detail
