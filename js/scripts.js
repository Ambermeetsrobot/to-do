function List(task) {
  this.newTask = task;
}

$(document).ready(function(){
  $("form#tasks").submit(function(event){
    event.preventDefault();

    var inputtedTask = $("input#new-task").val();

    var newList = new List(inputtedTask);

    $("ul#to-dos").append("<li><span class='to-do'>" + newList.newTask + "</span></li>");

    $("li").last().dblclick(function() {
      $(this).remove();
    });
    $("li").last().click(function() {
      $(this).css("text-decoration", "line-through");
    });

    $("input#new-task").val("");
  });
});
