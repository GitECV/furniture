import NavBarContainer from './components/nav-bar-container/nav-bar-container.jsx';
import ContactForm from './components/contact-form/contact-form';

const Contacta = () => {
    return (
        <div>
          <NavBarContainer text={"contacta."} />
          <ContactForm />
        </div>
      );
}

export default Contacta;