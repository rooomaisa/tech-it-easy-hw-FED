import {bestSellingTv, inventory} from "../inventory.js";

// Opdracht 1a: Gebruik een array-methode om een array te maken met daarin alle tv-type namen. Log de uitkomst in de console.
const tvTypes = inventory.map((type) => {
    return type.type;
})
console.log(tvTypes);

//     Opdracht 1b: Gebruik een array-methode om alle informatie te verzamelen van de tv's die volledig uitverkocht zijn. Log de uitkomst in de console.
const outOfStock = inventory.filter ((tv) => {
    return tv.originalStock === tv.sold;
})
console.log(outOfStock);

// Opdracht 1c: Gebruik een array-methode om de informatie van het tv-type 'NH3216SMART' op te halen.
const findType = inventory.type ((type) => {
    return type.type === 'NH3216SMART';
})
console.log(findType);

//     Opdracht 1d: Gebruik een array-methode om een lijst te maken van de merk- en tv-namen waarbij aangegeven wordt of deze geschikt zijn voor sport-kijkers (een verversingssnelheid van 100Hz of hoger). Doe dit in het format { name: 'Toshiba HD TV', suitable: false }. Log de uitkomst in de console. je gebruikt toch map omdat je ze allemaal af moet en bij alles wat toegevoegd maar bij de ene is dit de zin niet geschikt en de andere wel geschikt
const sportTv = inventory.map ((tv) =>{
    if (tv.refreshRate >=100){
        return { name: `${tv.brand} ${tv.name}`, suitable:true }
    } else {
        return { name: `${tv.brand} ${tv.name}`, suitable:false }
    }
})
console.log(sportTv)

//     Opdracht 1e (uitdaging): Gebruik array-methoden om alle informatie te verzamelen van de tv's die beschikbaar zijn in schermgroottes van 65 inch en groter.
const bigSizeTv = inventory.filter ((tv) =>{
    const isBigSize = tv.availableSizes.find((size)=> {
        return size >= 65;
    });
    return isBigSize;
})
console.log(bigSizeTv)

// Opdracht 1f (uitdaging): Gebruik array-methoden om alle informatie te verzamelen van de tv's die over ambilight beschikken. Log de uitkomst in de console.
const ambilight = inventory.filter((tv)=>{
    const hasAmbilight =tv.options.find((option)=>{
        return option.name === "ambiLight";
    });
    if (hasAmbilight.applicable === true){
        return true;
    }
})
console.log(ambilight)