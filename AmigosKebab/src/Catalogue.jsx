import dataProducts from './data/dataProducts.js';
import Product from './Product.jsx';

function Catalogue() {
    return (
        <section>
            {
                dataProducts.map ( product =>
                    <Product
                        image={product.imagen}
                        name={product.nombre}
                        precio={product.precio}
                        descripcion={product.descripcion}
                    />
                )
            }
        </section>
    )
}

export default Catalogue;