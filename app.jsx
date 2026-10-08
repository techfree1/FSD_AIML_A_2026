const bookdata = [
  {
    title: "The Road to React",
    image: "https://via.placeholder.com/150x190?text=Road+to+React",
    price: 599,
  },
  {
    title: "Complete Guide",
    image: "https://via.placeholder.com/150x190?text=Complete+Guide",
    price: 699,
  },
  {
    title: "Beginning React",
    image: "https://via.placeholder.com/150x190?text=Beginning+React",
    price: 799,
  },
];

function Book({ title, image, price }) {
  return (
    <div className="book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>Price: ₹{price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

function App() {
  return (
    <>
      {bookdata.map((book) => (
        <Book
          key={book.title}
          title={book.title}
          image={book.image}
          price={book.price}
        />
      ))}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);