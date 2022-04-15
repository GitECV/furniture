import Typewriter from 'typewriter-effect';
import './css/typewrite-text.css';

const TypewriterText = props => {
    return (
            <Typewriter
            options={{
                strings: [
                  'Estilo', 
                  'Una nueva forma de artesanía',
                  'Completamente personalizable'
                ],
                autoStart: true,
                loop: true,
              }}
            />
      );
}

export default TypewriterText;