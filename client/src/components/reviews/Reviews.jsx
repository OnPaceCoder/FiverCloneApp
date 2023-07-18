import React from 'react'
import Review from '../review/Review'
import { useMutation, useQueryClient } from 'react-query'
import newRequest from '../../utils/newRequest'

const Reviews = ({ gigId }) => {

    const queryClient = useQueryClient()
    const { isLoading, error, data } = useQuery({
        queryKey: ["reviews"],
        queryFn: () =>
            newRequest.get(`/reveiews/${gigId}`).then((res) => {
                return res.data
            })
    })

    const mutation = useMutation({
        mutationFn: (review) => {
            return newRequest.post("/reviews", review);
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["reviews"])
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const desc = e.target[0].value;
        const star = e.target[1].value;
        mutation.mutate({ gigId, desc, star })
    }
    return (
        <div className='reviews'>
            <h2>Reveiws</h2>
            {isLoading
                ? "loading"
                : error
                    ? "Something went wrong!"
                    : data.map((review) => <Review key={review._id} review={review} />)}
        </div>
    )
}

export default Reviews