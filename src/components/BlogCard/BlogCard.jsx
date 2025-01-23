import React from 'react'
import styles from './BlogCard.module.css'

import { MdDeleteForever, MdEdit } from "react-icons/md";

const BlogCard = (props) => {
    
    const { title, post, author, id } = props;
    const onEditClick = () => {
        props.editFn(id);
    }
    const onDeleteClick = () => {
        props.deleteFn(id);
    }


    return (
        <div className={styles.container}>
            <div className={styles['post-detail']}>
                <h2># {title}</h2>
                <p className={styles.post}>{post}</p>
                <p className={styles.author}>@ {author}</p>
            </div>
            <div className={styles.action}>
                <button onClick={onEditClick}><MdEdit className={styles.icon}/></button>
                <button onClick={onDeleteClick}><MdDeleteForever className={styles.icon}/></button>
            </div>
        </div>
    )
}

export default BlogCard