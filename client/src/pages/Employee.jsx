import EmployeeComponents from '../components/Employee/Employee';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';

export default function Employee() {
    return (
        <div>
            <NavBar/>
            <div>

            <EmployeeComponents/>
            </div>
            <Footer/>
        </div>
    )
}