<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
  <input id="locationInput" type="text" placeholder="Enter Location">
  <input id="priceInput" type="text" placeholder="Enter Price">
  <button id="fetchButton">Fetch Data</button>
  <table id="result">
    <!-- Result data will be displayed here -->
  </table>

  <script>
    $(document).ready(function () {
      // function to fetch data based on user input
      function fetchData() {
        // clear previous results
        $("#result").empty();

        // get user input
        const locationInput = $("#locationInput").val();
        const priceInput = $("#priceInput").val();

        // prepare fetch options
        const url = 'https://booking-com.p.rapidapi.com/v1/metadata/exchange-rates?currency=AED&locale=en-gb';
        const headers = {
          'X-RapidAPI-Key': '68e33219d8msh2a2a73644dd8e5ep1ffc0djsn22e47a8354fe',
          'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
        };

        // fetch the API using jQuery
        $.ajax({
          url: url,
          headers: headers,
          method: 'GET',
          dataType: 'json',
          success: function (data) {
            console.log(data);

            // Hotel data
            $.each(data.results, function (index, row) {
              // create a new row
              const tr = $("<tr>");

              // create table cells for each column
              const hotel = $("<td>").text(row.hotel);
              const image = $("<td>").append($("<img>").attr("src", row.artworkUrl100));
              const location = $("<td>").text(row.location);
              const price = $("<td>").text(row.price);

              // append cells to the row
              tr.append(hotel);
              tr.append(image);
              tr.append(location);
              tr.append(price);

              // add the row to the result container
              $("#result").append(tr);
            });
          },
          error: function (err) {
            console.error(err);
            const errorMsg = 'Database response error: ' + err.status;
            const tr = $("<tr>").append($("<td>").text(errorMsg));
            $("#result").append(tr);
          }
        });
      }

      // Attach the fetch function to the button click event
      $("#fetchButton").click(fetchData);
    });
  </script>
</body>
</html>
