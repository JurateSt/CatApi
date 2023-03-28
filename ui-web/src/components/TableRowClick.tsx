import { styled } from '@mui/system';
import { grey } from '@mui/material/colors';
import { TableRow } from '@mui/material';

export const TableRowClick = styled(TableRow)(({ theme }) => ({
	'&:hover': {
		backgroundColor: grey[100],
	},
	'cursor': 'pointer',
}));
