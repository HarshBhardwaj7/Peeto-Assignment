import React,{ useState } from 'react';



function App() {
    const[menuItems,setMenuItems] =useState([])   

    function clickMe()
    {
    
        fetch('https://jsonblob.com/api/jsonBlob/ecfad985-bc66-11ea-8cae-99a0660a95d6').then(res => {
            return res.json()
        })
        .then(res =>{
            console.log(res)
            setMenuItems(res);
        })
        .then(data=> console.log(data))
        .catch(error => console.log("error"))
    }

    function displayDetails(item){
        alert(`Name: ${item.item_name}\nPrice: ${item.price}\nDescription: ${item.description}`)
    }
    
     return(
         <>
         <button onClick={clickMe}>Menu</button>
         <ul>
             {menuItems.map(menuItem=><li onClick={()=>displayDetails(menuItem)}>{menuItem.item_name}</li>)}
         </ul>
         </>
     )
}
export default App;