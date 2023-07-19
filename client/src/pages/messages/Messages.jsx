import React from 'react'
import "./Messages.scss"
const Messages = () => {
    return (
        <div className='container'>
            <div className="title">
                <h1>Messages</h1>
            </div>
            <table>
                <tr>
                    <th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>
                    <th>Last Message</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
                <tr className='active'>
                    <td>John Doe</td>
                    <td><Link to="/message/123" className="link">
                        {message.substring(0, 100)}...
                    </Link>
                    </td>
                    <td>1 day ago</td>
                    <td>
                        <button>Mark as Read</button>
                    </td>
                </tr>
                <tr className='active'>
                    <td>John Doe</td>
                    <td><Link to="/message/123" className="link">
                        {message.substring(0, 100)}...
                    </Link></td>
                    <td>1 day ago</td>
                    <td>
                        <button>Mark as Read</button>
                    </td>
                </tr>
                <tr >
                    <td>John Doe</td>
                    <td><Link to="/message/123" className="link">
                        {message.substring(0, 100)}...
                    </Link> </td>
                    <td>1 day ago</td>
                    <td>
                        <button>Mark as Read</button>
                    </td>
                </tr>


            </table>

        </div>
    )
}

export default Messages