import Head from "next/head"

const HeadTag = ({title, description}) => {
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
              <link rel="icon" href="/images/brand/logo512.png" />
        </Head>
    </>
  )
}

export default HeadTag