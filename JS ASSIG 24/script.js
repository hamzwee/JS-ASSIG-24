// Chapter 43-48
// Question 3
function deleteRow() {
    var name = document.getElementById("row");
    name.remove();
}
function editRow() {
    var edit = document.getElementById("row");
    edit.edit();
}

// Question 5
function increment(c1) {
    alert("The increment of " + c1 + " is " + (++c1));
}
function decrement(c2) {
    alert("The decrement of " + c2 + " is " + (--c2));
}

// Chapter 49-52
// Question 1
function display() {
    var name = document.getElementById("form");
    var email = document.getElementById("form1");
    alert("You have entered " + name + " and " + email);
}