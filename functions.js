function Age()
{
  var userAge = document.getElementById("age").value;
  var currDate = new Date();
  var currYear = currDate.getFullYear();
  var birthYear = currYear - userAge;
  document.getElementById("year").value = birthYear;
}

function Year()
{
  var userYear = document.getElementById("year").value;
  var currDate = new Date();
  var currYear = currDate.getFullYear();
  var age = currYear - userYear;
  document.getElementById("age").value = age;
}

function showDemo()
{
  document.getElementById('ProjDemo').style.display = 'block';
  document.getElementById('movie').style.display = 'none';
}

function showMovie()
{
  document.getElementById('ProjDemo').style.display = 'none';
  document.getElementById('movie').style.display = 'block';
}

function showIt()
{
  document.getElementById('welcome').style.visibility = 'visible';
}
setTimeout("showIt();", 3000);
