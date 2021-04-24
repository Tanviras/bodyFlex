import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import TrainingPrograms from './Components/TrainingPrograms/TrainingPrograms';
import WhyChooseUs from './Components/WhyChooseUs/WhyChooseUs';

function App() {
  return (
    <div>
      <Home></Home>
      <Services></Services>
      <AboutUs></AboutUs>
      <TrainingPrograms></TrainingPrograms>
      <WhyChooseUs></WhyChooseUs>
      <Footer></Footer>
    </div>
  );
}

export default App;
