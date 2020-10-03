import React,{useState} from 'react';
import {useSelector} from 'react-redux';
import ImgTextGroup from '../../imgTextGroup/imgTextGroup'

function Business({articleData}){
    const businessSelect = (state) => state.business;
    const businessPull = useSelector(businessSelect);

    let state = [
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Coronavirus tales from Tom's Bench on Clapham Common - BBC News",
            "description": "Jim Grover's pictures of people he met on Clapham Common who talked about their altered lives.",
            "url": "https://www.bbc.com/news/in-pictures-54293229",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/B981/production/_114598474_27august27th.jpg",
            "publishedAt": "2020-09-27T23:51:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Bisnis.com"
            },
            "author": "Mia Chitra Dinisari",
            "title": "Ini Beda Batuk Karena Virus Corona dan Bukan - Bisnis.com",
            "description": "Karena itu, penting untuk membedakan keduanya, tetapi bagaimana Anda bisa melakukannya?",
            "url": "https://lifestyle.bisnis.com/read/20200928/106/1297223/ini-beda-batuk-karena-virus-corona-dan-bukan",
            "urlToImage": "https://images.bisnis-cdn.com/posts/2020/09/28/1297223/batuk1.jpg",
            "publishedAt": "2020-09-27T23:51:43Z",
            "content": "Bisnis.com, JAKARTA - Virus corona dapat disalahartikan sebagai flu dalam bentuk yang paling ringan atau sebaliknya.\r\nKarena itu, penting untuk membedakan keduanya, tetapi bagaimana Anda bisa melakuk… [+2570 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lavoixdelest.ca"
            },
            "author": null,
            "title": "L'école Saint-Bernard à Granby touchée par la COVID-19 - La Voix de l'est - Groupe Capitales Médias",
            "description": "Certains parents de la classe de maternelle 002 de l’école Saint-Bernard à Granby devront garder leur enfant à la maison durant deux semaines, puisqu’un enfant fréquentant ce groupe a reçu un diagnostic de COVID-19 au cours de la fin de semaine.",
            "url": "https://www.lavoixdelest.ca/actualites/covid-19/lecole-saint-bernard-a-granby-touchee-par-la-covid-19-47f4ed299021f7d62d2aad71e208f6e8",
            "urlToImage": "https://images.omerlocdn.com/resize?url=https%3A%2F%2Fgcm.omerlocdn.com%2Fproduction%2Fglobal%2Ffiles%2Fimage%2F37c8c726-5742-4d23-b4fd-2876bb1cbd87.jpg&stripmeta=true&width=1200&type=jpeg",
            "publishedAt": "2020-09-27T23:54:35Z",
            "content": "L'école de la Haute-Ville aussi touchée\r\nDans une missive envoyée aux parents, le directeur général du Centre de services scolaire du Val-des-Cerfs, Éric Racine, confirme qu'une personne atteinte de … [+651 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Outbreak News Today"
            },
            "author": null,
            "title": "China: Suspect bubonic plague case reported in Yunnan Province - Outbreak News Today",
            "description": "By NewsDesk  @infectiousdiseasenews Local authorities in Southwest China’s Yunnan Province are reporting a suspected case of bubonic plague, according to a Global Times report. The patient is a 3-year-old child in Menghai county, who is currently in a stable …",
            "url": "http://outbreaknewstoday.com/china-suspect-bubonic-plague-case-reported-in-yunnan-province-99550/",
            "urlToImage": "http://outbreaknewstoday.com/wp-content/uploads/2020/09/china-1356803_640.jpg",
            "publishedAt": "2020-09-28T00:31:17Z",
            "content": "By NewsDesk  @infectiousdiseasenews\r\nLocal authorities in Southwest China’s Yunnan Province are reporting a suspected case of bubonic plague, according to a Global Times report.\r\nImage/dinky123uk\r\nTh… [+1247 chars]"
        }
    ]


    const [data,setData] = useState(state);

    return (
        <main>
            <ImgTextGroup headerTitle='Business' collection = {businessPull} passArticle={articleData}/>
        </main>
    )
}

export default Business;