import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, publishedAt,source } = this.props;
        // console.log(author);
        // console.log(imageUrl);
        return (
            <div>
                <div className="card">
                        
                    <div>
                    {/* <span className="position-absolute top-0 start-100 left-90 translate-middle badge rounded-pill bg-danger" style={{zIndex:"1"}}>{source}</span> */}
                    <span className="  badge rounded-pill bg-danger" style={{display:"flex",justifyContent:"flex-end", position:"absolute",right:"0"}}>{source}</span>

                    </div>
                    
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">{author ? author : "By Unknown"} {new Date(publishedAt).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
