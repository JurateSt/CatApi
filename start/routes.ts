/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route';

Route.group(() => {
	// get all cat breeds
	Route.get('/breeds', 'BreedsController.get');

	// get cat breed by ID
	Route.get('/breeds/:id', 'BreedsController.getById');

	// No such api methods on api
	// TODO: discuss
	// Route.post('/breeds', 'BreedsController.create');
	// Route.patch('/breeds', 'BreedsController.update');
	// Route.delete('/breeds', 'BreedsController.delete');
}).prefix('/api');
