import './App.css';
import calculateSoldProducts from "./constants/helpers/calculateSoldProducts.js";
import {bestSellingTv, inventory} from "./constants/inventory.js";
import calculateStockProducts from "./constants/helpers/calculateStockProducts.js";
import calculateItemsNeedSell from "./constants/helpers/calculateItemsNeedSell.js";
import stringTv from "./constants/helpers/stringTv.js";
import avalibleSizesTv from "./constants/helpers/avalibleSizesTv.js";
import priceTv from "./constants/helpers/priceTv.js";
import minus from './assets/minus.png';
import check from './assets/check.png';


function App() {
    const handleButtonClick = () => {
       return console.log(`event clicked`);
    }
    function mostSold () {
        inventory.sort ((a, b)=> {
            return b.sold - a.sold;
        });
        console.log(inventory)
    }

    function cheapestFirst (){
        inventory.sort((a,b)=> {
            return a.price - b.price;
        });
        console.log(inventory)
    }

    function sportBest (){
        inventory.sort((a,b) => {
            return b.refreshRate - a.refreshRate;
        });
        console.log(inventory)
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
                            <li><img src={check} alt={"check"} className={"icon"} />wifi</li>
                            <li><img src={minus} alt={"check"} className={"icon"} />speech</li>
                            <li><img src={check} alt={"check"} className={"icon"} />hdr</li>
                            <li><img src={check} alt={"check"} className={"icon"} />bluetooth</li>
                            <li><img src={minus} alt={"check"} className={"icon"} />ambilight</li>
                        </ul>
                    </div>
                </article>
            </section>
            <section>
                <h2>Alle tvs</h2>
                <button type="button" onClick={mostSold}>
                    Meest verkocht eerst
                </button>
                <button type="button" onClick={cheapestFirst}>
                    Goedkoopste eerst
                </button>
                <button type="button" onClick={sportBest}>
                    Meest geschikt voor sport eerst
                </button>

                {inventory.map((tv) => {
                    return (
                       <article className="product" key={tv.type}>
                           <span className="product-image">
                               <img src={tv.sourceImg} alt="afbeelding van product"/>
                           </span>
                           <div className="product-info">
                               <h3>{stringTv(tv)}</h3>
                               <p className={"product-price"}>{priceTv(tv.price)}</p>
                               <p>{avalibleSizesTv(tv.availableSizes)}</p>
                               <ul className={"option-list"}>
                                   {tv.options.map((option) => {
                                   if (option.applicable === true){
                                   return <li key={`${tv.type}-${option.name}`}><img src={check} alt="Icoon: aanwezig" className="icon"/>{option.name}
                                   </li>
                                   } else {
                                       return <li key={`${tv.type}-${option.name}`}><img src={minus} alt="Icoon: aanwezig" className="icon"/>{option.name}
                                       </li>
                                   }
                                   })}
                               </ul>
                           </div>
                       </article>
                    )})}
            </section>
        </main>
    )
}

export default App
