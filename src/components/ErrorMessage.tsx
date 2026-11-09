interface ErrorMessageProps {
  error: string;
  onRetry: () => void;
}

const ErrorMessage = ({ error, onRetry }: ErrorMessageProps) => {
  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <p className="text-red-600 font-semibold">
        Error: {error}
      </p>

      <button
        onClick={onRetry}
        className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition"
      >
        Try Again
      </button>
    </div>
  );
};

export default ErrorMessage;