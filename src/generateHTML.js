const generateHTML = (employees) => {

  let cards = employees.map((employee) => {
    if (employee.constructor.name === "Manager") {
      return `<div class = "card col-4">
           <h2>${employee.name}</h2>
           <h3>Manager <i class="fas fa-mug-hot"></i></h3>
           <ul>
                <li>ID: ${employee.id}</li>
                <li>Email: <a href = "mailto:${employee.email}">${employee.email}</a></li>
                <li>Office Number: ${employee.officeNumber}</li>
            <ul>
        <div>`;
    } else if (employee.constructor.name === "Engineer") {
      return `<div class = "card col-4">
        <h2>${employee.name}</h2>
        <h3>Engineer <i class="fas fa-glasses"></i></h3>
        <ul>
             <li>ID: ${employee.id}</li>
             <li>Email: <a href = "mailto:${employee.email}">${employee.email}</a></li>
             <li>GitHub: <a href="https://github.com/${employee.github}" target = "_blank">${employee.github}</a></li>
         <ul>
     <div>`;
    } else if (employee.constructor.name === "Intern") {
      return `<div class = "card col-4">
        <h2>${employee.name}</h2>
        <h3>Intern <i class="fas fa-glasses"></i></h3>
        <ul>
             <li>ID: ${employee.id}</li>
             <li>Email: <a href = "mailto:${employee.email}">${employee.email}</a></li>
             <li>School: ${employee.school}</li>
         <ul>
     <div>`;
    }
  });

  const htmlContent = `<html>
<head>
  <title>Team Profile Generator</title>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" type="text/css" href="./css/style.css" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
</head>

<body>
  <main>
      <div class = "jumbotron jubotron-fluid">
          <div class="container">
            <h1 class="display-4">Team Profiles</h1>
          </div>
       </div>
           <div class="container">
             <div class="row">
              ${cards.join("")}
               </div>
             </div>
        </body>
      </html>`;

  return htmlContent;
}

module.exports = generateHTML;
