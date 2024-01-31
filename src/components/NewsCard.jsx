import React from 'react'
import { useNavigate } from 'react-router-dom';
import Image from '../Images/default.png'
import PaymentModal from "./PaymentModal";

function NewsCard(props){
        const navigate = useNavigate();
        const isPaid = localStorage.getItem('paid') === 'true';
        function getLastPath(url) {
            const urlObj = new URL(url);
            const pathArray = urlObj.pathname.split('/');
            const lastPath = pathArray[pathArray.length - 1];
            return lastPath.split('.').slice(0, -1).join('.');
        }
        const handleItemClick = (urlArticle) => {
            // Redirect to the detail page of the selected item
            // const url = 'https://www.example.com/some/path/lastpart';
            if (localStorage.getItem('paid') === 'true') {
                localStorage.setItem("currentArticle", JSON.stringify(props));
                const lastPath = getLastPath(urlArticle);
                navigate(`/detail/${lastPath}`);
            } else {

            }

        };
        let { title, abstract, imgUrl, newsUrl, author, date } = props;
        return (
            <>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title" style={{height: '80px'}}>{title}</h5>
                        <p className="card-text" style={{maxHeight: '80px'}}><small className="text-muted"> {!author?"By Unknown": author} on {date}</small></p>
                        <img src={imgUrl == null ? Image : imgUrl} className="card-img-top" alt="..." />
                        <p className="card-text" style={{height: '100px'}}>{abstract}</p>
                        {isPaid ? <>
                            <button onClick={() => handleItemClick(newsUrl)}
                                    className="btn btn-outline-success btn-sm">Read More
                            </button>
                        </> : <> <PaymentModal/> </>}

                    </div>
                </div>
            </>
        )
}
export default NewsCard