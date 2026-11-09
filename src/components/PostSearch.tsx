import { useEffect, useRef } from "react";

interface PostSearchProps {
  value: string;
  onChange: (value: string) => void;
}

const PostSearch = ({ value, onChange }: PostSearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="mb-8">
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="جستجو کردن..."
        className="w-full p-4 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default PostSearch;