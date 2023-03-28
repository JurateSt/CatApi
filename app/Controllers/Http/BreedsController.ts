// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import axios from 'axios';

export default class BreedsController {
	readonly CAT_URL = 'https://api.thecatapi.com/v1/breeds';

	/**
	 * @description Route for getting all cat breeds
	 * @name GET api/breeds
	 * @function
	 * @param {Object} request.qs
	 * @param {string} request.qs.search
	 * @returns {Object} breeds
	 */
	public async get({ request, response }) {
		const { search } = request.qs();
		const breeds = (await axios.get(this.CAT_URL)).data;
		if (search) {
			return response.json(breeds.filter((item) => item.name.toLowerCase().includes(search)));
		} else return response.json(breeds);
	}

	/**
	 * @description Route for getting cat breed by ID
	 * @name GET api/breeds/:id
	 * @function
	 * @param {string} request.param
	 * @returns {Object} breed
	 */
	public async getById({ request, response }) {
		const breedId = request.param('id');
		const breed = (await axios.get(`${this.CAT_URL}/${breedId}`)).data;
		response.json(breed);
	}
}
