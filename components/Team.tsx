import Image from 'next/image';

const teamMembers = [
    {
        name: "Aarja Kaur Wadhwa",
        role: "Licensee",
        image: "/arja.webp",
        linkedin: "#",
        instagram: "#"
    },
    {
        name: "Prashant T Lohale",
        role: "Treasurer",
        image: "/Prashant.webp",
        linkedin: "#",
        instagram: "#"
    },
    {
        name: "Prince Kumar",
        role: "Head of Brand Marketing",
        image: "/princ.webp",
        linkedin: "#",
        instagram: "#"
    },
    {
        name: "Saurabh Chavan",
        role: "Head of Brand Marketing",
        image: "/chavan.webp",
        linkedin: "#",
        instagram: "#"
    },
    {
        name: "Sahil Shetty",
        role: "Head of Public Relations",
        image: "/Sahils.webp",
        linkedin: "#",
        instagram: "#"
    },
    {
        name: "Aryan Singh",
        role: "Head of Technical Affairs",
        image: "/AryanSingh.webp",
        linkedin: "#",
        instagram: "#"
    },
    {
        name: "Pragya Chakrawarty",
        role: "Head of Operations and Planning",
        image: "/Pragya.webp",
        linkedin: "#",
        instagram: "#"
    },
    {
        name: "Arpit Sahu",
        role: "Head of Operations and Planning",
        image: "/Arpi.webp",
        linkedin: "#",
        instagram: "#"
    },
    {
        name: "Mohit Chavan",
        role: "Head of Operations and Planning",
        image: "/mohit.webp",
        linkedin: "#",
        instagram: "#"
    },
    {
        name: "Dhruv Jindal",
        role: "Head of Events & Partnerships",
        image: "/Dhrooooov.webp",
        linkedin: "#",
        instagram: "#"
    },
    {
        name: "Tanisha Kanchan",
        role: "Head of Events & Partnerships",
        image: "/Tanisha.webp",
        linkedin: "#",
        instagram: "#"
    },
    {
        name: "K D Sriram",
        role: "Team Member",
        image: "/Sram.webp",
        linkedin: "#",
        instagram: "#"
    },
    {
        name: "Anushka Kumari",
        role: "Team Member",
        image: "/Anushka25.webp",
        linkedin: "#",
        instagram: "#"
    },
    {
        name: "Rakshit Singhvi",
        role: "Team Member",
        image: "/Rkashit.webp",
        linkedin: "#",
        instagram: "#"
    }
];

export default function Team() {
    return (
        <section id="team">
            <h2 className="section-title">Our Team</h2>
            <p className="team-subtitle">The passionate individuals behind TEDxVNIT</p>
            <div className="team-grid">
                {teamMembers.map((member, index) => (
                    <div key={index} className="team-card">
                        <div className="team-card-image">
                            <Image
                                src={member.image}
                                alt={member.name}
                                width={120}
                                height={120}
                                className="member-img"
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className="team-card-content">
                            <h3>{member.name}</h3>
                            <p className="team-role">{member.role}</p>
                            <div className="team-social">
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                    </svg>
                                </a>
                                <a href={member.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
