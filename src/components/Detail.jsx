import React from 'react';
import Image from '../Images/default.png';

function Detail() {
	let currentArticle = JSON.parse(
		localStorage.getItem('currentArticle') || '{}'
	);

	if (!currentArticle?.newsUrl) {
		const url = new URL(window.location.href);
    const params = url.searchParams;
    const metadata = JSON.parse(atob(params.get('metadata')));
    currentArticle = {...metadata};
	}

  const { title, abstract, imgUrl, newsUrl, author, date } = currentArticle;

  return (
    <div className='card' style={{ paddingTop: 50 }}>
      <div className='card-body' style={{ height: '100%' }}>
        <h3 className='card-title'>{title}</h3>
        <p className='card-text'>
          <h4>Viewing: <a href={newsUrl}>{newsUrl}</a></h4>
          <small className='text-muted'>
            {' '}
            {!author ? 'By Unknown' : author} on {date}
          </small>
        </p>
        <img
          src={imgUrl == null ? Image : imgUrl}
          alt='...'
          width='50% !important'
        />
        <p className='card-text' style={{ height: '100px' }}>
          {[0, 1, 2].map((item, index) => {
            return <p key={index}>{abstract}</p>;
          })}
        </p>
        {/*<button onClick={() => handleItemClick(newsUrl)} className="btn btn-outline-success btn-sm">Read More</button>*/}
      </div>
    </div>
  );
}

export default Detail;
