const express = require('express')
//	const mongoose = require('mongoose')
const multer = require('multer'); // Import multer
const path = require('path');
const articleRouter = require('./routes/articles')
const Article = require('./models/article')
const methodOverride = require('method-override')
const app = express()

//	added code
var indexRouter = require('./routes/index');
var cartRouter = require('./routes/cart');
const Cartarray = require('./models/cartarray');

const Size = require('./models/size')
const Cart = require('./models/cart')
const Custommers = require('./models/customers')
const Guns = require('./models/guns')
const Gunscategories = require('./models/gunscategories')
const Ordercontents = require('./models/ordercontents')
const Orders = require('./models/orders')
const Rifles = require('./models/rifles')
const Riflecategories = require('./models/riflescategories')
const Sales = require('./models/sales')
const Transactions = require('./models/transactions')
const Wishlist = require('./models/wishlist')


//	mongoose.connect('mongodb://localhost/blog'/* , { useNewUrlParser: true, useUnifiedTopology: true } */)

const  mongoose = require('mongoose');
//	this is the database not populated automatically yet for mdn node expresss tutoril not used b4
//	const  mongoDB = 'mongodb+srv://cordel22:dopici123@cluster0.ioypxqt.mongodb.net/?retryWrites=true&w=majority';
//	this is node_eshop_arms db
const  mongoDB = 'mongodb+srv://cordelfenevall:dopici123@cluster0.dznhd8i.mongodb.net/?retryWrites=true&w=majority';



mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))
//	app.use('/articles', articleRouter)
app.use(methodOverride('_method'))



// Configure storage for uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './pics'); // Specify the destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Use unique filenames
  },
});


// Create the multer instance
const upload = multer({ storage: storage });


// Serve static files from the "pics" directory
app.use('/pics', express.static(path.join(__dirname, 'pics')));


//	this shit worx
/*
app.use('/', (req, res) => {
	res.render('cart/index.ejs')
})
*/



app.get('/', async (req, res) => {
	console.log(Cartarray)
	res.render('cart/index', { cart: Cartarray })
})

// Use the upload middleware for specific routes
app.post('/cart/guncategory/create', upload.single('image'), (req, res) => {
	// Handle the uploaded file in this route
	// Access the uploaded file details using req.file
	
	const category = req.body.category;
	const description = req.body.description;
	const image = req.file.filename;
	
  
	const gunscategory = new Gunscategories({
		category,
		description,
		image,
	  });

	gunscategory.save((err) => {
	if (err) {
		console.log(err);
		res.render('cart/guncategory_create', { title: 'Create Gun Category', error: 'Error creating gun category' });
	} else {
		res.redirect('/cart/gunscategories');
	}
	  });
  });

// ... Rest of your routes and app.listen ...


//	lets redirect to through routes to cart.js!!!
//	naco?
//	app.use('/', indexRouter);
//	str8 to cart!!!
app.use('/', cartRouter);


/*

app.get('/', async (req, res) => {
	//	res.send('Hello Ma Niggaz')		*/
	/*
	const articles = [{
		title: 'more Testes Articles',
		//	createdAt: Date.now(),
		createdAt: new Date(),
		description: 'Test description'
	},
	{
		title: 'Testes Articles',
		createdAt: new Date(),
		description: 'Test description'
	}]
	*/
/*	const articles = await Article.find().sort({ createdAt: 'desc' })
	res.render('articles/index', { articles: articles })
})

app.use('/articles', articleRouter)

*/

//	app.listen(5000)
module.exports = app;




