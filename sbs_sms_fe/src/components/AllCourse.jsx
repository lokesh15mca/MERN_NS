import { useNavigate } from "react-router-dom"

export const AllCourse =()=>{
    const navigate = useNavigate();
    const handleCourseDetails = (prop)=>{
        console.log("prop is"+prop+ " /dashboard/courseDetails/"+prop)
        navigate("/dashboard/courseDetails/"+prop)
    }
    return <>
    <div className="course-wrapper">
    <div className="course-box" onClick={()=>handleCourseDetails(1)}>
        <img className="course-thambnail" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrDlzMEQocMDFE59THvGh0JtEzxbBerfn7aw&s"/>
        <h2 className="course-title">JavaScript beginner friendly</h2>
        <p className="course-price">Rs. 6000/- only</p>
    </div>
    <div className="course-box" onClick={()=>handleCourseDetails(2)}>
        <img className="course-thambnail" src="https://media.geeksforgeeks.org/wp-content/uploads/20240516171457/Reactjs-complete-course-by-gfg-(1).webp"/>
        <h2 className="course-title">ReactJS complete course</h2>
        <p className="course-price">Rs. 5000/- only</p>
    </div>
    <div className="course-box" onClick={()=>handleCourseDetails(3)}>
        <img className="course-thambnail" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcOeWy7quL92x13-qmd-0St3wV0UJo1UzsDA&s"/>
        <h2 className="course-title">ExpressJS-Nodejs</h2>
        <p className="course-price">Rs. 4500/- only</p>
    </div>
    <div className="course-box" onClick={()=>handleCourseDetails(4)}>
        <img className="course-thambnail" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO0eaqHeCATXoqmAHx5rJ-Eisc-FFuSK8MMw&s"/>
        <h2 className="course-title">Core Java</h2>
        <p className="course-price">Rs. 8000/- only</p>
    </div> 
    </div>
    </>
}