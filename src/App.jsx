
import React from "react";
import "./index.css";
import TargetCursor from "./TargetCursor";
import BounceCards from "./BounceCards";
import DotGrid from "./DotGrid";
import SpotlightCard from "./SpotlightCard";

const App = () => {
  const allTechList = [
    "Python", "JavaScript", "Java", "C", "SQL",
    "Pandas", "NumPy", "Scikit Learn",
    "NodeJS", "React", "EJS", "Express.js", "FastAPI", "HTML5",
    "Ubuntu", "Git", "Render", "Vercel",
    "Google Colab", "Jupyter Notebook", "Visual Studio Code",
    "MySQL", "MongoDB"
  ];
  
  const marqueeTech = [...allTechList, ...allTechList];

  const certImages = [
    "/certificates/AWS.png",
    "/certificates/data_analysis.png",
    "/certificates/DSA_in_Py.png",
    "/certificates/FLUTTER.jpg",
    "/certificates/generative_ai.png",
    "/certificates/java.png",
    "/certificates/linkdin.png",
    "/certificates/power_bi.png"
  ];

  const certTransforms = [
    "rotate(15deg) translate(-210px)",
    "rotate(10deg) translate(-150px)",
    "rotate(5deg) translate(-90px)",
    "rotate(2deg) translate(-30px)",
    "rotate(-2deg) translate(30px)",
    "rotate(-5deg) translate(90px)",
    "rotate(-10deg) translate(150px)",
    "rotate(-15deg) translate(210px)"
  ];

  return (
    <div className="min-h-screen bg-base-200 text-base-content font-sans">
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
      />
      {/* Navbar */}
      <div className="navbar bg-base-100 shadow-md sticky top-0 z-50">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl font-bold text-primary cursor-target">Sampath Kumar</a>
        </div>
        <div className="flex-none hidden sm:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li><a href="#about" className="cursor-target">About</a></li>
            <li><a href="#skills" className="cursor-target">Skills</a></li>
            <li><a href="#projects" className="cursor-target">Projects</a></li>
            <li><a href="#contact" className="cursor-target">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero min-h-[80vh] bg-base-200 relative overflow-hidden" id="about">
        <div className="absolute inset-0 z-0 opacity-40">
          <DotGrid
            dotSize={5}
            gap={15}
            baseColor="#271E37"
            activeColor="#5227FF"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>
        <div className="hero-content flex-col lg:flex-row-reverse gap-10 relative z-10 w-full">
          <img 
            src="/sampath.jpg" 
            alt="Sampath Kumar" 
            className="max-w-xs md:max-w-sm rounded-full shadow-2xl ring ring-primary ring-offset-base-100 ring-offset-4" 
            onError={(e) => { e.target.src = "https://via.placeholder.com/400x400?text=Profile+Photo" }}
          />
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-2">
              Hi, I am <span className="text-primary">Sampath</span>
            </h1>
            <p className="text-2xl font-semibold text-secondary mb-4">Vibe Coder | AI & ML Enthusiast</p>
            <p className="py-6 max-w-2xl text-lg opacity-80 leading-relaxed">
              I am a highly motivated B.Tech student specializing in Computer Science with a focus on Artificial Intelligence and Machine Learning. 
              My primary interests lie in ML, Data Analytics, and creating efficient data-driven solutions using modern AI tools.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="mailto:sampath2005h@gmail.com" className="btn btn-primary shadow-lg cursor-target">Contact Me</a>
              <a href="https://github.com/sampath-create" target="_blank" rel="noreferrer" className="btn btn-outline btn-secondary cursor-target">GitHub</a>
              <a href="https://www.linkedin.com/in/sampath25/" target="_blank" rel="noreferrer" className="btn btn-outline btn-accent cursor-target">LinkedIn</a>
                <a href="https://leetcode.com/u/sampath-create/" target="_blank" rel="noreferrer" className="btn btn-outline btn-info cursor-target ml-2 lg:ml-4">LeetCode</a>
                <a href="https://www.codechef.com/users/vvit23bq1a42b8" target="_blank" rel="noreferrer" className="btn btn-outline btn-success cursor-target ml-2">CodeChef</a>
            </div>
            
          </div>
        </div>
      </div>

      {/* Tech Arsenal & Marquee Section */}
      <section id="skills" className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10 text-primary">Tech Arsenal</h2>
          
          {/* Scrolling Animation Container */}
          <div className="w-full overflow-hidden bg-base-200 py-4 rounded-xl shadow-inner mb-12 flex relative">
            {/* Left and right fade gradients */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-base-200 to-transparent z-10 hidden md:block"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-base-200 to-transparent z-10 hidden md:block"></div>
            
            <div className="flex w-max animate-marquee space-x-12 px-6">
              {marqueeTech.map((tech, index) => (
                <span key={index} className="text-xl font-bold text-secondary whitespace-nowrap">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card bg-base-200 shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <div className="card-body">
                <h3 className="card-title text-accent">Programming Languages</h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["Python", "JavaScript", "Java", "C", "SQL"].map(t => <div key={t} className="badge badge-primary badge-outline badge-lg">{t}</div>)}
                </div>
              </div>
            </div>
            
             <div className="card bg-base-200 shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <div className="card-body">
                <h3 className="card-title text-accent">AI/ML & Data Science</h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["Pandas", "NumPy", "Scikit Learn"].map(t => <div key={t} className="badge badge-secondary badge-outline badge-lg">{t}</div>)}
                </div>
              </div>
            </div>

            <div className="card bg-base-200 shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <div className="card-body">
                <h3 className="card-title text-accent">Web Development</h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["NodeJS", "React", "EJS", "Express.js", "FastAPI", "HTML5"].map(t => <div key={t} className="badge badge-accent badge-outline badge-lg">{t}</div>)}
                </div>
              </div>
            </div>

            <div className="card bg-base-200 shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <div className="card-body">
                <h3 className="card-title text-accent">Cloud & DevOps</h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["Ubuntu", "Git", "Render", "Vercel"].map(t => <div key={t} className="badge badge-info badge-outline badge-lg">{t}</div>)}
                </div>
              </div>
            </div>

                          <div className="card bg-base-200 shadow-xl hover:-translate-y-2 transition-transform duration-300">
                <div className="card-body">
                  <h3 className="card-title text-accent">IDEs</h3>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["VS Code", "Jupyter Notebook", "Colab"].map(t => <div key={t} className="badge badge-accent badge-outline badge-lg">{t}</div>)}
                  </div>
                </div>
              </div>

              <div className="card bg-base-200 shadow-xl hover:-translate-y-2 transition-transform duration-300">
                <div className="card-body">
                  <h3 className="card-title text-accent">Databases</h3>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["MySQL", "MongoDB"].map(t => <div key={t} className="badge badge-error badge-outline badge-lg">{t}</div>)}
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Project 1 */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-300">
              <figure><img src="/project_pictures/rukus.png" alt="Rukus Chitchat" className="w-full h-48 object-cover object-top" /></figure>
              <div className="card-body">
                <h3 className="card-title text-2xl text-secondary">Rukus Chitchat</h3>
                <div className="flex gap-2 my-2">
                  <div className="badge badge-sm badge-primary">MERN</div>
                  <div className="badge badge-sm badge-secondary">Socket.IO</div>
                </div>
                <p className="opacity-80 py-4">A real-time messaging platform offering user authentication, contact management, and instant messaging. Integrated with Cloudinary for media storage and Resend for email notifications, ensuring secure communication with ArcJet protection.</p>
                <div className="card-actions justify-end mt-4">
                  <a href="https://github.com/sampath-create/rukus-chitchat" target="_blank" rel="noreferrer" className="btn btn-outline btn-sm cursor-target">Source Code</a>
                  <a href="https://rukus-chitchat.vercel.app/" target="_blank" rel="noreferrer" className="btn btn-primary btn-sm shadow-md cursor-target">Live Demo</a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-300">
              <figure><img src="/project_pictures/stoxk.png" alt="Stock Close Check" className="w-full h-48 object-cover object-top" /></figure>
              <div className="card-body">
                <h3 className="card-title text-2xl text-secondary">Stock Close Check</h3>
                <div className="flex gap-2 my-2">
                  <div className="badge badge-sm badge-primary">Python</div>
                  <div className="badge badge-sm badge-secondary">Streamlit</div>
                </div>
                <p className="opacity-80 py-4">Check company stock prices and volumes through interactive graphs which helps traders for planning. Completely built with Python and Streamlit.</p>
                <div className="card-actions justify-end mt-4">
                  <a href="https://github.com/sampath-create/Stock-Price-Prediction" target="_blank" rel="noreferrer" className="btn btn-outline btn-sm cursor-target">Source Code</a>
                  <a href="https://stock-close.streamlit.app/" target="_blank" rel="noreferrer" className="btn btn-primary btn-sm shadow-md cursor-target">Live Demo</a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-300 lg:col-span-2">
              <div className="card-body">
                <h3 className="card-title text-2xl text-secondary">Machine Learning Models Collection</h3>
                <div className="flex gap-2 my-2">
                  <div className="badge badge-sm badge-primary">Machine Learning</div>
                  <div className="badge badge-sm badge-secondary">Colab</div>
                </div>
                <p className="opacity-80 py-4">A comprehensive GitHub repository containing various ML models demonstrating how to train them efficiently. It is accompanied by complete demo datasets.</p>
                <div className="card-actions justify-end mt-4">
                  <a href="https://github.com/sampath-create/Machine-Learning" target="_blank" rel="noreferrer" className="btn btn-primary shadow-md cursor-target">View Repository & Demos</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Action */}
      <section className="py-16 bg-base-100 text-center px-4 overflow-hidden">
        <h2 className="text-4xl font-bold text-primary mb-4">Certifications</h2>
        <p className="opacity-80 max-w-xl mx-auto mb-16">
          Hover over the cards below to see my verified professional certifications and skills.
        </p>
        
        <div className="flex justify-center mb-12">
          <BounceCards
            className="custom-bounceCards cursor-target"
            images={certImages}
            containerWidth={800}
            containerHeight={350}
            animationDelay={1}
            animationStagger={0.08}
            easeType="elastic.out(1, 0.5)"
            transformStyles={certTransforms}
            enableHover={true}
          />
        </div>

        <a href="https://www.linkedin.com/in/sampath25/details/certifications/" target="_blank" rel="noreferrer" className="btn btn-secondary btn-wide text-lg shadow-lg cursor-target mt-4">
          View All on LinkedIn
        </a>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-base-200">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-8 text-primary">Get In Touch</h2>
          <SpotlightCard className="shadow-2xl !bg-base-100 !border-none !rounded-3xl" spotlightColor="rgba(0, 229, 255, 0.15)">
            <div className="card-body">
              <form onSubmit={(e) => { e.preventDefault(); alert("Thanks for reaching out! In a real app, this would submit via an API."); }}>
                  <div className="form-control w-full mb-5">
                    <label className="label px-2"><span className="label-text font-bold text-base opacity-80">Your Name</span></label>
                    <input type="text" placeholder="Your Name" className="input input-lg w-full rounded-2xl bg-base-200/60 border-2 border-base-300 focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-300" required />
                  </div>
                  <div className="form-control w-full mb-5">
                    <label className="label px-2"><span className="label-text font-bold text-base opacity-80">Your Email</span></label>
                    <input type="email" placeholder="Your Mail" className="input input-lg w-full rounded-2xl bg-base-200/60 border-2 border-base-300 focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-300" required />
                  </div>
                  <div className="form-control w-full mb-8 group">
                    <label className="label px-2"><span className="label-text font-bold text-base opacity-80">Message</span></label>
                    <div className="relative">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-3xl blur opacity-25 group-focus-within:opacity-75 transition duration-500"></div>
                      <textarea className="textarea textarea-lg w-full h-40 rounded-3xl bg-base-100 border-2 border-transparent relative z-10 focus:border-transparent focus:outline-none focus:ring-0 leading-relaxed resize-none p-5" placeholder="Share your thoughts or ideas here..." required></textarea>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary w-full text-lg shadow-[0_0_20px_rgba(0,0,0,0.2)] hover:shadow-primary/40 rounded-2xl h-14 cursor-target transition-all duration-300 font-bold tracking-wide hover:-translate-y-1">Send Message</button>
                </form>
              </div>
            </SpotlightCard>
        </div>
      </section>

            {/* Footer */}
        <footer className="footer footer-center p-10 bg-base-300 text-base-content rounded-t-3xl mt-10">
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center justify-between w-full max-w-6xl mx-auto">
            
            <aside className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
              <div className="text-4xl font-extrabold text-primary">SK</div> 
              <p className="font-semibold">Nadamaluru Sampath Kumar<br/><span className="opacity-70">Vibe Coder | AI & ML Enthusiast</span></p>
              <p className="opacity-60 text-sm">Copyright &copy; {new Date().getFullYear()} - All rights reserved</p>
            </aside>
            
            <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
              <a href="#about" className="link link-hover cursor-target">About Me</a>
              <a href="#skills" className="link link-hover cursor-target">Tech Arsenal</a>
              <a href="#projects" className="link link-hover cursor-target">Projects</a>
              <a href="mailto:sampath2005h@gmail.com" className="link link-hover cursor-target text-primary">Email Me</a>
            </nav>
            
            <nav className="flex gap-4">
              <a href="https://github.com/sampath-create" target="_blank" rel="noreferrer" className="btn btn-ghost btn-circle cursor-target text-xl" title="GitHub">
                GH
              </a>
              <a href="https://www.linkedin.com/in/sampath25/" target="_blank" rel="noreferrer" className="btn btn-ghost btn-circle cursor-target text-xl" title="LinkedIn">
                IN
              </a>
              <a href="https://leetcode.com/u/sampath-create/" target="_blank" rel="noreferrer" className="btn btn-ghost btn-circle cursor-target text-xl" title="LeetCode">
                LC
              </a>
              <a href="https://www.codechef.com/users/vvit23bq1a42b8" target="_blank" rel="noreferrer" className="btn btn-ghost btn-circle cursor-target text-xl" title="CodeChef">
                CC
              </a>
            </nav>
          </div>
        </footer>
      </div>
    );
};

export default App;

