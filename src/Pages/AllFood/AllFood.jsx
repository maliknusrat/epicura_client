import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../App.css'

const AllFood = () => {
    const [foods, setFoods] = useState([]);
    const [records, setRecords] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch(
          `https://epicurea-server.vercel.app/food?page=${currentPage}&size=${itemsPerPage}`
        )
          .then((res) => res.json())
          .then((data) => {
            setFoods(data);
            setRecords(data);
          });
    }, [currentPage, itemsPerPage])

    useEffect(() => {
      fetch("https://epicurea-server.vercel.app/foodCount")
        .then((res) => res.json())
        .then((data) => setCount(data.count));
    }, []);

    const numberOfPages = Math.ceil(count / itemsPerPage);
    const pages = [...Array(numberOfPages).keys()];

    const handleSearch = event => {
        setRecords(foods?.filter(food => food.foodName.toLowerCase().includes(event.target.value)));
    }

    const handleItemsPerPage = (e) => {
      const val = parseInt(e.target.value);
      console.log(val);
      setItemsPerPage(val);
      setCurrentPage(0);
    };

    const handlePrevPage = () => {
      if (currentPage > 0) {
        setCurrentPage(currentPage - 1);
      }
    };

    const handleNextPage = () => {
      if (currentPage < pages.length - 1) {
        setCurrentPage(currentPage + 1);
      }
    };

    return (
      <div className="font-play">
        <div className="join font-play flex items-center justify-center mt-10">
          <input
            onChange={handleSearch}
            className="input input-bordered join-item w-1/2"
            placeholder="Enter Food Name to Search"
          />
        </div>
        <div className="py-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {records.map((food) => (
            <div key={food._id}>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <img
                    src={food.foodImage}
                    alt="Shoes"
                    className="size-80 rounded-md"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {food.foodName}
                    <div className="badge badge-secondary">{food.price}</div>
                  </h2>
                  <p>{food.foodCategory}</p>
                  {food.quantity > 0 ? (
                    <p>{food.quantity}</p>
                  ) : (
                    <p className="text-red-500">Not Available</p>
                  )}
                  <div className="card-actions justify-end">
                    <Link
                      to={`/foodDetails/${food._id}`}
                      className="btn btn-outline btn-secondary"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
          {/* <p>Current page: {currentPage}</p> */}
          <button onClick={handlePrevPage}>Prev</button>
          {pages.map((page) => (
            <button
              className={currentPage === page ? "selected" : undefined}
              onClick={() => setCurrentPage(page)}
              key={page}
            >
              {page}
            </button>
          ))}
          <button onClick={handleNextPage}>Next</button>
          <select
            value={itemsPerPage}
            onChange={handleItemsPerPage}
            name=""
            id=""
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>
      </div>
    );
};

export default AllFood;