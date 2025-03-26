import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
export const AddCourse =()=>{
    const location = useLocation()
    const [courseName, setCourseName] = useState("");
    const [courseImg, setCourseImg] = useState("");
    const [dec, setCoursedec] = useState("");
    const [price, setCourseprice] = useState("");
    const [sDate, setCoursesDate] = useState("");
    const [EDate, setCourseEDate] = useState("");
    useEffect(()=>{
        if(location.state){
            console.log(location.state.id);
            setCourseName(arr[location.state.id].name)
            setCourseImg(arr[location.state.id].img)
            setCoursedec("This is decription");
            setCourseprice(arr[location.state.id].price);
            setCoursesDate(arr[location.state.id].sDate);
            setCourseEDate("01-03-2026");
        }   
        else{
            setCourseName("")
            setCourseImg("")
            setCoursedec("");
            setCourseprice("");
            setCoursesDate("");
            setCourseEDate("");
        }     
    },[location])
    var arr = [
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrDlzMEQocMDFE59THvGh0JtEzxbBerfn7aw&s",
            name: "JavaScript beginner friendly",
            price: "Rs. 6000/- only",
            sDate: "01-03-2025"
        }, {
            img: "https://media.geeksforgeeks.org/wp-content/uploads/20240516171457/Reactjs-complete-course-by-gfg-(1).webp",
            name: "ReactJS complete course",
            price: "Rs. 5000/- only",
            sDate: "01-03-2025"
        }, {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcOeWy7quL92x13-qmd-0St3wV0UJo1UzsDA&s",
            name: "ExpressJS-Nodejs",
            price: "Rs. 4500/- only",
            sDate: "01-03-2025"
        }, {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO0eaqHeCATXoqmAHx5rJ-Eisc-FFuSK8MMw&s",
            name: "Core Java",
            price: "Rs. 8000/- only",
            sDate: "01-03-2025"
        }]
    const navigate = useNavigate();
    const handleSubmit = ()=>{
        // toast("Wow so easy!");
        navigate('/dashboard/home')
    }
    return <>
    <div className="">
        <form className="signup-form">
            <h1>{location.state ? 'Edit Course' : 'Add New Course'}</h1>
            <input type="text" value={courseName} placeholder="Course Name"/>
            <input type="text" value={dec}  placeholder="Discription"/>
            <input type="text" value={price} placeholder="Price"/>
            <input type="text" value={sDate} placeholder="Start date (DD-MM-YY)"/>
            <input type="text" value={EDate} placeholder="End date (DD-MM-YY)"/>
            <input type="file" />
            <button  className="submit-btn" onClick={handleSubmit}>Submit</button>
            {/* <input type="text"  placeholder="Course Name"/> */}
            {/* <input type="text"  placeholder="Course Name"/> */}
        </form>
        {/* <ToastContainer /> */}
    </div>
    </>
}