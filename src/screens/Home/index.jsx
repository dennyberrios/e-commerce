const Home = () => {
    return (
        <main>

            {/* Hero Section (Banner) */}
            <section id="home" className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://via.placeholder.com/1600x900')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center text-center text-white px-6">
                    <div>
                        <h1 className="text-5xl font-extrabold mb-4">Transforme sua casa com móveis montados por especialistas</h1>
                        <p className="text-lg mb-8">A melhor experiência em montagem de móveis, com agilidade e qualidade!</p>
                        <a href="#services" className="bg-green-600 py-3 px-6 rounded-full text-lg font-semibold hover:bg-green-700 transition duration-300">Ver Serviços</a>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section id="categories" className="py-20 px-6">
                <h2 className="text-3xl font-bold text-center text-green-600 mb-12">Categorias de Serviços</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
                        <img src="https://via.placeholder.com/400x300" alt="Categoria 1" className="w-full h-48 object-cover rounded-t-lg mb-6" />
                        <h3 className="text-xl font-semibold text-green-900 mb-3">Montagem de Sofás</h3>
                        <p className="text-gray-700">Oferecemos montagem profissional para sofás, com rapidez e precisão.</p>
                        <a href="#services" className="text-green-600 hover:text-green-800 transition duration-300 mt-4 block">Ver Mais</a>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
                        <img src="https://via.placeholder.com/400x300" alt="Categoria 2" className="w-full h-48 object-cover rounded-t-lg mb-6" />
                        <h3 className="text-xl font-semibold text-green-900 mb-3">Camas e Beliches</h3>
                        <p className="text-gray-700">Montamos camas e beliches de forma segura, garantindo estabilidade e conforto.</p>
                        <a href="#services" className="text-green-600 hover:text-green-800 transition duration-300 mt-4 block">Ver Mais</a>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
                        <img src="https://via.placeholder.com/400x300" alt="Categoria 3" className="w-full h-48 object-cover rounded-t-lg mb-6" />
                        <h3 className="text-xl font-semibold text-green-900 mb-3">Mesas e Cadeiras</h3>
                        <p className="text-gray-700">Especialistas em montar mesas e cadeiras de todos os tipos, para sua casa ou escritório.</p>
                        <a href="#services" className="text-green-600 hover:text-green-800 transition duration-300 mt-4 block">Ver Mais</a>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">Name
                        <img src="https://via.placeholder.com/400x300" alt="Categoria 4" className="w-full h-48 object-cover rounded-t-lg mb-6" />
                        <h3 className="text-xl font-semibold text-green-900 mb-3">Armários e Estantes</h3>
                        <p className="text-gray-700">Montagem de armários e estantes com design moderno e alta durabilidade.</p>
                        <a href="#services" className="text-green-600 hover:text-green-800 transition duration-300 mt-4 block">Ver Mais</a>
                    </div>
                </div>
            </section>

            {/* Featured Services Section */}
            <section id="services" className="py-20 px-6 bg-gray-50">
                <h2 className="text-3xl font-bold text-center text-green-600 mb-12">Serviços em Destaque</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
                        <img src="https://via.placeholder.com/400x300" alt="Serviço 1" className="w-full h-48 object-cover rounded-t-lg mb-6" />
                        <h3 className="text-xl font-semibold text-green-900 mb-3">Montagem Completa de Sofá</h3>
                        <p className="text-gray-700 mb-4">R$ 199,99</p>
                        <a href="#" className="bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 transition duration-300">Agendar</a>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
                        <img src="https://via.placeholder.com/400x300" alt="Serviço 2" className="w-full h-48 object-cover rounded-t-lg mb-6" />
                        <h3 className="text-xl font-semibold text-green-900 mb-3">Montagem de Cama Box</h3>
                        <p className="text-gray-700 mb-4">R$ 149,99</p>
                        <a href="#" className="bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 transition duration-300">Agendar</a>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
                        <img src="https://via.placeholder.com/400x300" alt="Serviço 3" className="w-full h-48 object-cover rounded-t-lg mb-6" />
                        <h3 className="text-xl font-semibold text-green-900 mb-3">Montagem de Estante</h3>
                        <p className="text-gray-700 mb-4">R$ 129,99</p>
                        <a href="#" className="bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 transition duration-300">Agendar</a>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="py-20 px-6 bg-white">
                <h2 className="text-3xl font-bold text-center text-green-600 mb-12">O que nossos clientes dizem</h2>
                <div className="flex space-x-6 overflow-x-auto">
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-xs">
                        <p className="text-gray-700 mb-4">&quot;O serviço foi excepcional! Montaram meu sofá rapidamente e sem qualquer problema. Super recomendo!&quot;</p>
                        <h4 className="text-green-900 font-semibold">Carlos Silva</h4>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-xs">
                        <p className="text-gray-700 mb-4">&quot;Excelente trabalho! A montagem da cama foi rápida e bem-feita. Muito satisfeita com o atendimento!&quot;</p>
                        <h4 className="text-green-900 font-semibold">Ana Oliveira</h4>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-xs">
                        <p className="text-gray-700 mb-4">&quot;Montaram meu armário com perfeição. O time é muito profissional e atencioso!&quot;</p>
                        <h4 className="text-green-900 font-semibold">Roberto Santos</h4>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 px-6 bg-gray-50">
                <h2 className="text-3xl font-bold text-center text-green-600 mb-12">Sobre Mim</h2>
                <div className="max-w-3xl mx-auto text-center">
                    <img src="https://montafaciloficial.com.br/wp-content/uploads/2024/05/Montador-de-Moveis-Negro.webp" alt="Montador de Móveis" className="rounded-full mx-auto mb-6 w-72" />
                    <h3 className="text-2xl font-semibold text-green-900 mb-4">João dos Santos</h3>
                    <p className="text-gray-700 mb-6">
                        Sou João dos Santos, um montador de móveis dedicado com anos de experiência. Minha paixão é transformar peças soltas em móveis funcionais e esteticamente agradáveis. Trabalho diretamente com meus clientes, combinando visitas para fazer orçamentos precisos ou fornecendo orçamentos por telefone, dependendo da situação.
                        Após o acordo, vou até a casa do cliente para realizar a montagem com precisão e eficiência. Cada montagem é feita com atenção aos detalhes, garantindo a satisfação e conforto de meus clientes.
                    </p>
                    <p className="text-gray-700">
                        Estou aqui para facilitar sua vida, garantindo que seus móveis sejam montados de forma segura e eficiente. Entre em contato comigo para agendar seu serviço de montagem!
                    </p>
                </div>
            </section>

            {/* Blog Section */}
            <section id="blog" className="py-20 px-6">
                <h2 className="text-3xl font-bold text-center text-green-600 mb-12">Blog e Dicas</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
                        <img src="https://via.placeholder.com/400x300" alt="Post 1" className="w-full h-48 object-cover rounded-t-lg mb-6" />
                        <h3 className="text-xl font-semibold text-green-900 mb-3">Como Escolher o Móvel Certo para Seu Ambiente</h3>
                        <a href="#" className="text-green-600 hover:text-green-800 transition duration-300 mt-4 block">Leia Mais</a>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
                        <img src="https://via.placeholder.com/400x300" alt="Post 2" className="w-full h-48 object-cover rounded-t-lg mb-6" />
                        <h3 className="text-xl font-semibold text-green-900 mb-3">5 Dicas para Manutenção de Móveis de Madeira</h3>
                        <a href="#" className="text-green-600 hover:text-green-800 transition duration-300 mt-4 block">Leia Mais</a>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
                        <img src="https://via.placeholder.com/400x300" alt="Post 3" className="w-full h-48 object-cover rounded-t-lg mb-6" />
                        <h3 className="text-xl font-semibold text-green-900 mb-3">Por Que Contratar um Profissional para Montagem de Móveis?</h3>
                        <a href="#" className="text-green-600 hover:text-green-800 transition duration-300 mt-4 block">Leia Mais</a>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 px-6 bg-white">
                <h2 className="text-3xl font-bold text-center text-green-600 mb-12">Entre em Contato</h2>
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-gray-700 mb-6">Tem alguma dúvida ou deseja agendar um serviço? Fale com a nossa equipe!</p>
                    <form action="#" method="POST" className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-lg font-medium text-gray-700">Nome</label>
                            <input type="text" id="name" name="name" className="w-full p-4 border border-gray-300 rounded-lg" placeholder="Seu Nome" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-lg font-medium text-gray-700">E-mail</label>
                            <input type="email" id="email" name="email" className="w-full p-4 border border-gray-300 rounded-lg" placeholder="Seu E-mail" required />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-lg font-medium text-gray-700">Mensagem</label>
                            <textarea id="message" name="message" className="w-full p-4 border border-gray-300 rounded-lg resize-none" placeholder="Sua Mensagem" rows="4" required></textarea>
                        </div>
                        <button type="submit" className="bg-green-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-green-700 transition duration-300">Enviar Mensagem</button>
                    </form>
                </div>
            </section>
        </main>
    );
}

export default Home;