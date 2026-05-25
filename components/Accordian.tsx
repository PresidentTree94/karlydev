export default function Accordian({
  faq, isOpen, onToggle
}: {
  faq: { question: string; answer: string; };
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-stone-100 last:border-b-0 group">
      <button className="flex justify-between items-center w-full py-5 cursor-pointer" onClick={onToggle}>
        <span className="font-medium text-stone-800 transition-colors group-hover:text-amber-700">{faq.question}</span>
        <span className="w-7 h-7 rounded-full bg-stone-100 flex justify-center items-center group-hover:bg-amber-50 transition-colors"><i className={`${isOpen ? "ri-subtract-line" : "ri-add-line"} text-stone-500 text-sm`}></i></span>
      </button>
      <p className={`text-stone-600 pb-5 ${isOpen ? "block" : "hidden"}`}>{faq.answer}</p>
    </div>
  );
}