import { useState } from "react"
import "./ReviewModal.css"
import { useDispatch } from "react-redux"
import { addReview } from "../../store/slice/movieSlice"
import { notifyError } from "../../constants/toast"
function ReviewModal({showModal,setShowModal,data}) {
    const dispatch = useDispatch()
    const [rating,setRating] = useState(0)
    const [review, setReview] = useState("")

    const handleSubmit = ()=>{
        if(review.trim() === ""){
            return notifyError("Review cannot be empty")
        }else if(review.length > 200){
            return notifyError("Review cannot be more than 200 characters")
        }else if(rating === 0){
            return notifyError("Please rate the movie")
        }

        const id = "id" + Date.now();
        dispatch(addReview({id,rating:rating,review:review,index:data.index}))
        setReview("")
        setRating(0)
        setShowModal(false)
    }

    if(!showModal) return null

  return (
    <div className="modal">
        <div className="modal-content">
        <div className="modal-header">
          <h3>{data.title}</h3>
          <button onClick={()=>setShowModal(false)} className="close-button">&times;</button>
        </div>
        <div className='field'>
          <textarea onChange={(e)=>{setReview(e.target.value)}} value={review} id="description" name="description" placeholder="Add a review" required></textarea>
        </div>
        <div className="review-modal-footer">
            <div>
                {
                    [1,2,3,4,5].map((star)=>(
                        <span key={star} onMouseEnter={()=>setRating(star)} style={{"color":star <= rating ? "#ffc107" : "#e4e5e9"}}>★</span>
                    ))
                }
            </div>
          <button onClick={handleSubmit}  className="confirm-button">Submit</button>
        </div>
        <br />
        <hr />
        <h3>Reviews</h3>
        <div className="review-body">
            {
                data.reviews.map((review)=>(
                    <div key={review.id} className="review">
                        {
                            [1,2,3,4,5].map((star)=>(
                                <span key={star} style={{"color":star <= review.rating ? "#ffc107" : "#e4e5e9"}}>★</span>
                            ))
                        }
                        <p>{review.review}</p>
                    </div>
                ))
            }
         
        </div>
        </div>
    </div>
  )
}

export default ReviewModal
