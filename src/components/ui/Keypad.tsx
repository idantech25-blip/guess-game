interface KeypadProps {
  onNumberClick: (digit: string) => void;
  onBackspace: () => void;
  onSubmit: () => void;
}

export const Keypad = ({ onNumberClick, onBackspace, onSubmit }: KeypadProps) => {
  return (
    <div className="grid grid-cols-3 gap-3 mb-6">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
        <button
          key={num}
          onClick={() => onNumberClick(num.toString())}
          className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-lg font-bold text-lg transition-colors"
        >
          {num}
        </button>
      ))}
      <button
        onClick={onBackspace}
        className="w-12 h-12 bg-red-100 hover:bg-red-200 rounded-lg font-bold text-lg transition-colors"
      >
        ⌫
      </button>
      <button
        onClick={() => onNumberClick('0')}
        className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-lg font-bold text-lg transition-colors"
      >
        0
      </button>
      <button
        onClick={onSubmit}
        className="w-12 h-12 bg-yellow-400 hover:bg-yellow-500 rounded-lg font-bold text-lg transition-colors"
      >
        ✓
      </button>
    </div>
  );
};
