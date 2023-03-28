// api utils
import api from '../api/axios';
// react
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// material ui
import { TextField, TableCell } from '@mui/material';
// custom components
import { TableBasic } from '../components/TableBasic';
import { TableRowClick } from '../components/TableRowClick';
import { Title } from '../components/Title';

interface IBreed {
	id: string;
	name: string;
	description: string;
	wikipedia_url: string;
}
export const Breeds = () => {
	const navigate = useNavigate();
	const [breeds, setBreeds] = useState<IBreed[]>([]);

	useEffect(() => {
		getBreeds();
	}, []);

	const getBreeds = async () => {
		try {
			const cats = (await api.get('/breeds')).data;
			setBreeds(cats);
		} catch (err) {
			console.error({ error: err });
		}
	};

	const handleClick = (id: string) => {
		navigate(`/breeds/${id}`);
	};

	const handleSearch = async (e: any) => {
		let search = e.target.value.toLowerCase();
		const cats = (await api.get('/breeds', { params: { search } })).data;
		setBreeds(cats);
	};

	return (
		<>
			<Title title="Cat Breeds"></Title>
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
