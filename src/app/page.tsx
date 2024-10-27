import React from 'react';


// Hero Section Component
const HeroSection: React.FC = () => {
  return (
    <section className="container mx-auto px-5 py-20 min-h-screen bg-white flex flex-col md:flex-row items-center gap-20">
      
      <div className="text-left max-w-4xl mx-auto pl-10 pb-10">
        <h2 className=" text-lg md:text-7xl font-bold leading-tight bg-gradient-to-r from-black via-blue-800 to-blue-600 text-transparent bg-clip-text ">
          Everything Talent simplifies hiring with a free ATS and AI-driven assessments.
        </h2>
      </div>
      

      {/* Images Section */}
      <div className="md:w-1/2 flex justify-center relative space-x-8 py-8">
      <div className="transform rotate-45 w-48 h-48 md:w-64 md:h-64 bg-cover bg-center overflow-hidden rounded-lg border-2 border-white shadow-md absolute top-[-15rem] left-0">
    <img 
      src="/image/about1.webp"
      alt="Workspace" 
      className="w-full h-full object-cover"
    />
  </div>
  
  <div className="transform rotate-45 w-48 h-48 md:w-64 md:h-64 bg-cover bg-center overflow-hidden rounded-lg border-2 border-white shadow-md absolute top-[-5rem] left-0">
    <img 
      src="/image/about2.webp"
      alt="Person using laptop" 
      className="w-full h-full object-cover"
    />
    </div>
    </div>
    </section>
    );
  };

// Story Section Component
const StorySection: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-10 bg-gray-50">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h2 className="text-4xl font-bold text-black mb-6">Our Story</h2>
        <p className="text-xl font-normal text-gray-600 mt-6 mb-10">
          We not only make the world’s most comfortable hammocks, but through training and sustainable job creation, 
          we empower our weavers and their families to break the cycle of poverty and build a brighter future.
        </p>
      </div>
    

      <div className="grid grid-cols-12 md:grid-cols-2 gap-3 p-10">
         <div className="p-10">
        <h2 className="text-2xl font-bold mb-4">
            The Journey to Transform Recruitment
          </h2>
          <p className="text-lg text-gray-600 text-justify md:pr-6">
          Everything Talent was founded with a vision to transform the way organizations approach hiring. 
          Frustrated by traditional, cumbersome methods of recruiting and recognizing the potential for 
          bias in evaluating candidates, our founder set out to create a solution that simplifies the 
          hiring journey while leveraging the latest advancements in technology.
          </p>
        </div>
        
         <div className="max-w-lg ">
        <img
          src="/image/story1.webp" 
          alt="Journey to Transform Recruitment"
          className="rounded-2xl object-cover w-full h-full"
        />
        </div>
      </div>

      
      <div className="grid grid-cols-12 md:grid-cols-2 gap-3 p-10">
        <div className="max-w-xl">
          <img 
            src="/image/story_2.webp" 
            alt="Combining Innovation" 
             className="rounded-2xl object-cover w-full h-full"
          />
        </div>

        {/* Text Section */}
        <div className="p-10">
        <h2 className="text-2xl font-bold mb-4">
            Combining Innovation with Efficiency
          </h2>
          <p className="text-lg text-gray-600 text-justify md:pr-6">
          Our platform combines a free Applicant Tracking System (ATS) with AI-driven tech assessments. 
          This allows you to evaluate candidates quickly and accurately, regardless of their background 
          or the complexity of the role. We are committed to leveraging the latest technology to streamline 
          the recruitment process and reduce bias.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 md:grid-cols-2 gap-3 pl-9 ">
      <div className="p-10">
      <h2 className="text-2xl font-bold mb-4">The Journey to Transform Recruitment</h2>
        <p className="text-gray-600 text-lg text-justify md:pr-6">
          Everything Talent was founded with a vision to transform the way organizations approach hiring.
          Frustrated by traditional, cumbersome methods of recruiting and recognizing the potential for bias
          in evaluating candidates, our founder set out to create a solution that simplifies the hiring journey
          while leveraging the latest advancements in technology.
        </p>
      </div>
      <div className="max-w-xl">
        <img
          src="/image/story_3.webp"
          alt="Journey to Transform Recruitment"
          className="rounded-2xl object-cover w-full h-full"
        />
      </div>
    </div>
    </section>


  );
};

// ValuesSection Component


const ValuesSection: React.FC = () => {
  return (
<section className="bg-white py-16 md:py-20 text-center">
  <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24">
    
    {/* Title Section */}
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
      Our Values
    </h2>
    <p className="text-gray-600 text-base md:text-lg lg:text-xl mb-8 md:mb-12">
      At Everything Talent, our core values drive everything we do
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
      
      <div className="flex flex-col items-center md:items-end md:text-right space-y-8 md:space-y-10">
        
        <div>
          <div className="flex items-center justify-center">
            <div className="text-blue-500 mr-2 text-2xl" />
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            Innovation
            </h3>
          </div>
          <p className="text-gray-600 text-sm md:text-base lg:text-lg max-w-md mx-auto px-4 sm:px-0 justify-center">
          We are committed to continuously improving our technology to meet the evolving needs of our users
          and stay ahead of industry trends.
          </p>
        </div>
        
        <div>
          <div className="flex items-center justify-center">
            <div className="text-blue-500 mr-2 text-2xl" />
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            Simplicity
            </h3>
          </div>
          <p className="text-gray-600 text-sm md:text-base lg:text-lg max-w-md mx-auto px-4 sm:px-0 justify-center">
          We believe that great technology should be intuitive and easy to use. Our solutions are designed 
          to streamline your hiring process without unnecessary complexity.
          </p>
        </div>
      </div>
      
      <div className="flex flex-col items-center">
        

        <div className="text-center mb-4 md:mb-6">
          <div className="flex items-center justify-center">
            <div className="text-blue-500 mr-2 text-2xl" />
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            Customer Success
            </h3>
          </div>
          <p className="text-gray-600 text-sm md:text-base lg:text-lg max-w-md mx-auto px-4 sm:px-0 justify-center">
          Your success is our success. We are devoted to providing exceptional support and resources to 
          help you achieve your hiring goals.
          </p>
        </div>
        
        {/* Center Image */}
        <div className="flex justify-center mb-4 md:mb-6">
          <img
            src="/image/img1.webp" 
            alt="Central Illustration"
            className="rounded-lg shadow-lg object-cover w-40 h-40 sm:w-48 sm:h-48 md:w-[26rem] md:h-[40rem]"
          />
        </div>

        <div className="text-center mt-4 md:mt-6">
          <div className="flex items-center justify-center">
            <div className="text-blue-500 mr-2 text-2xl" />
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            Security
            </h3>
          </div>
          <p className="text-gray-600 text-sm md:text-base lg:text-lg max-w-md mx-auto px-4 sm:px-0 justify-center">
          We prioritize the protection of your data with robust security measures. Our systems are designed to safeguard 
          your information and ensure privacy, giving you peace of mind.
          </p>
        </div>
      </div>
      
      <div className="flex flex-col items-center md:items-start md:text-left space-y-8 md:space-y-10">
        
        {/* First Title-Description Pair */}
        <div>
          <div className="flex items-center justify-center">
            <div className="text-blue-500 mr-2 text-2xl" />
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            Transparency
            </h3>
          </div>
          <p className="text-gray-600 text-sm md:text-base lg:text-lg max-w-md mx-auto px-4 sm:px-0 justify-center">
          We value open and honest communication, both within our team and with our users. We’re dedicated 
          to building trust through clarity and integrity.
          </p>
        </div>
        
        {/* Second Title-Description Pair */}
        <div>
          <div className="flex items-center justify-center">
            <div className="text-blue-500 mr-2 text-2xl" />
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            Inclusivity
            </h3>
          </div>
          <p className="text-gray-600 text-sm md:text-base lg:text-lg max-w-md mx-auto px-4 sm:px-0 justify-center">
          We are committed to fostering a diverse and inclusive hiring environment. By eliminating biases 
          and ensuring fairness, we empower every candidate to present their unique strengths and capabilities.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>);
};


// Hero Section Component




const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
    <div className="max-w-7xl mx-auto flex-cols-3 lg:flex-cols-3 gap-8">
      
      {/* Logo Section */}
      <div className="md:col-span-1 flex flex-col items-start space-y-4">
          <img src="/image/logo-dark.webp" alt="Logo" className="w-[10rem] h-[10rem" />
          <h2 className="text-4xl font-semibold">Everything Talent</h2>
          
        </div>
        
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Resources */}
          <div className="flex flex-col space-y-5">
          <p className="text-white font-semibold mt-4">RESOURCES</p>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-gray-100">Blogs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-100">Success Stories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-100">Case Studies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-100">Whitepapers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-100">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-100">Hiring Guides</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-100">Support</a></li>
            </ul>
          </div>

          {/* Get Started */}
          <div className="pt-5 space-y-5">
            <p className="text-white font-semibold">Get Started</p>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-gray-100">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-100">Hiring Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-100">Funded Startups</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-100">Free Trial</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-100">Contact Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-100">Request Demo</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-100">Trust</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="pt-5 space-y-5">
            <p className="text-white font-semibold">Legal</p>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-gray-100">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-100">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-100">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-100">CCPA Compliance</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SkylineFooter: React.FC = () => {
  return (
    <footer className="bg-black text-white pb-4">
      
      {/* Skyline Image */}
      <div className="flex justify-center">
        <img
          src="/image/footer image.webp" // Replace with actual path to your skyline image
          alt="City Skyline"
          className="w-full max-w-8xl"
        />
      </div>

     
      <div className="flex justify-between items-center mt-4 max-w-7xl mx-auto">
        <div className="text-left">
          <p className="text-gray-400 text-sm">© 2024 Everything Talent Labs, LLC. All Rights Reserved.</p>
        </div> 
        <div className="flex space-x-4">
          <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-5 w-5" viewBox="0 0 24 24">
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.55-1.36 1.87-2.35-.82.49-1.73.85-2.7 1.04a4.5 4.5 0 0 0-7.67 4.1c-3.73-.2-7.05-1.97-9.27-4.7a4.5 4.5 0 0 0 1.4 6.01A4.6 4.6 0 0 1 1.64 9v.06a4.5 4.5 0 0 0 3.61 4.41c-.64.17-1.3.2-1.98.08a4.5 4.5 0 0 0 4.21 3.13A9 9 0 0 1 1 18.58a12.7 12.7 0 0 0 6.86 2c8.27 0 12.8-6.86 12.8-12.8 0-.2 0-.39-.01-.59A9.18 9.18 0 0 0 24 4.5a9.13 9.13 0 0 1-2.54.69z" />
            </svg>
          </a>
  
          <a href="#" aria-label="LinkedIn" className="text-gray-600 hover:text-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z">
            </path></svg>
          </a>
        
          <a href="#" aria-label="YouTube" className="text-gray-600 hover:text-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M19.6069 6.99482C19.5307 6.69695 19.3152 6.47221 19.0684 6.40288C18.6299 6.28062 16.501 6 12.001 6C7.50098 6 5.37252 6.28073 4.93225 6.40323C4.68776 6.47123 4.4723 6.69593 4.3951 6.99482C4.2863 7.41923 4.00098 9.19595 4.00098 12C4.00098 14.804 4.2863 16.5808 4.3954 17.0064C4.47126 17.3031 4.68676 17.5278 4.93251 17.5968C5.37252 17.7193 7.50098 18 12.001 18C16.501 18 18.6299 17.7194 19.0697 17.5968C19.3142 17.5288 19.5297 17.3041 19.6069 17.0052C19.7157 16.5808 20.001 14.8 20.001 12C20.001 9.2 19.7157 7.41923 19.6069 6.99482ZM21.5442 6.49818C22.001 8.28 22.001 12 22.001 12C22.001 12 22.001 15.72 21.5442 17.5018C21.2897 18.4873 20.547 19.2618 19.6056 19.5236C17.8971 20 12.001 20 12.001 20C12.001 20 6.10837 20 4.39637 19.5236C3.45146 19.2582 2.70879 18.4836 2.45774 17.5018C2.00098 15.72 2.00098 12 2.00098 12C2.00098 12 2.00098 8.28 2.45774 6.49818C2.71227 5.51273 3.45495 4.73818 4.39637 4.47636C6.10837 4 12.001 4 12.001 4C12.001 4 17.8971 4 19.6056 4.47636C20.5505 4.74182 21.2932 5.51636 21.5442 6.49818ZM10.001 15.5V8.5L16.001 12L10.001 15.5Z"></path></svg>
          </a>
        </div>
      </div>
      
    </footer>
  );
};


// Footer section End
 
// Main Home Component
export default function Home() {
  return (
    <main>
      <HeroSection />
      <StorySection />
      <ValuesSection/>
      <Footer/>
      <SkylineFooter/>
    </main>
  );
};
