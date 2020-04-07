var addBtn= document.querySelector('#addToDo');
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
