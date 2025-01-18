import PropTypes from "prop-types";

const FeaturedServiceCard = ({ title, image, valor }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
            <img src={image} alt={"Imagem de "+title} className="w-full h-48 object-cover rounded-t-lg mb-6" />
            <h3 className="text-xl font-semibold text-green-900 mb-3">{title}</h3>
            <p className="text-gray-700 mb-4">R$ {valor}</p>
            <a href="#" className="bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 transition duration-300">Agendar</a>
        </div>
    );
}

FeaturedServiceCard.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    valor: PropTypes.string,
};

export default FeaturedServiceCard;