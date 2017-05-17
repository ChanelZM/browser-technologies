(function (){
    //Check if browser supports addEventListener
    //Credits to: http://stackoverflow.com/questions/39272718/how-do-i-detect-document-addeventlistener-support-in-javascript
    if(document.addEventListener){
        var dropSection = document.querySelector('.mylist');
        //var submit = document.querySelector('input[type="submit"]');
        var listItems = document.querySelectorAll('form li');
        var dragEl;

        //submit.style.display = 'none';

        //Credits to: https://www.html5rocks.com/en/tutorials/dnd/basics/
        var handleDrag = {
            //When drag starts add class and save the target
            starts: function(e){
                dropSection.classList.add('dropzone');

                dragEl = this;

                e.dataTransfer.effectAllowed = 'move';
                e.dataTransfer.setData('text/html', this.innerHTML);

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
                    this.innerHTML += '<li class="groceryitem">' + e.dataTransfer.getData('text/html') + '</li>';
                }

                return false;
            },
            //Clear the html of the list, so that item can't be added again, also remove the classes.
            end: function(e){
                //Clear target
                e.target.innerHTML = '';
                dropSection.classList.remove('drophere');
                dropSection.classList.remove('dropzone');
            }
        }

        //For every list item create addEventListeners
        listItems.forEach(function(item){
            item.classList.add('cursor');
            item.addEventListener('dragstart', handleDrag.starts);
            item.addEventListener('dragend', handleDrag.end);
        });

        //Add eventListeners to the section of the dropzone
        dropSection.addEventListener('dragenter', handleDrag.enter);
        dropSection.addEventListener('dragover', handleDrag.over);
        dropSection.addEventListener('drop', handleDrag.drop);
    }
})();
