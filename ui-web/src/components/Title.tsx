import { Typography } from '@mui/material';

type titleProps = {
	title: String;
};
export const Title = ({ title }: titleProps) => {
	return (
		<Typography variant="h1" align="center">
			{title}
		</Typography>
	);
};
