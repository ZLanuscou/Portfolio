import { useEffect, useRef, useState, useCallback } from 'react';
import './App.css';
import Typed from 'typed.js';
import emailjs from '@emailjs/browser';
import Particles from "react-tsparticles";
import { loadFull } from 'tsparticles';
function App() {
  const [isInter, setIsInter] = useState(false);
  const [isInterSec, setIsInterSec] = useState(false);
  const [isInterForm, setIsInterForm] = useState(false);
  const elementoRef = useRef();
  const el = useRef(null);
  const elsec = useRef(null);
 const secElement = useRef()

 const formInter = useRef();
  const form = useRef();
 
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vmghn07', 'template_4y39f9b', form.current, 'F8lfaKCMwAQPM1dUd')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
 
  const loadParticles = async function (main) {
    await loadFull(main)
   }

  useEffect(() => {
    const elemento = formInter.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsInterForm(entry.isIntersecting);
        console.log(entry.isIntersecting);
      });
    }, {
      threshold: 0.5
    });
    if (elemento) {
      observer.observe(elemento);
    }
  }, []);

  useEffect(() => {
    const elemento = elementoRef.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsInter(entry.isIntersecting);
        console.log(entry.isIntersecting);
      });
    }, {
      threshold: 0.5
    });
    if (elemento) {
      observer.observe(elemento);
    }
  }, []);

  useEffect(() => {
    const ele = secElement.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsInterSec(entry.isIntersecting);
        console.log(entry.isIntersecting);
      });
    }, {
      threshold: 0.5
    });
    if (ele) {
      observer.observe(ele);
    }
  }, []);

  useEffect(() => {
    const typed = new Typed(elsec.current, {
      strings: ['Proyectos'],
      typeSpeed: 80,
      backSpeed: 100,
      loop: true
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
 
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Zubair', 'desarrollador', 'Full-Stack'],
      typeSpeed: 80,
      backSpeed: 100,
      loop: true
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

    

  return (
    <div>
      <Particles
      id="tsparticles"
      init={loadParticles}
      options={{
        fullScreen:{
          zIndex: -1
        },
        background: {
            color: {
                value: "",
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 3,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: false,
                opacity: 0.5,
                width: 1,
            },
            move: {
              gravity:{
                acceleration: 1,
                enable: true
              },

                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 90,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true,
    }}
      />
      <div className="w-100vw bg-fixed" style={{ backgroundImage: `url('https://a-static.besthdwallpaper.com/lofi-chill-bedroom-wallpaper-2800x1050-85077_88.jpg')` }}>
        <div className="flex items-center justify-center w-screen h-screen">
          <div className="text-8xl text-center flex items-center justify-center">
            <span className="text-white">Hola! Soy </span>
            <h1 ref={el} className="text-amber-400"></h1>
          </div>
          {/* Barra de navegación dentro del mismo div */}
          <div className="absolute top-0 left-0 right-0 bg-transparent h-20 w-96 flex items-center justify-center mx-auto">
            {/* Contenido de tu barra de navegación */}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center h-full mt-20">
        <div className="bg-fixed w-3/4  " style={{ backgroundImage: `url('https://cdnb.artstation.com/p/assets/images/images/033/648/139/large/roman-parshin-scene-14.jpg?1610195917')` }}>
          <div ref={elementoRef} className="flex h-100vw w-100vw " >
            <div className="w-1/2">
              <div className={`mt-20 opacity-0 h-4/4 bg-white w-3/4 flex flex-col items-center rounded-lg ${isInter ? 'transition ease-in-out delay-150 duration-500 translate-x-1/4 opacity-100' : 'transition ease-in-out delay-150 duration-500 opacity-0'}`}  style={{ background: 'rgba(0, 0, 0, 0.6)' }}>
                <h2 className="text-5xl text-amber-400 mx-auto mt-5">Sobre mi</h2>
                <div className="mt-10 flex-column w-96 text-white text-lg mx-auto mb-10" >
                <p>Hola, ¿cómo estás? Me llamo Zubair y tengo 19 años. Soy un apasionado del mundo tech, graduado en la carrera full-stack de Henry.</p>
                  <p>Actualmente, me dedico a estudiar de forma autodidacta y busco oportunidades para contribuir y expandir mis conocimientos.</p>
                  <p>Permíteme compartir un poco más sobre mí:</p>
                  <p>Soy una persona altamente organizada y autocrítica, cualidades que he desarrollado a lo largo de mi vida. Además soy un persona muy creativa, característica que desarrollé con distintos instrumentos.</p>
                  <p>Estoy profundamente comprometido con la educación continua y estoy ansioso por formar parte de un equipo donde pueda seguir creciendo y desarrollándome en este apasionante campo.</p>
                </div>
              </div>
            </div>
            <div className={`mt-10 w-1/2 h-screen opacity-0  ${isInter ? 'transition ease-in-out delay-150 duration-500 opacity-100 translate-x-20' : 'transition ease-in-out delay-150 duration-500 opacity-0 translate-x-96'}`}>
              <img src="chico-png.webp" className="rounded-full h-3/4 w-3/4 " alt="Avatar" />
            </div>
          </div>
        </div>
      </div>
      <div className=" mx-auto h-screen bg-fixed w-3/4 shadow-2xl text-center" style={{ backgroundImage: `url('https://cdnb.artstation.com/p/assets/images/images/033/648/139/large/roman-parshin-scene-14.jpg?1610195917')` }}>
  <div className="text-8xl text-center flex items-center justify-center">
    <h1 ref={elsec} className="text-amber-400"></h1>
  </div>
  <div ref={secElement} className={` shadow-2xl shadow-red-600 bg-gradient-to-r from-orange-300 from-10% via-yellow-300 via-90% to-lime-500 to-100%  w-3/6 h-auto mt-20 mx-auto mb-10 shadow-2xl rounded-lg ${isInterSec ? 'transition ease-in-out delay-150 duration-500 scale-100 opacity-100' : 'transition ease-in-out delay-150 duration-500 opacity-0 scale-0'}`}>
  <div className="flex flex-col md:flex-row items-center justify-center text-center">
    <div className="w-full md:w-3/4 ">
      <img src="hotel.jpg" className="rounded-lg w-full " alt="Avatar" />
    </div>
    <div className='w-full md:w-1/4 mt-4 md:mt-0'>
      <div className="flex flex-row items-center justify-center">
        <div className="mr-1">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="70" height="100" viewBox="0 0 48 48">
            <path fill="#ef4823" d="M2.771,27.348c-0.507-3.402-0.287-6.486,0.411-9.854c0.231-1.115,0.536-2.227,1.075-3.232 c1.761-3.28,5.685-4.823,9.4-5.24c3.715-0.416,7.283-0.221,11.015-0.437c5.51-0.319,10.337,0.289,15.482,1.48 c0.795,0.184,1.606,0.375,2.297,0.807c1.592,0.996,2.172,3.002,2.485,4.847c0.944,5.56,0.612,11.258-0.034,16.86 c-0.169,1.462-0.396,3.008-1.345,4.137c-0.848,1.008-2.146,1.522-3.422,1.867c-3.363,0.909-6.898,0.904-10.384,0.893 c-4.226-0.014-8.453-0.027-12.679-0.041c-4.114-0.013-8.593-0.152-11.757-2.766c-0.681-0.562-1.288-1.243-1.615-2.061 c-0.238-0.594-0.319-1.236-0.399-1.87C3.043,30.684,3.076,29.396,2.771,27.348z"></path><path fill="#010101" d="M46.014,22.201c-0.043-2.331-0.227-4.68-0.66-6.974c-0.32-1.695-0.914-3.51-2.355-4.582 c-0.828-0.616-1.837-0.861-2.826-1.088c-1.117-0.257-2.239-0.491-3.367-0.693c-2.19-0.393-4.403-0.67-6.625-0.791 c-2.37-0.129-4.715,0.005-7.082,0.083c-2.385,0.078-4.773,0.044-7.156,0.178C12.206,8.545,8.202,9.239,5.4,11.945 c-1.462,1.412-2.226,3.233-2.653,5.193c-0.493,2.258-0.786,4.579-0.75,6.892c0.018,1.157,0.127,2.306,0.292,3.451 c0.309,2.133,0.248,4.331,0.692,6.444c0.41,1.951,1.987,3.338,3.682,4.242c3.576,1.908,7.845,1.759,11.778,1.772 c4.917,0.016,9.85,0.142,14.766,0.013c2.371-0.062,4.766-0.263,7.063-0.887c1.88-0.511,3.625-1.413,4.428-3.285 c0.382-0.89,0.537-1.846,0.657-2.801c0.148-1.173,0.266-2.352,0.369-3.53C45.936,27.04,46.059,24.62,46.014,22.201z M44.402,32.579 c-0.235,2.017-0.695,3.903-2.647,4.888c-1.855,0.936-4.13,1.202-6.173,1.365c-4.485,0.358-9.042,0.134-13.537,0.119 c-2.184-0.007-4.37,0.012-6.554-0.032c-1.836-0.037-3.685-0.145-5.477-0.573c-1.788-0.427-3.56-1.193-4.874-2.512 c-1.49-1.496-1.431-3.717-1.579-5.693c-0.073-0.979-0.168-1.954-0.308-2.926c-0.319-2.207-0.333-4.443-0.074-6.658 c0.244-2.092,0.565-4.432,1.642-6.278c1.748-2.998,5.377-4.328,8.657-4.736c2.197-0.274,4.422-0.298,6.633-0.329 c2.202-0.031,4.398-0.168,6.599-0.206c4.259-0.074,8.481,0.461,12.633,1.384c0.959,0.213,2.013,0.378,2.857,0.911 c0.754,0.476,1.265,1.246,1.599,2.058c0.744,1.809,0.912,3.9,1.069,5.828C45.23,23.651,44.92,28.143,44.402,32.579z"></path><path fill="#d6e5e5" d="M19.6,17.534C19,22,19.78,26.353,19.7,30.466c3.819-2.139,7.937-4.278,11.757-6.417 c-1.568-0.967-3.336-1.955-4.998-2.75C24.247,20.242,21.461,18.791,19.6,17.534z"></path><path fill="#010101" d="M31.709,23.617c-3.848-2.363-8.1-4-11.857-6.515c-0.154-0.103-0.302-0.098-0.426-0.041 c-0.147,0.036-0.272,0.138-0.308,0.339c-0.431,2.392-0.563,4.791-0.357,7.213c0.166,1.952,0.469,3.887,0.439,5.851 c-0.006,0.386,0.427,0.614,0.752,0.432c3.897-2.179,7.86-4.237,11.757-6.417C32.044,24.293,32.022,23.81,31.709,23.617z M19.775,24.774c-0.192-2.15-0.119-4.281,0.206-6.408c3.349,2.13,7.034,3.667,10.461,5.667c-3.407,1.889-6.852,3.71-10.259,5.599 C20.137,28.007,19.919,26.396,19.775,24.774z"></path>
          </svg>
        </div>
        <div className="mr-4">
          <svg  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="70" height="100" viewBox="0 0 48 48">
            <path fill="#ef4823" d="M3.746,21.482c-0.078,1.981-0.24,3.956-0.108,5.934c0.233,3.475,0.834,7.105,3.037,9.866 c1.203,1.508,2.812,2.66,4.416,3.768c2.024,1.397,4.156,2.787,6.602,3.238c1.242,0.229,2.52,0.205,3.782,0.131 c4.225-0.248,8.467-1.07,12.241-2.915c3.775-1.845,7.063-4.777,8.785-8.502c1.018-2.203,1.469-4.622,1.546-7.032 c0.25-7.81-3.835-15.873-10.96-19.607c-0.819-0.429-1.674-0.803-2.572-1.048c-1.214-0.332-2.483-0.426-3.742-0.518 c-2.404-0.175-4.84-0.349-7.21,0.078S4.222,9.316,3.746,21.482z"></path><path fill="#38b47b" d="M6.938,12.728c0.726,3.424,2.526,6.829,4.381,9.72c1.625,2.531,2.994,4.911,4.981,7.106 c0,0,6.251,8.113,14.939,0c-2.003,4.541-4.901,11.736-8.452,14.749c-3.64,0.692-11.172-0.328-17.008-8.336 C2.192,31.045,3.254,16.442,6.938,12.728z"></path><path fill="#febf10" d="M23,44.471c0,0,8.559-11.653,9.517-19.742c0.395-3.332-1.988-8.659-8.517-9.15 c10.016-0.087,18.088,0.079,18.088,0.079s4.588,9.886,0,17.916S30.368,43.809,23,44.471z"></path><path fill="#010101" d="M36.721,8.195c-1.768-1.465-3.842-2.756-6.072-3.364c-1.339-0.365-2.737-0.453-4.115-0.553 c-1.444-0.104-2.892-0.202-4.341-0.161c-2.381,0.067-4.509,0.632-6.684,1.554C9.885,8.055,4.869,12.479,3.587,18.679 c-0.191,0.923-0.299,1.862-0.34,2.804c-0.205,5.03-0.493,10.687,2.339,15.129c1.351,2.118,3.393,3.592,5.433,4.993 c2.133,1.465,4.401,2.871,7.01,3.24c2.571,0.364,5.321,0.008,7.868-0.411c2.643-0.436,5.236-1.172,7.667-2.303 c4.13-1.921,7.818-5.153,9.605-9.411C46.655,24.415,43.549,13.852,36.721,8.195z M36.188,39.489 c-4.084,2.797-9.039,4.005-13.92,4.376c-1.284,0.098-2.59,0.176-3.872,0.026c-1.304-0.153-2.552-0.602-3.715-1.199 c-2.116-1.085-4.21-2.521-6.007-4.077c-1.814-1.571-3.026-3.533-3.691-5.834c-0.67-2.322-0.911-4.807-0.893-7.218 c0.01-1.361,0.101-2.721,0.157-4.08c0.148-3.359,1.351-6.554,3.524-9.128c1.769-2.096,4.017-3.732,6.447-4.981 c1.618-0.831,3.348-1.539,5.127-1.944c2.025-0.461,4.17-0.353,6.226-0.218c1.374,0.09,2.773,0.146,4.125,0.421 c1.226,0.25,2.374,0.735,3.467,1.337c7.377,4.06,11.346,12.952,10.206,21.189C42.715,32.878,40.096,36.813,36.188,39.489z"></path><path fill="#c0e6ed" d="M26.955,16.253c-2.757-0.936-5.241-1.091-7.774,0.351s-4.335,4.345-4.487,7.436 s1.408,6.24,3.931,7.703c1.171,0.679,2.492,0.999,3.81,1.177c1.414,0.191,2.867,0.225,4.247-0.158 c3.422-0.951,5.987-4.697,5.828-8.513C32.352,20.433,30.305,17.391,26.955,16.253z"></path><path fill="#010101" d="M27.088,15.771c-2.014-0.67-4.166-1.017-6.244-0.416c-1.893,0.548-3.525,1.749-4.702,3.317 c-2.365,3.15-2.612,7.558-0.456,10.885c1.08,1.666,2.65,2.834,4.549,3.412c2.083,0.633,4.552,0.868,6.662,0.251 c3.539-1.035,5.932-4.643,6.11-8.234C33.207,20.956,30.94,17.124,27.088,15.771z M27.784,31.788 c-1.728,0.913-3.772,0.888-5.656,0.585c-1.863-0.3-3.598-0.976-4.88-2.403c-2.346-2.614-2.66-6.555-1.008-9.602 c0.933-1.721,2.426-3.147,4.271-3.847c2.087-0.793,4.245-0.472,6.311,0.216c3.013,1.058,4.862,3.831,5.151,6.956 C32.27,26.9,30.683,30.256,27.784,31.788z"></path><path fill="#4b7bb2" d="M22.546,18.596c-2.647,0-4.935,2.884-4.921,5.808c0.007,1.388,0.507,2.802,1.47,3.693 c0.763,0.705,1.743,1.04,2.695,1.358c1.691,0.565,3.56,1.122,5.174,0.328c1.825-0.897,2.713-3.347,2.496-5.541 C29.218,21.791,28.189,18.596,22.546,18.596z"></path><path fill="#010101" d="M29.164,21.271c-1.271-2.453-4.047-3.158-6.617-3.176c-2.842,0.062-4.966,2.71-5.349,5.369 c-0.215,1.495,0.084,3.118,0.987,4.351c0.955,1.304,2.487,1.812,3.966,2.284c1.542,0.493,3.264,0.886,4.82,0.227 c1.264-0.535,2.112-1.669,2.584-2.927C30.271,25.484,30.108,23.095,29.164,21.271z M27.775,28.524 c-0.936,1.07-2.29,1.297-3.642,1.061c-1.328-0.232-2.844-0.673-4.013-1.356c-1.173-0.685-1.821-1.928-1.964-3.257 c-0.278-2.583,1.548-5.815,4.391-5.876c1.917,0.013,4.086,0.37,5.326,1.994c0.875,1.145,1.188,2.764,1.111,4.178 C28.92,26.421,28.547,27.642,27.775,28.524z"></path><path fill="#010101" d="M23.6,16.048c2.981,0.01,5.961-0.018,8.942-0.044c1.443-0.012,2.887-0.024,4.33-0.029 c0.773-0.003,1.547-0.004,2.32-0.002c0.778,0.002,1.562-0.032,2.321,0.168c0.623,0.164,0.889-0.8,0.266-0.964 c-1.408-0.371-2.978-0.206-4.421-0.203c-1.526,0.004-3.051,0.015-4.577,0.028c-3.06,0.026-6.121,0.056-9.181,0.046 C22.956,15.046,22.956,16.046,23.6,16.048L23.6,16.048z"></path><path fill="#010101" d="M31.418,27.699c-2.147,5.8-5.077,11.285-8.619,16.352c-0.37,0.529,0.497,1.029,0.863,0.505 c3.593-5.14,6.542-10.708,8.72-16.591C32.606,27.36,31.64,27.099,31.418,27.699L31.418,27.699z"></path><path fill="#010101" d="M6.455,12.861c0.711,3.249,2.222,6.277,3.96,9.09c1.692,2.739,3.375,5.551,5.531,7.956 c0.43,0.48,1.136-0.229,0.707-0.707c-2.098-2.34-3.728-5.089-5.375-7.754c-1.697-2.745-3.165-5.681-3.859-8.851 C7.282,11.967,6.318,12.233,6.455,12.861L6.455,12.861z"></path>
          </svg>
        </div>
      </div>
      <div className="text-slate-600 text-xs mt-2">
        <span>SPA sobre un hotel, en el cual estuve a cargo y realicé la Dashboard-Admin</span>
      </div>
    </div>
  </div>
</div>
</div>
<div ref={formInter} className=''> 
<div  className={`flex h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-fixed w-3/4 mx-auto `} style={{ backgroundImage: `url('https://cdnb.artstation.com/p/assets/images/images/033/648/139/large/roman-parshin-scene-14.jpg?1610195917')` }}>
       <div className={`bg-gradient-to-r from-orange-300 from-10% via-yellow-300 via-40% to-lime-500 to-100% w-2/6 mx-auto h-3/4 shadow-2xl rounded-lg ${isInterForm ? 'transition ease-in-out delay-50 duration-500 opacity-100 -translate-x-2 rotate-0 skew-y-0' : 'transition ease-in-out delay-150 duration-500 opacity-0 skew-y-12 rotate-180'}`}> 
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Contacteme
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form ref={form} onSubmit={sendEmail} className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
                  name="user_email"
                  type="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Nombre
                </label>
             
              </div>
              <div className="mt-2">
                <input  
                  name="user_name"
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mt-5">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900 ">
                  Mensaje
                </label>
             
              </div>
              <div className="mt-5">
                <textarea
                  name="message"
                  
                  className="  block w-full h-20 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                value="Send"
                className=" mt-20 flex w-full  justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Enviar
              </button>
            </div>
          </form>

         
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
