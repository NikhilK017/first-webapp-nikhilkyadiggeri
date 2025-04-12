// Add JavaScript code for your web site here and call it from index.html.

document.getElementById("myBtn")?.addEventListener("click", () => {
    let input = document.getElementById("myInput").value;
    document.getElementById("myPara").innerHTML = "You typed: " + input;
    document.getElementById('myPara').appendChild(input);
});

document.getElementById('skillForm').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent page refresh

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const skill = document.getElementById('skillLevel').value;

    const output = `
      <h3>Submitted Information:</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Age:</strong> ${age}</p>
      <p><strong>Skill Level:</strong> ${skill}</p>
    `;

    document.getElementById('output').innerHTML = output;
    document.getElementById('thankYou').textContent = "Thank you!";
  });
