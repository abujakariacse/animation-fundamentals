const StagAnimation = () => {
  const name = "Programming Hero";
  const nameArr = name.split("");
  return (
    <div>
      <div className="main">
        <div className="container">
          {nameArr.map((ele, index) => (
            <span
              className="alphabet"
              key={index}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {ele}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StagAnimation;
