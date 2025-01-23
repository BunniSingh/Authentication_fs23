import React from 'react'

import styles from './CreateBlog.module.css'
import BlogForm from '../../components/BlogForm/BlogForm'

import { useDispatch } from 'react-redux'
import { addPostToList } from '../../slice/postSlice'

import { useNavigate } from 'react-router-dom'


const CreateBlog = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const onFormsSubmit = (postData) => {
    dispatch(addPostToList(postData));
    alert('Your blog is post successfully');
    navigate('/home');
  }

  return (
    <div className={styles['blog-container']}>
      <div className={styles.container}>
        <h2>Create your post</h2>
        <BlogForm onFormsSubmit={onFormsSubmit}/>
      </div>
    </div>
  )
}

export default CreateBlog