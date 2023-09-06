<html>
<head>
	<title>NASA NEO API Demo</title>
    <link rel="preconnect" href="https://fonts.googleapis.com/">
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap" rel="stylesheet">
</head>
<body>
	<h1>NASA Asteroid API Table</h1>
	<table>
		<thead>
			<tr>
				<th>Name</th>
				<th>Diameter (in km)</th>
				<th>Potentially Hazardous?</th>
			</tr>
		</thead>
		<tbody id="asteroid-table">
		</tbody>
	</table>

	<script>
//ajax request 
		const start_date = '2015-09-07';
		const end_date = '2015-09-08';
		const api_key = 'DEMO_KEY';
		const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${start_date}&end_date=${end_date}&api_key=${api_key}`;

//fetching information from url 
		fetch(url)
			.then(response => response.json())
			.then(data => {
				const asteroidTable = document.getElementById('asteroid-table');
				for (const date in data.near_earth_objects) { //not sure how const within parm works but it does?? (looked it up online)
					data.near_earth_objects[date].forEach(asteroid => {
						const name = asteroid.name;
						const diameter = asteroid.estimated_diameter.kilometers.estimated_diameter_max;
						const hazardous = asteroid.is_potentially_hazardous_asteroid;

						const newRow = asteroidTable.insertRow();
						newRow.insertCell().textContent = name;
						newRow.insertCell().textContent = diameter;
						newRow.insertCell().textContent = hazardous ? 'Yes' : 'No';
					});
				}
			})
	</script>
</body>
</html>
