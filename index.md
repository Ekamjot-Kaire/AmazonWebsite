<html>
<head>
    <title>Hotel Recommendations</title>
    <link rel="preconnect" href="https://fonts.googleapis.com/">
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap" rel="stylesheet">
    <style>
        #searchbar {
            width: 200px;
        }
        #searchbar2 {
            width: 200px;
        }
        #searchbar3 {
            width: 200px;
        }
    </style>
</head>
<body>
    <h1>Find a Hotel!</h1>
    <label for="searchbar">Enter City Name: </label>
    <input type="text" id="searchbar">
    <br>
    <label for="state_menu">Enter State:</label>
    <select id="state_menu" name="state_menu">
        <option value="AL">Alabama</option>
        <option value="AK">Alaska</option>
        <option value="AZ">Arizona</option>
        <option value="AR">Arkansas</option>
        <option value="CA">California</option>
        <option value="CO">Colorado</option>
        <option value="CT">Connecticut</option>
        <option value="DE">Delaware</option>
        <option value="FL">Florida</option>
        <option value="GA">Georgia</option>
        <option value="HI">Hawaii</option>
        <option value="ID">Idaho</option>
        <option value="IL">Illinois</option>
        <option value="IN">Indiana</option>
        <option value="IA">Iowa</option>
        <option value="KS">Kansas</option>
        <option value="KY">Kentucky</option>
        <option value="LA">Louisiana</option>
        <option value="ME">Maine</option>
        <option value="MA">Massachusetts</option>
        <option value="MI">Michigan</option>
        <option value="MN">Minnesota</option>
        <option value="MS">Mississippi</option>
        <option value="MO">Missouri</option>
        <option value="MT">Montana</option>
        <option value="NE">Nebraska</option>
        <option value="NV">Nevada</option>
        <option value="NH">New Hampshire</option>
        <option value="NJ">New Jersey</option>
        <option value="NM">New Mexico</option>
        <option value="NY">New York</option>
        <option value="NC">North Carolina</option>
        <option value="ND">North Dakota</option>
        <option value="OH">Ohio</option>
        <option value="OK">Oklahoma</option>
        <option value="OR">Oregon</option>
        <option value="PA">Pennsylvania</option>
         <option value="RI">Rhode Island</option>
        <option value="SC">South Carolina</option>
        <option value="SD">South Dakota</option>
        <option value="TN">Tennessee</option>
        <option value="TX">Texas</option>
        <option value="UT">Utah</option>
        <option value="VT">Vermont</option>
        <option value="VA">Virginia</option>
        <option value="WA">Washington</option>
        <option value="WV">West Virginia</option>
        <option value="WI">Wisconsin</option>
        <option value="WY">Wyoming</option>
    </select>
    <br>
    <label for="searchbar3">Enter Number of People: </label>
    <input type="text" id="searchbar3">
    <table>
        <thead>
            <tr>
                <br>
                <br>
                <h2>Past Searches</h2>
            </tr>
        </thead>
        <tbody id="wishlist">
        </tbody>
    </table>
    <script>
        document.getElementById("searchbar").addEventListener("keyup", function (event) {
            if (event.key === "Enter") {
                var city = event.target.value;
                var state = document.getElementById("state_menu").value;
                var people = document.getElementById("searchbar3").value;
                addToWishlist(city, state, people);
                event.target.value = ""; 
            }
        });
        function addToWishlist(city, state, people) {
            var wishlist = document.getElementById("wishlist");
            var row = wishlist.insertRow(-1);
            var cell = row.insertCell(0);
            cell.innerHTML = "City: " + city + ", State: " + state + ", People: " + people;
        }
    </script>
</body>
</html>

