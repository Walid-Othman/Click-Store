import { Link } from "react-router-dom"

function About (){
    return (
      
      <div className="sm:!bg-[url(https://www.shutterstock.com/image-photo/concept-contact-us-customer-support-600nw-2505308177.jpg)] bg-cover bg-center h-[70vh]  md:h-[60vh] md:!mb-30 sm:min-h-screen bg-object-cover sm:flex items-start sm:justify-start !pt-15 sm:!pt-40 ">
        <div className=" w:full md:w-full sm:w-1/3 !px-5">
       <h1 className="text-[40px] text-center font-bold !mt-15 lg:!ml-20">About Us</h1>
       <p className="lg:!ml-20 text-gray-100  !mb-10 !my-5 text-[20px]">Welcome to our online store — where we redefine your shopping experience!
We offer the latest devices and accessories with premium quality and unbeatable prices, all through a smooth and fast interface.
Our mission is to bring you the best of modern technology in one secure and easy-to-use platform.
We don’t just sell products — we deliver a smart, enjoyable shopping experience that exceeds your expectations.</p>
            <Link className="text-[20px] border-1 !text-center border-purple-400 lg:!ml-20 rounded-lg hover:border-purple-600 !py-2 !px-5" to={'/Products'}>Show Products</Link>
        </div>
       </div>
    )
}
export default About 