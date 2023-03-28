// react
import { ReactNode } from 'react';
// material ui
import {
	Paper,
	TableContainer,
	Table,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
} from '@mui/material';

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
