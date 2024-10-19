import image from "../assets/image.jpg";

const Home = () => {
  return (
    <div className="flex justify-center items-center">
      <img
        className="w-full h-auto max-w-[700px] mt-5 rounded"
        src={image}
        alt=""
      />
    </div>
  );
};

export default Home;
