import { Header } from './componentes/Header';
import { Post, PostType } from './componentes/Post'
import { Sidebar } from './componentes/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://api.unrealperson.com/image?name=image.40075.3654189.jpg&type=tpdne',
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
      avatarUrl: 'https://api.unrealperson.com/image?name=image.49030.3654189.jpg&type=tpdne',
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
