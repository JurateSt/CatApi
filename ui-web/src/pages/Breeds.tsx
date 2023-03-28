// api utils
import api from '../api/axios';
// react
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// material ui
import { Typography, TextField, TableCell } from '@mui/material';
// custom components
import { TableBasic } from '../components/TableBasic';
import { TableRowClick } from '../components/TableRowClick';

interface ICats {
	id: string;
	name: string;
	description: string;
	wikipedia_url: string;
}
export const Breeds = () => {
	const navigate = useNavigate();
	const [breeds, setBreeds] = useState<ICats[]>([]);

	useEffect(() => {
		getBreeds();
		console.log('BREEDS', breeds);
	}, []);

	const getBreeds = async () => {
		try {
			const cats = (await api.get('/breeds')).data;
			console.log('CATS', cats);
			setBreeds(cats);
		} catch (err) {
			console.log('ERROR', err);
		}
		//setBreeds(cats);
	};

	const handleClick = (id: string) => {
		navigate(`/breeds/${id}`);
	};

	const handleSearch = async (e: any) => {
		let search = e.target.value.toLowerCase();
		const cats = (await api.get('/breeds', { params: { search } })).data;
		console.log('SEARCH', cats);
		setBreeds(cats);
		// console.log('SEARCH', search.length);
		// if (search.length === 0) {
		// 	search = '';
		// }
		// //console.log('SEARCH', search, search.length);
		// //const list = [...breeds];
		// //console.log('LIST ORIN', list);

		// const cats = breeds.filter((item) => item.name.toLowerCase().includes(search));
		// //console.log('BRREEDS', breeds);
		// setBreeds(cats);

		// console.log('handleSearch', search);
	};

	return (
		<>
			<Typography variant="h1" align="center">
				Cat Breeds
			</Typography>
			<TextField label="Search by cat name" type="search" onChange={handleSearch} />
			<TableBasic head={['ID', 'Name', 'Description', 'Wikipedia']}>
				{breeds?.map((item) => {
					return (
						<TableRowClick key={item.id} onClick={() => handleClick(item.id)}>
							<TableCell>{item.id}</TableCell>
							<TableCell>{item.name}</TableCell>
							<TableCell>{item.description}</TableCell>
							<TableCell>{item.wikipedia_url}</TableCell>
						</TableRowClick>
					);
				})}
			</TableBasic>
		</>
	);
};
