const Footer = () => {
    return ( 
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto text-center">
                <p>&copy; 2025 MoveisProntos - Todos os direitos reservados</p>
                <div className="mt-4">
                    <a href="#" className="text-gray-300 hover:text-white mx-4"><i className="fab fa-facebook">Facebook</i></a>
                    <a href="#" className="text-gray-300 hover:text-white mx-4"><i className="fab fa-instagram">Instagram</i></a>
                    <a href="#" className="text-gray-300 hover:text-white mx-4"><i className="fab fa-twitter">Twitter</i></a>
                </div>
            </div>
        </footer>
     );
}

export default Footer;