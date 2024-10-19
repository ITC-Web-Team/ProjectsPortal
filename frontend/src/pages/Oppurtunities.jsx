import React from 'react';

export const data = [
  {    
    "title": "Software Development Internship",
    "poster": "https://picsum.photos/200/300",
    "short_desc": "Internship opportunity in software development.",
    "domains": "Software, Technology",
    "description": "This internship involves working with experienced developers on real-world projects.",
    "roles": "Software Developer Intern",
    "stipend": "500 USD/month",
    "duration": "6 months",
    "tasks": "Develop and test software, write documentation, collaborate with team members.",
    "skills_gained": "Python, Django, Git, Teamwork",
    "req_quali": "Pursuing a degree in Computer Science or related field.",
    "gform": "https://example.com/apply-software-dev",
    "deadline": "2024-12-01",
    "contact_info": "hr@techcompany.com"
  },
  {    
    "title": "Marketing Internship",
    "poster": "https://picsum.photos/200/300",
    "short_desc": "Hands-on marketing experience.",
    "domains": "Marketing, Advertising",
    "description": "Join our team to work on campaigns, content creation, and social media management.",
    "roles": "Marketing Intern",
    "stipend": "300 USD/month",
    "duration": "3 months",
    "tasks": "Create marketing materials, manage social media, analyze campaign performance.",
    "skills_gained": "SEO, Content Creation, Social Media Management",
    "req_quali": "Pursuing a degree in Marketing, Business, or related field.",
    "gform": "https://example.com/apply-marketing",
    "deadline": "2024-11-15",
    "contact_info": "marketing@company.com"
  },
  {
    "title": "Graphic Design Internship",
    "poster": "https://picsum.photos/200/300",
    "short_desc": "Creative graphic design internship.",
    "domains": "Design, Creativity",
    "description": "Assist in creating digital and print media designs for marketing campaigns.",
    "roles": "Graphic Design Intern",
    "stipend": "400 USD/month",
    "duration": "4 months",
    "tasks": "Design posters, brochures, and social media assets.",
    "skills_gained": "Adobe Photoshop, Illustrator, Creativity",
    "req_quali": "Pursuing a degree in Graphic Design or related field.",
    "gform": "https://example.com/apply-graphic-design",
    "deadline": "2024-12-05",
    "contact_info": "design@creativeagency.com"
  }
];

export default function Opportunities() {
  return (
    <div className="flex-col items-center bg-gray-800 p-4 min-h-screen">
      <h1 className="text-white text-5xl font-bold text-center mb-8">Opportunities</h1>
      
      <div className="flex flex-wrap justify-center gap-8">
        {data.map((opp, index) => (
          <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-lg w-[300px]">
            <img src={opp.poster} alt={opp.title} className="w-full h-48 object-cover mb-4 rounded" />
            <h2 className="text-white text-2xl font-bold mb-2">{opp.title}</h2>
            <p className="text-gray-300 mb-4">{opp.short_desc}</p>
            <a 
              href={opp.gform} 
              className="text-blue-400 hover:underline"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Apply Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
