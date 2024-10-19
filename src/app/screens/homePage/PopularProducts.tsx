import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { Navigation } from 'swiper';
import { Autoplay } from 'swiper';
import React from 'react';
import ProductCard from '../productsCard/ProductCard';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { useSelector } from "react-redux";
import {createSelector} from "reselect" ;
import { retrieveProduct } from "./selector";
import { Product } from '../../../libs/types/product';
import { CartItem } from '../../../libs/types/search';

interface PopularProductsProps {
    onAdd: (item: CartItem) => void;
}
  
  
const productRetriever = createSelector(
      retrieveProduct,
      (products) => ({products})
);


export default function PopularProducts(props: PopularProductsProps){
	const {onAdd} = props;
  	const {products} = useSelector(productRetriever);
    return(
        <div className={"container"}>
            <Swiper
            
				className={'popular-product-swiper'}
				slidesPerView={4}
                
				spaceBetween={15}
				modules={[Autoplay, Navigation, Pagination]}
				navigation={{
					nextEl: '.swiper-trend-next',
					prevEl: '.swiper-trend-prev',
				}}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
				pagination={{
					el: '.swiper-trend-pagination',
				}}
			>
				{products.map((product: Product) => {
					return (
						<SwiperSlide key={product._id} className='popular-product-slide'>
							<ProductCard onAdd={onAdd} item={product}/>
						</SwiperSlide>
					);
				})}
			</Swiper>
        </div>
    );
}