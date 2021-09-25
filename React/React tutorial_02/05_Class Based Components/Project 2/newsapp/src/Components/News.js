import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
   
    constructor() {
        super();
        // console.log("Hii");
        this.state = {
            articles: [],
            loading: false
        }

    }
     async componentDidMount(){
         let url="https://newsapi.org/v2/everything?domains=wsj.com&apiKey=a64092eee06b4808b7a20c9f8e14849d"
         let data=await fetch(url);
         let parseData=await data.json();
         console.log(parseData);
         this.setState({articles:parseData.articles})
     }
    render() {
        return (
            <div className="container my-3" >
                <h2>NewsMonkey-Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map(
                        (element) => {
                            return <div className="col-md-3" key={element.url}>
                                <NewsItem title={element.title} description={element.title} imageUrl={element.urlToImage} newsUrl={element.url} />

                            </div>


                        }
                    )}
                </div>





            </div>
        )
    }
}

export default News
