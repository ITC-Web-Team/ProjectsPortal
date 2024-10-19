import React from 'react';
import { useParams } from 'react-router-dom'; // Assuming you're using React Router for routing

// Example data (you can fetch this from an API in a real-world scenario)
const data = [
  {
    "id": 1,
    "title": "Software Development Internship",
    "poster": "https://picsum.photos/400/300",
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
  // Additional opportunity objects...
];

// The Opportunity Details page component
export default function OpportunityDetails() {
  const { id } = useParams();  // Grabbing the 'id' from the URL
  const opportunity = data.find(opp => opp.id === parseInt(id)); // Finding the opportunity by 'id'

  if (!opportunity) {
    return <div>Opportunity not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          {/* Title and Poster */}
          <h1 className="text-4xl font-bold mb-6">{opportunity.title}</h1>
          <img 
            src={opportunity.poster} 
            alt={opportunity.title} 
            className="rounded shadow-lg mb-6 w-[400px] h-auto"
          />

          {/* Details */}
          <div className="w-full max-w-4xl">
            <div className="mb-4">
              <h2 className="text-2xl font-bold">Short Description</h2>
              <p className="text-gray-300">{opportunity.short_desc}</p>
            </div>

            <div className="mb-4">
              <h2 className="text-2xl font-bold">Domains</h2>
              <p className="text-gray-300">{opportunity.domains}</p>
            </div>

            <div className="mb-4">
              <h2 className="text-2xl font-bold">Description</h2>
              <p className="text-gray-300">{opportunity.description}</p>
            </div>

            <div className="mb-4">
              <h2 className="text-2xl font-bold">Roles</h2>
              <p className="text-gray-300">{opportunity.roles}</p>
            </div>

            <div className="mb-4">
              <h2 className="text-2xl font-bold">Stipend</h2>
              <p className="text-gray-300">{opportunity.stipend}</p>
            </div>

            <div className="mb-4">
              <h2 className="text-2xl font-bold">Duration</h2>
              <p className="text-gray-300">{opportunity.duration}</p>
            </div>

            <div className="mb-4">
              <h2 className="text-2xl font-bold">Tasks</h2>
              <p className="text-gray-300">{opportunity.tasks}</p>
            </div>

            <div className="mb-4">
              <h2 className="text-2xl font-bold">Skills Gained</h2>
              <p className="text-gray-300">{opportunity.skills_gained}</p>
            </div>

            <div className="mb-4">
              <h2 className="text-2xl font-bold">Required Qualifications</h2>
              <p className="text-gray-300">{opportunity.req_quali}</p>
            </div>

            <div className="mb-4">
              <h2 className="text-2xl font-bold">Deadline</h2>
              <p className="text-gray-300">{opportunity.deadline}</p>
            </div>

            <div className="mb-4">
              <h2 className="text-2xl font-bold">Contact Info</h2>
              <p className="text-gray-300">{opportunity.contact_info}</p>
            </div>

            {/* Apply Button */}
            <div className="flex justify-center mt-8">
              <a 
                href={opportunity.gform} 
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
