import Marquee from "react-fast-marquee";

const Marquee1 = () => {
  const mq = {
    fontFamily: "'Racing Sans One', cursive",
    fontSize: "50px",
    backgroundColor: "#000",
    color: "#fff",
    paddingTop: "25px",
    paddingBottom: "25px"
  };
  return (
    <Marquee style={mq} gradient={false} speed={30}>
      Engage with your loyal fans. Build your sustainable income.
    </Marquee>
  );
};

export default Marquee1;
