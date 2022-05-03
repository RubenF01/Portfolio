const Divider = (props) => (
  <svg
    width={335}
    height={48}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path stroke="url(#a)" d="M0 23.5h335" />
    <path fill="#fff" d="M136 0h64v48h-64z" />
    <path
      d="M168 37.333c7.364 0 13.333-5.97 13.333-13.333 0-7.364-5.969-13.333-13.333-13.333S154.667 16.637 154.667 24c0 7.364 5.969 13.333 13.333 13.333Z"
      stroke="#4B5563"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M163.293 22.32 168 27.013l4.707-4.693"
      stroke="#4B5563"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="a"
        x1={0}
        y1={24}
        x2={335}
        y2={24}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#9CA3AF" />
        <stop offset={0.458} stopColor="#9CA3AF" stopOpacity={0} />
        <stop offset={0.5} stopColor="#9CA3AF" stopOpacity={0} />
        <stop offset={0.544} stopColor="#9CA3AF" stopOpacity={0} />
        <stop offset={1} stopColor="#9CA3AF" />
      </linearGradient>
    </defs>
  </svg>
);

export default Divider;
