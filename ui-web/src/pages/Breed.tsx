import api from '../api/axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Link, Card, CardContent } from '@mui/material';

interface ICat {
	id: string;
	name: string;
	description: string;
	wikipedia_url: string;
	origin: string;
	reference_image_id: string;
	temperament: string;
}
export const Breed = () => {
	const { id } = useParams();
	const [cat, setCat] = useState<ICat>();
	useEffect(() => {
		getCatById();
	}, []);

	const getCatById = async () => {
		const cat = (await api.get(`/breeds/${id}`)).data;
		setCat(cat);
		console.log('CAT', cat, id);
	};
	return (
		<Card>
			<CardContent>
				<Typography variant="h2">More about {cat?.name}</Typography>
				<Typography variant="h5" component="div">
					{cat?.description}, {cat?.wikipedia_url}, {cat?.origin},
				</Typography>
				<Link
					target="_blank"
					href={`https://cdn2.thecatapi.com/images/${cat?.reference_image_id}.jpg`}
				>
					View Image
				</Link>
			</CardContent>
		</Card>
	);
};
