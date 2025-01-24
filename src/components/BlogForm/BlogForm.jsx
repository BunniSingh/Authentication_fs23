import React, { useEffect } from 'react'
import styles from './BlogForm.module.css'

import { useRef} from 'react'
import { useDispatch } from 'react-redux';
import { replaceEditedPostToList } from '../../slice/postSlice';
import { collection, addDoc, updateDoc, getDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../../config/firebase-config';

const BlogForm = (props) => {

    let author = JSON.parse(localStorage.getItem('loginData')).displayName;
    const dispatch = useDispatch();

    const blogsCollectionRef = collection(db, 'blogs');

    const titleRef = useRef();
    const postRef = useRef();


    useEffect(() => {
      if(props.id){
        const {title, post} = props.postList.find(post => post.id === props.id);
        titleRef.current.value = title;
        postRef.current.value = post;
      }
    }, [props.id])

    const formData = async (e) =>{
        e.preventDefault();
        const title = titleRef.current.value.trim();
        const post = postRef.current.value.trim();

        if(!title || !post) {
            alert('All inputs are required');
            return;
        }

        const inputData = {
            title,
            post,
            author 
        }

        if(props.id){
          dispatch(replaceEditedPostToList(inputData));
        }else{
          props.onFormsSubmit(inputData);
          try{
            await addDoc(blogsCollectionRef, inputData);
          } catch(err){
            console.log('Error catching from addDoc opration', err);
          }
        }
        // titleRef.current.value = '';
        // postRef.current.value = '';
        // titleRef.current.focus();
    }

  return (
    <form onSubmit={formData} className={styles.form}>
          <div>
            <p>Title:</p>
            <input ref={titleRef} type="text"className={styles.title} />
          </div>
          <div>
            <p>Post:</p>
            <textarea ref={postRef} className={styles.post}/>
          </div>
          <button type='submit'>{props.id ? 'Edit post' : 'Submit post'}</button>
      </form>
  )
}

export default BlogForm