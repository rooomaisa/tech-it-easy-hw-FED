import './App.css';
import calculateSoldProducts from "./constants/helpers/calculateSoldProducts.js";
import {bestSellingTv, inventory} from "./constants/inventory.js";
import calculateStockProducts from "./constants/helpers/calculateStockProducts.js";
import calculateItemsNeedSell from "./constants/helpers/calculateItemsNeedSell.js";
import stringTv from "./constants/helpers/stringTv.js";
import avalibleSizesTv from "./constants/helpers/avalibleSizesTv.js";
import priceTv from "./constants/helpers/priceTv.js";


function App() {
    const handleButtonClick = () => {
       return console.log(`event clicked`);
    }


    return (
        <main className="page-container">
            <header>
                <div className="menu">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Tv's</a></li>
                        <li><a href="#">New in</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </div>
            </header>
            <h1>Tech it easy dashboard</h1>
            <section>
                <h2>Verkoopoverzicht</h2>
                <div className="dashboard-container">
                    <article className="dashboard-item items-sold">
                        <h3>Aantal verkochte producten</h3>
                        <h2>{calculateSoldProducts(inventory)}</h2>
                    </article>
                    <article className="dashboard-item items-original">
                        <h3>Aantal ingekochte producten</h3>
                        <h2>{calculateStockProducts(inventory)}</h2>
                    </article>
                    <article className="dashboard-item items-to-sell">
                        <h3>Aantal te verkopen producten</h3>
                        <h2>{calculateItemsNeedSell(inventory)}</h2>
                    </article>
                </div>
            </section>
            <section className="best-seller-container">
                <h2>Best verkochte tv</h2>
                <article className="product product-best-seller">
                    <span className="product-image">
                        <img src={bestSellingTv.sourceImg} alt="Afbeelding van het product"/>
                    </span>
                    <div className="product-info">
                        <h3>{stringTv(bestSellingTv)}</h3>
                        <p className="product-price">{priceTv(bestSellingTv.price)}</p>
                        <p>{avalibleSizesTv(bestSellingTv.availableSizes)}</p>
                        <ul className="option-list">
                            <li>[check-icon] wifi</li>
                            <li>[not-icon] speech</li>
                            <li>[check-icon] hdr</li>
                            <li>[check-icon] bluetooth</li>
                            <li>[not-icon] ambilight</li>
                        </ul>
                    </div>
                </article>
            </section>
            <section>
                <h2>Alle tvs</h2>
                <button type="button" onClick={handleButtonClick}>
                    Meest verkocht eerst
                </button>
                <button type="button" onClick={handleButtonClick}>
                    Goedkoopste eerst
                </button>
                <button type="button" onClick={handleButtonClick}>
                    Meest geschikt voor sport eerst
                </button>
            </section>
        </main>
    )
}

export default App
