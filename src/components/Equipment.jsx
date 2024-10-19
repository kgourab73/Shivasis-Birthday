import chappal from "../assets/Chappal.jpg";
import belt from "../assets/Belt.jpg";
import stick from "../assets/stick.png";
import rod from "../assets/Rod.jpeg";

const Equipment = () => {
  return (
    <div className="m-3 p-3">
      <h1 className="text-2xl md:text-3xl font-bold text-orange mb-5 text-center">
        Equipments
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-center justify-around">
        <div className=" w-full h-[200px] lg:h-[300px] ">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={chappal}
            alt=""
          />
          <h1 className="text-gray text-center text-xl font-bold">Chappal</h1>
        </div>
        <div className=" w-full h-[200px] lg:h-[300px]">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={belt}
            alt=""
          />
          <h1 className="text-gray text-center text-xl font-bold">Belt</h1>
        </div>
        <div className="w-full h-[200px] lg:h-[300px] ">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={stick}
            alt=""
          />
          <h1 className="text-gray text-center text-xl font-bold">Stick</h1>
        </div>
        <div className="w-full h-[200px] lg:h-[300px]">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={rod}
            alt=""
          />
          <h1 className="text-gray text-center text-xl font-bold">Rod</h1>
        </div>
      </div>
    </div>
  );
};

export default Equipment;
