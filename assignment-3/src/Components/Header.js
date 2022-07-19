
function Header(props) {
    return (
        <div className="Nav">
            <p id="prev"> &#60;</p>
            <div className="name">{props.User.Name}</div>
            <div><font color="grey">{props.User.EmployeeId}</font></div>
            <button className="b-type">Print</button>

        </div>
    )

}
export default Header;