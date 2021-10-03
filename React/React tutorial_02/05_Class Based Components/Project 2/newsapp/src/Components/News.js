import React, { Component } from 'react'
import Loader from './Loader';
import NewsItem from './NewsItem'
import InfiniteScroll from "react-infinite-scroll-component";

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
    async updateNews() {
        this.props.setProgress(30);
        const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        this.props.setProgress(70);
        let data = await fetch(url);
        let parseData = await data.json();
        this.props.setProgress(100);
        this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            loading: false
        })
        
    }
    async componentDidMount() {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a64092eee06b4808b7a20c9f8e14849d&page=1&pageSize=${this.props.pageSize}`
        // this.setState({loading : true})
        // let data = await fetch(url);
        // let parseData = await data.json();

        // this.setState({
        //      articles: parseData.articles,
        //       totalResults: parseData.totalResults,
        //       loading : false
        //  })

        // console.log(parseData.totalResults);
        // console.log(this.state.totalResults);
        this.updateNews();
    }
    // nextPage = async () => {
    // console.log(this.state.totalResults);
    // console.log((Math.ceil(this.state.totalResults/12)));
    // console.log(this.state.page);
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a64092eee06b4808b7a20c9f8e14849d&page= ${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading : true})
    // let data = await fetch(url);
    // let parseData = await data.json();
    //     this.setState(
    //         {

    //             page: this.state.page + 1


    //         }
    //     )
    //     this.updateNews();

    // }
    // prevPage = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a64092eee06b4808b7a20c9f8e14849d&page= ${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading : true})
    // let data = await fetch(url);
    // let parseData = await data.json();
    // this.setState(
    //     {
    //         articles: parseData.articles,
    //         page: this.state.page - 1,
    //         loading : false

    //     }
    // )
    //     this.setState(
    //         {

    //             page: this.state.page - 1


    //         }
    //     )
    //     this.updateNews();
    // }
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parseData.articles),
            totalResults: parseData.totalResults,
            loading: false
        })

    };
    render() {
        return (
            <>
                <h1 className="text-center" style={{ margin: "30px 0" }}>NewsMonkey-Top Headlines</h1>

                {/* {this.state.loading && <Loader />} */}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Loader />}
                >
                    <div className="container">
                        <div className="row">

                            {this.state.articles.map(
                                (element) => {
                                    return <div className="col-md-3" key={element.url}>
                                        <NewsItem title={element.title} description={element.title} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name} />

                                    </div>
                                }
                            )}

                        </div>
                    </div>
                </InfiniteScroll>





            </>
        )
    }
}

export default News
