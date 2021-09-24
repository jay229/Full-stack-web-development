import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Jitender Maan Gogi: India gangster shot dead in Delhi court",
            "description": "Two men dressed as lawyers opened fire in court on a man detained on charges of murder and extortion.",
            "url": "http://www.bbc.co.uk/news/world-asia-india-58674452",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/180CC/production/_120680589_gettyimages-1192193014.jpg",
            "publishedAt": "2021-09-24T11:07:21.5956522Z",
            "content": "image source, Getty Images\r\nimage captionThe incident has raised questions over the security of Delhi's courts\r\nTwo men posing as lawyers shot dead a notorious gangster inside a courtroom in India's … [+944 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Afghanistan: Executions will return, says senior Taliban official",
            "description": "Extreme punishments like executions and amputations will resume in Afghanistan, says the Taliban's head of prisons.",
            "url": "http://www.bbc.co.uk/news/world-asia-58675153",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/4701/production/_120677181_mediaitem120677180.jpg",
            "publishedAt": "2021-09-24T11:07:19.2212422Z",
            "content": "image captionMullah Nooruddin Turabi, not pictured, said punishments such as amputations were \"necessary\"\r\nThe Taliban's notorious former head of religious police has said extreme punishments such as… [+3564 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "CIA 'removes Vienna boss' over Havana syndrome outbreak",
            "description": "The mysterious illness has affected dozens of US personnel in the Austrian capital, US media report.",
            "url": "http://www.bbc.co.uk/news/world-europe-58675144",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/B849/production/_120677174_gettyimages-520956552.jpg",
            "publishedAt": "2021-09-24T10:37:27.1034726Z",
            "content": "image captionDozens of US personnel have been affected by the mysterious illness in Vienna, US media report\r\nThe CIA has reportedly removed its station chief in Vienna for not responding appropriatel… [+1993 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "New Zealand council's Zoom talks go viral as pretend meeting",
            "description": "A New Zealand committee meeting gets almost 300,000 views as people use it to avoid being disturbed.",
            "url": "http://www.bbc.co.uk/news/world-asia-58674888",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1774D/production/_120677069_zoom2.png",
            "publishedAt": "2021-09-24T10:37:23.6355856Z",
            "content": "image source, Waipa District Council/YouTube\r\nimage captionThe council described the Zoom footage, recorded last year, as \"innocuous\"\r\nA New Zealand council's Zoom meeting has been viewed more than 2… [+1746 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Haitian migrants at US border: 'We've been through 11 countries'",
            "description": "One man tells how he trekked through jungle with his young son, seeing fellow migrants' dead bodies.",
            "url": "http://www.bbc.co.uk/news/world-latin-america-58673578",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/BC27/production/_120676184_fitersonpic.jpg",
            "publishedAt": "2021-09-24T10:37:19.3397791Z",
            "content": "By Will GrantBBC News, Mexicali, Mexico \r\nimage caption\"This world doesn't want to see us,\" Fiterson Janvier says\r\nEven in late summer, few migrants attempt to cross into the United States from the M… [+4200 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "George Floyd murder: Derek Chauvin appeals against conviction",
            "description": "Former Minneapolis police officer Derek Chauvin says there were issues with the jury at his trial.",
            "url": "http://www.bbc.co.uk/news/world-us-canada-58674884",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1114F/production/_120676996_hi061778987.jpg",
            "publishedAt": "2021-09-24T10:22:25.3852762Z",
            "content": "image captionDerek Chauvin (R) listens to his sentencing in June alongside his defence lawyer Eric Nelson\r\nThe former Minneapolis police officer convicted of the murder of African-American man George… [+1321 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Kim Yo-jong says North Korea open to ending war if conditions met",
            "description": "The sister of Kim Jong-un said she was open to the idea if the South stopped its \"hostile policies\".",
            "url": "http://www.bbc.co.uk/news/world-asia-58675703",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/9C83/production/_120676004_gettyimages-916165588.jpg",
            "publishedAt": "2021-09-24T07:52:26.4882068Z",
            "content": "image source, Getty Images\r\nimage captionKim Yo-jong is the influential sister of North Korean leader Kim Jong-un\r\nThe influential sister of North Korean leader Kim Jong-un says they are willing to r… [+3327 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Catalan separatist Carles Puigdemont arrested in Italy",
            "description": "Spain accuses the former president of the Catalonia region of sedition, and wants him extradited.",
            "url": "http://www.bbc.co.uk/news/world-europe-58674176",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/140F7/production/_120676128_puigdemont.jpg",
            "publishedAt": "2021-09-24T04:22:22.4321316Z",
            "content": "image captionCarles Puigdemont has been living in self-imposed exile in Belgium\r\nCatalan separatist leader Carles Puigdemont has been detained in Sardinia on a Spanish arrest warrant. \r\nSpain has acc… [+1717 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Why are so many Haitians at the US-Mexico border?",
            "description": "Thousands of migrants are at the Texas-Mexico border. Here's what we know about why they are coming.",
            "url": "http://www.bbc.co.uk/news/world-us-canada-58667669",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1853F/production/_120674699_riogrande.jpg",
            "publishedAt": "2021-09-24T01:22:24.9297636Z",
            "content": "By Bernd Debusmann JrBBC News, Washington\r\nimage captionMigrants have been crossing the Rio Grande river from Mexico to reach the US\r\nThousands of predominantly Haitian migrants are still camped at t… [+4423 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Freezing to death on the edge of the EU",
            "description": "The BBC finds stranded migrants facing sub-zero temperatures amid a row between Poland and Belarus.",
            "url": "http://www.bbc.co.uk/news/world-europe-58671941",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/FB65/production/_120675346_p09wtl4l.jpg",
            "publishedAt": "2021-09-24T00:37:21.5556966Z",
            "content": "The BBC has obtained first-hand accounts from migrants who say theyve been illegally deported from the European Union by Polish border troops. \r\nClose to the border between Belarus and Poland, the BB… [+561 chars]"
        }
    ]
    constructor() {
        super();
        // console.log("Hii");
        this.state = {
            articles: this.articles,
            loading: false
        }

    }
    render() {
        return (
            <div className="container my-3" >
                <h2>NewsMonkey-Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map(
                        (element) => {
                            return <div className="col-md-4" key={element.url}>
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
