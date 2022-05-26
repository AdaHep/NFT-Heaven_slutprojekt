import { Button } from '@mui/material'
import React, { CSSProperties, useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../components/context/LoginContext'

const AdminPage = () => {
    const { currentUser } = useContext(UserContext)
    return (
        <div>
            <div style={adminStyle}>
                 <h2>Admin Page</h2>
            </div>

           
            <div style={buttonDivStyle}>
                <Button style={buttonStyle}
                    variant="contained">
                    <Link style={linkStyle} to="/adminProductPage">
                        Edit products
                    </Link>
                </Button>
                 <Button style={buttonStyle}
                variant="contained">
                <Link style={linkStyle} to="/adminOrderPage">
                    See orders
                </Link>
            </Button>
            </div>


           

        </div>
    )
}
const buttonStyle: CSSProperties = {
    fontWeight: "bold",
    background: "rgb(32, 129, 226)",
    color: "white",
    fontSize: "small",
    width: "10rem",
    margin: "1rem"
};

const linkStyle: CSSProperties = {
    textDecoration: "none",
    color: "white",
}

const buttonDivStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignContent: "center",
}

const adminStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
}
export default AdminPage