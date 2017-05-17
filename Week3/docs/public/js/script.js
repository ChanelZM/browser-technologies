(function (){
    var dropSection = document.querySelector('.mylist');

        //Check if browser supports addEventListener
        //Credits to: http://stackoverflow.com/questions/39272718/how-do-i-detect-document-addeventlistener-support-in-javascript
        if(document.addEventListener){
            var listItems = document.querySelectorAll('li[draggable="true"]');
            var dragEl;

            //Credits to: https://www.html5rocks.com/en/tutorials/dnd/basics/
            var handleDrag = {
                starts: function(e){
                    dropSection.classList.add('dropzone');

                    dragEl = this;

                    e.dataTransfer.effectAllowed = 'move';
                    e.dataTransfer.setData('text/html', this.innerHTML);
                },
                over: function(e){
                    if(e.preventDefault){
                        e.preventDefault();
                    }

                    return false;
                },
                enter: function(e){
                    this.classList.add('drophere');
                },
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
                end: function(e){
                    dropSection.classList.remove('drophere');
                    dropSection.classList.remove('dropzone');
                }
            }

            listItems.forEach(function(item){
                item.addEventListener('dragstart', handleDrag.starts);
                item.addEventListener('dragend', handleDrag.end);
            });

            dropSection.addEventListener('dragenter', handleDrag.enter);
            dropSection.addEventListener('dragover', handleDrag.over);
            dropSection.addEventListener('drop', handleDrag.drop);
        }
})();
