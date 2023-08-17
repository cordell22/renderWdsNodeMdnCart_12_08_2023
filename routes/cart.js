
var express = require('express');
var router = express.Router();

var shop_controller = require('../controllers/shopController');

// Require controller modules.
var book_controller = require('../controllers/bookController');
var author_controller = require('../controllers/authorController');
var genre_controller = require('../controllers/genreController');
var book_instance_controller = require('../controllers/bookinstanceController');

const shoppedArray = require('../models/shoppedarray'); // Import the cartArray


const Cart = require('../models/cart')
const Custommers = require('../models/customers')
const Guns = require('../models/guns')
const Gunscategories = require('../models/gunscategories')
const Ordercontents = require('../models/ordercontents')
const Orders = require('../models/orders')
const Rifles = require('../models/rifles')
const Riflecategories = require('../models/riflescategories')
const Sales = require('../models/sales')
const Size = require('../models/size')
const Transactions = require('../models/transactions')
const Wishlist = require('../models/wishlist')


// Require controller modules.
const gunscategory_controller = require('../controllers/gunscategoryController');




/// BOOK ROUTES ///

// GET catalog home page.
//  todo:   do <>
//  router.get('/', book_controller.index);

/*
app.use('/', (req, res) => {
	res.render('index.ejs')
})


router.get('/', async (req, res) => {
	res.render('cart/index', { cart: "kokot kart" })
})

*/


//  root get is in server.js




//  get cart
router.get('/cart/showcart', async (req, res) => {
	res.render('cart/showcart', { cart: shoppedArray });
})




// POST request for adding item to cart 
router.post('/cart/addtocart', async (req, res) => {
    const itemId = req.body.itemId; // Get the itemId from the request body
    
  // Find the item with the specified itemId (this is just a placeholder logic)
  const item = { id: itemId, name: `Item ${itemId}` };
  
  // Add the item to the cartArray
  shoppedArray.push(item);
  
  // Respond with a success message
  res.send('Item added to cart');
  //    res.redirect('/cart/showcart')
});




//  guns categories


// GET request for list of all Gunscategories.
router.get('/cart/gunscategories', gunscategory_controller.gunscategories_list);


// GET request for creating a Gunscategories. NOTE This must come before routes that display Gunscategories (uses id).
router.get('/cart/guncategory/create', gunscategory_controller.gunscategories_create_get);

// POST request for creating a Gunscategories.
router.post('/cart/guncategory/create', gunscategory_controller.gunscategories_create_post);

// GET request to display delete confirmation page for a specific Gunscategories.
router.get('/cart/guncategory/:id/delete', gunscategory_controller.gunscategory_delete_get);

// POST request to delete a specific Gunscategories.
router.post('/cart/guncategory/:id/delete', gunscategory_controller.gunscategory_delete_post);

// GET request to display edit form for a specific Gunscategories.
router.get('/cart/guncategory/:id/update', gunscategory_controller.gunscategory_update_get);

// POST request to update a specific Gunscategories.
router.post('/cart/guncategory/:id/update', gunscategory_controller.gunscategory_update_post);

// GET request for detail page of a specific Gunscategories.
router.get('/cart/guncategory/:id', gunscategory_controller.gunscategories_detail);


/*

// GET request for inserting into gunscategories table. NOTE This must come before routes that display Gunscategories (uses id).
router.get('/cart/guncategory/create', 
//  controller function:
);

// POST request for inserting into  gunscategories.
router.post('/cart/guncategory/create', 
//  controller function:
);

// GET request to delete from gunscategories.
router.get('/cart/guncategory/:id/delete', 
//  controller function:
);

// POST request to delete from gunscategories.
router.post('/cart/guncategory/:id/delete', 
//  controller function:
);

// GET request to update gun entry.
router.get('/cart/guncategory/:id/update', 
//  controller function:
);

// POST request to update gun entry.
router.post('/cart/guncategory/:id/update', 
//  controller function:
);

// GET request for one gun entry.
router.get('/cart/guncategory/:id', 
//  controller function:
);

// GET request for list of all gunscategories items.
router.get('/cart/gunscategories', 
//  controller function:
);


*/





//  guns

// GET request for inserting into guns table. NOTE This must come before routes that display Guns (uses id).
router.get('/gun/create', 
//  controller function:
);

// POST request for inserting into  guns.
router.post('/gun/create', 
//  controller function:
);

// GET request to delete from guns.
router.get('/gun/:id/delete', 
//  controller function:
);

// POST request to delete from guns.
router.post('/gun/:id/delete', 
//  controller function:
);

// GET request to update gun entry.
router.get('/gun/:id/update', 
//  controller function:
);

// POST request to update gun entry.
router.post('/gun/:id/update', 
//  controller function:
);

// GET request for one gun entry.
router.get('/gun/:id', 
//  controller function:
);

// GET request for list of all guns items.
router.get('/guns', 
//  controller function:
);



module.exports = router









































