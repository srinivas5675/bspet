// Filename - Header.js

import * as React from "react";
// importing material UI components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "@mui/material";



export default function Header() {
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography
					variant="h6"
					component="div"
					sx={{ flexGrow: 1 }}
				>
					BSPet
				</Typography>
				<Button color="inherit" href="/buffalos">Buffalos</Button>
				<Button color="inherit" href="/hens">Hens</Button>
				<Button color="inherit" href="/dogs">Dogs</Button>
			</Toolbar>
		</AppBar>
	);
}
