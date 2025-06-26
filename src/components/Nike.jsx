import './nike.css'

function Nike(props) {
  return (
    <div>
          <div className="CardBola" style={{background: props.bg2}}>
            <img src="./a.jpg" alt="" />
            <i className="fa-regular fa-heart" style={{scale: 2,color: "#CBCBCB",position: "relative",top: "-260px",left: "300px"}}></i>
            <h2>NIKE AIR FORCE 1 '07 (white/black)</h2>
            <h2>$89.99</h2>
            <p>I lost left shoe, don't need this one anymore. Please buy it.</p>
            <button className="btn" style={{background: props.bg}}><i><i className="fa-solid fa-cart-shopping" style={{scale: 1.5, padding: "0px 15px"}}></i></i>Add to cart</button>
        </div>
    </div>
 
  )
}

export default Nike