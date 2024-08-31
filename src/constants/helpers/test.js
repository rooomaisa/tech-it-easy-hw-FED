import {bestSellingTv} from "../inventory.js";
import stringTv from "./stringTv.js";
import priceTv from "./priceTv.js";
import avalibleSizesTv from "./avalibleSizesTv.js";

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