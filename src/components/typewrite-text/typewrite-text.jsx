import Typewriter from 'typewriter-effect';
import './css/typewrite-text.css';

const TypewriterText = props => {
    return (
            <Typewriter
            options={{
                strings: [
                  'Tengo sueño', 
                  'A ver si viene ya el chino',
                  'Alitas fritas',
                  'Quiero cenar Taco Bell',
                  'Mis amigues son tontes y no les gusta la comida Mexicana',
                  'Muy mal'
                ],
                autoStart: true,
                loop: true,
              }}
            />
      );
}

export default TypewriterText;