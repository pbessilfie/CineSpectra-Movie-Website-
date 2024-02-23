import { useSearchParams } from "react-router-dom";

const WatchMovie = () => {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const poster = searchParams.get("poster");
  console.log(title, poster);
  return (
    <>
      <div>{title}</div>
      <img src={poster} alt={title} />
      <h2>Hello word</h2>
    </>
  );
};

export default WatchMovie;
