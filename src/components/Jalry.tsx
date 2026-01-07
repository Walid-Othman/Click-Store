import { useState } from "react";

export default function Gallery() {
  const [activeImg, setActiveImg] = useState<number | null>(null);
  const [showmanimg,setshowmanimg]=useState(true)
  const images = [2,3,4];
 

   function handelclik(i:number){
        setshowmanimg(false)
        setActiveImg(i === activeImg ? null : i)
    }
    function handelmanphoteClik(){
     
          setshowmanimg(!showmanimg)
    }

  return (
    <div className="flex w-full flex-col lg:flex-row justify-center my-10 gap-2">
        <img onMouseMove={()=>{setshowmanimg(true)}} onClick={()=>{handelmanphoteClik()}}  src="/imgs/homeImg/1.jpg" alt="mainimg" className={showmanimg?' h-[400px] lg:w-1/3 sm:h-[500px] transition-all duration-400 rounded-lg':' h-[200px] lg:w-1/10 sm:h-[500px] transition-all duration-400 rounded-lg'} />
      {images.map((img, i) => (
        <img
       
        onMouseMove={()=>{setshowmanimg(false)}}
        onMouseLeave={()=>{setshowmanimg(true)}}
          key={i}
          onClick={() => {handelclik(i)}} // لو ضغط عادي يلغيه
          className={`w-full lg:w-1/10 lg:hover:w-1/3 h-[200px] sm:h-[500px] border  rounded-lg transition-all duration-400 ${
            activeImg === i ? "lg:w-2/3 h-[400px]" : ""
          
          }`}
          
          src={`/imgs/homeImg/${img}.jpg`}
          alt=""
        />
      ))}
    </div>
  );
}