import React, { useEffect, useState } from 'react'
import "./Gigs.scss"
import GigCard from '../../components/gigCard/GigCard'
import { useQuery } from 'react-query';
import newRequest from '../../utils/newRequest';
import { useLocation, useParams } from 'react-router-dom';
import { useRef } from 'react';
const Gigs = () => {
    const [sort, reSort] = useState("sales");

    const [open, setOpen] = useState(false);

    const minRef = useRef();
    const maxRef = useRef()

    const search = useLocation()
    const { id } = useParams();

    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ["gigs"],
        queryFn: () =>
            newRequest.get(`/gigs?max=${maxRef.current.value}&min=${minRef.current.value}&sort=${sort}&search=${search}`).then((res) => {
                return res.data;
            })
    })

    useEffect(() => {
        refetch()
    }, [sort])


    const apply = () => {
        refetch()
    }


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