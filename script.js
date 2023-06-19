let priority_btn=document.querySelectorAll(".priority-btn");
let add_new_task_box=document.querySelector(".add-new-cont");
let add_btn=document.querySelector(".add-btn");
let priority_selector=document.querySelector(".priority-selector");
let textarea_cont=document.querySelector(".textarea-cont");
let main_cont=document.querySelector(".main-cont");
let delete_btn=document.querySelector(".remove-btn");
let colorOrder=["red","blue","green","black"];
let createTaskPriority="black";
let priorityFilters=document.querySelectorAll(".color");
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
for(let i=0;i<priorityFilters.length;i++){
    priorityFilters[i].addEventListener("click",function(){
        // console.log("Check");
        let seletedPriority=priorityFilters[i].classList[1];
        // console.log(seletedPriority);
        let allTicketsColors= document.querySelectorAll(".ticket-color");
        for(let j=0;j<allTicketsColors.length;j++){
            let currentTicketColor=allTicketsColors[j].classList[1];
            // console.log(currentTicketColor);
            if (seletedPriority==currentTicketColor) {
                allTicketsColors[j].parentElement.style.display="block";
            } else {
                allTicketsColors[j].parentElement.style.display="none";
            }
        }
    })
    
    priorityFilters[i].addEventListener("dblclick",function(){
        console.log("DBL");
        let allTicketBody=document.querySelectorAll(".ticket-body");
        for(let i=0;i<allTicketBody.length;i++){
            allTicketBody[i].style.display="block";
        }
    })

}
function createTask(task,createTaskPriority){
    if (task=="") {
        return;
    }
    let ticket_body=document.createElement("div");
    ticket_body.setAttribute("class","ticket-body");
    ticket_body.innerHTML=`
            <div class="ticket-color ${createTaskPriority}"></div>
            <div class="ticket-id">#${uid()}</div>
            <div class="ticket-desc">${task}</div>
            <div class="lock-unlock"><i class="fa-solid fa-lock"></i></div>`;
    main_cont.appendChild(ticket_body);


    handleDelete(ticket_body);
    handleLockUnlock(ticket_body);
    handlePriorityColorChange(ticket_body);
    
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

function handleLockUnlock(ticket_body) {
    // handle lock unlock
    let lockUnlockBtn=ticket_body.querySelector(".lock-unlock i");
    lockUnlockBtn.addEventListener("click",function(){
        let ticket_desc= ticket_body.querySelector(".ticket-desc");
        if(lockUnlockBtn.classList.contains('fa-lock')){
            ticket_desc.setAttribute("contenteditable","true");
            lockUnlockBtn.classList.remove("fa-lock"); 
            lockUnlockBtn.classList.add("fa-lock-open");
        }else{
            lockUnlockBtn.classList.remove("fa-lock-open");
            lockUnlockBtn.classList.add("fa-lock"); 
            ticket_desc.setAttribute("contenteditable","false");
        }
    })
}
function handleDelete(ticket_body){
        //remove functionality
        ticket_body.addEventListener("click",function(){
        
            if(deleteFlag){
                ticket_body.remove();
            }
        add_btn.style.color="";
    })

}
function handlePriorityColorChange(ticket_body){
    //handle change of priority color
    let ticket_color=ticket_body.querySelector(".ticket-color");
    // let colorOrder=["red","blue","green","black"];
    ticket_color.addEventListener("click",function(){
        let currentColor= ticket_color.classList[1];
        // let currentColorIndex=-1;
        // for (let index = 0; index < colorOrder.length; index++) {
        //     const element = colorOrder[index];
        //     if(element==currentColor)
        //     currentColorIndex=index;
        //     console.log(currentColorIndex);
        // }
        let currentColorIndex=colorOrder.findIndex(function (col) {
            return currentColor==col;
        })
        console.log(currentColorIndex);
        console.log(currentColor);
        let nextColorIndex=(currentColorIndex +1)%colorOrder.length;
        console.log(nextColorIndex);
        ticket_color.classList.remove(currentColor);
        ticket_color.classList.add(colorOrder[nextColorIndex]);


    })
}


