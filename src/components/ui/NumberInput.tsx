interface NumberInputProps {
  currentGuess: string;
  maxDigits: number;
}

export const NumberInput = ({ currentGuess, maxDigits }: NumberInputProps) => {
  return (
    <div className="flex justify-center space-x-2 mb-4">
      {currentGuess.split('').map((digit, index) => (
        <div
          key={index}
          className="w-12 h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center text-xl font-bold bg-white"
        >
          {digit}
        </div>
      ))}
      {Array.from({ length: maxDigits - currentGuess.length }).map((_, index) => (
        <div
          key={index + currentGuess.length}
          className="w-12 h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center text-xl font-bold bg-gray-50"
        >
          _
        </div>
      ))}
    </div>
  );
};
