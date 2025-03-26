export const ToDoPrint = ({prop, handelCompleteTask}) =>{
    const CompleteTask = (item)=>{
    console.log("Completed task "+ item);
    handelCompleteTask(item);
    
    }
    
    return<>
    {prop.map((item, index) =>  <div key={index}>
        {item.Task} - {item.Status ? "Completed" : "Not Completed"}  
        <button onClick={()=>CompleteTask(item.id)}>Completed</button>
        <button onClick={()=>CompleteTask(item.id)}>Delete the Task</button>
        </div>)
    }
    
    </>
}