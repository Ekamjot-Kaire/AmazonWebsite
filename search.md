<div>
  <input type="text" id="locationInput" placeholder="Enter Location">
  <input type="number" id="priceInput" placeholder="Enter Max Price">
  <button onclick="fetchData()">Search</button>
</div>

<!-- HTML table fragment for page -->
<table>
  <thead>
    <tr>
      <th>Hotel Name</th>
      <th>Image</th>
      <th>Location</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody id="result">
    <!-- generated rows -->
  </tbody>
</table>

<!-- Script is laid out in a sequence (no function) and will execute when the page is loaded -->
<script>
  // prepare HTML result container for new output
  const resultContainer = document.getElementById("result");

  // function to fetch data based on user input
  function fetchData() {
    // clear previous results
    resultContainer.innerHTML = "";

    // get user input
    const locationInput = document.getElementById("locationInput");
    const locationfilter = locationInput.value;

    const priceInput = document.getElementById("priceInput");
    const pricefilter = priceInput.value;

    // prepare fetch options
    const url = "https://hotels4.p.rapidapi.com/v2/get-meta-data" + encodeURIComponent(locationfilter) + encodeURIComponent(pricefilter);
    const headers = {
      method: 'GET',
      mode: 'cors',
      cache: 'default',
      credentials: 'omit',
      headers: {
        'Content-Type': 'application/json'
      },
    };

    // fetch the API
    fetch(url, headers)
      .then(response => {
        // check for response errors
        if (response.status !== 200) {
          const errorMsg = 'Database response error: ' + response.status;
          console.log(errorMsg);
          const tr = document.createElement("tr");
          const td = document.createElement("td");
          td.innerHTML = errorMsg;
          tr.appendChild(td);
          resultContainer.appendChild(tr);
          return;
        }
        // valid response will have JSON data
        response.json().then(data => {
          console.log(data);

          // Hotel data
        for (const row of data.results) {
            console.log(row);

            // tr for each row
            const tr = document.createElement("tr");
            // td for each column
            const hotel = document.createElement("td");
            const image = document.createElement("td");
            const location = document.createElement("td");
            const price = document.createElement("td");

            // data is specific to the API
            hotel.innerHTML = row.hotel;
            // create preview image
            const img = document.createElement("img");
            img.src = row.artworkUrl100;
            image.appendChild(img);
            location.innerHTML = row.location;
            price.innerHTML = row.price;

            // this builds td's into tr
            tr.appendChild(hotel);
            tr.appendChild(image);
            tr.appendChild(location);
            tr.appendChild(price);

            // add HTML to container
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