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
            <td><p>Lokesh Singh</p></td>
            <td><p>1234567890</p></td>
            <td><p>lokesh@gmail.com</p></td>
        </tr>
        <tr>
            <td> <img className="student-profile-pic" src="" alt="Student pic"/></td>
            <td><p>Manesh Sharma</p></td>
            <td><p>9087654321</p></td>
            <td><p>manesh@gmail.com</p></td>
        </tr>
        <tr>
            <td> <img className="student-profile-pic" src="" alt="Student pic"/></td>
            <td><p>Lokesh Singh</p></td>
            <td><p>1234567890</p></td>
            <td><p>lokesh@gmail.com</p></td>
        </tr>
        <tr>
            <td> <img className="student-profile-pic" src="" alt="Student pic"/></td>
            <td><p>Manesh Sharma</p></td>
            <td><p>9087654321</p></td>
            <td><p>manesh@gmail.com</p></td>
        </tr>
    </table>
    
</div>
    </>
}