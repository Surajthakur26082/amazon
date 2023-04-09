import React from 'react';
import Product from './Product';
import "./Home.css";

function Home (){
	return(
		
		<><div className='home'>
			<img className='home_image' src='https://m.media-amazon.com/images/I/51-jztXip0L._SX3000_.jpg' alt='' />
		</div>
		<div className='home_row'>
				<Product
					id="101"
					title="name 1"
					price={10000}
					rating={4}
					image="https://m.media-amazon.com/images/I/714Kvqx5WHL._SX679_.jpg" />

				<Product
					id="102"
					title="name 1"
					price={12000}
					rating={5}
					image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" />

				<Product
					id="103"
					title="name 1"
					price={11}
					rating={4}
					image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24" />
			</div>
			<div className='home_row'>
				<Product
					id="104"
					title="name 1"
					price={5000}
					rating={4}
					image="https://assets.ajio.com/medias/sys_master/root/20220304/YL8n/62214fd1aeb26921afc77f49/-473Wx593H-463938180-peach-MODEL2.jpg" />
					
				<Product
					id="105"
					title="name 1"
					price={11999}
					rating={5}
					image="https://media.globalfootcare.com.au/static/thumbs/VFTKGFYeUmWpIEBi-small.png" />

				
			</div>
			<div className='home_row'>
				<Product
					id="106"
					title="name 1"
					price={59999}
					rating={3}
					image="https://fixthephoto.com/blog/UserFiles/Image/333_1/biggest-computer-monitors.jpg" />
			</div></>
	);
}

export default Home;
