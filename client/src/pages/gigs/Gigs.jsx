import React from 'react'
import "./Gigs.scss"
import GigCard from '../../components/gigCard/GigCard'
import { useQuery } from 'react-query';
import newRequest from '../../utils/newRequest';
const Gigs = () => {


    function Gig() {
        const { id } = useParams();

        const { isLoading, error, data } = useQuery({
            queryKey: ["gig"],
            queryFn: () =>
                newRequest.get(`/gigs/single/${id}`).then((res) => {
                    return res.data;
                })
        })
    }

    const userId = data?.userId;

    const {
        isLoading: isLoadingUser,
        error: errorUser,
        data: dataUser,
    } = useQuery({
        queryKey: ["user"],
        queryFn: () =>
            newRequest.get(`/users/${userId}`).then((res) => {
                return res.data;
            }),
        enabled: !!userId
    })

    return (
        <div className='gigs'>
            <div className="container">
                <span className="breadcrumbs">
                    Liverr {">"} Graphics & Design {">"}
                </span>
                <h1>AI Artists</h1>
                <p>Explore the boundaries of art and technology with Fiverr's AI artists</p>

                <div className="menu">
                    <div className="left">
                        <span>Budget</span>
                        <input type="number" ref={minRef} placeholder='min' />
                        <input type="number" ref={maxRef} placeholder='max' />
                        <button onClick={apply}>Apply</button>
                    </div>
                    <div className="right">
                        <span className="sortBy">Sort by</span>
                        <span className='sortType'>{sort === "sales" ? "Best selling" : "Newest"}</span>
                        <img src="./img/down.png" alt=""
                            onClick={() => setOpen(!open)} />
                        {open && (
                            <div className="rightMenu">
                                {sort === "sales"
                                    ? (
                                        <span onClick={() => reSort("createdAt")}>Newest</span>
                                    )
                                    :
                                    (
                                        <span onClick={() => reSort("sales")}>Best Selling</span>
                                    )
                                }
                                <span onClick={() => reSort("sales")}>Popular</span>
                            </div>
                        )}
                    </div>

                </div>

                <div className="cards">
                    {isLoading ? "loading" : error ? "Something went wrong!"
                        : data.map((gig) =>
                            <GigCard key={gig._id} item={gig} />)}
                </div>
            </div>

        </div>
    )
}

export default Gigs