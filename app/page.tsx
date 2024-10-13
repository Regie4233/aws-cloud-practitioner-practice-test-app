import Link from "next/link";


export default async function Home() {


  return (
    <main className="flex flex-col justify-between items-center p-2 md:p-0 md:w-4/5 m-auto">
     <section className="p-12">
        <h2 className="text-center font-semibold text-2xl">
          Free AWS Cloud Practitioner Practice Exam
        </h2>
      </section>
      <div className='text-lg border-2 p-8'>
        <h3>Questions in this exam are verfied and maintained according to <a target='_blank' className='text-blue-700 underline' href='https://github.com/kananinirav/AWS-Certified-Cloud-Practitioner-Notes/tree/master/practice-exam'>this repo</a>. This exam generates 50 questions.</h3>
        <br />
        <p>Use this app as much as you&apos;d like to prepare you for AWS Cloud Certification. I will try to keep the questions up to date. I Wish you all the best in your journey!</p>
      </div>
      <Link href='/exam' className="bg-orange-500 shadow-md text-lg my-12 text-white p-8 w-fit">Start your Exam</Link>
      <p className="p-8 md:p-0 text-center md:text-left">Obtain a different set of questions for every exam instance</p>
    </main>
  );
}
