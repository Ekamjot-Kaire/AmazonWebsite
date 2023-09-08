<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ExerciseAdventure</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
  <div class="header2">
    <nav>
      <div class="logo">
        <img src="images/logo2.png">
        <span>ExerciseAdventure.</span>
      </div>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="search">Search</a></li>
      </ul>
    </nav>
    <h2>Find an Exercise</h2>
    <div class="selection">
      <label for="type">Choose an exercise type:</label>
      <select id="type" name="type">
        <option value="cardio">cardio</option>
        <option value="olympic_weightlifting">weight lifting</option>
        <option value="strength">strength training</option>
        <option value="stretching">flexibility</option>
      </select>
      <br>
      <label for="muscle">Choose a muscle:</label>
      <select id="muscle" name="muscle">
        <option value="abdominals">abs</option>
        <option value="biceps">biceps</option>
        <option value="calves">calves</option>
        <option value="chest">chest</option>
        <option value="forearms">forearms</option>
        <option value="hamstrings">hamstrings</option>
        <option value="lower_back">back</option>
        <option value="quadriceps">quads</option>
        <option value="triceps">triceps</option>
      </select>
      <br>
      <label for="difficulty">Choose a difficulty:</label>
      <select id="difficulty" name="difficulty">
        <option value="beginner">beginner</option>
        <option value="intermediate">intermediate</option>
        <option value="expert">expert</option>
      </select>
      <br>
      <br>
      <button class="btn" id="searchExercise">Search for Exercise</button>
    </div>
    <br>
    <br>
    <table class="content-table" id="result">
      <thead>
        <tr>
          <th>Type</th>
          <th>Muscle</th>
          <th>Difficulty</th>
          <th>Exercise name</th> 
          <th>Instruction</th>
          <th>Equipment needed</th>
        </tr>
      </thead>
      <tbody>
        <!-- data goes here-->
      </tbody>
    </table>
  </div>

  <script>
    $(document).ready(function () {
      const addedExerciseNames = []; 
      $("#searchExercise").click(function () {
        // dropdown values
        const type = $("#type").val();
        const muscle = $("#muscle").val();
        const difficulty = $("#difficulty").val();

        const params = {
          type: type,
          muscle: muscle,
          difficulty: difficulty
        };

        const settings = {
          async: true,
          crossDomain: true,
          url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '68e33219d8msh2a2a73644dd8e5ep1ffc0djsn22e47a8354fe',
            'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
          },
          data: params 
        };

        // ajax request
        $.ajax(settings)
          .done(function (response) {
            console.log(response);

            if (response.length === 0) {
              alert("No exercises found, please try something else!");
            } else {
              const randomIndex = Math.floor(Math.random() * response.length);
              const randomExerciseName = response[randomIndex].name;

              if (!addedExerciseNames.includes(randomExerciseName)) {
                const ExerciseInstruction = response[randomIndex].instructions;
                const ExerciseEquip = response[randomIndex].equipment;

                const newRow = $("<tr>");
                newRow.append($("<td>").text(type));
                newRow.append($("<td>").text(muscle));
                newRow.append($("<td>").text(difficulty));
                newRow.append($("<td>").text(randomExerciseName)); 
                newRow.append($("<td>").text(ExerciseInstruction)); 
                newRow.append($("<td>").text(ExerciseEquip));
                $("tbody").append(newRow);

                addedExerciseNames.push(randomExerciseName);
              } else {
                alert("This exercise already exists on your list");
              }
            }
          })
          .fail(function () {
            alert("Failed to fetch exercise data from the API.");
          });

        // Clear the select elements for the next entry
        $("#type").val("");
        $("#muscle").val("");
        $("#difficulty").val("");
      });
    });
  </script>
</body>
</html>


