//JAVASCRIPT
/*var addBtn= document.querySelector('#addToDo');
addBtn.addEventListener('click',function(event){
	var inputText=document.querySelector('input[name="addToDo"]').value;
	var list=document.querySelector('ul');
	var newLi=document.createElement('li' );
	newLi.setAttribute("onclick","remove(this)");
	console.log(newLi);
	list.appendChild(newLi);
	newLi.innerText=inputText;
	resetform=document.querySelector('#form');
	resetform.reset();
	
})

	function remove(item){
		setTimeout(function(){
			var itemToRemove=item;
			itemToRemove.remove(this);
		},1000)		
	};
*/

//jQUERY
$('#addToDo').click(function(){// click function for button
	var newLi=$('#list').append($('<li>',{text:$('.input').val()
	}));//Added new list item 
	$('input[name="addToDo"]').val('');// cleaned input field

	$("li").click(function() { // This function provides us when you click new-added list item ,the item removes from list after 1 second .
     	var self=this;
      		setTimeout(function() {
      		
        	$(self).remove();}, 1000);

  });
});

$("li").click(function() { // This function provides us when you click list item ,the item removes from list after 1 second .
      var self=this;
      setTimeout(function() {
      	
        $(self).remove();}, 1000);

  });

