import React from 'react'
import "./MyGigs.scss"
const MyGigs = () => {
    return (
        <div className='myGigs'>
            <div className="title">
                <h1>Gigs</h1>
                {currentUser.isSeller && (
                    <Link to="/add">
                        <button>Add New Gig</button>
                    </Link>

                )}
            </div>
            <table>
                <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Sales</th>
                    <th>Action</th>
                </tr>
                {data.map((gig) => (
                    <tr key={gig._id}>
                        <td>
                            <img src={gig.cover} className='image' alt="" />
                        </td>
                        <td>{gig.title}</td>
                        <td>{gig.price}</td>
                        <td>{gig.sales}</td>
                        <td>
                            <img
                                className='delete'
                                src='./img/delete.png'
                                onClick={() => handleDelete(gig._id)} />
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default MyGigs