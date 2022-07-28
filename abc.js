function update1(){
    desc1 = document.getElementById('description').value;
    title1 = document.getElementById('title').value;
  
    if(localStorage.getItem('itemsJson') == null){
        console.log('hi');
        itemjsonarray = [];
        itemjsonarray.push([title1, desc1]);
        localStorage.setItem('itemsJson',JSON.stringify(itemjsonarray));
    }
    else{
        itemjsonarraystr = localStorage.getItem('itemsJson');
        itemjsonarray = JSON.parse(itemjsonarraystr);
        itemjsonarray.push([title1, desc1]);
        localStorage.setItem('itemsJson',JSON.stringify(itemjsonarray));
    }
    update();
}
function update(){
    
    if(localStorage.getItem('itemsJson') == null){
        console.log('hi');
        itemjsonarray = [];
        localStorage.setItem('itemsJson',JSON.stringify(itemjsonarray));
    }
    else{
        itemjsonarraystr = localStorage.getItem('itemsJson');
        itemjsonarray = JSON.parse(itemjsonarraystr);
    } 

    let tbody =  document.getElementById('tbody');
    let str = '';
    itemjsonarray.forEach((element, index) => {
        str += `
        <tr>
        <th scope="row">${index +1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button class="btn btn-sm btn-primary" onclick="delete1(${index})">Delete</button></td>
        </tr>
        `
    
    });
    tbody.innerHTML = str;
}
add = document.getElementById('add');
add.addEventListener("click",update1);
update();

function delete1(itemindex){
    itemjsonarraystr = localStorage.getItem('itemsJson');
        itemjsonarray = JSON.parse(itemjsonarraystr);
        itemjsonarray.splice(itemindex,1);
        localStorage.setItem('itemsJson',JSON.stringify(itemjsonarray));
        update();

    }

function lcsclear(){
if(confirm("Do You Want To clear entire ToDo list? ")){
localStorage.clear();
update();
}
}