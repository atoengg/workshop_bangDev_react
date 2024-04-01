import { BsBagCheck } from "react-icons/bs";
import { dataMenu } from "../../data/dataDummy";
import { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";

const ProductsSection = () => {
  const [loading, setLoading] = useState(true);
  const [displayedCertificates, setDisplayedCertificates] = useState<
    dataMenu[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setDisplayedCertificates(dataMenu);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <section id="menu" className="py-20 px-0 ">
      <div className="container max-w-4xl mx-auto">
        <h2 className=" text-center mb-4 font-bold text-3xl">Menu</h2>

        <div className="grid grid-cols-3 gap-6">
          {loading ? (
            <div className="flex items-center justify-center h-full">
              <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
              />
            </div>
          ) : (
            displayedCertificates?.map((item, index) => (
              <div
                className="p-2 shadow-md rounded-lg flex flex-col justify-between"
                key={index}
              >
                <img
                  src={item.img}
                  alt={`gambar ${item.img}`}
                  className="rounded-md"
                />
                <div className="mt-4 flex justify-between items-center">
                  <div className="">
                    <h4 className="text-2xl font-semibold">{item.price}</h4>
                    <p className="text-sm">
                      {item.menuName}
                      <br />
                      <span className="text-teal-500 font-bold ">
                        {item.variant}
                      </span>
                    </p>
                  </div>
                  <div className="text-sm">
                    <div className="flex items-center gap-1">
                      <BsBagCheck /> <span>{item.sold}</span>
                    </div>
                    <p className="font-normal">Terjual</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
