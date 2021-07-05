const CardProject = ({
  title = 'Title',
  children: description,
  src = '',
  link = '#',
}) => {
  return (
    <li data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
      <a href={link} alt={title}>
        <img src={src} alt={title} />
      </a>
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
};

export default CardProject;
