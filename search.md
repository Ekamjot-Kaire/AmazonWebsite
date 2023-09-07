<html>
<head>
  <title>Hotel Search</title>
</head>
<body>
  <div>
    <input type="text" id="locationInput" placeholder="Enter Location">
    <input type="number" id="priceInput" placeholder="Enter Max Price">
    <input type="number" id="nightsInput" placeholder="Enter Nights Staying">
    <button onclick="fetchHotels()">Search</button>
  </div>

  <!-- HTML table fragment for displaying hotel results -->
  <table>
    <thead>
      <tr>
        <th>Hotel Name</th>
        <th>Location</th>
        <th>Price</th>
        <th>Nights Staying</th>
        <th>Image</th>
      </tr>
    </thead>
    <tbody id="result">
      <!-- Generated rows will be displayed here -->
    </tbody>
  </table>

  <script>
    const resultContainer = document.getElementById("result");

    function fetchHotels() {
      resultContainer.innerHTML = "";

      const locationInput = document.getElementById("locationInput").value;
      const maxPrice = document.getElementById("priceInput").value;
      const nightsStaying = document.getElementById("nightsInput").value;

      const url = `https://rapidapi.com/apidojo/api/hotels4/search?location=${encodeURIComponent(locationInput)}&priceMax=${maxPrice}&nights=${nightsStaying}`;
      const headers = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'apidojo-hotel-v1.p.rapidapi.com',
          'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY', 
        },
      };

      fetch(url, headers)
        .then(response => {
          if (response.status !== 200) {
            const errorMsg = 'API response error: ' + response.status;
            console.error(errorMsg);
            const tr = document.createElement("tr");
            const td = document.createElement("td");
            td.innerHTML = errorMsg;
            tr.appendChild(td);
            resultContainer.appendChild(tr);
            return;
          }
          response.json().then(data => {
            console.log(data);

            for (const hotel of data.data.body.searchResults.results) {
              const tr = document.createElement("tr");
              const name = document.createElement("td");
              const location = document.createElement("td");
              const price = document.createElement("td");
              const nights = document.createElement("td");
              const image = document.createElement("td");

              name.innerHTML = hotel.name;
              location.innerHTML = hotel.address.streetAddress;
              price.innerHTML = hotel.ratePlan.price.exactCurrent;
              nights.innerHTML = nightsStaying;

              const img = document.createElement("img");
              img.src = hotel.optimizedThumbUrls.srpDesktop;
              image.appendChild(img);

              tr.appendChild(name);
              tr.appendChild(location);
              tr.appendChild(price);
              tr.appendChild(nights);
              tr.appendChild(image);

              resultContainer.appendChild(tr);
            }
          })
        })
        .catch(err => {
          console.error(err);
          const tr = document.createElement("tr");
          const td = document.createElement("td");
          td.innerHTML = err;
          tr.appendChild(td);
          resultContainer.appendChild(tr);
        });
    }
  </script>
</body>
</html>
