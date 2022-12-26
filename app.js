window.addEventListener("load", () => {
  const form = document.querySelector("#new-task-form");
  const input=document.querySelector('#new-task-input');
  const list_li=document.querySelector('#tasks');
//   console.log(form);
form.addEventListener('submit',(e)=>{
     e.preventDefault();
     // console.log("submit fomr");
     const task=input.ariaValueMax;
     if(!text)
     {

          alert("Please add a task");
     }
     else
     {
          console.log("Success")
     }
})
});
