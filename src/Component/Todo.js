import React, {useState} from 'react'

function Todo() {

    const [activity, setActivity]=useState('')
    const [listData, setListData]=useState([]);
    function addActivity(){
        // not working sc
// setListData([...listData,activity]) 
// console.log(listData)

setListData((listData)=>{
    const updatedList=[...listData,activity]
    console.log(updatedList)
    setActivity('');
    return updatedList
})
    }


function removeActivity(i){
const updatedListData= listData.filter((elem, id)=>{
   return i!=id; 
})
setListData(updatedListData);
}
    
  return (
    <div className='container'>
        <div className='header'>Todo List</div>
        <input type='text' placeholder='Add Activity' value={activity} onChange={(e)=>setActivity(e.target.value)}/>
        <button onClick={addActivity}>Add</button>
        <p className='list-heading'>Hers is your list </p>

        {listData!=[] && listData.map((data, i)=>{
           return(
            <>
            <p key={i}>
                <div className='listData'>{data}</div>
             <div className='btn-position'>   <button onClick={()=>removeActivity(i)}>Remove</button></div>
                </p></>
           ) 
        })}
    </div>
  )
    }

export default Todo