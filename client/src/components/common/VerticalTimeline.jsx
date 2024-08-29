export default function VerticalTimeline({ items }) {
  return (
    <div className={`-my-6`}>
      {items.map((item, index) => (
        <div key={index} className="relative pl-8 py-6 group">
          {/* Purple label */}

          {/* Time + Title */}
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full after:-translate-x-1/2 after:translate-y-1.5">
            <div className="text-xl font-bold text-slate-900 dark:text-white">
              {item.title}
            </div>
          </div>
          {/* Description */}
          <div className="text-slate-500">{item.description}</div>
        </div>
      ))}
    </div>
  );
}
