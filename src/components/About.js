import React from 'react';

const About = () => (
  <div name="about" className="w-full h-screen bg-[#0000CD] text-gray-300 flex items-center justify-center">
    <div className="max-w-[1200px]">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-600 ">About</p>
      </div>
      {/* Self-closing the empty div */}
      <div />

      <div className="text-4xl font-bold space-y-4">
        <p>Hi. I&apos;m DJ, nice to meet you.</p>
        <p className="text-lg">
          I was born in the Philippines and am currently residing in Quezon City. As an aspiring
          full-stack developer, I&apos;m passionate about building innovative and impactful digital
          solutions. I&apos;m always excited to collaborate on new projects whether,
          it&apos;s creating a product,
          a feature, or solving complex challenges. Feel free to reach out if you&apos;re
          interested in working together or if you have any questions. You can contact me through
          social media accounts and other links on the side left panel. Thank you!.
        </p>
      </div>
    </div>
  </div>
);

export default About;
