import React from 'react';

const About = () => (
  <div name="about" className="w-full h-screen bg-[#0000CD] text-gray-300 flex items-center justify-center">
    <div className="max-w-[1200px] p-4">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-600">About</p>
      </div>

      <div className="text-4xl font-bold space-y-4">
        <p>Hi, I&apos;m DJ, nice to meet you.</p>
        <p className="text-lg">
          I was born in the Philippines and currently reside in Quezon City. As an aspiring
          full-stack developer, I&apos;m passionate about building innovative and impactful
          digital solutions. I enjoy collaborating on new projects—whether
          creating a product, developing a feature, or solving complex
          challenges. Feel free to reach out if you&apos;re interested
          in working together or have any questions!
          You can contact me through the social media links in the left panel. Thank you!
        </p>
      </div>
    </div>
  </div>
);

export default About;
