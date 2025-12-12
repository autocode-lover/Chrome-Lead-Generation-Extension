
// let myLeadsWithItems= ["website1.com", "website2.com" , "website3.com"]

let myLeads=[]

let inputEl = document.getElementById("input-el")
console.log(inputEl)

let ulEl = document.getElementById("ul-el")
console.log(ulEl)

const deleteBtn = document.getElementById("delete-btn")

document.getElementById("save-btn").addEventListener("click", saveWebsitesThroughPushingItemsViaAnEmptyArray);

const tabBtn = document.getElementById("tab-btn")

// const tabs = [{url:"linkedin.com/vasanth-chandran"}]

tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myWebsites", JSON.stringify(myLeads) )
        renderLeads(myLeads)
    })
})


//we retrieve from previous sessions, what values were stored in the local storage
let leadsFromLocalStorageValues = JSON.parse(localStorage.getItem("myWebsites"))
console.log(leadsFromLocalStorageValues)

//we tell if there are previous values, just have it present

if (leadsFromLocalStorageValues){
    myLeads = leadsFromLocalStorageValues
    renderLeads(myLeads)
}


// in this function we simply convert the input values into HTML lists
function renderLeads(anyLeadListValue){
     let listItems = ""
    for (let i=0; i<anyLeadListValue.length; i++){
        console.log(anyLeadListValue[i])
    listItems += `<li>
            <a target="_blank" href="${anyLeadListValue[i]}"> 
            
                ${anyLeadListValue[i]} 
                
            </a>
        </li>`
    }

    ulEl.innerHTML = listItems
    inputEl.value="" //emptying the input field once the function completes
}

deleteBtn.addEventListener("dblclick", function(){
    console.log("double-clicked")
    localStorage.clear()
    myLeads=[]
    renderLeads(myLeads)
})


//in this function we populate an empty array with input data

function saveWebsitesThroughPushingItemsViaAnEmptyArray(){

   
   //first we push what the user enters to an empty array
    myLeads.push(inputEl.value)
    console.log(myLeads)
    

    //we store our data
    //storage area        //keys     // values (user entered values in this case)

//    localStorage.setItem("myWebsites", "valuelead.com")

 localStorage.setItem("myWebsites", JSON.stringify(myLeads))
 
// console.log(localStorage.getItem(myLeads))

 let localStorageValues = localStorage.getItem("myWebsites")
 
 console.log("localStorageValue", localStorageValues)


renderLeads(myLeads)
}



function saveWebsites(){

    //simple way to directly store the values of the input field inside the list and have them available as HTML list values through the help of innerHTML method
 

    // let listItems = "<li>" + inputEl.value +"</li>"

    let listItems = `<li><a target="_blank" href="${inputEl.value}">${inputEl.value}</a></li>`
    
    ulEl.innerHTML += listItems

    inputEl.value=""
}

// function saveWebsites1(){
//     let inputElValue = inputEl.value
//     console.log(inputElValue)

//    ulEl.textContent = inputElValue
//    console.log(ulEl.textContent)

//    inputEl.value=""
// }


