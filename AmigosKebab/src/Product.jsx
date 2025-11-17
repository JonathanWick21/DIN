function Product(props) {
    const { image, name, precio, descripcion } = props;
    return (
        <article
            tabIndex="0"
            aria-label={`Producto ${name}`}
            className="product-card"
        >
            <figure className="product-figure">
                <img
                    src={image}
                    alt={`Foto de ${name}`}
                    loading="lazy"
                    className="product-img"
                />
                <figcaption className="sr-only">{descripcion}</figcaption>
            </figure>

            <div className="product-body">
                <header>
                    <h2 className="product-name">{name}</h2>
                </header>
                <p className="product-price"><strong>{precio} €</strong></p>
                <p className="product-desc">{descripcion}</p>
            </div>
        </article>
    );
}

export default Product;