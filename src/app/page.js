import ProductCard from '@/components/ProductCard';
import { getProducts } from '../../database/products';

export default async function Products() {
    const products = getProducts();

    return (
        <>
            <div className='grid md:grid-cols-3 xl:grid-cols-4 grid-cols-1  gap-y-12 gap-x-14 mx-24 my-12'>
                {
                    products.map((prod)=>{
                        return(
                            <ProductCard product={prod} key={prod.id}/>
                        )
                    })
                }
            </div>
        </>
    )
}