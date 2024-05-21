export const dynamic = 'force-dynamic'
export const revalidate = 0

import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { getNewslettersLast,  } from '../services/getnewsletters'
import {CallWeb} from '../components/CallWeb';
import {Head} from '../components/Head';
import {Main1} from '../components/Main1';
import {Footer} from '../components/Footer';
import { getItem } from '../services/getDynamics'

// const {id, sequence, date, widthPhoto, news } = await getNewslettersLast()

export default async function HomePage() {
  
  const {id, date, widthPhoto, news } = await getItem()
  console.log('Main Page', date)
  
  return (
    <>    
      <CallWeb id={id} />
      <Head id={id} date={date}/>
      <Main1 news={news} widthPhotoDefault={widthPhoto}/>
      <Footer/>
    </>
);
}
