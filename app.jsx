const bookdata = [
  {
    title: "The Road to React",
    image: "book.jpg",
    price: 599,
  },
  {
    title: "Complete Guide",
    image: "book2.jpg",
    price: 699,
  },
  {
    title: "Beginning React",
    image: "book3.jpg",
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