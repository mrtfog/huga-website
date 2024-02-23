const Loader = () => {
  return (
    <div className="absolute z-50 flex items-center justify-center w-full bg-[#ECC03C] h-screen">
        <svg className="absolute z-50 flex">
        <pattern
            id="pattern"
            patternUnits="userSpaceOnUse"
            width={750}
            height={800}
            className="text-[#D57C8C]"
        >
            <rect className="w-full h-full fill-current" />
            <rect className="w-full h-full text-white fill-current" />
        </pattern>
        <text
            className="text-7xl font-bold"
            textAnchor="middle"
            x="50%"
            y="50%"
            style={{ fill: "url(#pattern)" }}
        >
            HÜGA
        </text>
        </svg>
    </div>
  )
}

export default Loader