import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Center from '../components/Center'
import Player from '../components/Player'
import { getSession } from 'next-auth/react'

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Sonic</title>
        <link rel="icon" href="/spotify_pride128.png" />
        <meta property="og:image" content="https://raw.githubusercontent.com/adnjoo/Sonic/main/scrn.png"></meta>
      </Head>
      <main className='flex'>
        <Sidebar />
        <Center />
      </main>
      <div className='sticky bottom-0'>
        <Player />
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}