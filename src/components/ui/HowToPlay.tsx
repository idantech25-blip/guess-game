import { Modal } from './Modal';

interface HowToPlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HowToPlay = ({ isOpen, onClose }: HowToPlayProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="How to Play">
      <div className="space-y-4 text-gray-700">
        <div>
          <h3 className="font-bold text-lg mb-2"> Objective</h3>
          <p>Guess the magic number within the given range and number of attempts!</p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-2"> Difficulty Levels</h3>
          <ul className="space-y-2 ml-4">
            <li><strong>Easy:</strong> Numbers 1-10, 5 guesses</li>
            <li><strong>Medium:</strong> Numbers 1-50, 7 guesses</li>
            <li><strong>Hard:</strong> Numbers 1-100, 10 guesses</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-2"> How to Play</h3>
          <ol className="space-y-2 ml-4 list-decimal">
            <li>Choose your difficulty level</li>
            <li>Use the keypad to enter your guess</li>
            <li>Click Submit or press the ✓ button</li>
             <li>Get feedback on your guess:
               <ul className="ml-4 mt-1 space-y-1">
                 <li>• &quot;Too high!&quot; - Try a lower number</li>
                 <li>• &quot;Too low!&quot; - Try a higher number</li>
                 <li>• &quot;You were close!&quot; - You&apos;re within 5 of the answer</li>
               </ul>
             </li>
            <li>Keep guessing until you find the magic number!</li>
          </ol>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-2"> Tips</h3>
          <ul className="space-y-1 ml-4">
            <li>• Start with the middle of the range</li>
            <li>• Use the feedback to narrow down your search</li>
             <li>• If you&apos;re &quot;close&quot;, try numbers within ±5 of your guess</li>
            <li>• Don&apos;t waste guesses on numbers you know are wrong!</li>
          </ul>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            <strong>Good luck!</strong> Can you guess the magic number? 
          </p>
        </div>
      </div>
    </Modal>
  );
};
