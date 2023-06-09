import Link from "next/link";
import Image from 'next/image'

const Post = ({title, img, body, id}) => {          
const postLink = `/post/${id}`;
  return (
        <div className="border p-10 m-5 w-72 rounded-2xl">
            <span className="block mb-2 text-sm text-red-900">{title}</span>    
            <Image
              src={img}
              width={500}
              height={500}              
            />            
            <span className="block text-sm text-green-900">{body}</span>
            <Link href={`/post/${id}`}>Open</Link>
        </div>
  );
};


export default Post;
