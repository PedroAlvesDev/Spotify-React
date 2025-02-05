import React from "react";
import './Main.css'
import Card1 from '../assets/playlist/1.jpeg'
import Card2 from '../assets/playlist/2.png'
import Card3 from '../assets/playlist/3.jpeg'
import Card4 from '../assets/playlist/4.jpeg'
import Card5 from '../assets/playlist/5.jpeg'
import Card6 from '../assets/playlist/6.jpeg'
import Card7 from '../assets/playlist/7.jpeg'
import Card8 from '../assets/playlist/8.jpeg'
import Card9 from '../assets/playlist/9.jpeg'
import Card10 from '../assets/playlist/10.jpeg'
import Card11 from '../assets/playlist/11.jpeg'
import Card12 from '../assets/playlist/12.jpeg'
import Card13 from '../assets/playlist/13.jpeg'
import Card14 from '../assets/playlist/14.jpeg'
import Card15 from '../assets/playlist/15.jpeg'

const Main = () => {
    return (
        <div className="main-container">
            <div className="playlist-container">
                <div id="result-playlists">
                    <div className="playlist">
                        <h1 id="greeting">Boa tarde</h1>
                        <h2 className="session">Navegar por todas as seções</h2>
                    </div>
                    {/* LIST ITEM 1 */}
                    <div className="offer__scroll-container">
                        <div className="offer__list">
                            <section className="offer__list-item">
                                {/* CARD  1 */}
                                <a href="" className="cards">
                                    <div className="cards card1">
                                        <img src={Card1} alt="" />
                                        <span>Boas festas</span>
                                    </div>
                                </a>
                                {/* CARD  2 */}
                                <a href="" className="cards">
                                    <div className="cards card2">
                                        <img src={Card2} alt="" />
                                        <span>Feitos para você</span>
                                    </div>
                                </a>
                                {/* CARD  3 */}
                                <a href="" className="cards">
                                    <div className="cards card3">
                                        <img src={Card3} alt="" />
                                        <span>Lançamentos</span>
                                    </div>
                                </a>
                                {/* CARD  4 */}
                                <a href="" className="cards">
                                    <div className="cards card4">
                                        <img src={Card4} alt="" />
                                        <span>Creators</span>
                                    </div>
                                </a>
                                {/* CARD  5 */}
                                <a href="" className="cards">
                                    <div className="cards card5">
                                        <img src={Card5} alt="" />
                                        <span>Para treinar</span>
                                    </div>
                                </a>
                                {/* CARD  6 */}
                                <a href="" className="cards">
                                    <div className="cards card6">
                                        <img src={Card6} alt="" />
                                        <span>Podcasts</span>
                                    </div>
                                </a>
                                {/* CARD  7 */}
                                <a href="" className="cards">
                                    <div className="cards card7">
                                        <img src={Card7} alt="" />
                                        <span>Sertanejo</span>
                                    </div>
                                </a>
                                {/* CARD  8 */}
                                <a href="" className="cards">
                                    <div className="cards card8">
                                        <img src={Card8} alt="" />
                                        <span>Samba e pagode</span>
                                    </div>
                                </a>
                                {/* CARD  9 */}
                                <a href="" className="cards">
                                    <div className="cards card9">
                                        <img src={Card9} alt="" />
                                        <span>Funk</span>
                                    </div>
                                </a>
                                {/* CARD 10 */}
                                <a href="" className="cards">
                                    <div className="cards card10">
                                        <img src={Card10} alt="" />
                                        <span>MPB</span>
                                    </div>
                                </a>
                                {/* CARD 11 */}
                                <a href="" className="cards">
                                    <div className="cards card11">
                                        <img src={Card11} alt="" />
                                        <span>Rock</span>
                                    </div>
                                </a>
                                {/* CARD 12 */}
                                <a href="" className="cards">
                                    <div className="cards card12">
                                        <img src={Card12} alt="" />
                                        <span>Hip Hop</span>
                                    </div>
                                </a>
                                {/* CARD 13 */}
                                <a href="" className="cards">
                                    <div className="cards card13">
                                        <img src={Card13} alt="" />
                                        <span>Indie</span>
                                    </div>
                                </a>
                                {/* CARD 14 */}
                                <a href="" className="cards">
                                    <div className="cards card14">
                                        <img src={Card14} alt="" />
                                        <span>Relax</span>
                                    </div>
                                </a>
                                {/* CARD 15 */}
                                <a href="" className="cards">
                                    <div className="cards card15">
                                        <img src={Card15} alt="" />
                                        <span>Música Latina</span>
                                    </div>
                                </a>
                            </section>
                        </div>
                    </div>
                </div>
                <div id="result-artist" className="hidden">
                    <div className="grid-container">
                        <div className="artist-card" id="">
                            <div className="card-img">
                                <img id="artist-img" className="artist-img" />
                                <div className="play">
                                    <span className="fa fa-solid fa-play"></span>
                                </div>
                            </div>
                            <div className="card-text">
                                <a title="Foo Fighters" className="vst" href></a>
                                <span className="artist-name" id="artist-name"></span>
                                <span className="artist-categorie">Artista</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Main;