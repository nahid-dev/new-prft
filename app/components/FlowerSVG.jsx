const FlowerSVG = () => {
  return (
    <svg
      width="600"
      height="600"
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute right-0 top-0 opacity-10"
    >
      {/* Four large curved petals */}
      <path
        d="M300,300 C450,100 750,100 600,300 C750,500 450,500 300,300"
        stroke="white"
        strokeWidth="0.5"
        fill="none"
      />
      <path
        d="M300,300 C100,450 100,750 300,600 C500,750 500,450 300,300"
        stroke="white"
        strokeWidth="0.5"
        fill="none"
      />
      <path
        d="M300,300 C150,100 -150,100 0,300 C-150,500 150,500 300,300"
        stroke="white"
        strokeWidth="0.5"
        fill="none"
      />
      <path
        d="M300,300 C500,450 500,750 300,600 C100,750 100,450 300,300"
        stroke="white"
        strokeWidth="0.5"
        fill="none"
      />
    </svg>
  );
};

export default FlowerSVG;
