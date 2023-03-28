import React, { ReactNode } from 'react';
import { styled } from '@mui/system';
import {
	TextField,
	Paper,
	TableContainer,
	Table,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
} from '@mui/material';

const TableRowClick = styled(TableRow)(({ theme }) => ({
	// '&:hover': {
	// 	backgroundColor: 'blue !important',
	// },
	cursor: 'pointer',
}));

type tableProps = {
	head: Array<String>;
	children?: ReactNode;
};
export const TableBasic = ({ head, children }: tableProps) => {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						{head.map((item, index) => (
							<TableCell key={index}>{item}</TableCell>
						))}
					</TableRow>
				</TableHead>
				{children ? <TableBody>{children}</TableBody> : ''}
			</Table>
		</TableContainer>
	);
};
