export const AllStudents =()=>{
    var stdList = [
        {},
        {}
    ]
    return <>

<div className="students-container">
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
            <td> <img className="student-profile-pic" src="" alt="Student pic"/></td>
            <td><p>Name</p></td>
            <td><p>Phone</p></td>
            <td><p>email</p></td>
        </tr>
    </table>
    
</div>
    </>
}