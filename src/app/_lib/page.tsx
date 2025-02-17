export default function PrivateRoute() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <h2>You can not view this in the browser</h2>
      <h2>use Case</h2>
      <p className="text-2xl">
        keeping your ui logic separate from routing logic
      </p>
      <p className="text-2xl">
        having a consistent way to organize internal file in your project
      </p>
      <p className="text-2xl">
        making it easier ti group related files in your code editor
      </p>
      <p className="text-2xl">
        if you want to use _ in your URL you have to use{" "}
        <span className="text-5xl text-red-500">%5F</span>
      </p>
    </div>
  );
}
