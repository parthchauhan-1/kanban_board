let priority_btn=document.querySelectorAll(".priority-btn");
let add_new_task_box=document.querySelector(".add-new-cont");
let add_btn=document.querySelector(".add-btn");
let priority_selector=document.querySelector(".priority-selector");
let textarea_cont=document.querySelector(".textarea-cont");
let main_cont=document.querySelector(".main-cont");
let delete_btn=document.querySelector(".remove-btn");
let createTaskPriority="black";
var uid = new ShortUniqueId();
let box_visible=true;
let deleteFlag=false;

textarea_cont.addEventListener("keydown",function(e){
    if(e.key=="Enter"){
        let task= textarea_cont.value;
        add_btn.style.color="";    
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
    let ticket_body=document.createElement("div");
    ticket_body.setAttribute("class","ticket-body");
    ticket_body.innerHTML=`
            <div class="ticket-color ${createTaskPriority}"></div>
            <div class="ticket-id">#${uid()}</div>
            <div class="ticket-desc">${task}</div>`;
    main_cont.appendChild(ticket_body);

    //remove functionality
    ticket_body.addEventListener("click",function(){
        
            if(deleteFlag){
                ticket_body.remove();
            }
        add_btn.style.color="";

    })

}
delete_btn.addEventListener("click",function(){
    if(deleteFlag){
        delete_btn.style.color="";
    }
    else{
        delete_btn.style.color="darkred";
    }
    deleteFlag=!deleteFlag;
})

add_btn.addEventListener("click",function(){
    add_btn.style.color="lightsalmon";
    if(box_visible){
        add_new_task_box.style.display="flex";
    }
    else{
        add_new_task_box.style.display="none";    
        add_btn.style.color="";
    }
    box_visible=!box_visible;

})

