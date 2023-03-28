// api utils
import api from '../api/axios';
// react
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// material ui
import { Typography, Link, Card, CardContent } from '@mui/material';
// custom components
import { Title } from '../components/Title';

interface IBreed {
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
	const [cat, setCat] = useState<IBreed>();

	useEffect(() => {
		getCatById();
	}, []);

	const getCatById = async () => {
		try {
			const cat = (await api.get(`/breeds/${id}`)).data;
			setCat(cat);
		} catch (err) {
			console.error({ error: err });
		}
	};

	return (
		<Card>
			<CardContent>
				<Title title={`More about ${cat?.name}`}></Title>
				<Typography variant="h5" component="div">
					About: {cat?.description}
				</Typography>
				<Typography variant="h5" component="div">
					More:
					<Link target="_blank" href={`${cat?.wikipedia_url}`}>
						Wiki
					</Link>
				</Typography>
				<Typography variant="h5" component="div">
					Origin: {cat?.origin}
				</Typography>
				<Typography variant="h5" component="div">
					<Link
						target="_blank"
						href={`https://cdn2.thecatapi.com/images/${cat?.reference_image_id}.jpg`}
					>
						View Image
					</Link>
				</Typography>
			</CardContent>
		</Card>
	);
};
