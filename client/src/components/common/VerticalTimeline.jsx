const labelColorClasses = {
  white: "text-[#f6f6f6]",
  black: "text-[#0a0a0a]",
};

const textColorClasses = {
  lightGray: "text-[#e5e5e5]",
  darkGray: "text-[#363738]",
};

export default function VerticalTimeline({
  items,
  leblColor = "black",
  textColor = "darkGray",
}) {
  const labelColorClass = labelColorClasses[leblColor] || "";
  const textColorClass = textColorClasses[textColor] || "";

  return (
    <div className={`-my-6`}>
      {items.map((item, index) => (
        <div key={index} className="relative pl-8 py-6 group">
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-pink-color after:border-4 after:box-content after:border-slate-50 after:rounded-full after:-translate-x-1/2 after:translate-y-1.5">
            <div className={`text-xl font-bold ${labelColorClass}`}>
              {item.title}
            </div>
          </div>
          <div className={textColorClass}>{item.description}</div>
        </div>
      ))}
    </div>
  );
}
