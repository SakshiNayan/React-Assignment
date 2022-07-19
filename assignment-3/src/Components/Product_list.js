function Product(props){
    console.log(props)
    return (
        <div className="container">
            <span><input type ="checkbox" id="box"></input></span>
            <span><img className="card-logo" src={props.User.profileImg}></img></span>
            <span className="pro-name"><p><b>{props.User.product_name}</b></p>
            <p>< font color="grey"> {props.User.product_dis}</font></p></span>
        </div>
    )
}
export default Product;