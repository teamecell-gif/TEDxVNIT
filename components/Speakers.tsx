import Image from 'next/image';

interface Speaker {
    name: string;
    title: string;
    image: string;
    topic?: string;
}

const speakers: Speaker[] = [
    {
        name: "Manya Singh",
        title: "Femina Miss India",
        image: "/manya.avif",
    },
    {
        name: "Ashish Bharatvanshi",
        title: "Educator & Public Speaker",
        image: "/ashish.png",
    },
    {
        name: "Akshay Dongarwar",
        title: "Vice President, JP Morgan",
        image: "/akshay.jpeg",
    },
    {
        name: "Vijayashree Parmeshwar",
        title: "Founder, Decor",
        image: "/vijayasree.jpeg",
    }
];

export default function Speakers() {
    return (
        <section id="speakers">
            <h2 className="section-title">Speakers</h2>
           
            <div className="cards-container">
                {speakers.map((speaker, index) => (
                    <div 
                        key={index} 
                        className="speaker-card"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className="img-placeholder">
                            {speaker.image ? (
                                <Image
                                    src={speaker.image}
                                    alt={speaker.name}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    className="transition-transform duration-500"
                                />
                            ) : (
                                <div className="flex items-center justify-center h-full relative z-10">
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="80" 
                                        height="80" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeWidth="0.8" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round"
                                        className="speaker-icon"
                                    >
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                        <circle cx="12" cy="7" r="4"/>
                                    </svg>
                                </div>
                            )}
                        </div>
                        <div className="relative z-10">
                            <h3>{speaker.name}</h3>
                            <p>{speaker.title}</p>
                            {speaker.topic && (
                                <p className="mt-3 text-sm text-gray-400 normal-case tracking-normal italic">
                                    &ldquo;{speaker.topic}&rdquo;
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
