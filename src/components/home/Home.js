import React from "react";
import BannerCarousel from "../bannerCarousel/BannerCarousel";
import Product from "../product/Product";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__image">
          <BannerCarousel />
        </div>
        <div className="home__row">
          <Product
            id="1"
            title="The first multi-season series about the life of Christ and the highest crowd-funded TV series or film project of all time. 'The Chosen' portrays Jesus through the eyes of those who met him"
            price={22.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71bAgwUG-HL._AC_UY327_FMwebp_QL65_.jpg"
          />

          <Product
            id="2"
            title="What Do You Know: A Conversation With Ethiopian Animals in Amharic And English Paperback April 25, 2020"
            price={9.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71JL7FP5H5L._AC_UY327_FMwebp_QL65_.jpg"
          />

          <Product
            id="3"
            title="316L Stainless Steel Africa Map Design Earrings, Black/18K Gold Plated, Minimalist Dangle Earrings Statement Jewelry, Come Gift Box"
            price={12.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/51TccKb+43L._AC_UL480_FMwebp_QL65_.jpg"
          />

          <Product
            id="4"
            title="Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming 3rd Edition"
            price={18.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/91asIC1fRwL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="5"
            title="YKing1 Cup of Ethiopian Coffee with Aromatic Frankincense Ethiopian Foods Wall Art Painting Pictures Print On Canvas Stretched & Framed Artworks Modern Hanging Posters Home Decor 3PANEL"
            price={39.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/61pcT2un7IL._AC_UL480_FMwebp_QL65_.jpg"
          />

          <Product
            id="6"
            title="Cake Stand, 12'' Cake Spinner Cake Decorating Supplies, Round Decorating Turntable Revolving Aluminum Table Holder Baking Display Tray Plate Tools Accessories for Birthday Wedding Party"
            price={28.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71bXXZgi-WL._AC_SL1500_.jpg"
          />

          <Product
            id="7"
            title="BALONAR 147PCS DIY Olive Green Balloons Garland with 18/10/5inch Olive Green White Balloons Gold Chrome Metallic Balloons for Birthday Party Wedding Ceremony Anniversary Baby Shower Balloon Chain"
            price={14.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71KXBGu5WiL._AC_UL480_FMwebp_QL65_.jpg"
          />

          <Product
            id="8"
            title='Homebeez Round Velvet Storage Ottoman, Button Tufted Footrest Stool Coffee Table for Living Room,24.8" L x 24.8" W x 15.4" H ,Emerald Green'
            price={139.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61vMNlKSOQL._AC_UL480_FMwebp_QL65_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="9"
            title="Sequin Fabric by The Yard Gold Sparkly Fabric Gold Fabric for Sewing Sequence Material Fabric Little Mermaid Fabric Sequin Fabric Quilting Fabric Flip Sequin Fabric for Dress"
            price={11.27}
            rating={5}
            image="
            https://m.media-amazon.com/images/I/71oeQjDLCaL._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id="10"
            title="Instant Pot Duo 7-in-1 Electric Pressure Cooker, Slow Cooker, Rice Cooker, Steamer, Sauté, Yogurt Maker, Warmer & Sterilizer, Includes App With Over 800 Recipes, Stainless Steel, 6 Quart"
            price={99.95}
            rating={5}
            image="
            https://m.media-amazon.com/images/I/71V1LrY1MSL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="11"
            title="Essential Oils Set - Top 6 Organic Blends for Diffusers, Home Care, Candle Making, Fragrance, Aromatherapy, Humidifiers, Gifts - Peppermint, Tea Tree, Lavender, Eucalyptus, Lemongrass, Orange (10mL)"
            price={9.98}
            rating={4}
            image="
            https://m.media-amazon.com/images/I/81e7-euA0-L._AC_UL480_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12"
            title='Introducing Amazon Fire TV 65" Omni QLED Series 4K UHD smart TV, Dolby Vision IQ, local dimming, hands-free with Alexa'
            price={799.99}
            rating={4}
            image="
            https://m.media-amazon.com/images/I/51iRCVZ9P-L._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="13"
            title="DIGITNOW Bluetooth Record Player for Vinyl with Speakers, Wireless Turntable with 36W High Fidelity Stereo Speakers,Wood Vinyl Player with Magnetic Cartridge & Adjustable Counter Weight,RCA output"
            price={219.99}
            rating={4}
            image="
            https://m.media-amazon.com/images/I/61yOZRUC8gL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
