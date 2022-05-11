$("#toDoGenerator").on("click", function(){
    const things = [ {
        "thing": "Visit the Tate Modern",
        "link": ""
    },
    {
        "thing": "Go to Brick Lane Market",
        "link": ""
    },
    {
        "thing": "Visit the National Gallery",
        "link": ""
    },
    {
        "thing": "Go Shopping in Shoreditch",
        "link": ""
    },
    {
        "thing": "Take a day trip to Brighton",
        "link": ""
    },
    {
        "thing": "Go to the Design Museum",
        "link": ""
    }]
    var number =  Math.floor(Math.random() * (6 - 0 + 1)) + 0;
    var thing = things[number].thing;
    console.log(thing)
    $("#toDo").html("<h2>" + thing + "</h2>");
  });

  $("#toEatGenerator").on("click", function(){
    const suggestions = [ {
        "thing": "Go to a street market",
        "link": ""
    },
    {
        "thing": "Nandos",
        "link": ""
    },
    {
        "thing": "Indian Food",
        "link": ""
    },
    {
        "thing": "Find a chain that only exists in England",
        "link": ""
    }]
    var number =  Math.floor(Math.random() * (4 - 0 + 1)) + 0;
    var thing = suggestions[number].thing;
    console.log(thing)
    $("#toEat").html("<h2>" + thing + "</h2>");
  });  

  $("#marketGenerator").on("click", function(){
    const suggestions = [ {
        "thing": "Brick Land",
        "link": ""
    },
    {
        "thing": "Camden",
        "link": ""
    },
    {
        "thing": "Portobello Road",
        "link": ""
    },
    {
        "thing": "Greenwich",
        "link": ""
    }]
    var number =  Math.floor(Math.random() * (4 - 0 + 1)) + 0;
    var thing = suggestions[number].thing;
    console.log(thing)
    $("#market").html("<h2>" + thing + "</h2>");
  });  