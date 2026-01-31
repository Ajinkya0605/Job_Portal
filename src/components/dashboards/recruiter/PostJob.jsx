import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PostJob = () => {
  const navigate = useNavigate();
  
  // State for Skills Input
  const [skills, setSkills] = useState(['Figma', 'Prototyping']);
  const [currentSkill, setCurrentSkill] = useState('');
  
  // State for Toggles
  const [isFresher, setIsFresher] = useState(false);
  const [isNegotiable, setIsNegotiable] = useState(false);

  // Handle adding skills
  const handleSkillKeyDown = (e) => {
    if (e.key === 'Enter' && currentSkill.trim()) {
      e.preventDefault();
      if (!skills.includes(currentSkill.trim())) {
        setSkills([...skills, currentSkill.trim()]);
      }
      setCurrentSkill('');
    }
  };

  // Handle removing skills
  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  return (
    <div className="min-h-screen bg-background-dark text-white font-sans selection:bg-primary selection:text-white pb-12 sm:pb-20">
      {/* Background Effects - matching landing page */}
      <div className="fixed inset-0 bg-hero-glow pointer-events-none z-0"></div>
      <div className="absolute top-20 right-[-50px] sm:right-0 w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] bg-blue-600/10 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-[-50px] sm:left-0 w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] bg-purple-600/10 rounded-full blur-[80px] pointer-events-none"></div>
      
      {/* --- Header --- */}
      <header className="sticky top-0 z-30 bg-[#1a1d23]/95 backdrop-blur-md border-b border-white/5 px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between relative">
        <div className="flex items-center gap-3 sm:gap-4">
          <button 
            onClick={() => navigate(-1)} 
            className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg sm:rounded-xl bg-[#1a1d23] border border-white/10 hover:border-primary/50 text-gray-400 hover:text-primary transition-all"
          >
            <span className="material-symbols-outlined text-[18px] sm:text-[20px]">arrow_back</span>
          </button>
          <h1 className="text-lg sm:text-xl font-bold tracking-tight font-sans">Post a New Job</h1>
        </div>
        <button className="text-xs sm:text-sm font-bold text-gray-400 hover:text-primary transition-colors font-sans">
          Save Draft
        </button>
      </header>

      {/* --- Main Content --- */}
      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 animate-fade-in">
        
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-2 font-sans">Job Details</h2>
          <p className="text-gray-400 text-sm sm:text-base font-sans">Create a streamlined listing to attract the best talent.</p>
        </div>

        {/* Form Container */}
        <div className="space-y-6 sm:space-y-8">
          
          {/* Job Title */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1 font-sans">Job Title</label>
            <input 
              type="text" 
              placeholder="e.g. Senior Product Designer" 
              className="w-full bg-[#1a1d23] border border-white/10 rounded-lg sm:rounded-xl px-4 py-3 sm:py-3.5 text-sm sm:text-base text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-gray-500 font-sans"
            />
          </div>

          {/* Location & Experience Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1 font-sans">Location</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg sm:text-[20px]">location_on</span>
                <input 
                  type="text" 
                  placeholder="e.g. Remote, New York" 
                  className="w-full bg-[#1a1d23] border border-white/10 rounded-lg sm:rounded-xl pl-10 sm:pl-11 pr-4 py-3 sm:py-3.5 text-sm sm:text-base text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-gray-500 font-sans"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1 font-sans">Experience Level</label>
              <div className="relative">
                <select className="w-full bg-[#1a1d23] border border-white/10 rounded-lg sm:rounded-xl px-4 py-3 sm:py-3.5 text-sm sm:text-base text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary appearance-none cursor-pointer font-sans">
                  <option>Select range</option>
                  <option>0-2 Years (Junior)</option>
                  <option>3-5 Years (Mid-Level)</option>
                  <option>5-8 Years (Senior)</option>
                  <option>8+ Years (Lead)</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none text-lg sm:text-[20px]">expand_more</span>
              </div>
            </div>
          </div>

          {/* Skills Input (Interactive) */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1 font-sans">Required Skills</label>
            <div className="w-full bg-[#1a1d23] border border-white/10 rounded-lg sm:rounded-xl px-2 sm:px-3 py-2 sm:py-2.5 flex flex-wrap gap-2 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all min-h-[52px] sm:min-h-[56px]">
              
              {/* Skill Tags */}
              {skills.map((skill) => (
                <div key={skill} className="bg-primary/20 border border-primary/30 text-primary text-xs font-bold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg flex items-center gap-1.5 sm:gap-2 font-sans">
                  {skill}
                  <button onClick={() => removeSkill(skill)} className="hover:text-white transition-colors" aria-label={`Remove ${skill}`}>
                    <span className="material-symbols-outlined text-[12px] sm:text-[14px]">close</span>
                  </button>
                </div>
              ))}

              {/* Input Field */}
              <input 
                type="text" 
                value={currentSkill}
                onChange={(e) => setCurrentSkill(e.target.value)}
                onKeyDown={handleSkillKeyDown}
                placeholder={skills.length === 0 ? "Type and press enter..." : ""}
                className="bg-transparent border-none text-sm sm:text-base text-white focus:ring-0 placeholder-gray-500 flex-1 min-w-[100px] sm:min-w-[120px] py-1.5 px-2 font-sans"
              />
            </div>
            <p className="text-[10px] sm:text-xs text-gray-500 ml-1 font-sans">Press 'Enter' to add a skill tag.</p>
          </div>

          {/* Toggle: Fresher Allowed */}
          <div className="bg-[#1a1d23] border border-white/10 rounded-lg sm:rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex-1">
              <h3 className="text-sm sm:text-base font-bold text-white font-sans">Freshers Only</h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-0.5 font-sans">Enable if candidates with no prior experience can apply.</p>
            </div>
            <button 
              onClick={() => setIsFresher(!isFresher)}
              className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 shrink-0 ${isFresher ? 'bg-primary' : 'bg-gray-700'}`}
              aria-label="Toggle fresher allowed"
            >
              <div className={`w-4 h-4 rounded-full bg-white shadow-md transform transition-transform duration-300 ${isFresher ? 'translate-x-6' : 'translate-x-0'}`}></div>
            </button>
          </div>

          {/* Job Description (Rich Text Mock) */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1 font-sans">Job Description</label>
            <div className="w-full bg-[#1a1d23] border border-white/10 rounded-lg sm:rounded-xl overflow-hidden focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
              {/* Toolbar */}
              <div className="bg-[#21242c] border-b border-white/5 px-2 sm:px-3 py-2 flex gap-1 sm:gap-2 overflow-x-auto">
                {['format_bold', 'format_italic', 'format_underlined', 'format_list_bulleted', 'format_list_numbered', 'link'].map((icon) => (
                  <button key={icon} className="p-1.5 sm:p-2 rounded hover:bg-white/10 text-gray-400 hover:text-primary transition-colors shrink-0" aria-label={icon.replace('format_', '').replace('_', ' ')}>
                    <span className="material-symbols-outlined text-base sm:text-[18px]">{icon}</span>
                  </button>
                ))}
              </div>
              <textarea 
                rows="8" 
                className="w-full bg-transparent border-none p-3 sm:p-4 text-sm sm:text-base text-white placeholder-gray-500 focus:ring-0 resize-none font-sans"
                placeholder="Describe the role responsibilities, team culture, and expectations..."
              ></textarea>
            </div>
          </div>

          {/* Salary Range */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1 font-sans">Salary Range</label>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
              <div className="flex-1 relative">
                 <span className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm">$</span>
                 <input type="number" placeholder="Min" className="w-full bg-[#1a1d23] border border-white/10 rounded-lg sm:rounded-xl pl-7 sm:pl-8 pr-4 py-3 sm:py-3.5 text-sm sm:text-base text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder-gray-500 font-sans" />
              </div>
              <span className="text-gray-500 text-center sm:text-left">-</span>
              <div className="flex-1 relative">
                 <span className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm">$</span>
                 <input type="number" placeholder="Max" className="w-full bg-[#1a1d23] border border-white/10 rounded-lg sm:rounded-xl pl-7 sm:pl-8 pr-4 py-3 sm:py-3.5 text-sm sm:text-base text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder-gray-500 font-sans" />
              </div>
              <div className="w-full sm:w-24">
                <select className="w-full bg-[#1a1d23] border border-white/10 rounded-lg sm:rounded-xl px-3 py-3 sm:py-3.5 text-sm sm:text-base text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary cursor-pointer font-sans">
                  <option>USD</option>
                  <option>INR</option>
                  <option>EUR</option>
                </select>
              </div>
            </div>
            
            <div className="flex items-center gap-2 mt-2 ml-1 cursor-pointer" onClick={() => setIsNegotiable(!isNegotiable)}>
              <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${isNegotiable ? 'bg-primary border-primary' : 'border-gray-500'}`}>
                {isNegotiable && <span className="material-symbols-outlined text-[12px] text-white">check</span>}
              </div>
              <span className="text-xs sm:text-sm text-gray-400 select-none font-sans">Salary is negotiable</span>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4 sm:pt-6">
            <button className="w-full bg-primary hover:bg-primary-glow text-white font-bold py-3.5 sm:py-4 rounded-lg sm:rounded-xl shadow-[0_0_20px_rgba(0,230,191,0.4)] hover:shadow-[0_0_30px_rgba(0,230,191,0.6)] transition-all flex items-center justify-center gap-2 text-sm sm:text-base font-sans">
              Post Job Listing
              <span className="material-symbols-outlined text-[18px] sm:text-[20px]">arrow_forward</span>
            </button>
          </div>

        </div>
      </main>
    </div>
  );
};

export default PostJob;