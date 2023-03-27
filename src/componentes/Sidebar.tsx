import { PencilLine } from "phosphor-react"
import { Avatar } from "./Avatar"

import styles from "./Sidebar.module.css"

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover}
                src='https://images.unsplash.com/photo-1676594038099-200616e46d6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=370&q=80'
            />

            <div className={styles.profile}>
                <Avatar src="https://images.unsplash.com/photo-1679807931175-b74ae4c3d910?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHlvdW5nJTIwd29tYW4lMjBmYWNlfGVufDB8fDJ8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />

                <strong>Liana</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}