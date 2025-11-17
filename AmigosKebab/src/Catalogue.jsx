import dataProducts from './data/dataProducts.js';
import Product from './Product.jsx';

function Catalogue() {
    return (
        <section className="catalogue-list">
            {
                dataProducts.map(product => (
                    <Product
                        key={product.id ?? product.nombre}
                        image={product.imagen}
                        name={product.nombre}
                        precio={product.precio}
                        descripcion={product.descripcion}
                    />
                ))
            }
        </section>
    )
}

export default Catalogue;