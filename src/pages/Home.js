import React from 'react'
import Footer from '../component/Footer/Footer';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Header from '../component/Header/Header';
import "./home.css";
import banner1 from "../Asset/img/d1.jpg";
import banner2 from "../Asset/img/d2.jpg";
import banner3 from "../Asset/img/d3.jpg";
import banner4 from "../Asset/img/d4.jpg";
import banner5 from "../Asset/img/d5.jpg";
import Mbanner1 from "../Asset/img/m1.jpg";
import Mbanner2 from "../Asset/img/m2.jpg";
import Mbanner3 from "../Asset/img/m3.jpg";
import Mbanner4 from "../Asset/img/m4.jpg";
import Mbanner5 from "../Asset/img/m5.jpg";
import sprot from "../Asset/img/sport.png";
import blog1 from "../Asset/img/minibannersports2.png";
import blog2 from "../Asset/img/Casino.png";
import casino from "../Asset/img/minibannercasino.png";
import applepay from "../Asset/img/applepay.svg";
import googlepay from "../Asset/img/googlepay.svg";
import mask from "../Asset/img/mask.svg";
import samsumgpay from "../Asset/img/samsumgpay.svg";
import visa from "../Asset/img/visa.svg";
import ball from "../Asset/img/ball.svg";
import coin from "../Asset/img/coin.svg";
import Component from "../Asset/img/Component.svg";
import partner1 from "../Asset/img/partner-1.svg";
import partner2 from "../Asset/img/partner-2.svg";
import partner3 from "../Asset/img/partner-3.svg";
import partner4 from "../Asset/img/partner-4.svg";
import partner5 from "../Asset/img/partner-5.svg";
import partner6 from "../Asset/img/partner-6.svg";
import partner7 from "../Asset/img/partner-7.svg";
import partner8 from "../Asset/img/partner-8.svg";
import partner9 from "../Asset/img/partner-9.svg";
import game from "../Asset/img/phone.png";
import { Link } from 'react-router-dom';

function Home() {

  const clientSlider = [
    {id: 1, destopImg: banner1, mobileImg: Mbanner1},
    {id: 2, destopImg: banner2, mobileImg: Mbanner2},
    {id: 3, destopImg: banner3, mobileImg: Mbanner3},
    {id: 4, destopImg: banner4, mobileImg: Mbanner4},
    {id: 5, destopImg: banner5, mobileImg: Mbanner5},
  ]

  const partnerImg = [
    {id: 1, partnerImg: partner1},
    {id: 2, partnerImg: partner2},
    {id: 3, partnerImg: partner3},
    {id: 4, partnerImg: partner4},
    {id: 5, partnerImg: partner5},
    {id: 5, partnerImg: partner6},
    {id: 5, partnerImg: partner7},
    {id: 5, partnerImg: partner8},
    {id: 5, partnerImg: partner9},
  ]

  return (
    <div className='Home'>
        <Header/>
          <div className='carousel-section'>
              <Carousel infiniteLoop autoPlay>
                {clientSlider.map((item) => 
                    <div key={item.id}>
                        <img className='destop-img' src={item.destopImg} alt=''/>
                        <img className='mobile-img' src={item.mobileImg} alt=''/>
                    </div>
                  )}
              </Carousel>
          </div>
          <div className='blog-section'>
            <div className='container'>
                <div className='blog-wrapper'>
                  <div className='blog-main'>
                    <div className='blog-title'>
                        <img src={sprot} alt=''/>
                        <p>Sports</p>
                    </div>
                    <div className='blog-img'>
                        <img src={blog1} alt=''/>
                    </div>
                    <div className='blog-content'>
                      <h5>Crypto Sportsbook</h5>  
                      <p>Get your game on at Rake.com, home to the widest variety of sports betting matches in the industry, including all UFC matches, Soccer, Basketball, E-sports, Cricket, Tennis and Virtual AI games.</p>
                    </div>
                </div>
                <div className='blog-main'>
                    <div className='blog-title'>
                        <img src={blog2} alt=''/>
                        <p>Casino</p>
                    </div>
                    <div className='blog-img'>
                        <img src={casino} alt=''/>
                    </div>
                    <div className='blog-content'>
                      <h5>Crypto Casino</h5>  
                      <p>Rake.com offers a mind-boggling variety of casino games playable in every major currency. Court Lady Luck with thousands of classic and one-of-a-kind games, including Live Casino, Blackjack, Poker, Slots and numerous in-house Rake Originals you’ll find nowhere else.</p>
                    </div>
                </div>
                </div>
            </div>
          </div>
          <div className='payment-section'>
              <div className='container'>
                <div className='payment-wrapper'>
                  <div className='payment-text'>
                    <p>Purchase crypto from the following providers:</p>
                  </div>
                  <div className='payment-way'>
                      <Link to=''>
                        <img src={mask} alt='' />
                      </Link>
                      <Link to=''>
                        <img src={visa} alt='' />
                      </Link>
                      <Link to=''>
                        <img src={applepay} alt='' />
                      </Link>
                      <Link to=''>
                        <img src={googlepay} alt='' />
                      </Link>
                      <Link to=''>
                        <img src={samsumgpay} alt='' />
                      </Link>
                    </div>
                </div>
              </div>
          </div>
          <div className='get-the-game'>
            <div className='container'>
               <div className='get-the-game-wrapper'>
                <div className='get-the-game-text' >
                      <div className='game-title'>
                          <p>Reap the rewards of a seamless crypto casino experience.</p>
                          <h4>Get in the game!</h4>
                      </div>
                      <div className='the-gam-items'>
                          <img src={Component} alt=""/>
                          <h5>Safety</h5>
                          <p>Rake.com is a leading, licensed crypto casino registered in Curacao. Our top priority is providing our users a consistently safe gaming experience.</p>
                      </div>
                      <div className='the-gam-items'>
                          <img src={ball} alt=""/>
                          <h5>Convenience</h5>
                          <p>Rake.com offers the highest quality games for desktop, tablet, and mobile users. We’ve made it as easy as possible for you to enjoy trouble-free gaming at its best.</p>
                      </div>
                      <div className='the-gam-items'>
                          <img src={coin} alt=""/>
                          <h5>Currencies</h5>
                          <p>We have one of the widest ranges of accepted currencies in the industry, including BTC, ETH, LTC, XRP, TRX, EOS, USDT and many, many more.</p>
                      </div>
                  </div>
                  <div className='the-game'>
                      <img src={game} alt=""/>
                  </div>
               </div>
            </div>
          </div>
          <div className='partner'>
              <div className='container'>
                  <div className='partner-wrapper'>
                    {partnerImg.map((item) => 
                      <Link to='' key={item.id}>
                          <img src={item.partnerImg} alt='' />
                      </Link>
                    )}
                  </div>
              </div>
          </div>
        <Footer/>
    </div>
  )
}

export default Home