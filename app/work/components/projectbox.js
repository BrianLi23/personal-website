import Image from 'next/image';

export default function ProjectBox({ title, comment, tags, description, imageUrl, projectUrl }) {
  return (
    <div className="flex flex-col md:flex-row gap-6 px-4 md:px-48">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row">
          <h1 className="text-2xl md:text-3xl font-thin whitespace-nowrap">{title}</h1>
          <h3 className="text-base md:text-l font-thin text-gray-400 md:px-4 md:pt-2 whitespace-nowrap">{comment}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 border border-black rounded-full text-xs md:text-sm">
              {tag}
            </span>
          ))}
        </div>
        <p className="max-w-full md:max-w-sm">{description}</p>
      </div>
      <div className="mt-4 md:mt-0 md:pl-36">
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block overflow-hidden shadow-xl w-full md:w-auto"
        >
          <Image
            src={imageUrl}
            width={600}
            height={500}
            alt={title}
            className="w-full h-auto border-2 object-cover transition-all duration-300 transform hover:scale-110"
          />
        </a>
      </div>
    </div>
  );
}