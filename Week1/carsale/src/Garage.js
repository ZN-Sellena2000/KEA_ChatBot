function Car(props) {
  return (
    // {/*return 부분을 p tag로 출력 */}
    <p>
      {/* 간격 맞춤 안됨 */}
      &#91;{props.num}&#93; <span></span>
      {props.brand} <span></span>
      {props.price} <span></span>
      {props.character}
    </p>
  );
}

export default function Garage() {
  const cars = [
    { id: 1, brand: "GRANDEUR", price: 4500, character: "Graceful design" },
    {
      id: 2,
      brand: "BMW",
      price: 7800,
      character: "Functional of high level",
    },
    {
      id: 3,
      brand: "TESLA",
      price: 9800,
      character: "Functional enhancement through SW upgrade",
    },
    {
      id: 4,
      brand: "BENZ",
      price: 11400,
      character: "Excellent ride comfort",
    },
    { id: 5, brand: "GENESIS", price: 66700, character: "Popular Car" },
  ];

  return (
    <>
      <h1>Car List</h1>
      <p>
        {cars.map((car) => (
          <Car
            key={car.id}
            num={car.id}
            brand={car.brand}
            price={car.price}
            character={car.character}
          />
        ))}
      </p>
    </>
  );
}
