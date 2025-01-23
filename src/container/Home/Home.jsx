import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './Home.module.css';

import BlogCard from '../../components/BlogCard/BlogCard';
import { deltetePostFromList, setEditPostId, setPostList } from '../../slice/postSlice';
import BlogForm from '../../components/BlogForm/BlogForm';
import { collection, deleteDoc, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase-config';

const Home = () => {
  const postList = useSelector(state => state.post.postList);
  const id = useSelector(state => state.post.editPostId);
  const dispatch = useDispatch();

  const blogsCollectionRef =  collection(db, 'blogs');

  useEffect(() => {
    const getDataFromFirebase = async() => {
      try{
        const results = await getDocs(blogsCollectionRef);
        let getblogsFromFirestore = results.docs.map(blog => ({...blog.data()}));
        dispatch(setPostList(getblogsFromFirestore));
        // console.log(getblogsFromFirestore);
      }catch(err){
        console.log('Error from getDoc from firebase', err);
      }
    }
    getDataFromFirebase();
  },[])

  const editFn = (id) =>{
    dispatch(setEditPostId(id));
  }
  const deleteFn = (id) =>{
    dispatch(deltetePostFromList(id));
    deleteDoc(blogsCollectionRef,)
  }
  
  const onFormsSubmit = () => {

  }

  return (
    <div className={styles.container}>
      {
        id ? <BlogForm id = {id} postList = {postList} /> : 
        postList.map(post => <BlogCard 
          key={post.id} 
          editFn={editFn}  
          deleteFn={deleteFn}
          {...post}/>)
      }
    </div>
  )
}

export default Home