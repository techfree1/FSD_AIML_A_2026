const data = [
    { image: "https://tse3.mm.bing.net/th/id/OIP.su9hs85gET1m-y7MOmtgngHaD4?r=0&pid=Api&P=0&h=180", price: "525/-" },
    { image: "https://tse3.mm.bing.net/th/id/OIP.su9hs85gET1m-y7MOmtgngHaD4?r=0&pid=Api&P=0&h=180", price: "425/-" },
    { image: "https://tse3.mm.bing.net/th/id/OIP.su9hs85gET1m-y7MOmtgngHaD4?r=0&pid=Api&P=0&h=180", price: "625/-" },
];
function Book(props){
    const image=React.createElement("img",{src:props.Image,
                                    width:"50px",
                                    height:"50px"});
    const h2=React.createElement("h2",{color:"red"},"Price: "+props.price);
    const child=React.createElement("div",{className: "card"},[image,h2]);
    return child;
}

const booklist=data.map((i) => {
    React.createElement("div",{className:"Booklist"},Book(i));
    })
const parent=document.getElementById("root");
ReactDOM.render(booklist);