import { useNavigate, useParams } from "react-router-dom"

export const CourseDetails = () => {
    const navigate = useNavigate();
    const params = useParams();
    const id = params.id - 1;
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
    var stdList = [
        {},
        {}
    ]
    return <>
        <div className="coursedetail-main-wrapper">
            <div>
                <div className="CourseDetail-wrapper">
                    <img src={arr[id].img} alt="Image not available" className="CourseDetail-img" />
                    <div className="coursedetail-text">
                        <h1>{arr[id].name}</h1>
                        <p>Price :- {arr[id].price}</p>
                        <p>Starting Date :- {arr[id].sDate}</p>
                    </div>
                    <div className="course-dec-box">
                        <div>
                            <button className="primary-btn" onClick={()=>{navigate("/dashboard/update-course/"+id, {state:{id}})}}>Edit</button>
                            <button className="secondary-btn">Delete</button>
                        </div>
                        <div>
                            <p>Course Details</p>
                            <p>Course descriptio</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="coursedetail-studentlist-container">
                <table>
                    <thead>
                        <tr>
                            <th>Profile Pic</th>
                            <th>Student Name</th>
                            <th>Student Phone</th>
                            <th>Student Email</th>
                        </tr>
                    </thead>
                    <tr>
                        <td> <img className="student-profile-pic" src="" alt="Student pic" /></td>
                        <td><p>Name</p></td>
                        <td><p>Phone</p></td>
                        <td><p>email</p></td>
                    </tr>
                </table>

            </div>

        </div>
    </>
}