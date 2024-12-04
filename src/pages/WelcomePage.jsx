// import { Link } from 'react-router-dom';


// const WelcomePage = () => {
//   return (
//     <div className="bg-[url('./assets/aibackground.jpg')] bg-cover flex justify-start items-center min-h-screen ">
//       <div className=" p-8 text-center max-w-md">
//         <h1 className="text-5xl font-bold text-orange-500 mb-8">
//           Welcome to the AI Chatbot
//         </h1>
//         <p className="text-md text-gray-700 mb-6 leading-relaxed">
//           Start chatting with our advanced AI by logging in or signing up.
//         </p>
//         <div>
//           <Link to="/login" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 mr-4">
//             Login
//           </Link>
//           <Link to="/signup" className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
//             Sign Up
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WelcomePage;


import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Wlelcome to the AI Chatbot';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length-1) {
        setDisplayedText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(interval); // Clear the interval once the text is fully displayed
      }
    }, 150); // Adjust the typing speed (100ms per character)
    return () => clearInterval(interval); // Cleanup when the component unmounts
  }, []);

  return (
    <div className="bg-slate-800 md:bg-[url('./assets/img.gif')] bg-cover flex justify-end items-center min-h-screen ">
      <div className="ml-24 p-8 pt-0 text-center max-w-md">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">
          {displayedText}
        </h1>
        <p className="text-lg text-blue-400 mb-8 leading-relaxed ">
          Start chatting with our advanced AI by logging in or signing up.
        </p>
        <div>
          <Link to="/login" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 mr-4">
            Login
          </Link>
          <Link to="/signup" className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-700">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;




