import React, { useEffect, useState } from "react"
import "./Navbar.scss"
import { Link, useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
const Navbar = () => {
    const { pathname } = useLocation()
    const [active, setActive] = useState(false)
    const [open, setOpen] = useState(false)
    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }

    const navigate = useNavigate()
    useEffect(() => {
        window.addEventListener("scroll", isActive)
        return () => {
            window.removeEventListener("scroll", isActive)
        }
    }, [])

    const handleLogout = async () => {
        try {
            await newRequest.post("/auth/logout");
            localStorage.setItem("currentUser", null)
            navigate("/")
        } catch (error) {
            console.log(err)
        }
    }
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    return (
        <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
            <div className="container">
                <div className="logo">
                    <Link to={"/"} className="link">
                        <span className="text">fiverr</span>
                    </Link>

                    <span className="dot">.</span>
                </div>
                <div className="links">
                    <span>Fiverr Business</span>
                    <span>Explore</span>
                    <span>English</span>
                    <span>Sign In</span>
                    {!currentUser?.isSeller && <span>Become a Seller</span>}
                    {!currentUser && <button>Join</button>
                    }
                    {currentUser && (
                        <div className="user" onClick={() => setOpen(!open)}>
                            <img src={currentUser.img || "/img/noavatar.jpeg"} alt="" />
                            <span>{currentUser?.username}</span>
                            {
                                open && (

                                    <div className="options">
                                        {currentUser?.isSeller && (
                                            <>
                                                <Link to={"/gigs"} className="link">Gigs</Link>
                                                <Link to={"/gig"} className="link">Add new Gig</Link>

                                            </>
                                        )}

                                        <Link to={"/orders"} className="link">Orders</Link>
                                        <Link to={"/messages"} className="link">Messages</Link>
                                        <Link to={"/logout"} className="link" onClick={handleLogout}>Logout</Link>
                                    </div>
                                )
                            }
                        </div>
                    )}
                </div>
            </div>

            {(active || pathname !== "/") && (

                <>
                    <hr />
                    <div className="menu">
                        <Link className="link">
                            Graphics & Design
                        </Link>
                        <Link className="link">
                            Animation
                        </Link>
                        <Link className="link">
                            Web Development
                        </Link>
                        <Link className="link">
                            AI Services
                        </Link>
                        <Link className="link">
                            Content Writing
                        </Link>
                        <Link className="link">
                            Photo Editing
                        </Link>
                        <Link className="link">
                            Digital Marketing
                        </Link>
                    </div>
                </>
            )
            }
        </div>
    )
}

export default Navbar