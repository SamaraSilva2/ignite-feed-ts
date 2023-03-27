import { Trash } from "phosphor-react"
import { ThumbsUp } from "phosphor-react"
import { useState } from "react"
import { Avatar } from "./Avatar"

import styles from "./Comment.module.css"

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment() {
        setLikeCount
        onDeleteComment(content)
    }

    function handleLikeCount() {
        setLikeCount((state) => {
            return state + 1
        })
    }

    return (
        <div className={styles.comment}>
            <Avatar
                hasBorder={false}
                src="https://this-person-does-not-exist.com/gen/avatar-11c3f3091ccf342b5c9b7f13eb680d6e.jpg"
                alt="avatar"
            />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Fábio Dias</strong>
                            <time title="08 de março às 14:55" dateTime="2023-03-08">Cerca de 2h atrás</time>
                        </div>
                        <button onMouseDown={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeCount}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}