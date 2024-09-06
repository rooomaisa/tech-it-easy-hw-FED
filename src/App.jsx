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
import outofstock from './assets/out-of-stock.png';
import Tile from "./components/Tile.jsx";
import ProductTile from "./components/ProductTile.jsx";



function App() {
    // i used before for the buttons
    // const handleButtonClick = () => {
    //    return console.log(`event clicked`);
    // }
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
 // i learned here that i can use the math.max function to find the largest number in a set of numbers.  but because it doesnt work on arrays i need the spread operator ... to make a list of numbers and not a array. the function expects a list. but we have not learned this yes so i was curious how to solve that with other options.

    function screenBigfirst (){
        inventory.sort((a,b) => {
        const maxSizeA = Math.max(...a.availableSizes);
        const maxSizeB = Math.max(...b.availableSizes);
        return maxSizeB - maxSizeA;
        })
        console.log(inventory);
    }

    function isSoldOut(tv) {
        return calculateItemsNeedSell([tv]) === 0;
    }


    return (
        <main className="page-container">
            <header>
                <div className="menu">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Tvs</a></li>
                        <li><a href="#">New in</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </div>
            </header>
            <h1>Tech it easy dashboard</h1>
            <section>
                <h2>Verkoopoverzicht</h2>
                <div className="dashboard-container">

                    <Tile title={"Aantal verkochte producten"}
                          number={calculateSoldProducts(inventory)}
                          color={"green"}/>
                    <Tile title={"Aantal ingekochte producten"}
                          number={calculateStockProducts(inventory)}
                          color={"blue"}/>
                    <Tile title={"Aantal te verkopen producten"}
                          number={calculateItemsNeedSell(inventory)}
                          color={"red"}/>
                </div>
            </section>
            <section className="best-seller-container">
                <h2>Best verkochte tv</h2>
                <ProductTile
                    img={bestSellingTv.sourceImg}
                    altImg={"Afbeelding van het product"}
                    stringTiletv={stringTv(bestSellingTv)}
                    priceTvTile={priceTv(bestSellingTv.price)}
                    avalibleSizesTileTv={avalibleSizesTv(bestSellingTv.availableSizes) }
                    listImg={check}
                    altListImg={"check"}
                />

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
                <button type="button" onClick={screenBigfirst }>
                    Grootste schermgroottes eerst
                </button>


                {inventory.map((tv) => {
                    const soldOut= isSoldOut(tv);
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
                                        if (option.applicable === true) {
                                            return <li key={`${tv.type}-${option.name}`}><img src={check} alt="Icoon: aanwezig" className="icon"/>{option.name}
                                            </li>
                                        } else {
                                            return <li key={`${tv.type}-${option.name}`}><img src={minus} alt="Icoon: aanwezig" className="icon"/>{option.name}
                                            </li>
                                        }
                                    })}
                                </ul>
                                {/*Short-circuit evaluation: This allows the right side of the && to be evaluated only if the left side is true*/}
                                {soldOut && (
                                    <div className="option-list">
                                        <p>Sold Out</p>
                                        <img src={outofstock} alt="Sold Out" className="icon2"/>
                                    </div>
                                )}
                            </div>
                        </article>
                    )
                })}
            </section>
        </main>
    )
}

export default App
