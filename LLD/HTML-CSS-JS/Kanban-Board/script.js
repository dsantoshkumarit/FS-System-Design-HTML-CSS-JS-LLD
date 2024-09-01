(function(){
    const todoSectionContainer = document.getElementById("todo-section-tasks");
    todoSectionContainer.addEventListener("dragover", dragOverHandler);
    todoSectionContainer.addEventListener("drop", dropHandler);

    const doingSectionContainer = document.getElementById("doing-section-tasks");
    doingSectionContainer.addEventListener("dragover", dragOverHandler);
    doingSectionContainer.addEventListener("drop", dropHandler);

    const doneSectionContainer = document.getElementById("done-section-tasks");
    doneSectionContainer.addEventListener("dragover", dragOverHandler);
    doneSectionContainer.addEventListener("drop", dropHandler);

    const addTodoInput = document.querySelector(".add-todo-input");
    const addTodoButton = document.querySelector(".add-todo-button");
    addTodoButton.addEventListener("click", handleAddTodo);
    const uid = new ShortUniqueId();

    function handleAddTodo(){
        const todoString = addTodoInput.value;
        if(addTodoInput.value){
            const newTodoTask = document.createElement("section");
            newTodoTask.classList.add("task");
            newTodoTask.setAttribute("draggable","true");
            newTodoTask.setAttribute("id",`task_${uid()}`);
            newTodoTask.textContent = todoString;
            newTodoTask.addEventListener("dragstart",dragStartHandler);
            todoSectionContainer.append(newTodoTask);
            addTodoInput.value = "";
        }
    }

    function dragStartHandler(event){
        event.dataTransfer.dropEffect = "move";
        event.dataTransfer.setData("text", event.target.id);
    }

    function dragOverHandler(event){
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
    }
    function dropHandler(event){
        event.preventDefault();
        const elementId = event.dataTransfer.getData("text");
        const sourceElement = document.getElementById(elementId);
        const targetArea = event.target;
        if(targetArea.classList.contains("section-tasks")){
            targetArea.appendChild(sourceElement);
        }
        else if(targetArea.classList.contains("task")){
            targetArea.insertAdjacentElement("beforebegin",sourceElement);
        }
    }
})()