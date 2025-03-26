import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
export const AddStudents =()=>{
    const navigate = useNavigate();
    const handleSubmit = ()=>{
        // toast("Wow so easy!");
        navigate('/dashboard/home')
    }
    return <>
    <div className="">
        <form className="signup-form">
            <h1>Add New Student</h1>
            <input type="text"  placeholder="Student Name"/>
            <input type="text"  placeholder="Phone Number"/>
            <input type="text"  placeholder="Email"/>
            <input type="text"  placeholder="Address"/>
            <input type="text"  placeholder="Joining date (DD-MM-YY)"/>
            <input type="text"  placeholder="Father Name"/>
           
            <select>
                <option>Please Select the class</option>
                <option value="class1">Class 1</option>
                <option value="class2">Class 2</option>
                <option value="class3">Class 3</option>
                <option value="class4">Class 4</option>
                <option value="class5">Class 5</option>
            </select>
            <input type="file"  />
            <button  className="submit-btn" onClick={handleSubmit}>Submit</button>
            {/* <input type="text"  placeholder="Course Name"/> */}
            {/* <input type="text"  placeholder="Course Name"/> */}
        </form>
        {/* <ToastContainer /> */}
    </div>
    </>
}