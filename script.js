
// let myLeadsWithItems= ["website1.com", "website2.com" , "website3.com"]

let myLeads=[]

let inputEl = document.getElementById("input-el")
console.log(inputEl)

let ulEl = document.getElementById("ul-el")
console.log(ulEl)



function saveWebsites(){

    // myLeads.push(inputEl.value)
    // console.log(myLeads)
    // let listItems = ""
    // for (let i=0; i<myLeads.length; i++){
    //     console.log(myLeads[i])
    // listItems += `<li>
    //         <a> 
            
    //             ${myLeads[i]} 
                
    //         </a>
    //     </li>`

    //   console.log(listItems)
    // }

    // ulEl.innerHTML = listItems
    // inputEl.value="" //emptying the input field once the function completes

    //simple way to directly store the values of the input field inside the list and have them available as HTML list values through the help of innerHTML method
 

    let listItems = "<li>" + inputEl.value +"</li>"
    
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


