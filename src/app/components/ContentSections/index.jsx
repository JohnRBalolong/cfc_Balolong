import contentData from './data';
import ContentItem from './ContentItem';

export default function ContentSections() {
  return (
    <section className="bg-white py-10 px-4">
      {contentData.map((item, index) => (
        <ContentItem
          key={index}
          title={item.title}
          text={item.text}
          img={item.img}
          alt={item.alt}
          isEven={index % 2 === 0}
        />
      ))}
    </section>
  );
}