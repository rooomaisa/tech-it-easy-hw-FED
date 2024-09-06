
import check from "../assets/check.png";
import minus from "../assets/minus.png";

function ProductTile({img, altImg, stringTileTv, priceTvTile, avalibleSizesTileTv, listImg, altListImg   }){
    return (
        <article className="product product-best-seller">
                    <span className="product-image">
                        <img src={img} alt={altImg}/>
                    </span>
            <div className="product-info">
                <h3>{stringTileTv}</h3>
                <p className="product-price">{priceTvTile}</p>
                <p>{avalibleSizesTileTv}</p>
                <ul className="option-list">
                    <li><img src={listImg} alt={altListImg} className={"icon"}/>wifi</li>
                    {/*<li><img src={minus} alt={"check"} className={"icon"}/>speech</li>*/}
                    {/*<li><img src={check} alt={"check"} className={"icon"}/>hdr</li>*/}
                    {/*<li><img src={check} alt={"check"} className={"icon"}/>bluetooth</li>*/}
                    {/*<li><img src={minus} alt={"check"} className={"icon"}/>ambilight</li>*/}
                </ul>
            </div>
        </article>

    );
}

export default ProductTile;