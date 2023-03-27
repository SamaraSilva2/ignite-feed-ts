import { PencilLine } from "phosphor-react"
import { Avatar } from "./Avatar"

import styles from "./Sidebar.module.css"

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover}
                src="https://images.unsplash.com/photo-1676594038099-200616e46d6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=370&q=80"
            />

            <div className={styles.profile}>
                <Avatar src="https://images.unsplash.com/photo-1540671221389-aa5fe5f52417?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzAzfHx5b3VuZyUyMHdvbWFuJTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />

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