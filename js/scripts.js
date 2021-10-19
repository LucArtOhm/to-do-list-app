function newItem() {
  //Add new item to the list of items
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert('You must write something!');
  } else {
    $('#list').append(li);
  }

  // Cross out an item from the list of items and uncross it back
  function crossOut() {
    li.toggleClass('strike');
  }

  li.on('dblclick', function (crossOut) {
    li.toggleClass('strike');
  });

  //Add delete button 'X'
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  crossOutButton.on('click', deleteListItem);

   //Add delete class
   function deleteListItem(){
     li.addClass('delete')
   }

   //Reorder items
   $('#list').sortable();
}
