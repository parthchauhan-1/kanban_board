let add_new_task_box=document.querySelector(".add-new-cont");
let add_btn=document.querySelector(".add-btn");
let box_visible=true;
let priority_selector=document.querySelector(".priority-selector");
let priority_btn=document.querySelectorAll(".priority-btn");
let textarea_cont=document.querySelector(".textarea-cont");
let main_cont=document.querySelector(".main-cont");
let createTaskPriority="black";

textarea_cont.addEventListener("keydown",function(e){
    if(e.key=="Enter"){
        let task= textarea_cont.value;
        createTask(task,createTaskPriority);
        textarea_cont.value="";
        add_new_task_box.style.display="none";
        // box_visible=!box_visible;
    }
})

for(let j=0;j<priority_btn.length;j++){
    priority_btn[j].addEventListener("click",function(){
        for(let i=0;i<priority_btn.length;i++){
            if(priority_btn[i].classList.contains('active')){
                priority_btn[i].classList.remove("active");    
            }    
        }
        priority_btn[j].classList.add('active');
        createTaskPriority=priority_btn[j].classList[1];
    })
}
function createTask(task,createTaskPriority){
    let div=document.createElement("div");
    div.setAttribute("class","ticket-body");
    console.log(div);
    div.innerHTML=`
            <div class="ticket-color ${createTaskPriority}"></div>
            <div class="ticket-id">ID</div>
            <div class="ticket-desc">${task}</div>`;
    main_cont.appendChild(div);
}

add_btn.addEventListener("click",function(){
    if(box_visible){
        add_new_task_box.style.display="flex";
    }
    else{
        add_new_task_box.style.display="none";    
    }
    box_visible=!box_visible;
})

