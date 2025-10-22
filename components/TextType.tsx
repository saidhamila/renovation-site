"use client"

import React, { useState, useEffect } from 'react';

interface TextTypeProps {
  text: string[];
  typingSpeed?: number;
  pauseDuration?: number;
  showCursor?: boolean;
  cursorCharacter?: string;
  className?: string;
}

export default function TextType({
  text,
  typingSpeed = 100,
  pauseDuration = 2000,
  showCursor = true,
  cursorCharacter = "|",
  className = ""
}: TextTypeProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showCursorBlink, setShowCursorBlink] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      // Typing effect
      if (displayedText.length < text[currentTextIndex].length) {
        timeout = setTimeout(() => {
          setDisplayedText(prev => prev + text[currentTextIndex][displayedText.length]);
        }, typingSpeed);
      } else {
        // Finished typing, pause then start deleting
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, pauseDuration);
      }
    } else {
      // Deleting effect
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(prev => prev.slice(0, -1));
        }, typingSpeed / 2); // Delete faster than type
      } else {
        // Finished deleting, move to next text
        const nextIndex = (currentTextIndex + 1) % text.length;
        setCurrentTextIndex(nextIndex);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, currentTextIndex, isTyping, text, typingSpeed, pauseDuration]);

  // Cursor blinking effect
  useEffect(() => {
    if (!showCursor) return;

    const interval = setInterval(() => {
      setShowCursorBlink(prev => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, [showCursor]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && showCursorBlink && <span>{cursorCharacter}</span>}
    </span>
  );
}
