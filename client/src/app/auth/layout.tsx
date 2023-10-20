import { ButtonGroup, Paper } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// import Login from './login/page';
import Registration from './registration/page';

export default function AuthLayout() {
	// const location = useLocation();
	// const currentPath = location.pathname;
	const auth = ['РЕГИСТРАЦИЯ', 'ВОЙТИ'];
	const paths = ['registration', 'login'];

	return (
		<>
			{/* <Header /> */}
			<Paper
				elevation={8}
				sx={{
					width: '40vw',
					margin: '100px auto',
				}}
			>
				<Box sx={{ margin: '5px auto' }}>
					<Grid
						container
						spacing={2}
						direction="row"
						alignItems="center"
						justifyContent="center"
					>
						<ButtonGroup
							size="large"
							variant="text"
							sx={{ p: 3 }}
							color="inherit"
							fullWidth={true}
							aria-label="outlined button group"
						>
							{auth.map((link, index) => (
								<Button
									href={`/auth/${paths[index]}`}
									sx={{
										fontSize: '22px',
										// borderBottom:
										// 	// currentPath === `/auth/${paths[index]}`
										// 		? '2px solid #8933CC'
										// 		: 'inherit',
										// color:
										// 	// currentPath === `/auth/${paths[index]}`
										// 		? '#000000'
										// 		: 'inherit',
									}}
									key={index}
								>
									{link}
								</Button>
							))}
						</ButtonGroup>
					</Grid>
					<Registration />
				</Box>
			</Paper>
		</>
	);
}
