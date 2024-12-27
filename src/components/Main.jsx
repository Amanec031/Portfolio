import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
function Main() {
  return (
    <div id="main">
      <img
        className="h-[60vh] w-screen object-cover object-left scale-x-[-1]"
        src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
        alt="cover-photo"
      />
      <div className="w-screen h-[60vh] absolute top-0 left-0 bg-white/50">

        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start  items-center " >
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">I&apos;m Aman Kumar</h1>

          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">I&apos;m a<TypeAnimation
            sequence={[
              'Coder',
              2000,
              'Developer',
              2000,
              'Tech Enthiusiast',
              2000,
              'Hustler',
              2000
            ]}
            wrapper="div"
            cursor={true}
            style={{ fontSize: '1em', paddingLeft: '5px' }}
            repeat={Infinity}
          />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaTwitter className='cursor-pointer' size={20} />
            <FaFacebookF className='cursor-pointer' size={20} />
            <FaInstagram className='cursor-pointer' size={20} />
            <FaLinkedin className='cursor-pointer' size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
