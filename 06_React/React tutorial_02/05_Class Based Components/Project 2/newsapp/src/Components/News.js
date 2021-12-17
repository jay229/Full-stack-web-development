import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import NewsItem from './NewsItem'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
   const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    // document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)






    const updateNews = async () => {
        props.setProgress(30);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
        setLoading(true)
        props.setProgress(70);
        let data = await fetch(url);
        let parseData = await data.json();
        props.setProgress(100);
        setArticles(parseData.articles)
        setTotalResults(parseData.totalResults)
        setLoading(false)


    }
    useEffect(() => {
        updateNews();
    }, [])

    // nextPage = async () => {
    //     setPage(page + 1)
    //     updateNews();

    // }
    // prevPage = async () => {
    //     setPage(page - 1)
    //     updateNews();
    // }
   const fetchMoreData = async () => {
        setPage(page + 1)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`

        let data = await fetch(url);
        let parseData = await data.json();
        setArticles(articles.concat(parseData.articles))
        setTotalResults(parseData.totalResults)



    };

    return (
        <>
            <h1 className="text-center" style={{ margin: "30px 0" , marginTop:"90px"}}>NewsMonkey-Top {capitalizeFirstLetter(props.category)}  Headlines</h1>

            {loading && <Loader />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Loader />}
            >
                <div className="container">
                    <div className="row">

                        {articles.map(
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



export default News
