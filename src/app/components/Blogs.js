// components/Blogs.js
import Link from 'next/link';

const Blogs = ({ blogs }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Blogs</h1>
      <ul>
        {blogs.map((blog)=>{
          return(
            <div key={blog.id} className='p-2 mb-1'>
              <h1>{blog.title}</h1>
              <h2>{blog.excerpt}</h2>
              <br/>
              <br/>
            </div>
          )
           
          
        })}
      </ul>
    </div>
  );
};

export default Blogs;
