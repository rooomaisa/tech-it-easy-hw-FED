
function Tile( {title, number, color} ) {

    const templateString = `dashboard-item items-${color}`
    return (
        <article className={templateString}>
            <h3>{title}</h3>
            <h2>{number}</h2>
        </article>
    );
}

export default Tile