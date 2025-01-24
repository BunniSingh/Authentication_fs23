import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './Home.module.css';

import BlogCard from '../../components/BlogCard/BlogCard';
import { deltetePostFromList, setEditPostId, setPostList } from '../../slice/postSlice';
import BlogForm from '../../components/BlogForm/BlogForm';
import { collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../../config/firebase-config';

const Home = () => {
  const {postList, editPostId, replaceObj} = useSelector(state => state.post);

  const dispatch = useDispatch();

  const blogsCollectionRef =  collection(db, 'blogs');

  useEffect(() => {
    const getDataFromFirebase = async() => {
      try{
        const results = await getDocs(blogsCollectionRef);
        let getblogsFromFirestore = results.docs.map(blog => ({...blog.data(), id: blog.id }));
        dispatch(setPostList(getblogsFromFirestore));
        // console.log(getblogsFromFirestore);
      }catch(err){
        console.log('Error from getDoc from firebase', err);
      }
    }
    getDataFromFirebase();
  },[])

  const editFn = async (id) =>{
    console.log(replaceObj);
    const updateRef = doc(db, 'blogs', id)
    await updateDoc(updateRef, replaceObj);
    dispatch(setEditPostId(id));
  }

  const deleteFn = async (id) =>{
    dispatch(deltetePostFromList(id));
    const docRef = doc(blogsCollectionRef, id)
    await deleteDoc(docRef);
  }
  

  return (
    <div className={styles.container}>
      {
        editPostId ? <BlogForm id = {editPostId} postList = {postList} /> : 
        postList.map(post => <BlogCard 
          key = {post.id}
          editFn={editFn}  
          deleteFn={deleteFn}
          {...post}/>)
      }
    </div>
  )
}

export default Home