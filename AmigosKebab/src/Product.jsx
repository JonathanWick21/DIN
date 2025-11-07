

function Product(props)
    { const {image, name, precio, descripcion} = props;
    return (
        <article
            tabIndex = "0"
            aria-label = {`Producto ${name}`}
            className = 'background-white product_card p-4 rounded-lg shadow-md flex flex-col items-center max-w-[320px] mx-auto' 
        >
            <figure className="w-full aspect-square rounded-lg bg-gray-100 overflow-hidden">
                <img
                    src={image}
                    alt={`Foto de ${name}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                />
                <figcaption className="sr-only">{descripcion}</figcaption>
            </figure>

            <div className="pt-5 text-center">
                <header>
                    <h2>
                        {name}
                    </h2>
                </header>
                <p className="text-sm text-gray-600"><strong>{precio} €</strong></p>
            </div>
        </article>
    )
}

export default Product;