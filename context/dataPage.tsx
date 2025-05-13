export const dataPage = {
  nombre: "Jorge Ortega",
  email: "garridomateo74@gmail.com",
  telefono: "096 271 6235",
  social: {
    github: "https://github.com/jorgeortega123",
    linkedin: "https://www.linkedin.com/in/jorge-ortega-quito/",
  },
  trabajos: [
    {
      title: "Licoreria Spondylus",
      sub: "Ecommerce para venta de licores",
      update:
        "ACTUALIZACIÓN: Actualmente la licorería ha cerrado y con ello cancelado totalmente el desarrollo, considere que la aplicación está un 60% terminado",
      description:
        "Aplicación web que permite la compra de bebidas. Este proyecto consistió en adaptar una tienda física a una tienda en línea, gestionando todos los parámetros correspondientes como inventario, precios, descuentos, entre otros. Además, incluye la integración de una API con un servicio de mensajería para la entrega de bebidas. ",
      tags: [
        "React",
        "NextJs",
        "TypeScript",
        "MongoDb",
        "MongoAtlas",
        "Tailwindcss",
        "Realm",
        "Cloudflare",
        "PedidoYaEnvios-Api",
      ],
      link: "https://spondylus.pages.dev/",
      img: "/assets/cases/casoLicoreria.jpg",
    },
    {
      title: "Jandrea",
      sub: "Ecommerce para venta de servicios como Corte Láser, Impresión 3D y otros objetos personalizables",
      description:
        "App web enfocada en un catálogo intereractivo. Aún sigo brindando ciertas mejoras visuales y optimización de interfaz. Acompañado de la página tambien realice marketing en redes sociales para impulsar las ventas en línea",
      tags: [
        "React",
        "NextJs",
        "TypeScript",
        "MongoDb",
        "MongoAtlas",
        "Realm",
        "Cloudflare",
        "Firebase",
      ],
      link: "https://www.jandrea.art/",
      img: "/assets/cases/casoJandrea.jpg",
    },
  ],
  proyects: [
    {
      img: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1686773569/Frame_2_ixg8vx.png",
      title: "Jet Match",
      about: `Registra tus <span class="text-bold">rutinas </span> y <span class="text-bold">préstamos bancarios</span>  de manera visual y motivadora, Con esta aplicación, podrás <span class="text-bold">pintar</span>  un cuadro por cada interacción que realices, viendo así tu progreso y logros de forma tangible`,
      tags: ["NextJs", "React", "TypeScript", "PostgreeSQL"],

      web: "https://jetmatch.pages.dev",
      repo: "https://github.com/jorgeortega123/JetMatch",
      onGroup: false,
    },
    {
      title: "My Money",
      img: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1688088931/Frame_1_qdkriy.png",
      about: `        Una billetera digital que permite tener gestionado los
        <span class="text-bold">egresos personales</span> del usuario en un
        determinado tiempo. Almacena en el
        historial todas las
        <span class="text-bold">transacciones</span> del usuario a través de
        costos y gastos, fijos y variables que permiten hacer
        <span class="text-bold">ciencias de datos</span> con la información
        obtenida.`,
      tags: [
        "React",
        "Typescript",
        "Express",
        "TailwindCss",
        "TelegramApi",
        "GoogleApi",
      ],

      web: "https://mymoneyapp.pages.dev/app/myMoney",
      repo: "https://github.com/jorgeortega123/MyMoneyApp",
      onGroup: false,
    },
    {
      title: "CountDowns",
      about: `Página web que permite crear
      <span class="text-bold">conteos regresivos</span>, ya sea para recordar
      alguna <span class="text-bold">fecha importante</span> o para tener en
      cuenta cuantos días falta para que una fecha específica suceda. Tiene
      conteos predefinidos. Como
      <span class="text-bold">eventos astronómicos</span>, feriados y
      <span class="text-bold">sucesos mundiales</span>.`,
      tags: ["react"],
      img: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1674605659/Frame_4_xzpybs.png",
      web: "https://countdown-holidays.pages.dev/",
      repo: "https://github.com/jorgeortega123/countdown",
      onGroup: false,
    },
    {
      title: "Files Manager",
      img: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670433485/Frame_2_2_jvxcat.png",
      about: `   Aplicación sencilla creada a partir de <span class="text-bold">Batch Scripting</span> (Windows)
        Gestionaba documentos (.docx, .pdf) en carpetas con el nombre de alguna
        materia escolar. A inicios de <span class="text-bold">pandemia</span> desarrollé esto como un método
        para hacer más fácil la nueva <span class="text-bold">modalidad online</span> en el colegio.`,
      tags: ["Batch", "Python", "Windows"],

      web: "https://github.com/jorgeortega123/Files-manager",
      repo: "https://github.com/jorgeortega123/Files-manager",
      onGroup: false,
    },
  ],
};
