function Customer(props) {
    return(
        <div className="cust_data">
        <div className="cd"><b>Appiontment </b> {props.User.Appointment}</div>
        <div className="cd"><strong>Email : </strong>{props.User.Email}</div>
        <div className='cd'><b>Phone </b> {props.User.phone}</div>
        </div>
    );

}
export default Customer;