import GifItem from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {
  const { gifs, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Loading... </h2>}
      <div className="card-grid" key={category}>
        {gifs.map((gif) => (
          <GifItem key={gif.id} {...gif} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
