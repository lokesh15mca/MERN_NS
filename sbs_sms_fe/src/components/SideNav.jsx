import { Link, useLocation } from 'react-router-dom'
export const SideNav = ()=>{
    const location = useLocation();
    return <>
    <div className="nav-container">
        <div className="brand-container">
            <img className="brand-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStksyQCgA2IJEf852_wUP_C5AQxaQ-y1pc1Q&s"/>
            <div><h2 className="brand-name">Lokesh Management</h2>
            <p className="brand-slogan">Mange your app in easy ways...</p>
            </div>
        </div>
        <div className="menu-container">
            <Link to="/dashboard/home" className={location.pathname === '/dashboard/home' ? 'menu-active-link':'menu-link '}><i className="fa-solid fa-house"></i> Home</Link>
            <Link to="/dashboard/allCourses" className={location.pathname === '/dashboard/allCourses' ? 'menu-active-link':'menu-link '}><i class="fa-solid fa-book"></i> All Course</Link>
            <Link to="/dashboard/addCourse" className={location.pathname === '/dashboard/addCourse' ? 'menu-active-link':'menu-link '}><i class="fa-solid fa-plus"></i> Add Course</Link>
            <Link to="/dashboard/allStudent" className={location.pathname === '/dashboard/allStudent' ? 'menu-active-link':'menu-link '}><i class="fa-solid fa-user-group"></i> All Students</Link>
            <Link to="/dashboard/addStudent" className={location.pathname === '/dashboard/addStudent' ? 'menu-active-link':'menu-link '}> <i class="fa-solid fa-book"></i>Add Student</Link>
            {/* <Link to="/dashboard/fee" className={location.pathname === '/dashboard/fee' ? 'menu-active-link':'menu-link '}> <i class="fa-solid fa-money-bill"></i> Collect fee</Link>
            <Link to="/dashboard/paymentHistory" className={location.pathname === '/dashboard/paymentHistory' ? 'menu-active-link':'menu-link '}> <i class="fa-solid fa-list"></i> Payment history</Link> */}
        </div>
        <div className='contact-us'>
            <p> <i class="fa-solid fa-address-book"></i> Contact Me</p>
            <p> <i class="fa-solid fa-phone"></i> 8302880785</p>
        </div>
    </div>
    </>
}