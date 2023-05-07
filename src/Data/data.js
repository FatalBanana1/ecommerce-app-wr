// product data

const product = {
	// product details
	id: 1,
	name: "Sandy Tie Dye Print Dress",
	price: 36,
	image: "https://cdn.shopify.com/s/files/1/0237/3346/9261/products/file_fbe029d5-ce6f-4a4b-ad03-12de748de70c_1100x.jpg?v:1674955469",

	// product description
	productDetails: `Angel on earth vibes - look otherworldly in this tie dye printed
	dress 🦋 Having them all trying to figure out where you came
	from… heaven, duh 😇`,

	// product images
	images: [
		"https://cdn.shopify.com/s/files/1/0237/3346/9261/products/file_fbe029d5-ce6f-4a4b-ad03-12de748de70c_1100x.jpg?v=1674955469",
		"https://cdn.shopify.com/s/files/1/0237/3346/9261/products/file_d92bb309-b1c6-44fc-b0f6-b7a33a90d693_1100x.jpg?v=1674955469",
		"https://cdn.shopify.com/s/files/1/0237/3346/9261/products/file_ead9228a-a716-445a-8905-34caea5b18fa_1100x.jpg?v=1674955469",
		"https://cdn.shopify.com/s/files/1/0237/3346/9261/products/file_86ebb7b3-f1ec-4650-a3db-1983b106db83_1100x.jpg?v=1674955469",
	],

	modelInfo: `Casey is 5'11" and is wearing a size S`,

	materialInfo: [`95% Polyester`, `5% Spandex`],

	// you may also like options >> [ {} , {} ...]
	options: [
		{
			image: `https://cdn.shopify.com/s/files/1/0237/3346/9261/products/3D-Set-Front_6572ed78-803a-4120-831b-75424fa95a54_576x.jpg?v=1682025687`,
			name: `Flora Flower Mini Dress`,
			price: 88,
		},
		{
			image: `https://cdn.shopify.com/s/files/1/0237/3346/9261/products/3D-ECOMM-1_c852ff94-f4b9-48fa-a090-dedce54206b5_1680x.jpg?v=1680533372`,
			name: `Tiana Pink Ruffle Rosette Dress`,
			price: 46,
		},
		{
			image: `https://cdn.shopify.com/s/files/1/0237/3346/9261/products/Set-Front_3d1fe206-6cff-48db-bb9f-6d2398802260_1680x.jpg?v=1674917029`,
			name: `Kesia Ivory Mini Dress`,
			price: 38,
		},
		{
			image: `https://cdn.shopify.com/s/files/1/0237/3346/9261/products/Mindy-Front_576x.jpg?v=1674915175`,
			name: `Mindy Black Mini Dress`,
			price: 48,
		},
		{
			image: `https://cdn.shopify.com/s/files/1/0237/3346/9261/products/3D-ECOMM-4_69027741-c938-4a28-992a-463226565951_1680x.jpg?v=1680551677`,
			name: `Vanessa Pink Sequin Knit Top`,
			price: 36,
		},
		{
			image: `https://cdn.shopify.com/s/files/1/0237/3346/9261/products/file_42892f49-18b4-4e96-b00c-eae16cd878ed_1680x.jpg?v=1674955470`,
			name: `Rosie White Corset Dress`,
			price: 68,
		},
		{
			image: `https://cdn.shopify.com/s/files/1/0237/3346/9261/products/3D-ECOMM-4_eeb58312-6e28-4d3e-85a3-55619b409e31_1680x.jpg?v=1678131070`,
			name: `Suvi White Rhinestone Cropped Top`,
			price: 22,
		},
		{
			image: `https://cdn.shopify.com/s/files/1/0237/3346/9261/products/file_ab427c5a-06ec-46e4-a64a-e5a456e4b365_1680x.jpg?v=1674951313`,
			name: `Xavier Body Paint Dress`,
			price: 44,
		},
		{
			image: `https://cdn.shopify.com/s/files/1/0237/3346/9261/products/3D-Set-Front_8ca9e019-50aa-4aea-834f-e88dc7a13dbe_1680x.jpg?v=1674915515`,
			name: `Alice White Mini Dress`,
			price: 44,
		},
	],

	// quality = max score 5
	// fit = max score 10 (1-3 = runs small, 4-7 = normal fit, 8-10 = runs large)
	reviews: [
		{
			quality: 4,
			fit: 5,
			username: "lily",
			details:
				"Lovely dress. Well made but it was not the right dress for the occasion",
		},
		{
			quality: 5,
			fit: 5,
			username: "fatalbanana",
			details:
				"Ready for a party or paired with a cute hat, off to church",
		},
		{
			quality: 3,
			fit: 7,
			username: "beckywiththegoodhair",
			details:
				"Whether you’re a size 6 or 16 this dress will give you a feminine look and feel without highlighting some not so flattering features we “mature” women tend to accumulate. Size 16 and love it.",
		},
	],

	shipping: [
		[
			"STANDARD SHIPPING",
			"Free for orders over $75.",
			"Within the US, the estimated transit period is 6-11 business days, depending on the delivery address.",

			"Within the AU & UK, the estimated transit period is 5-11 business days, depending on the delivery address.",
			"Within DE, the estimated transit period is 10-15 business days, depending on the delivery address.",
		],

		[
			"EXPRESS SHIPPING",
			"Within the US, the estimated transit period is 2-5 business days, depending on the delivery address.",
			"Within the UK, the estimated transit period is 2-5 business days, depending on the delivery address.",
			"Express shipping is not yet available to customers in AU and DE.",
		],

		[
			"FREE RETURNS & EXCHANGES",
			"You can return or exchange your items from domestic orders easily with free shipping by clicking here and following the returns process.",
			"For free international returns shipping, just shoot us an email at rewind@finesse.us to get it started!",
		],
	],
};

export default product;
