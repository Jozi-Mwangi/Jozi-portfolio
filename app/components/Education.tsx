import Image from "next/image";

const Education = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4">
      <div className="flex items-center">
        <div className="mr-4 h-8 w-8 rounded-full bg-gray-200 flex justify-center items-center">
          <span className="text-sm font-bold text-gray-700">•</span>
        </div>
        <div className="flex-shrink-0">
            Logo
          {/* {logo && (
            <Image
              src={logo}
              alt="Institution Logo"
              width={100}
              height={100}
            />
          )} */}
        </div>
      </div>
      <div className="flex-grow">
        <h3 className="text-lg font-bold">institution</h3>
        <span className="text-sm text-gray-500">date</span>
        <p className="mt-2 text-base">
            <ul>
                <li>skill 1</li>
                <li>skill 2</li>
                <li>skill 3</li>
                <li>skill 4</li>
                <li>skill 5</li>
            </ul>
        </p>
      </div>
      <div className="hidden md:block">
        <div className="h-full border-l border-gray-200 ml-4"></div>
      </div>
    </div>
  );
};

export default Education;
