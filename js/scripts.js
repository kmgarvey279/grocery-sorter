$().ready(function(){
  $("#groceryList").submit(function(event) {
    event.preventDefault();
    $("form").hide();
    var listItem1 = $("#groceryItem1").val();
    var listItem2 = $("#groceryItem2").val();
    var listItem3 = $("#groceryItem3").val();
    var listItem4 = $("#groceryItem4").val();
    var listItem5 = $("#groceryItem5").val();
    var groceries = []
    groceries.push(listItem1);
    groceries.push(listItem2);
    groceries.push(listItem3);
    groceries.push(listItem4);
    groceries.push(listItem5);

    groceries.sort();

    var capitalGroceries = groceries.map(function(grocery) {
      return grocery.toUpperCase();
    })

    $("#result1").empty().append(capitalGroceries[0]);
    $("#result2").empty().append(capitalGroceries[1]);
    $("#result3").empty().append(capitalGroceries[2]);
    $("#result4").empty().append(capitalGroceries[3]);
    $("#result5").empty().append(capitalGroceries[4]);

    alert(capitalGroceries);
  });
});
