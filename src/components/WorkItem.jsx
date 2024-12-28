import PropTypes from "prop-types";
const WorkItem = ({ company, position, duration, details }) => {
    return (
        <ol className="flex flex-col md:flex-row relative border-l border-stone-200">
            <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 left-0 border-white" />
                <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                    <span className="inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md">{company}</span>
                    <span className="text-lg font-semibold text-[#001b5e]">{position}</span>
                    <span className="my-1 text-sm font-normal leading-none text-stone-400">{duration}</span>
                </p>
                <p className="text-stone-600 mt-2">{details}</p>
            </li>
        </ol>
    );
};

WorkItem.propTypes = {
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired
};
export default WorkItem;
