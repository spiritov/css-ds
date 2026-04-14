export function getEmptyTopGrid(): Cell[][] {
	const grid: Cell[][] = [];
	for (let x = 0; x < 12; x++) {
		grid.push([]);
		for (let y = 0; y < 16; y++) {
			grid[x].push(null);
		}
	}
	return grid;
}

export function getInitTopGrid(): Cell[][] {
	const grid = getEmptyTopGrid();
	grid[3][1] = 'clock';
	grid[2][8] = 'calendar';
	grid[0][0] = 'system_bar';
	return grid;
}

export function getEmptyBottomGrid(): Cell[][] {
	const grid: Cell[][] = [];
	for (let x = 0; x < 5; x++) {
		grid.push([]);
		for (let y = 0; y < 6; y++) {
			grid[x].push(null);
		}
	}
	return grid;
}

export function getInitBottomGrid(): Cell[][] {
	const grid = getEmptyBottomGrid();
	// options
	grid[1][1] = 'ds_card';
	grid[2][1] = 'pictochat';
	grid[2][3] = 'textnotes';
	grid[3][1] = 'gamepak';
	// bottom options
	grid[4][3] = 'settings';
	grid[4][0] = 'brightness';
	grid[4][5] = 'alarm';
	return grid;
}
