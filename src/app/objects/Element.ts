function addApplication(){
    const newApplication = document.createElement('span');

newApplication.style.color = "#6f42c1";
const container = document.getElementById('container');

    if(container){
        container.appendChild(newApplication);
    }else{
        console.error('Application error');
    }
}