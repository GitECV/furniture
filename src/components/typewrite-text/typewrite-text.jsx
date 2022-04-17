import Typewriter from 'typewriter-effect';
import './css/typewrite-text.css';

const TypewriterText = props => {
    return (
            <Typewriter
            options={{
                strings: [
                  'Estilo',
                  'Diseño',
                  'Vanguardia'
                ],
                autoStart: true,
                loop: true,
              }}
            />
      );
}

export default TypewriterText;