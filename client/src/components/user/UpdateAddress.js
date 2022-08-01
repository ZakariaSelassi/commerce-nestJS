import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { addUserAddress } from '../../features/slices/userSlice'
import { useNavigate } from 'react-router'

const UpdateAddress = ({user}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        street:'',
        city: '',
        zip:  '',
        country: ''
    })
    const {street, city, zip, country} = formData
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            id: user.id,
            street,
            city,
            zip,
            country
        }
        if(data){
            dispatch(addUserAddress(data))
            toast.success('Address added successfully')
            navigate('/shoppingcart')
        }
    }
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
  return (
    <div>
        <h1>Update Address</h1>
        <form onSubmit={handleSubmit}>
            <div className='profile-name'>
                <input type="text" name="street" placeholder="street" value={street} onChange={handleChange}/>
                <input type="text" name="city" placeholder="city" value={city} onChange={handleChange}/>
                <input type="text" name="zip" placeholder="zip" value={zip} onChange={handleChange}/>
                <input type="text" name="country" placeholder="country" value={country} onChange={handleChange}/>

            </div>
            <button className='btn btn-primary'>Submit</button>
        </form>
    </div>
  )
}

export default UpdateAddress