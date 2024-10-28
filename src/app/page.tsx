import React from 'react';


// Hero Section Component
const HeroSection: React.FC = () => {
  return (
    <div>
    <section className="flex flex-col md:flex-row items-center justify-around py-20 mt-2">
      <div className="md:w-1/2 space-y-4">
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-black to-[#3c3cbf] dark:from-[#3c3cbf] dark:to-white font-bold text-[2.2rem] lg:text-7xl md:mr-12 md:mt-0 text-center md:w-full mt-12 md:text-left">
          Everything Talent simplifies hiring with a free ATS and AI-driven
          assessments.
        </p>
      </div>
      <div className="  mt-2 md:mt-10 ">
        <img
          src="/image/about1.webp" // Replace with the actual image URL
          alt="Workspace"
          className=" rotate-45 size-52 md:size-80 object-cover "
        />
        <div className="top-60 ">
          <img
            src="/image/about2.webp" // Replace with the actual image URL
            alt="Workspace"
            className=" rotate-45 size-52 md:size-80 object-cover "
          />
        </div>
      </div>
    </section>
  </div>
    );
  };

// Story Section Component
const StorySection: React.FC = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-gray-50">
    <div className="text-center max-w-3xl mx-auto space-y-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">Our Story</h2>
      <p className="text-base sm:text-lg md:text-xl font-normal text-gray-600 mt-6 mb-10">
        We not only make the world’s most comfortable hammocks, but through training and sustainable job creation, 
        we empower our weavers and their families to break the cycle of poverty and build a brighter future.
      </p>
    </div>
  
    {/* Section 1 */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-10">
      <div className="max-w-lg mx-auto order-1 md:order-2">
        <img
          src="/image/story1.webp" 
          alt="Journey to Transform Recruitment"
          className="rounded-2xl object-cover w-full h-full"
        />
      </div>
      <div className="p-6 order-2 md:order-1">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">
          The Journey to Transform Recruitment
        </h2>
        <p className="text-base sm:text-lg text-gray-600 text-justify">
          Everything Talent was founded with a vision to transform the way organizations approach hiring. 
          Frustrated by traditional, cumbersome methods of recruiting and recognizing the potential for 
          bias in evaluating candidates, our founder set out to create a solution that simplifies the 
          hiring journey while leveraging the latest advancements in technology.
        </p>
      </div>
    </div>
  
    {/* Section 2 */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-10 mt-8">
      <div className="max-w-lg mx-auto order-1">
        <img 
          src="/image/story_2.webp" 
          alt="Combining Innovation" 
          className="rounded-2xl object-cover w-full h-full"
        />
      </div>
      <div className="p-6 order-2">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">
          Combining Innovation with Efficiency
        </h2>
        <p className="text-base sm:text-lg text-gray-600 text-justify">
          Our platform combines a free Applicant Tracking System (ATS) with AI-driven tech assessments. 
          This allows you to evaluate candidates quickly and accurately, regardless of their background 
          or the complexity of the role. We are committed to leveraging the latest technology to streamline 
          the recruitment process and reduce bias.
        </p>
      </div>
    </div>
  
    {/* Section 3 */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-10 mt-8">
      <div className="max-w-lg mx-auto order-1 md:order-2">
        <img
          src="/image/story_3.webp"
          alt="Journey to Transform Recruitment"
          className="rounded-2xl object-cover w-full h-full"
        />
      </div>
      <div className="p-6 order-2 md:order-1">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">The Journey to Transform Recruitment</h2>
        <p className="text-base sm:text-lg text-gray-600 text-justify">
          Everything Talent was founded with a vision to transform the way organizations approach hiring.
          Frustrated by traditional, cumbersome methods of recruiting and recognizing the potential for bias
          in evaluating candidates, our founder set out to create a solution that simplifies the hiring journey
          while leveraging the latest advancements in technology.
        </p>
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
    <p className="text-black text-medium md:text-lg lg:text-2xl mb-8 md:mb-12">
      At Everything Talent, our core values drive everything we do
    </p>
    
   
    <div className="grid grid-cols-1 md:grid-cols-3 gap-[5rem] items-center">

    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center text-2xl font-normal w-16 h-16 mb-6 bg-blue-600 rounded-xl">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(255,255,255,1)"><path d="M14.5998 8.00033H21C22.1046 8.00033 23 8.89576 23 10.0003V12.1047C23 12.3659 22.9488 12.6246 22.8494 12.8662L19.755 20.3811C19.6007 20.7558 19.2355 21.0003 18.8303 21.0003H2C1.44772 21.0003 1 20.5526 1 20.0003V10.0003C1 9.44804 1.44772 9.00033 2 9.00033H5.48184C5.80677 9.00033 6.11143 8.84246 6.29881 8.57701L11.7522 0.851355C11.8947 0.649486 12.1633 0.581978 12.3843 0.692483L14.1984 1.59951C15.25 2.12534 15.7931 3.31292 15.5031 4.45235L14.5998 8.00033ZM7 10.5878V19.0003H18.1606L21 12.1047V10.0003H14.5998C13.2951 10.0003 12.3398 8.77128 12.6616 7.50691L13.5649 3.95894C13.6229 3.73105 13.5143 3.49353 13.3039 3.38837L12.6428 3.0578L7.93275 9.73038C7.68285 10.0844 7.36341 10.3746 7 10.5878ZM5 11.0003H3V19.0003H5V11.0003Z"></path></svg>
     </div>
      
      <div className="flex flex-col items-center md:items-end  space-y-8 md:space-y-10">
        
        <div>
          <div className="flex items-center justify-center">
            <div className="text-blue-500 mr-2 text-2xl" />
            <h3 className="text-xl md:text-2xl lg:text-3xl font-medium mb-3">
            Innovation
            </h3>
          </div>
          <p className="text-gray-600 text-sm md:text-base lg:text-base max-w-md mx-auto px-4 sm:px-0 justify-center opacity-90">
          We are committed to continuously improving our technology to meet the evolving needs of our users
          and stay ahead of industry trends.
          </p>
        </div>
         <div>
          </div>


         <div className="flex flex-col items-center">
      <div className="flex items-center justify-center text-2xl font-normal w-16 h-16 mb-6 bg-blue-600 rounded-xl">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(255,255,255,1)"><path d="M20.0833 15.1999L21.2854 15.9212C21.5221 16.0633 21.5989 16.3704 21.4569 16.6072C21.4146 16.6776 21.3557 16.7365 21.2854 16.7787L12.5144 22.0412C12.1977 22.2313 11.8021 22.2313 11.4854 22.0412L2.71451 16.7787C2.47772 16.6366 2.40093 16.3295 2.54301 16.0927C2.58523 16.0223 2.64413 15.9634 2.71451 15.9212L3.9166 15.1999L11.9999 20.0499L20.0833 15.1999ZM20.0833 10.4999L21.2854 11.2212C21.5221 11.3633 21.5989 11.6704 21.4569 11.9072C21.4146 11.9776 21.3557 12.0365 21.2854 12.0787L11.9999 17.6499L2.71451 12.0787C2.47772 11.9366 2.40093 11.6295 2.54301 11.3927C2.58523 11.3223 2.64413 11.2634 2.71451 11.2212L3.9166 10.4999L11.9999 15.3499L20.0833 10.4999ZM12.5144 1.30864L21.2854 6.5712C21.5221 6.71327 21.5989 7.0204 21.4569 7.25719C21.4146 7.32757 21.3557 7.38647 21.2854 7.42869L11.9999 12.9999L2.71451 7.42869C2.47772 7.28662 2.40093 6.97949 2.54301 6.7427C2.58523 6.67232 2.64413 6.61343 2.71451 6.5712L11.4854 1.30864C11.8021 1.11864 12.1977 1.11864 12.5144 1.30864ZM11.9999 3.33233L5.88723 6.99995L11.9999 10.6676L18.1126 6.99995L11.9999 3.33233Z"></path></svg>
      </div>
          <div className="flex items-center justify-center">
            <div className="text-blue-500 mr-2 text-2xl" />
            <h3 className="text-xl md:text-2xl lg:text-3xl font-medium mb-3">
            Simplicity
            </h3>
          </div>
          <p className="text-gray-600 text-sm md:text-base lg:text-base max-w-md mx-auto px-4 sm:px-0 opacity-90">
          We believe that great technology should be intuitive and easy to use. Our solutions are designed 
          to streamline your hiring process without unnecessary complexity.
          </p>
        </div>
      </div>
      </div>

      <div className="flex flex-col items-center">
      <div className="flex items-center justify-center text-2xl font-normal w-16 h-16 mb-6 bg-blue-600 rounded-xl">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(255,255,255,1)"><path d="M14.5998 8.00033H21C22.1046 8.00033 23 8.89576 23 10.0003V12.1047C23 12.3659 22.9488 12.6246 22.8494 12.8662L19.755 20.3811C19.6007 20.7558 19.2355 21.0003 18.8303 21.0003H2C1.44772 21.0003 1 20.5526 1 20.0003V10.0003C1 9.44804 1.44772 9.00033 2 9.00033H5.48184C5.80677 9.00033 6.11143 8.84246 6.29881 8.57701L11.7522 0.851355C11.8947 0.649486 12.1633 0.581978 12.3843 0.692483L14.1984 1.59951C15.25 2.12534 15.7931 3.31292 15.5031 4.45235L14.5998 8.00033ZM7 10.5878V19.0003H18.1606L21 12.1047V10.0003H14.5998C13.2951 10.0003 12.3398 8.77128 12.6616 7.50691L13.5649 3.95894C13.6229 3.73105 13.5143 3.49353 13.3039 3.38837L12.6428 3.0578L7.93275 9.73038C7.68285 10.0844 7.36341 10.3746 7 10.5878ZM5 11.0003H3V19.0003H5V11.0003Z"></path></svg>
     </div>
     
      
      <div className="flex flex-col items-center">
        <div className="text-center mb-4 md:mb-6">
          <div className="flex items-center justify-center">
            <div className="text-blue-500 mr-2 text-2xl" />
            <h3 className="text-xl md:text-2xl lg:text-2xl font-medium mb-5">
            Customer Success
            </h3>
          </div>
          <p className="text-gray-600 text-sm mb-5 md:text-base lg:text-base max-w-md mx-auto px-4 sm:px-0 justify-center opacity-90">
          Your success is our success. We are devoted to providing exceptional support and resources to 
          help you achieve your hiring goals.
          </p>
        </div>
        </div>
        
        {/* Center Image */}

        
        <div className="flex justify-center mb-4 md:mb-6">
          <img
          src="/image/img1.webp"
          alt="Central Illustration"
          className="rounded-2xl shadow-lg object-cover w-full sm:w-80 h-auto md:w-[30rem] lg:w-[40rem] xl:w-[50rem] lg:h-[35rem] xl:h-[40rem]"
          />
            </div>

        

        <div className="flex flex-col items-center">
      <div className="flex items-center justify-center text-2xl font-normal w-16 h-16 mb-2 mt-3 bg-blue-600 rounded-xl">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(255,255,255,1)"><path d="M3.78307 2.82598L12 1L20.2169 2.82598C20.6745 2.92766 21 3.33347 21 3.80217V13.7889C21 15.795 19.9974 17.6684 18.3282 18.7812L12 23L5.6718 18.7812C4.00261 17.6684 3 15.795 3 13.7889V3.80217C3 3.33347 3.32553 2.92766 3.78307 2.82598ZM5 4.60434V13.7889C5 15.1263 5.6684 16.3752 6.7812 17.1171L12 20.5963L17.2188 17.1171C18.3316 16.3752 19 15.1263 19 13.7889V4.60434L12 3.04879L5 4.60434Z"></path></svg>
      </div>
        <div className="text-center mt-4 md:mt-6">
          <div className="flex items-center justify-center">
            <div className="text-blue-500 mr-2 text-2xl" />
            <h3 className="text-xl md:text-2xl lg:text-3xl font-medium mb-3">
            Security
            </h3>
          </div>
          <p className="text-gray-600 text-sm md:text-base lg:text-base max-w-md mx-auto px-4 sm:px-0 justify-center opacity-90">
          We prioritize the protection of your data with robust security measures. Our systems are designed to safeguard 
          your information and ensure privacy, giving you peace of mind.
          </p>
        </div>
      </div>
      </div>
      

      <div className="flex flex-col items-center gap-10">
      <div className="flex items-center justify-center text-2xl font-normal w-16 h-16 mb-6 bg-blue-600 rounded-xl">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(255,255,255,1)"><path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path></svg>
      </div>
      <div className="flex flex-col items-center md:items-start space-y-8 md:space-y-10">
        <div>
          <div className="flex items-center justify-center">
            <div className="text-blue-500 mr-2 text-2xl" />
            <h3 className="text-xl md:text-2xl lg:text-3xl font-medium mb-3">
            Transparency
            </h3>
          </div>
          <p className="text-gray-600 text-sm md:text-base lg:text-base max-w-md mx-auto px-4 sm:px-0 justify-center opacity-90">
          We value open and honest communication, both within our team and with our users. We’re dedicated 
          to building trust through clarity and integrity.
          </p>
        </div>
        </div>
        
        {/* Second Title-Description Pair */}

        <div className="flex flex-col items-center">
      <div className="flex items-center justify-center text-2xl font-normal w-16 h-16 mb-6 bg-blue-600 rounded-xl">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(255,255,255,1)"><path d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM18.2837 14.7028C21.0644 15.9561 23 18.752 23 22H21C21 19.564 19.5483 17.4671 17.4628 16.5271L18.2837 14.7028ZM17.5962 3.41321C19.5944 4.23703 21 6.20361 21 8.5C21 11.3702 18.8042 13.7252 16 13.9776V11.9646C17.6967 11.7222 19 10.264 19 8.5C19 7.11935 18.2016 5.92603 17.041 5.35635L17.5962 3.41321Z"></path></svg>
      </div>
        <div>
          <div className="flex items-center justify-center">
            <div className="text-blue-500 mr-2 text-2xl" />
            <h3 className="text-2xl md:text-2xl lg:text-3xl font-medium mb-3">
            Inclusivity
            </h3>
          </div>
          <p className="text-gray-600 text-sm md:text-base lg:text-base max-w-md mx-auto px-4 sm:px-0  opacity-90">
          We are committed to fostering a diverse and inclusive hiring environment. By eliminating biases 
          and ensuring fairness, we empower every candidate to present their unique strengths and capabilities.
          </p>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</section>
);
};




// Expert team start

const teamMembers = [
  { name: 'Amit verma', imageUrl: 'https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Fin2.jpg&w=96&q=75' },
  { name: 'Nisha Rao', imageUrl: 'https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Famf2.jpg&w=96&q=75' },
  { name: 'Benjamin Harries', imageUrl: 'https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Fam3.jpg&w=96&q=75' },
  { name: 'olivia Brown', imageUrl: 'https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Finf4.jpg&w=96&q=75' },
  { name: 'Rajesh Kannan', imageUrl: 'https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Fin3.jpg&w=96&q=75' },
  { name: 'Aditi Dhah', imageUrl: 'https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Finf5.jpg&w=96&q=75' },
  { name: 'priya Desai', imageUrl: 'https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Famf3.jpg&w=96&q=75' },
  { name: 'Robart Tylor', imageUrl: 'https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Fam5.jpg&w=96&q=75' },
];

const Team: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center py-16 px-4">
      <h2 className="text-3xl font-bold mb-4">Our Experts Team</h2>
      <p className="text-gray-700 max-w-xl mb-8">
        At Everything Talent, our innovative team develops AI-driven assessments and an advanced ATS to modernize hiring. 
        We focus on reducing bias, making recruitment efficient, and providing accessible tools for companies of all sizes to attract top talent.
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={member.imageUrl}
              alt={member.name}
              className="w-24 h-24 rounded-full object-cover shadow-lg transition-transform duration-300 hover:scale-105"
            />
            <span className="mt-2 text-sm font-semibold">{member.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Expert team end

  const CulturePage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 w-full max-w-3xl md:max-w-2xl lg:max-w-4xl">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">Our Culture</h2>
        <p className="text-gray-500 mb-4 md:mb-6">
            We foster a collaborative and inclusive environment where innovation thrives, professional growth is supported, and every team member is valued.
        </p>
        <p className="text-gray-800 mb-3 md:mb-4">
            Everything Talent is built on the principles of collaboration, respect, and continuous growth. We are a team of dedicated professionals passionate about improving the hiring experience for both employers and candidates. Our culture fosters creativity, encourages learning, and supports each individual’s development.
        </p>
        <p className="text-gray-800 mb-4 md:mb-6">
            We are driven by a shared commitment to making a positive impact on the world of recruitment. As we grow, we remain focused on delivering solutions that are not only effective but also aligned with our core values. We invite you to join us on this journey and experience the difference our platform can make in your hiring process.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Contact Us
        </button>
    </div>
</div>
  );
};

// Journey Section start


const JourneySection = () => {
  return (
    <div>
      <div className="w-full px-28 bg-white border-white dark:bg-neutral-950 pt-8 md:py-16">
        {/* <!-- Container for the journey section --> */}
        <div className="flex justify-center md:container px-4 sm:px-6 mb-6 md:mb-40">
          {/* <!-- Text container for heading and description --> */}
          <div className="text-center md:w-[80vw]">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Journey</h2>
            <p className="text-xl opacity-80 mb-4">
              Since our founding in 2021, Arctic Wolf has risen to the rank of
              market leader in security operations, adding thousands of
              employees and customers, as well as a trophy case of awards along
              the way.
            </p>
          </div>
        </div>

        {/* <!-- Timeline container --> */}
        <div className="w-full pr-20 border-2 bg-white dark:bg-neutral-950 md:container px-4 sm:px-6">
          <div className="relative mx-auto flex">
            <div className="flex flex-col w-full gap-0">
              {/* <!-- Timeline event (repeated block) --> */}
              <div className="relative -mt-20 flex justify-start w-1/2 flex-col">
                {/* <!-- Sticky label for each event --> */}
                <div className="sticky flex flex-col items-end border py-2 z-10 top-60 self-end bg-gradient-to-r from-[#003f6c] via-[#61beef] to-[#00aaff] dark:bg-gradient-to-b dark:from-[#000] dark:to-[#120a1d] rotate-180">
                  <div className="h-14 w-14 absolute -left-[15%] -top-4 flex self-end rounded-full bg-sky-500 items-center justify-center dark:bg-sky-500">
                    <div className="h-12 w-12 rounded-full bg-black border border-blue-500 flex items-center justify-center dark:border-neutral-700">
                      <span className="text-white">
                        {/* <!-- SVG Icon --> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white dark:text-sky-500"
                        >
                          <path d="M12 16v5"></path>
                          <path d="M16 14v7"></path>
                          <path d="M20 10v11"></path>
                          <path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"></path>
                          <path d="M4 18v3"></path>
                          <path d="M8 14v7"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <h3 className="w-48"></h3>
                </div>

                <div className="relative -mt-6 flex h-fit md:w-[90%] lg:w-[80%] justify-end z-20">
                  <div className="relative border border-blue-300 dark:border-[#3577f39a] py-4 px-8 max-w-[24rem] bg-gradient-to-br from-black via-violet-900 to-violet-500 dark:bg-gradient-to-b dark:from-[#000] dark:to-[#120a1d] transition-all duration-500 shadow-lg hover:shadow-[0_4px_8px_0_rgba(75,0,130,0.5)] rounded-lg">
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 dark:bg-[linear-gradient(to_right,_#3c3cbf_0%,_#FFFFFF_50%)] font-bold text-xl">
                      Aug 2021
                    </p>
                    <div>
                      <img
                        alt="IDC Names Arctic Wolf a Leader"
                        className="rounded-lg border max-h-[212px] w-[317px] h-full"
                        src="https://everythingtalent.ai/_next/image?url=%2Fassets%2Fhome%2Fai1.jpg&w=256&q=75"
                      />
                    </div>
                    <h3 className="text-[16px] flex gap-2 items-center font-bold text-white dark:text-gray-300 mt-2">
                      IDC Names Arctic Wolf a Leader
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(255,255,255,1)"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                      </svg>
                    </h3>
                  </div>
                </div>
              </div>


              <div className="relative -mt-20 flex justify-end w-1/2 flex-col self-end">
                {/* <!-- Sticky label for each event --> */}
                <div className="sticky flex flex-col items-start self-start border py-2 z-10 top-60  bg-gradient-to-r from-[#003f6c] via-[#61beef] to-[#00aaff] dark:bg-gradient-to-b dark:from-[#000] dark:to-[#120a1d] ">
                  <div className="h-14 w-14 absolute -left-[14%] -top-4 flex  rounded-full bg-sky-500 items-center justify-center dark:bg-sky-500">
                    <div className="h-12 w-12 rounded-full bg-black border border-blue-500 flex items-center justify-center dark:border-neutral-700">
                      <span className="text-white">
                        {/* <!-- SVG Icon --> */}
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(255,255,255,1)"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>
                      </span>
                    </div>
                  </div>
                  <h3 className="w-48"></h3>
                </div>

                <div className="relative -mt-6 flex h-fit md:w-[90%] lg:w-[80%] justify-end z-20">
                  <div className="relative border border-blue-300 dark:border-[#3577f39a] py-4 px-8 max-w-[24rem] bg-gradient-to-br from-black via-violet-900 to-violet-500 dark:bg-gradient-to-b dark:from-[#000] dark:to-[#120a1d] transition-all duration-500 shadow-lg hover:shadow-[0_4px_8px_0_rgba(75,0,130,0.5)] rounded-lg">
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 dark:bg-[linear-gradient(to_right,_#3c3cbf_0%,_#FFFFFF_50%)] font-bold text-xl">
                      Feb 2022
                    </p>
                    <div>
                      <img
                        alt="Arctic Wolf Incident Launch"
                        className="rounded-lg border max-h-[212px] w-[317px] h-full"
                        src="https://everythingtalent.ai/_next/image?url=%2Fassets%2Fhome%2Ftools.jpg&w=256&q=75"
                      />
                    </div>
                    <h3 className="text-[16px] flex gap-2 items-center font-bold text-white dark:text-gray-300 mt-2">
                      Arctic Wolf Incident Launch
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(255,255,255,1)"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                      </svg>
                    </h3>
                  </div>
                </div>
              </div>
              {/* 3 */}

              <div className="relative -mt-20 flex justify-start w-1/2 flex-col ">
                {/* <!-- Sticky label for each event --> */}
                <div className="sticky flex flex-col items-end  border py-2 z-10 top-60 self-end bg-gradient-to-r from-[#003f6c] via-[#61beef] to-[#00aaff] dark:bg-gradient-to-b dark:from-[#000] dark:to-[#120a1d] rotate-180">
                  <div className="h-14 w-14 absolute -left-[15%] -top-4 flex self-end rounded-full bg-sky-500 items-center justify-center dark:bg-sky-500">
                    <div className="h-12 w-12 rounded-full bg-black border border-blue-500 flex items-center justify-center dark:border-neutral-700">
                      <span className="text-white">
                        {/* <!-- SVG Icon --> */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(255,255,255,1)"><path d="M6 18H18V6H6V18ZM14 20H10V22H8V20H5C4.44772 20 4 19.5523 4 19V16H2V14H4V10H2V8H4V5C4 4.44772 4.44772 4 5 4H8V2H10V4H14V2H16V4H19C19.5523 4 20 4.44772 20 5V8H22V10H20V14H22V16H20V19C20 19.5523 19.5523 20 19 20H16V22H14V20ZM8 8H16V16H8V8Z"></path></svg>
                      </span>
                    </div>
                  </div>
                  <h3 className="w-48"></h3>
                </div>

                <div className="relative -mt-6 flex h-fit md:w-[90%] lg:w-[80%] justify-end z-20">
                  <div className="relative border border-blue-300 dark:border-[#3577f39a] py-4 px-8 max-w-[24rem] bg-gradient-to-br from-black via-violet-900 to-violet-500 dark:bg-gradient-to-b dark:from-[#000] dark:to-[#120a1d] transition-all duration-500 shadow-lg hover:shadow-[0_4px_8px_0_rgba(75,0,130,0.5)] rounded-lg">
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 dark:bg-[linear-gradient(to_right,_#3c3cbf_0%,_#FFFFFF_50%)] font-bold text-xl">
                      Oct 2022
                    </p>
                    <div>
                      <img
                        alt="Arctic Wolf Expands to ANZ"
                        className="rounded-lg border max-h-[212px] w-[317px] h-full"
                        src="https://everythingtalent.ai/_next/image?url=%2Fassets%2Fhome%2Fai2.jpg&w=256&q=75"
                      />
                    </div>
                    <h3 className="text-[16px] flex gap-2 items-center font-bold text-white dark:text-gray-300 mt-2">
                      Arctic Wolf Expands to ANZ
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(255,255,255,1)"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                      </svg>
                    </h3>
                  </div>
                </div>
              </div>

              {/* 4 */}

              <div className="relative -mt-20 flex justify-start w-1/2 flex-col self-end">
                {/* <!-- Sticky label for each event --> */}
                <div className="sticky flex flex-col items-end self-start border py-2 z-10 top-60 bg-gradient-to-r from-[#003f6c] via-[#61beef] to-[#00aaff] dark:bg-gradient-to-b dark:from-[#000] dark:to-[#120a1d] ">
                  <div className="h-14 w-14 absolute -left-[14%] -top-4 flex self-end rounded-full bg-sky-500 items-center justify-center dark:bg-sky-500">
                    <div className="h-12 w-12 rounded-full bg-black border border-blue-500 flex items-center justify-center dark:border-neutral-700">
                      <span className="text-white">
                        {/* <!-- SVG Icon --> */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(255,255,255,1)"><path d="M4.87759 3.00275H19.1319C19.4518 3.00275 19.7524 3.15583 19.9406 3.41457L23.7634 8.67097C23.9037 8.86385 23.8882 9.12895 23.7265 9.30419L12.3721 21.6047C12.1848 21.8076 11.8685 21.8203 11.6656 21.633C11.6591 21.627 7.86486 17.5174 0.282992 9.30419C0.121226 9.12895 0.10575 8.86385 0.246026 8.67097L4.06886 3.41457C4.25704 3.15583 4.55766 3.00275 4.87759 3.00275ZM5.38682 5.00275L2.58738 8.85198L12.0047 19.0541L21.4221 8.85198L18.6226 5.00275H5.38682Z"></path></svg>
                      </span>
                    </div>
                  </div>
                  <h3 className="w-48"></h3>
                </div>

                <div className="relative -mt-6 flex h-fit md:w-[90%] lg:w-[80%] justify-end z-20">
                  <div className="relative border border-blue-300 dark:border-[#3577f39a] py-4 px-8 max-w-[24rem] bg-gradient-to-br from-black via-violet-900 to-violet-500 dark:bg-gradient-to-b dark:from-[#000] dark:to-[#120a1d] transition-all duration-500 shadow-lg hover:shadow-[0_4px_8px_0_rgba(75,0,130,0.5)] rounded-lg">
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 dark:bg-[linear-gradient(to_right,_#3c3cbf_0%,_#FFFFFF_50%)] font-bold text-xl">
                      May 2023
                    </p>
                    <div>
                      <img
                        alt="IDC Names Arctic Wolf a Leader"
                        className="rounded-lg border max-h-[212px] w-[317px] h-full"
                        src="https://everythingtalent.ai/_next/image?url=%2Fassets%2Fhome%2Farticle.jpg&w=256&q=75"
                      />
                    </div>
                    <h3 className="text-[16px] flex gap-2 items-center font-bold text-white dark:text-gray-300 mt-2">
                      Arctic Wolf on CNBC Disruptor 50
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(255,255,255,1)"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                      </svg>
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -mt-40 left-1/2 transform -translate-x-1/2 top-0 w-4 h-[calc(100%+10rem)] bg-gradient-to-r from-black via-violet-950 to-violet-800 dark:bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] dark:from-transparent dark:from-[0%] dark:via-purple-400 dark:to-transparent dark:to-[99%] mask-image-[linear-gradient(to_bottom,transparent_0%,black_1%,black_99%,transparent_100%)]">
              <div className="absolute inset-x-0 top-8 w-4 bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Journey Section end



const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
    <div className="max-w-7xl mx-auto">
      
      {/* Logo Section */}
      <div className="flex flex-col items-start space-y-4 mb-8">
        <img src="/image/logo-dark.webp" alt="Logo" className="w-[10rem] h-[10rem]" />
        <h2 className="text-4xl font-semibold">Everything Talent</h2>
      </div>

      {/* Links Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8">
        
        {/* Resources */}
        <div className="flex flex-col space-y-5">
          <p className="text-white font-semibold">Resources</p>
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
        <div className="flex flex-col space-y-5">
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
        <div className="flex flex-col space-y-5">
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
export default function Home ()

 {
  return (
    <main>
      <HeroSection />
      <StorySection />
      <ValuesSection/>
      <Team/>
      <CulturePage/>
      <JourneySection/>
      <Footer/>
      <SkylineFooter/>
    </main>
  );
};
