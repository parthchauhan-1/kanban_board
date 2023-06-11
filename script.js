let add_new_task_box=document.querySelector(".add-new-cont");
let add_btn=document.querySelector(".add-btn");
let box_visible=true;
add_btn.addEventListener("click",function(){
    console.log("Hi");
    if(box_visible){
        add_new_task_box.style.display="flex";
    }
    else{
        add_new_task_box.style.display="none";    
    }
    box_visible=!box_visible;
})