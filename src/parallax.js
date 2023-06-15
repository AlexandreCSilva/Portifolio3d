import { useRef } from "react";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import styled from 'styled-components';

function Content() {
    const parallax = useRef()
    let text = "Olá mundo!"
    
    setTimeout(() => {
        text+= '.'
    }, 100);
    

    return (
        <Wrapper>
            <Parallax ref={parallax} pages={8} style={{ overflow: "hidden"}}>
                <ParallaxLayer 
                    offset={0} 
                    speed={1}
                    onClick={() => parallax.current.scrollTo(1)}
                    style={{ background: "#634832" }}
                >
                    <span>Olá Mundo!</span>
                </ParallaxLayer>
                
                <ParallaxLayer 
                    offset={0.9} 
                    speed={1.2}
                    onClick={() => parallax.current.scrollTo(1)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 1320" >
                        <rect fill="#967259" width={2000} height={5000} />
                        <path fill="#634832" fill-opacity="1" d="M0,224L60,202.7C120,181,240,139,360,122.7C480,107,600,117,720,144C840,171,960,213,1080,208C1200,203,1320,149,1380,122.7L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
                    </svg>
                </ParallaxLayer>

                <ParallaxLayer 
                    offset={1} 
                    speed={1}
                    onClick={() => parallax.current.scrollTo(2)}
                >
                    <svg viewBox="0 0 1440 2220">
                        <rect fill="#dbc1ac" width={2000} height={5000} />
                        <path fill="#967259" fill-opacity="1" d="M0,160L60,149.3C120,139,240,117,360,117.3C480,117,600,139,720,176C840,213,960,267,1080,277.3C1200,288,1320,256,1380,240L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
                    </svg>
                </ParallaxLayer>

                <ParallaxLayer 
                    offset={1.6} 
                    speed={0.6}
                    onClick={() => parallax.current.scrollTo(2)}
                    style={{ marginLeft: "40px", marginTop: "20px" }}
                >
                    <svg width={100} height={100} version="1.1" id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" style={{ rotate: "20deg" }} >
                        <path fill="#634832" id="nav:2_1_" d="M110.5 12.7c-9.7 0-17.5 7.7-17.5 17.1 0 4.2 5.2 13.1 5.2 13.1l8.8 14.5c-13.2.8-33.4 7.5-34 28.9-.1 4.9-2 8.9-5.7 12.3-10.5 9.7-32.5 10.9-40.6 11l12.5-21.8s8-12.1 8-17.7c0-12.8-10.6-23.2-23.7-23.2C10.6 46.9 0 57.3 0 70.1c0 5.7 7.1 17.7 7.1 17.7L23.6 115v.3H26c7.9 0 32.8-1 45.3-12.5 4.8-4.4 7.3-9.9 7.5-16.3.6-23.2 29.1-23.6 31.7-23.5h.1l.1-.1 11.5-20s5.9-8.9 5.9-13.1c-.1-9.4-7.9-17.1-17.6-17.1zM23.7 82c-7.7 0-14-6.1-14-13.6s6.3-13.7 14-13.7 14 6.1 14 13.7c0 7.5-6.3 13.6-14 13.6zm86.8-43.4c-5.7 0-10.3-4.5-10.3-10.1s4.6-10.1 10.3-10.1c5.7 0 10.3 4.5 10.3 10.1s-4.6 10.1-10.3 10.1z"/>
                    </svg>
                </ParallaxLayer>
                
                <ParallaxLayer 
                    offset={1} 
                    speed={1}
                    onClick={() => parallax.current.scrollTo(2)}
                >
                    <span>
                        <h1 style={{ position: "fixed", top: "10px", left: "20px" }}>Meu nome é Alexandre</h1>
                        <h2 style={{ position: "fixed", top: "80px", left: "20px" }}>Tenho 22 anos</h2>
                        <h3 style={{ position: "fixed", top: "110px", left: "20px", width: "160px" }}>Nascido e criado no interior de São Paulo</h3>
                    </span>
                </ParallaxLayer>

                <ParallaxLayer 
                    offset={1} 
                    speed={0.4}
                    onClick={() => parallax.current.scrollTo(2)}
                >
                    <span>
                        <span>
                            <img src="/images/Untitled.jpeg"></img>
                        </span>
                    </span>
                </ParallaxLayer>
                
                <ParallaxLayer 
                    offset={2.3} 
                    speed={1}
                    onClick={() => parallax.current.scrollTo(3)}
                >
                    <svg viewBox="0 0 1440 2220">
                        <rect fill="#967259" width={2000} height={5000} />
                        <path fill="#dbc1ac" fill-opacity="1" d="M0,128L60,122.7C120,117,240,107,360,96C480,85,600,75,720,101.3C840,128,960,192,1080,197.3C1200,203,1320,149,1380,122.7L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
                    </svg>
                </ParallaxLayer>

                <ParallaxLayer 
                    offset={2} 
                    speed={1}
                    onClick={() => parallax.current.scrollTo(3)}
                >
                    <span>
                        <h3 style={{ position: "fixed", top: "10px", right: "10px", width: "160px", textAlign: "right" }}>Desde pequeno eu sempre apaixonado por Matemática, e aos 18 passei em</h3>
                        <h1 style={{ position: "fixed", top: "65px", right: "10px",  width: "200px", textAlign: "right"  }}>Matemática na USP</h1>
                    </span>
                </ParallaxLayer>

                <ParallaxLayer 
                    offset={2.4} 
                    speed={0.4}
                    onClick={() => parallax.current.scrollTo(3)}
                >
                    <svg width={80} height={80} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" style={{ rotate: "20deg", margin: "20px"}}>
                        <path d="M93.499 65.11c-1.906 33.144 4.526 36.395 4.526 36.395 11.593 11.259 23.861-12.568 23.861-12.568h5.796c-1.27 24.461-16.437 33.183-16.437 33.183-35.137 13.836-37.717-21.29-37.717-21.29l6.313-79.688c-9.965 0-20.169.04-29.102.159l-2.382 36.077c-.635 30.923-8.377 54.076-8.377 54.076-5.797 19.03-20.328 13.876-20.328 13.876-16.119-7.096-8.377-20.616-8.377-20.616C39.98 75.775 38.988 32.165 38.233 21.5c-5.32.119-9.568.278-12.109.476C9.687 23.245 3.851 39.975 3.851 39.975L0 38.706s3.216-25.77 20.963-32.192C38.63.092 128 2.312 128 2.312v18.99s-13.816-.119-31.404-.159L93.499 65.11z"/>
                    </svg>
                </ParallaxLayer>

                <ParallaxLayer 
                    offset={3.4} 
                    speed={0.6}
                    onClick={() => parallax.current.scrollTo(4)}
                >
                    <svg viewBox="0 0 1440 2220">
                        <rect fill="#634832" width={2000} height={5000} />
                        <path fill="#967259" fill-opacity="1" d="M0,192L34.3,181.3C68.6,171,137,149,206,170.7C274.3,192,343,256,411,282.7C480,309,549,299,617,256C685.7,213,754,139,823,128C891.4,117,960,171,1029,186.7C1097.1,203,1166,181,1234,192C1302.9,203,1371,245,1406,266.7L1440,288L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
                    </svg>
                </ParallaxLayer>

                <ParallaxLayer 
                    offset={3} 
                    speed={1}
                    onClick={() => parallax.current.scrollTo(4)}
                >
                    <span>
                        <h3 style={{ position: "fixed", top: "10px", left: "10px", color: "white" }}>Foi lá onde conheci a programação</h3>
                        <h1 style={{ position: "fixed", top: "25px", left: "10px" }}>E foi amor a primeira vista!</h1>
                        <h3 style={{ position: "fixed", top: "95px", left: "10px", color: "white", width: "180px" }}>E de lá pra cá já fiz muita coisa...</h3>
                    </span>
                </ParallaxLayer>

                <ParallaxLayer 
                    offset={3.55} 
                    speed={1.4}
                    onClick={() => parallax.current.scrollTo(4)}
                >
                    <svg width={80} height={80} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" style={{ rotate: "-20deg", marginLeft: "230px" }} >
                        <path d="M58.492 5.872H5.508A4.513 4.513 0 0 0 1 10.38v43.24a4.513 4.513 0 0 0 4.508 4.508h52.984A4.513 4.513 0 0 0 63 53.62V10.38a4.513 4.513 0 0 0-4.508-4.508zm-52.984 2h52.984A2.51 2.51 0 0 1 61 10.38v6.889H3v-6.89a2.51 2.51 0 0 1 2.508-2.507zm52.984 48.256H5.508A2.51 2.51 0 0 1 3 53.62V19.27h58V53.62a2.51 2.51 0 0 1-2.508 2.508z"/><path d="M46.724 15.784a3.22 3.22 0 0 0 3.217-3.214c0-1.774-1.443-3.218-3.217-3.218s-3.218 1.444-3.218 3.218a3.22 3.22 0 0 0 3.218 3.214zm0-4.432c.671 0 1.217.546 1.217 1.218a1.218 1.218 0 0 1-2.435 0c0-.672.546-1.218 1.218-1.218zM37.929 15.784a3.22 3.22 0 0 0 3.217-3.214 3.221 3.221 0 0 0-3.217-3.218 3.221 3.221 0 0 0-3.218 3.218 3.22 3.22 0 0 0 3.218 3.214zm0-4.432c.671 0 1.217.546 1.217 1.218a1.218 1.218 0 0 1-2.435 0c0-.672.546-1.218 1.218-1.218zM55.519 15.784a3.22 3.22 0 0 0 3.217-3.214 3.221 3.221 0 0 0-3.217-3.218A3.221 3.221 0 0 0 52.3 12.57a3.22 3.22 0 0 0 3.218 3.214zm0-4.432A1.217 1.217 0 1 1 54.3 12.57c0-.672.546-1.218 1.218-1.218zM6.964 23.416a.999.999 0 0 0-.2 1.4l.011.013c.195.26.49.397.791.397a1.006 1.006 0 0 0 .798-1.61 1 1 0 0 0-1.4-.2zM7.275 31.492a1.006 1.006 0 0 0 .798-1.61 1 1 0 1 0-1.6 1.2l.01.014c.196.26.492.396.792.396zM6.484 37.386c.195.26.49.396.79.396a1.006 1.006 0 0 0 .798-1.61 1 1 0 0 0-1.598 1.2l.01.014zM6.484 43.922c.195.26.49.396.79.396a1.006 1.006 0 0 0 .798-1.61 1 1 0 1 0-1.598 1.2l.01.014zM6.77 48.477a1 1 0 0 0-.36 1.369l.01.017c.185.317.514.49.853.49.173 0 .349-.044.51-.138.476-.278.633-.9.354-1.377a1.003 1.003 0 0 0-1.368-.36zM44.062 44.34a1 1 0 0 0-1.407-.149l-3.042 2.46a.999.999 0 0 0 0 1.556l3.043 2.457a.996.996 0 0 0 1.406-.15 1 1 0 0 0-.15-1.407l-2.08-1.678 2.081-1.683a1 1 0 0 0 .149-1.406zM48.301 44.026a1 1 0 0 0-1.277.607l-1.752 4.917a1 1 0 0 0 1.884.672l1.752-4.917a1 1 0 0 0-.607-1.279zM51.51 44.191a1 1 0 1 0-1.258 1.555l2.08 1.683-2.079 1.678a1 1 0 0 0 1.257 1.557l3.042-2.457a1.001 1.001 0 0 0 0-1.555l-3.042-2.46zM13.769 37.78h13.756a1 1 0 1 0 0-2H13.77a1 1 0 1 0 0 2zM33.713 42.063H13.769a1 1 0 1 0 0 2h19.944a1 1 0 1 0 0-2zM25.164 48.342H13.77a1 1 0 1 0 0 2h11.395a1 1 0 1 0 0-2zM13.769 31.496h13.756a1 1 0 1 0 0-2H13.77a1 1 0 1 0 0 2zM13.769 25.216h13.756a1 1 0 1 0 0-2H13.77a1 1 0 1 0 0 2zM47.966 23.216H34.209a1 1 0 1 0 0 2h13.757a1 1 0 1 0 0-2zM47.966 35.78H34.209a1 1 0 1 0 0 2h13.757a1 1 0 1 0 0-2z"/>
                    </svg>
                </ParallaxLayer>
                
                <ParallaxLayer 
                    offset={4.6} 
                    speed={0.6}
                    onClick={() => parallax.current.scrollTo(5)}
                >
                    <svg viewBox="0 0 1440 2220">
                        <rect fill="#967259" width={2000} height={5000} />
                        <path fill="#634832" fill-opacity="1" d="M0,96L40,133.3C80,171,160,245,240,234.7C320,224,400,128,480,96C560,64,640,96,720,138.7C800,181,880,235,960,261.3C1040,288,1120,288,1200,266.7C1280,245,1360,203,1400,181.3L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
                    </svg>
                </ParallaxLayer>
                
                <ParallaxLayer 
                    offset={4} 
                    speed={1}
                    onClick={() => parallax.current.scrollTo(5)}
                >
                    <span>
                        <h3 style={{ position: "fixed", top: "10px", right: "10px", width: "180px", textAlign: "right", color: "white" }}>Mentorei por 1 ano um grupo de alunos dando um curso de</h3>
                        <h1 style={{ position: "fixed", top: "45px", right: "10px",  width: "200px", textAlign: "right"  }}>Lógica de programação</h1>
                        <h3 style={{ position: "fixed", top: "115px", right: "10px", width: "170px", textAlign: "right", color: "white" }}>Desenvolvendo projetos, avaliando código dos alunos e dando aulas.</h3>
                    </span>
                </ParallaxLayer>

                <ParallaxLayer 
                    offset={4.4} 
                    speed={0.4}
                    onClick={() => parallax.current.scrollTo(5)}
                >
                    <svg width={120} height={120} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" style={{ rotate: "20deg" }}>
                        <path d="M182.56 102.095a5.171 5.171 0 0 1-4.457-2.532 32.821 32.821 0 0 0-4.986-6.408c-6.176-6.173-14.385-9.574-23.118-9.574a5.178 5.178 0 0 1 0-10.356c11.498 0 22.309 4.478 30.438 12.608a43.08 43.08 0 0 1 6.568 8.439 5.179 5.179 0 0 1-4.445 7.823zM149.999 247.485c-17.959 0-32.57-14.61-32.57-32.568a5.18 5.18 0 0 1 5.178-5.179h21.929a5.179 5.179 0 0 1 0 10.355h-16.141c2.34 9.762 11.141 17.037 21.605 17.037 12.252 0 22.218-9.965 22.218-22.213a5.176 5.176 0 1 1 10.353 0c-.002 17.958-14.611 32.568-32.572 32.568z"/><path d="M162.003 220.093h-1.723a5.177 5.177 0 0 1 0-10.355h1.723a5.179 5.179 0 0 1 0 10.355zM177.39 199.997a5.175 5.175 0 0 1-5.174-5.178c0-15.098 6.247-31.488 15.543-40.788 10.086-10.085 15.642-23.496 15.642-37.761 0-14.264-5.556-27.672-15.642-37.761-10.086-10.085-23.494-15.64-37.761-15.64-14.263 0-27.673 5.555-37.757 15.64-10.087 10.09-15.641 23.498-15.641 37.762 0 14.265 5.554 27.676 15.642 37.761 8.242 8.245 14.085 22.062 15.308 35.61h29.01l10.204-63.78-5.865 2.667a5.176 5.176 0 0 1-5.277-.591L150 123.664l-5.618 4.274a5.18 5.18 0 0 1-5.275.591l-5.866-2.667 8.068 50.433a5.178 5.178 0 0 1-10.226 1.635l-9.594-59.952a5.185 5.185 0 0 1 1.975-4.936 5.188 5.188 0 0 1 5.283-.597l11.828 5.377 6.293-4.783a5.176 5.176 0 0 1 6.268 0l6.292 4.783 11.831-5.377a5.18 5.18 0 0 1 7.255 5.533l-12.427 77.659a5.176 5.176 0 0 1-5.111 4.361h-38.368a5.18 5.18 0 0 1-5.178-5.178c0-12.141-5.262-26.216-12.51-33.465-12.043-12.042-18.673-28.053-18.673-45.084 0-17.029 6.63-33.039 18.673-45.082 12.042-12.041 28.052-18.674 45.08-18.674 17.031 0 33.042 6.633 45.085 18.674 12.041 12.043 18.671 28.053 18.671 45.082 0 17.031-6.63 33.042-18.671 45.084-7.252 7.249-12.515 21.324-12.515 33.465a5.179 5.179 0 0 1-5.18 5.177z"/>
                    </svg>
                </ParallaxLayer>

                <ParallaxLayer 
                    offset={5.4} 
                    speed={0.6}
                    onClick={() => parallax.current.scrollTo(6)}
                >
                    <svg viewBox="0 0 1440 2220">
                        <rect fill="#dbc1ac" width={2000} height={5000} />
                        <path fill="#967259" fill-opacity="1" d="M0,192L26.7,197.3C53.3,203,107,213,160,229.3C213.3,245,267,267,320,277.3C373.3,288,427,288,480,266.7C533.3,245,587,203,640,170.7C693.3,139,747,117,800,144C853.3,171,907,245,960,245.3C1013.3,245,1067,171,1120,122.7C1173.3,75,1227,53,1280,80C1333.3,107,1387,181,1413,218.7L1440,256L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path>
                    </svg>
                </ParallaxLayer>

                <ParallaxLayer 
                    offset={5} 
                    speed={1}
                    onClick={() => parallax.current.scrollTo(6)}
                >
                    <span>
                        <h3 style={{ position: "fixed", top: "10px", left: "10px", color: "white", width: "250px" }}>Depois disso eu tive a oportunidade de fazer um bootcamp de programação com a </h3>
                        <h1 style={{ position: "fixed", top: "45px", left: "10px" }}>Driven Education</h1>
                        <h3 style={{ position: "fixed", top: "80px", left: "10px", color: "white", width: "210px" }}>Onde fiz +25 projetos, aprendi diversas tecnologias e decidi ir de cabeça na area</h3>
                    </span>
                </ParallaxLayer>

                <ParallaxLayer 
                    offset={5.55} 
                    speed={1.4}
                    onClick={() => parallax.current.scrollTo(6)}
                >
                    <span>
                        <span style={{ top: "-10%" }}>
                            <img src="/images/driven.jpg"></img>
                        </span>
                    </span>
                </ParallaxLayer>

                <ParallaxLayer 
                    offset={6.4} 
                    speed={0.6}
                    onClick={() => parallax.current.scrollTo(7)}
                >
                    <svg viewBox="0 0 1440 2220">
                        <rect fill="#967259" width={2000} height={5000} />
                        <path fill="#dbc1ac" fill-opacity="1" d="M0,96L40,133.3C80,171,160,245,240,234.7C320,224,400,128,480,96C560,64,640,96,720,138.7C800,181,880,235,960,261.3C1040,288,1120,288,1200,266.7C1280,245,1360,203,1400,181.3L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
                    </svg>
                </ParallaxLayer>
                
                <ParallaxLayer 
                    offset={6} 
                    speed={1}
                    onClick={() => parallax.current.scrollTo(7)}
                >
                    <span>
                        <h3 style={{ position: "fixed", top: "10px", right: "10px", width: "180px", textAlign: "right", color: "#634832" }}>Fiz um curso técnico em</h3>
                        <h1 style={{ position: "fixed", top: "25px", right: "10px",  width: "240px", textAlign: "right", fontSize: "20px"  }}>Análise e desenvolvimento de Software Júnior</h1>
                        <h3 style={{ position: "fixed", top: "90px", right: "10px", width: "170px", textAlign: "right", color: "#634832" }}>Pela empresa Luz Soluções financeiras, aprendendo novas tecnologias e uma base teórica muito forte de computação.</h3>
                    </span>
                </ParallaxLayer>

                <ParallaxLayer 
                    offset={6.4} 
                    speed={0.4}
                    onClick={() => parallax.current.scrollTo(7)}
                >
                    <span>
                        <span style={{ top: "0%", left: "-10%", rotate: "30deg" }}>
                            <img src="/images/luz.jpeg"></img>
                        </span>
                    </span>
                </ParallaxLayer>

                <ParallaxLayer 
                    offset={7} 
                    speed={0.6}
                >
                    <svg viewBox="0 0 1440 2220">
                        <rect fill="#634832" width={2000} height={5000} />
                        <path fill="#967259" fill-opacity="1" d="M0,320L40,320C80,320,160,320,240,309.3C320,299,400,277,480,224C560,171,640,85,720,80C800,75,880,149,960,176C1040,203,1120,181,1200,160C1280,139,1360,117,1400,106.7L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
                    </svg>
                </ParallaxLayer>

                <ParallaxLayer 
                    offset={7} 
                    speed={1}
                >
                    <span>
                        <h4>
                           E essa é a minha jornada...
                           pelo menos até agora!
                        </h4>
                    </span>
                </ParallaxLayer>

            </Parallax>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 332px;
    height: 220px;
    border-radius: 2px;
    font-size: 20px;

    span {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        h1 {
            font-size: 30px;
        }

        h3,
        h2 {
            color: #634832
        }

        h3 {
            font-size: 12px;
        }

        h4 {
            text-align: center;
        }

        span {
            width: 160px;
            height: 170px;
            background-color: white;
            border-radius: 5px;
            position: fixed;
            right: -30px;
            top: 30%;
            rotate: -20deg;

            img {
                width: 140px;
                height: 150px;
                object-fit: fill;
            }
        }
    }
`

export default Content;