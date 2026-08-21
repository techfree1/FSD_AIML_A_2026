const bookdata = [
    {
        title: "The Road to React",
        image: "book.jpg",
        price: 599
    },
    {
        title: "Complete Guide",
        image: "book2.jpg",
        price: 699
    },
    {
        title: "Beginning  React",
        image: "book3.jpg",
        price: 799
    }
];

function Book(props) {

    const image = React.createElement("img", {
        src: props.image,
        alt: props.title
    });

    const title = React.createElement(
        "h2",
        {},
        props.title
    );

    const price = React.createElement(
        "p",
        {},
        "Price: ₹" + props.price
    );

    const button = React.createElement(
        "button",
        {},
        "Add to Cart"
    );

    return React.createElement(
        "div",
        { className: "book" },
        [image, title, price, button]
    );
}

const books = bookdata.map(function(book) {
    return React.createElement(Book, {
        key: book.title,
        title: book.title,
        image: book.image,
        price: book.price
    });
});

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(books);