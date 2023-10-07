import React, { useState, useEffect } from 'react';
import LargeHeading from './LargeHeading';

interface AnimatedTextProps {
  text: string;
  typingSpeed?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, typingSpeed = 100 }) => {
  const [typedText, setTypedText] = useState('');
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;

    const typeNextCharacter = () => {
      if (currentCharacterIndex < text.length) {
        setTypedText((prevText) => prevText + text[currentCharacterIndex]);
        setCurrentCharacterIndex((prevIndex) => prevIndex + 1);
        timeout = setTimeout(typeNextCharacter, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setTypedText('');
          setCurrentCharacterIndex(0);
          typeNextCharacter();
        }, 4500);
      }
    };

    timeout = setTimeout(typeNextCharacter, typingSpeed);

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [text, typingSpeed, currentCharacterIndex]);

  return <>{typedText}</>

};

export default AnimatedText;
