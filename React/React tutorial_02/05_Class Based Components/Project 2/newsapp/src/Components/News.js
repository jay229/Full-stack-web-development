import React, { Component } from 'react'
import Loader from './Loader';
import NewsItem from './NewsItem'

export class News extends Component {

    constructor() {
        super();
        // console.log("Hii");
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0


        }

    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a64092eee06b4808b7a20c9f8e14849d&page=1&pageSize=${this.props.pageSize}`
        this.setState({loading : true})
        let data = await fetch(url);
        let parseData = await data.json();
        //  console.log(parseData);
        this.setState({
             articles: parseData.articles,
              totalResults: parseData.totalResults,
              loading : false
         })

        // console.log(parseData.totalResults);
        // console.log(this.state.totalResults);
    }
    nextPage = async () => {
        // console.log(this.state.totalResults);
        // console.log((Math.ceil(this.state.totalResults/12)));
        // console.log(this.state.page);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a64092eee06b4808b7a20c9f8e14849d&page= ${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading : true})
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState(
            {
                articles: parseData.articles,
                page: this.state.page + 1,
                loading : false

            }
        )

    }
    prevPage = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a64092eee06b4808b7a20c9f8e14849d&page= ${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading : true})
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState(
            {
                articles: parseData.articles,
                page: this.state.page - 1,
                loading : false

            }
        )
    }
    render() {
        return (
            <div className="container my-3" >
                <h1 className="text-center" style={{margin:"25px 0"}}>NewsMonkey-Top Headlines</h1>

                {this.state.loading && <Loader />}
                <div className="row">
                    {this.state.articles.map(
                        (element) => {
                            return <div className="col-md-3" key={element.url}>
                                <NewsItem title={element.title} description={element.title} imageUrl={element.urlToImage} newsUrl={element.url}author={element.author} publishedAt={element.publishedAt} source={element.source.name} />

                            </div>


                        }
                    )}
                    <div className="container d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.prevPage}>&larr;Previous</button>
                        <button disabled={this.state.page + 1 > (Math.ceil(this.state.totalResults / 12))} type="button" className="btn btn-dark" onClick={this.nextPage}>Next&rarr;</button>
                    </div>
                </div>





            </div>
        )
    }
}

export default News
