import Posts from "./components/Posts";

export default function Home() {
  return (
    <main
      className=" flex min-h-screen items-center flex-col bg-white
    "
    >
      <div className="max-w-prose mx-auto ">
        <div
          className="flex flex-row gap-10
         flex- mt-10 mb-5  justify-center"
        >
          <span>
            <img
              src="../../images/bird1.png"
              alt="a pic of elin"
              className="w-64 h-64  "
            ></img>
            <h1 className=" text-center font-bold text-xl"> Elin </h1>
          </span>
          <span>
            <img
              src="../../images/bird2.png"
              alt="a pic of elin"
              className="w-64 h-64  "
            ></img>
            <h1 className=" text-center font-bold text-xl"> Matias </h1>
          </span>
        </div>

        <p className=" text-center ">
          Welcome to Matias' and Elin's Devblog for the course DH2323 Computer
          Graphics
        </p>
        <p className=" text-center ">
          This blog is dedicated to documenting the progress our work on the
          BOIDS algorithm
        </p>
        <Posts></Posts>
      </div>
    </main>
  );
}
