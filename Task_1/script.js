const task1=document.getElementById("profile");
task1.style.backgroundColor="lightblue";
task1.style.padding="15px";
task1.style.textAlign="center";
const task2=document.getElementsByClassName
("important");
for(let i=0;i<task2.length;i++){

    task2[i].style.color="red";
    task2[i].style.fontSize="40px";
}
console.log(task2.length);

const content=document.getElementById("content");
const task3=content.querySelector("p");
for(let i=0;i<content.children.length;i++){
    task3[i].style.
    backgroundColor="yellow";
}