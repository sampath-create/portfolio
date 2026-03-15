const fs = require('fs');
let data = fs.readFileSync('src/App.jsx', 'utf8');

// Update Hero Links
const heroButtonsRegex = /<a href="https:\/\/www\.linkedin\.com\/in\/sampath25\/"[^>]*>LinkedIn<\/a>/;
const oldMt8DivRegex = /<div className="mt-8 flex gap-4 justify-center lg:justify-start">.*?<\/div>/s;

if (heroButtonsRegex.test(data)) {
  data = data.replace(heroButtonsRegex, `$&
                <a href="https://leetcode.com/u/sampath-create/" target="_blank" rel="noreferrer" className="btn btn-outline btn-info cursor-target ml-2 lg:ml-4">LeetCode</a>
                <a href="https://www.codechef.com/users/vvit23bq1a42b8" target="_blank" rel="noreferrer" className="btn btn-outline btn-success cursor-target ml-2">CodeChef</a>`);
  data = data.replace(oldMt8DivRegex, '');
}

// Write the footer horizontally
const oldFooterRegex = /\{?\/\* Footer \*\/\.*\n\s*<footer className="footer[^>]*>.*?<\/footer>/s;

const newFooterText = `{/* Footer */}
        <footer className="footer footer-center p-10 bg-base-300 text-base-content rounded-t-3xl mt-10">
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center justify-between w-full max-w-6xl mx-auto">
            
            <aside className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
              <div className="text-4xl font-extrabold text-primary">SK</div> 
              <p className="font-semibold">Nadamaluru Sampath Kumar<br/><span className="opacity-70">Vibe Coder | AI & ML Enthusiast</span></p>
              <p className="opacity-60 text-sm">Copyright © {new Date().getFullYear()} - All rights reserved</p>
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
        </footer>`;

data = data.replace(oldFooterRegex, newFooterText);

fs.writeFileSync('src/App.jsx', data);
console.log('Done!');
