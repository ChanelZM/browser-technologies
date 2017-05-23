(function (){
    var groceryList = document.querySelector('.grocerylist'),
        form = document.querySelector('form'),
        body = document.querySelector('body'),
        groceryButton,
        overlay;

    //Create section that will be placed over the body when the grocery list is visible
    (function (){
        var section = document.createElement('SECTION');
        section.className = 'overlay';
        form.insertAdjacentElement('afterend', section);
        overlay = document.querySelector('.overlay');
        overlay.style.display = 'none';
    })();

    //Create toggle button
    (function(){
        var button = document.createElement('BUTTON');
        var text = document.createTextNode('Mijn lijstje');
        button.appendChild(text);
        button.className = 'togglegrocery';
        groceryList.insertAdjacentElement('beforeend', button);
        groceryButton = document.querySelector('.togglegrocery');
    })();

    function showGroceryList(){
        groceryList.style.width = '70%';

        overlay.style.display = 'block';
    }

    function hideGroceryList(){
        groceryList.style.width = '0';
        overlay.style.display = 'none';
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

        overlay.addEventListener('click', hideGroceryList);
    }

    //For old internet explorer attachEvent
    if(!document.addEventListener){
        groceryButton.attachEvent('onclick', showGroceryList);
        overlay.attachEvent('onclick', hideGroceryList);
    }

    //If the html contains a message, show for 5 seconds then fade out and dont show
    if(document.querySelector('.message')){
        setInterval(function(){
            document.querySelector('.message').style.opacity = '0';
        }, 5000);
        setInterval(function(){
            document.querySelector('.message').style.display = 'none';
        }, 6000);
    };
})();
