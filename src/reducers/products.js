var initialState = [
	{
		id: 1,
		name: 'Iphone 6 Plus',
		image: 'img/ip6plus.jpg',
		description: 'Sản phẩm do apple sản xuất',
		price: 500,
		inventory: 15,
		rating: 5
	},
	{
		id: 2,
		name: 'Iphone 7 Plus',
		image: 'img/ip7plus.jpg',
		description: 'Sản phẩm do apple sản xuất',
		price: 550,
		inventory: 10,
		rating: 4
	},
	{
		id: 3,
		name: 'Iphone 8 Plus',
		image: 'img/ip8plus.jpg',
		description: 'Sản phẩm do apple sản xuất',
		price: 600,
		inventory: 5,
		rating: 3
	}	
];

const products = (state = initialState, action) => {
	switch(action.type){
		default: 
			return [...state];
	}
}

export default products;