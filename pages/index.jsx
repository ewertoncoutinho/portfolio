import Head from 'next/head'
import Hello from '/src/components/Hello'
import CardAbout from '../src/components/CardAbout'
import Menu from '/src/components/Menu'
import Works from '../src/components/Works'

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Ewerton Coutinho</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="canonical" href="https://www.ewertoncoutinho.com/" />
        <link rel="alternate" href="https://www.ewertoncoutinho.com/br/" hrefLang="pt-BR"></link> */}
      </Head>
      <Menu></Menu>
      <Hello greeting="Hi, I'm" name="Ewerton" caption="I'm a UX/UI Designer and Full-stack Developer"></Hello>
      <CardAbout></CardAbout>
      <Works></Works>
    </>
  )
}
