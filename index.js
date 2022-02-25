
//Creating an empty Array to store the list of TODO items
var itemList = []

//Function to add new TODO items to the list 
function addToList(item) {
    itemList.push(item)
};
function addItemToList() {
    newItem = document.getElementsByTagName('input')[0]
    if (newItem.value.trim().length > 0) {
        addToList(newItem.value)
        newItem.value = ""
        newItem.placeholder = "Enter new TODO item"
        onLoad()
    }
    else {
        newItem.value = ""
        newItem.placeholder = "Enter new TODO item"
    }
};

//Function to edit the exisitng TODO items
function editItem(item) {
    for (let index = 0; index < itemList.length; index++) {
        if (itemList[index] == item) {
            var newValue = prompt("Edit the item", "");
            if (newValue != null) {
                if (newValue.trim().length > 0) {
                    itemList[index] = newValue
                    onLoad()
                }
            }
        }
    }
};

//Function to delete an item in the list
function deleteItem(item) {
    for (let index = 0; index < itemList.length; index++) {
        if (itemList[index] == item) {
            var userSelection = confirm("Are you sure you want to delete the following item. It cannot be undone !!! \n " + item);
            if (userSelection == true) {
                alert("Item successfully deleted ! \n" + item)
                delete itemList[index]
                onLoad()
            }
        }
    }
}

//Function to read the list of items and dispaly it in the HTML
function onLoad() {
    list = document.getElementById('itemOfTodoItems')
    tag = ""
    if (itemList.length < 1) {
        return
    }
    else {
        itemList.forEach(function (item) {
            tag = tag + '<div class="items_div"> ' + item + '</div> <button  type=button class="btn btn-success" onclick="editItem(\'' + item + '\')">  Edit </button>  <button type=button class="btn btn-danger" onclick="deleteItem(\'' + item + '\')"> Delete </button>'

        })
        list.innerHTML = tag
    }
};

onLoad()
