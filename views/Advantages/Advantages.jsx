import PropTypes from 'prop-types';
import Container from 'components/Container/Container';
import Image from 'next/image';

const Advantages = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <section id="advantages" className="sections__padding">
      <Container>
        <h2 className="mb-[40px] text-[30px] font-[700] leading-[1.2] md:mb-[50px] md:text-[34px] xl:mb-[76px] xl:text-[54px]">
          Why choose us
        </h2>
        <ul className="flex flex-wrap gap-x-[60px] gap-y-[50px]">
          {data.reason.map(({ id, title, description, image }) => (
            <li
              key={id}
              className="flex flex-col justify-start md:w-[calc((100%-60px)/2)] xl:w-[calc((100%-180px)/4)]"
            >
              <Image
                src={image.secure_url}
                alt={title}
                width={54}
                height={54}
                className="border-[1px]md:h-[54px] mb-[30px] h-[44px] w-[44px] md:w-[54px]"
              />
              <p className="mb-[16px] text-[20px] font-[700] leading-[1.3] md:text-[24px]">
                {title}
              </p>
              <p className="text-middle text-gray">{description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
export default Advantages;

Advantages.propTypes = {
  data: PropTypes.shape({
    reason: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.shape({
          secure_url: PropTypes.string.isRequired,
        }),
      }),
    ).isRequired,
  }).isRequired,
};
