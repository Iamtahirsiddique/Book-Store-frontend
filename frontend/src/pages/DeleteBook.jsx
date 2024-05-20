import React from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import { useState } from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import axios from 'axios'


const DeleteBook = () => {
  const[loading,setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} =useParams();

  const handleDelete = ()=>{
    setLoading(true)
    axios.delete(`http://localhost:8000/books/${id}`)
    .then(()=>{
      setLoading(false)
      navigate('/')
    }).catch((error)=>{
      console.log(error)
      alert('Something happening false please check console')
      setLoading(false)
    }) 
  };
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {loading ? <Spinner/>:''}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h2 className='text-2xl'>Are you sure you want to delete this book?</h2>
        <button className='p-4 bg-red-700 text-white m-8 w-full'
        onClick={handleDelete}
        >
          Yes, Delete it
        </button>
      </div>

    </div>
  )
}

export default DeleteBook