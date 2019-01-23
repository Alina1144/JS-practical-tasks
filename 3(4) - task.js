function myList(){
      var todo = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];
      function createLi(value){
        var list = document.getElementById('todo-list');
        var li = document.createElement('li');
        li.className = "mylist";
        li.innerText = value;
        list.appendChild(li);
      }
      for(var i = 0; i < todo.length; i++){
        createLi(todo[i]);
      }
    }
    myList();
