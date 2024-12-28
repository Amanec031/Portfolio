import WorkItem from "./WorkItem";

const Data = [
    {
        company: 'IIT Kanpur',
        position: 'Op-Amp Design Internship',
        duration: '10 May 2024 – 31 July 2024',
        details: `
        • Designed a single-stage Operational Transconductance Amplifier (OTA) in LTSpice Software.
        • Simulated MOS transistors for circuit design applications.
        `
    },
    {
        company: 'Bharat Electronics Limited',
        position: 'Trainee',
        duration: '27 June 2024 – 26 July 2024',
        details: `
        • Learned quality control methods and their importance in production.
        • Implemented a Repeater Network Communication system using C language.
        • Explored Jammers and PSD (Power Spectral Density) systems engineering.
        `
    },
    {
        company: 'Suvidha Foundation',
        position: 'Web Developer Intern',
        duration: '27 November 2023 – 27 January 2024',
        details: `
        • Designed and developed the frontend of the official Suvidha Overseas Website using ReactJS.
        • Developed the backend using ExpressJS, NodeJS, and MongoDB.
        • Collaborated with team members using Git to organize modifications and assign tasks.
        `
    }
];

const Work = () => {
    return (
        <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-6'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
            {Data.map((item, index) => (
                <WorkItem 
                    key={index} 
                    company={item.company} 
                    position={item.position} 
                    duration={item.duration} 
                    details={item.details} 
                />
            ))}
        </div>
    );
};

export default Work;
