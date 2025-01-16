import PropTypes from 'prop-types';

const CategoryServicesCard = ({ description, title, image }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
            <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg mb-6" />
            <h3 className="text-xl font-semibold text-green-900 mb-3">{title}</h3>
            <p className="text-gray-700">{description}</p>
            <a href="#services" className="text-green-600 hover:text-green-800 transition duration-300 mt-4 block">Ver Mais</a>
        </div>
    );
}

CategoryServicesCard.propTypes = {
    description: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string
};

export default CategoryServicesCard;