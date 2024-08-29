function avalibleSizesTv (tv){
    let output = "";

    for (let i=0; i < tv.length; i++) {
        const sizeInches = tv[i];
        const sizeCm = Math.round(tv[i] * 2.54);

        output= output + `${sizeInches} inch (${sizeCm} cm)`;

        if ( i < tv.length -1 ) {
            output= `${output} |`;
        }
    }

    return output;
}

export default avalibleSizesTv;