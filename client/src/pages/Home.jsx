import HomeComponents from '../components/Home/Home';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';

export default function Home() {
    return (
        <div>
            <NavBar/>
            <div>

            <HomeComponents/>
            </div>
            <Footer/>
        </div>
    )
}