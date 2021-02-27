

window.addEventListener("load", function() {
    let combo = [

        "Vegetable Egg Roll (3 piece)  ", 1.99,
        "Pork Egg Roll (3 piece)  ", 2.99,
        "Shrimp Egg Roll (3 piece)  ", 2.99,
        "Crab Puffs", 3.99,
        "Pork Dumplings (6 piece)  ",  4.99,
        "Chicken Dumplings (6 piece)  ", 4.99,
        "Shrimp Dumplings (6 piece)  ", 5.99,
        "Chicken Teriyaki with Lo Mein  ", 8.99,
        "Beef Teriyaki with Lo Mein  ", 9.99,
        "Shrimp Teriyaki with Lo Mein  ", 10.99,
        "Stir Fried Veggies Teriyaki with Lo Mein  ", 8.99,
        "Chicken Teriyaki with Fried Rice  ", 9.99,
        "Beef Teriyaki with Fried Rice  ", 10.99,
        "Wonton Soup  ", 8.99,
        "Egg Drop Soup", 8.99,
        "Sweet and Sour Soup  ", 9.99,
        "House Special Soup  ", 9.99
        
    ]

    var perrow = 4
      table = document.createElement("table");
      row = table.insertRow();

  for (var i = 0; i < combo.length; i++) {

    var cell = row.insertCell();
    cell.innerText =  combo[i];

    var next = i + 1;

        if (next%perrow==0 && next!=combo.length) {
            row = table.insertRow();
        }
    }


  document.getElementById("container").appendChild(table);
});
