export default function Home({ data }) {
    console.log(data)
      return (
       <div className={styles.container}>
         <Head>
           <title>Create Next App</title>
           <meta name="description" content="Generated by create next app" />
           <link rel="icon" href="/favicon.ico" />
         </Head>
    
         <p>NextJS X Pagination</p>
    
    export const getStaticProps = async () => {
     const res = await fetch("https://jsonplaceholder.typicode.com/todos");
     const data = await res.json();
    
     return {
       props: { data },
     };


 </div>
    }