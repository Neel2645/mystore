import ProductCard from '@/components/ProductCard';
import { getProducts } from '../../database/products';

export default async function Products() {
    const products = getProducts();

    return (
        <>
            <div className='grid grid-cols-4 gap-y-12 gap-x-14 mx-24 my-12'>
                {
                    products.map((prod)=>{
                        return(
                            <ProductCard product={prod}/>
                        )
                    })
                }
            </div>
        </>
    )
}