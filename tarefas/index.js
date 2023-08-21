var add = document.querySelector("#add-btn");

function addTask(){

    const title = document.querySelector("#title-box");

    var conteudo = document.querySelector("#add-task").value;

    if(conteudo){
        const template = document.querySelector(".template");

        const newTask = template.cloneNode(true);

        newTask.querySelector("#title-box").textContent = conteudo;

        newTask.classList.remove("template");

        
        newTask.classList.remove("hide");

        var ultima = document.querySelector("#task-list");

        ultima.appendChild(newTask);

        var conteudo = document.querySelector("#add-task").value = "";

        const remover = newTask.querySelector(".remove-btn");

        remover.addEventListener("click",function(){
            removetask(this);
        });

        function removetask(task){
            task.parentNode.remove();
        }

        
        const feito = newTask.querySelector(".done-btn");

        feito.addEventListener("click",function(){
            feitoAqui(this);
        });

        function feitoAqui(task){
            const taskComplete = task.parentNode;

            taskComplete.classList.toggle("done");
        }

    }
}

add.addEventListener("click",function(event){

    event.preventDefault();

    addTask();

});





