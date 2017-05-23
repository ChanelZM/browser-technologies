(function (){
    var groceryButton = document.querySelector('.togglegrocery'),
        groceryList = document.querySelector('.grocerylist'),
        form = document.querySelector('form');

    function showGroceryList(){
        groceryList.style.width = '70%';
    }

    function hideGroceryList(){
        groceryList.style.width = '0';
    }

    //Check if browser supports addEventListener
    if(document.addEventListener){
        var dropSection = document.querySelector('.mylist'),
        //var submit = document.querySelector('input[type="submit"]');
            listItems = document.querySelectorAll('form li'),
            dragEl;

        //submit.style.display = 'none';

        //Credits to: https://www.html5rocks.com/en/tutorials/dnd/basics/
        var handleDrag = {
            //When drag starts add class and save the target
            starts: function(e){
                dropSection.classList.add('dropzone');
                dragEl = this;

                e.dataTransfer.effectAllowed = 'move';

                e.dataTransfer.setData('Text', this.innerHTML);

            },
            //Make sure no redirect is fired
            over: function(e){
                if(e.preventDefault){
                    e.preventDefault();
                }

                return false;
            },
            //When drop enters add class
            enter: function(e){
                this.classList.add('drophere');
            },
            //When user lets go add the content to the grocerylist
            drop: function(e){
                if(e.stopPropagation){
                    e.stopPropagation();
                }

                if(dragEl != this){
                    dragEl = this.innerHTML;
                    this.innerHTML += '<li class="groceryitem">' + e.dataTransfer.getData('Text') + '</li>';
                }

                return false;
            },
            //Clear the html of the list, so that item can't be added again, also remove the classes.
            end: function(e){
                e.target.draggable = false;
                dropSection.classList.remove('drophere');
                dropSection.classList.remove('dropzone');
            }
        }

        //For every list item create addEventListeners
        for(var i = 0; i < listItems.length; i++){
            listItems[i].classList.add('cursor');
            listItems[i].addEventListener('dragstart', handleDrag.starts);
            listItems[i].addEventListener('dragend', handleDrag.end);
        }

        //Add eventListeners to the section of the dropzone
        dropSection.addEventListener('dragenter', handleDrag.enter);
        dropSection.addEventListener('dragover', handleDrag.over);
        dropSection.addEventListener('drop', handleDrag.drop);

        groceryButton.addEventListener('click', showGroceryList);

        if(groceryList.style.width != '0' && window.innerWidth <= 640){
            form.addEventListener('click', hideGroceryList);
        }
    }

    if(!document.addEventListener){
        groceryButton.attachEvent('onclick', showGroceryList);

        if(window.innerWidth){
            if(groceryList.style.width != '0' && window.innerWidth <= 848){
                form.attachEvent('onclick', hideGroceryList);
            }
        } else {
            if(groceryList.style.width != '0' && window.innerWidth <= 848){
                form.attachEvent('onclick', hideGroceryList);
            } else {
                groceryList.className += ' showgrocerylistflow';
                groceryButton.style.display = 'none';
            }
        }
    }

    if(document.querySelector('.message')){
        setInterval(function(){
            document.querySelector('.message').style.opacity = '0';
        }, 5000);
        setInterval(function(){
            document.querySelector('.message').style.display = 'none';
        }, 6000);
    };
})();
