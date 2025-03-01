import { useState } from "react";
import PopularClassCard from "../PopularClassCard/PopularClassCard";
import { useEffect } from "react";

const PopularClasses = () => {
  const [popularClasses, setPopularClasses] = useState([]);

  useEffect(() => {
    fetch("https://saucy-culinary-school-server.vercel.app/popularClasses")
      .then((res) => res.json())
      .then((data) => setPopularClasses(data));
  }, []);

  return (
    <div>
      <div className="text-center my-20">
        <h3 className="text-3xl font-bold">Our Popular Classes</h3>
        <p></p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
        {popularClasses.map((item) => (
          <PopularClassCard key={item._id} item={item}></PopularClassCard>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
