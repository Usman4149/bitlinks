import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <section className="grid grid-cols-2 bg-blue-100">
        <div className="flex flex-col gap-4 justify-center items-center px-8 ">
          <p className="text-2xl font-bold">
            This is best URL Shortern
          </p>
          
          <p>
            Good url genrater Lorem ipsum dolor sit amet consectetur adipisicing elit.this is best urel tecnques to generate Shorter Url id Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium repellat tempore ex, sapiente a molestiae rerum iusto, commodi deserunt quasi eveniet omnis fugiat quos! Quia animi natus quam harum sunt.
          </p>
          <div className='flex gap-4 '>
            <Link href="/shorten"><button className='bg-blue-500 text-white rounded-lg py-1 px-2  hover:bg-blue-400 cursor-pointer '>Try Now</button></Link>
            <Link href="/github"><button className='bg-blue-500 text-white rounded-lg py-1 px-2  hover:bg-blue-400 cursor-pointer'>Git hub</button></Link>
          </div>
        </div>
        <div className="flex relative justify-center py-5 mix-blend-darken">
          <Image alt="office image " src={"/office.jpeg"} width={500} height={300}/>
        </div>
      </section>
    </main>
  );
}
