import { Header } from './componentes/Header';
import { Post, PostType } from './componentes/Post'
import { Sidebar } from './componentes/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://images.unsplash.com/photo-1679807931175-b74ae4c3d910?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHlvdW5nJTIwd29tYW4lMjBmYWNlfGVufDB8fDJ8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      name: 'Liana Felício',
      role: 'Estudante de Front-End'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare. 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbiUyMHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      name: 'Bernardo Maia',
      role: 'Desenvolvedor Back-End @Foguete'
    },
    content: [
      { type: 'paragraph', content: 'Tudo beleza? ' },
      { type: 'paragraph', content: 'Concluí a parte de back-end para o próximo tutorial. Vem muita coisa boa aí! 🪄' },
      { type: 'link', content: 'foguete/bernardo-projetos' },
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
