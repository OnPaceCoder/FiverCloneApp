import React from 'react'
import "./GigCard.scss"
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
const GigCard = ({ item }) => {


    const { isLoading, error, data } = useQuery({
        queryKey: [item.userId],
        queryFn: () =>
            newRequest.get(`/users/${item.userId}`).then((res) => { return res.data })
    })




    return (
        <Link to={`/gig/${item._id}`}>
            <div className='gigCard'>
                <img src={item.img} alt="" />
                <div className="info">

                    {isLoading ? ("loading") : error ? ("Something went wrong!") : (
                        <div className="user">
                            <img src={data.img || "/img/noavatar.png"} alt="" />
                            <span>{data.username}</span>
                        </div>
                    )}

                    <p>{item.desc}</p>
                    <div className="star">
                        <img src="./img/start.png" alt="" />
                        <span>{!isNaN(item.totalStars / item.starNumber) && Math.round(item.totalStars / item.starNumber)}</span>
                    </div>
                </div>
                <hr />
                <div className="Details">
                    <img src="./img/heart.png" alt="" />
                    <div className="price">
                        <span>STARTING AT</span>
                        <h2>${item.price}</h2>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default GigCard