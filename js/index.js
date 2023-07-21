var $grid = null, close_loader = false, photos = [{
	grid: {
		bn: "13Pro/01David_Franco/img_BNhome01.png",
		color: "13Pro/01David_Franco/img_home01.png"},
	type: "P", // F para foro13
	info: {
		name: "David Franco",
		description: "Reconocido como uno de los mejores fotógrafos de moda, representando a México a nivel nacional.  Ha participado y ganado concursos internacionales como “Cannes” en los rubros de Publicidad. Egresado de la Academia de Artes Visuales.",
		photographer: "Juanito Panfilo",
		camera: "x23-81",
		relevant: "sin comentarios",
		client: "panfilo",
		logos: ["img/test_logos.jpg", "img/test_logos.jpg"],
		imgs: {
			path: "13Pro/01David_Franco/0",
			nm: 72,
			format: "jpg"
		}
	}
},{
	grid: {
		bn: "13Pro/02Cuauhtemoc_Garcia/img_BNhome01.png",
		color: "13Pro/02Cuauhtemoc_Garcia/img_home01.png"},
	type: "P",
	info: {
		name: "Cuauhtémoc García",
		description: "Fotógrafo de moda con participación en diversos eventos de la industria donde ha ganado premios como “Harper’s”. Colabora activamente en diversas campañas publicitarias. Egresado de la Academia de Artes Visuales.",
		photographer: "Panfilo Perenganito",
		camera: "0900-promax",
		relevant: "hola mundo",
		client: "pancho",
		logos: ["img/test_logos.jpg", "img/test_logos.jpg"],
		imgs: {
			path: "13Pro/02Cuauhtemoc_Garcia/0",
			nm: 57,
			format: "jpg"
		}
	}
},{
	grid: {
		bn: "13Pro/03Gerardo_Maldonado/img_BNhome01.png",
		color: "13Pro/03Gerardo_Maldonado/img_home01.png"},
	type: "P",
	info: {
		name: "Gerardo Maldonado",
		description: "Fotógrafo especialista en moda, quien comienza a incursionar en el mundo de la publicidad. Ha colaborado con L’officel, Cosmo, entre otras editoriales. Es nuestro fotógrafo más reciente para el equipo de 13 Producciones. Licenciado en Artes Visuales del Instituto Nacional de Bellas Artes.",
		photographer: "Pancracio",
		camera: "canon-pro2019",
		relevant: "no, sin comentarios",
		client: "extras",
		logos: ["img/test_logos.jpg", "img/test_logos.jpg"],
		imgs: {
			path: "13Pro/03Gerardo_Maldonado/0",
			nm: 46,
			format: "jpg"
		}
	}
// },{
// 	grid: {
// 		bn: "13Pro/04Gustavo_Garcia_Villa/img_BNhome01.png",
// 		color: "13Pro/04Gustavo_Garcia_Villa/img_home01.png"},
// 	type: "P",
// 	info: {
// 		name: "Gustavo García-Villa",
// 		description: "Egresado con honores de la Universidad de Guadalajara por la licenciatura en diseño gráfico. Una de las mentes creativas mas inquietas de México. Igual hace diseño de vestuario que dirección creativa, estilismo de moda, dirección de arte,  ilustración o, como en este caso, fotografía.",
// 		photographer: "Juanito Panfilo",
// 		camera: "x23-81",
// 		relevant: "sin comentarios",
// 		client: "panfilo",
// 		logos: ["img/test_logos.jpg", "img/test_logos.jpg"],
// 		imgs: {
// 			path: "13Pro/04Gustavo_Garcia_Villa/0",
// 			nm: 55,
// 			format: "jpg"
// 		}
// 	}
},{
	grid: {
		bn: "13Pro/05Jorge_Davalos/img_BNhome01.png",
		color: "13Pro/05Jorge_Davalos/img_home01.png"},
	type: "P",
	info: {
		name: "Jorge Dávalos",
		description: "Fotografía de moda con especialización en bodegones de ropa, joyería y publicidad para producto. Egresado de la Academia de Artes Visuales.",
		photographer: "Juanito Panfilo",
		camera: "x23-81",
		relevant: "sin comentarios",
		client: "panfilo",
		logos: ["img/test_logos.jpg", "img/test_logos.jpg"],
		imgs: {
			path: "13Pro/05Jorge_Davalos/0",
			nm: 55,
			format: "jpg"
		}
	}
},{
	grid: {
		bn: "13Pro/06Paola_Toledo/img_BNhome01.png",
		color: "13Pro/06Paola_Toledo/img_home01.png"},
	type: "P",
	info: {
		name: "Paola “Coco” Toledo",
		description: "Colabora con diversos medios y artistas. Su especialización es la fotografía de Retrato y Moda. Egresada de La Escuela Activa de Fotografía.",
		photographer: "Juanito Panfilo",
		camera: "x23-81",
		relevant: "sin comentarios",
		client: "panfilo",
		logos: ["img/test_logos.jpg", "img/test_logos.jpg"],
		imgs: {
			path: "13Pro/06Paola_Toledo/0",
			nm: 28,
			format: "jpg"
		}
	}
},{
	grid: {
		bn: "13Pro/07Daniela_Feijoo/img_BNhome01.png",
		color: "13Pro/07Daniela_Feijoo/img_home01.png"},
	type: "P",
	info: {
		name: "Daniella Feijóo",
		description: "Colabora con diversos medios de comunicación, plataformas digitales y marcas. Ha impartido talleres en el Foto Museo 4 Caminos, la Fundación Pedro Meyer y algunas firmas de arquitectura en México. \n\n Egresada de la Universidad Anáhuac de la Academia de Artes Visuales y de la Escuela Activa de Fotografía, con diversos talleres y diplomados en creación audiovisual, entretenimiento y espectáculo.",
		photographer: "Juanito Panfilo",
		camera: "x23-81",
		relevant: "sin comentarios",
		client: "panfilo",
		logos: ["img/test_logos.jpg", "img/test_logos.jpg"],
		imgs: {
			path: "13Pro/07Daniela_Feijoo/0",
			nm: 26,
			format: "jpg"
		}
	}
},{
	grid: {
		bn: "13Pro/08Carla_Gonzalez/img_BNhome01.png",
		color: "13Pro/08Carla_Gonzalez/img_home01.png"},
	type: "P",
	info: {
		name: "Carla González",
		description: "La estética de su trabajo busca siempre ser muy limpia, así como comunicar y proponer. Ha asistido y aprendido de grandes fotógrafos como David Franco, Mauricio Alejo, Zony Maya, entre otros. \n\n Colabora en diversos proyectos fotográficos tanto de foto comercial, comercio electrónico, documental y eventos. Ha creado contenidos para marcas como Levis, Sister by Pink Magnolia, L’Officiel, Revista Moi, entre otros. Egresada de la Universidad de las Américas Puebla y posteriormente de la Academia de Artes Visuales.",
		photographer: "Juanito Panfilo",
		camera: "x23-81",
		relevant: "sin comentarios",
		client: "panfilo",
		logos: ["img/test_logos.jpg", "img/test_logos.jpg"],
		imgs: {
			path: "13Pro/08Carla_Gonzalez/0",
			nm: 23,
			format: "jpg"
		}
	}
},{
	grid: {
		bn: "13Pro/09Jair_Franco/img_BNhome01.png",
		color: "13Pro/09Jair_Franco/img_home01.png"},
	type: "P",
	info: {
		name: "Jair Romero",
		description: "Comenzó a trabajar como asistente de grandes fotógrafos con Zona 5. Ha realizado fotografía en conciertos, festivales musicales. Así como también ha colaborado con revistas y proyectos editoriales como, Glamour, Marvin, 192, Revista Fernanda, Vanidades, entre otras. Tomas fotográficas con Diego Luna, Luis Gerardo Méndez, Lorena Sarabia, Cesar Flova, Alexander Acha, Primavera mantequilla, Julio, entre otros. Egresado de la Academia de Artes Visuales.",
		photographer: "Panfilo Perenganito",
		camera: "0900-promax",
		relevant: "hola mundo",
		client: "pancho",
		logos: ["img/test_logos.jpg", "img/test_logos.jpg"],
		imgs: {
			path: "13Pro/09Jair_Franco/0",
			nm: 25,
			format: "jpg"
		}
	}
},{
	grid: {
		bn: "Masivo/01Bazar_del_sabado/img_BNhome01.png",
		color: "Masivo/01Bazar_del_sabado/img_home01.png"},
	type: "M",
	info: {
		name: "Bazar del sabado",
		description: "1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		photographer: "Panfilo Perenganito",
		camera: "0900-promax",
		relevant: "hola mundo",
		client: "pancho",
		logos: ["img/test_logos.jpg", "img/test_logos.jpg"],
		imgs: {
			path: "Masivo/01Bazar_del_sabado/0",
			nm: 6,
			format: "png"
		}
	}
},{
	grid: {
		bn: "Masivo/02Cafe_19/img_BNhome01.png",
		color: "Masivo/02Cafe_19/img_home01.png"},
	type: "M",
	info: {
		name: "Cafe 19",
		description: "1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		photographer: "Panfilo Perenganito",
		camera: "0900-promax",
		relevant: "hola mundo",
		client: "pancho",
		logos: ["img/test_logos.jpg", "img/test_logos.jpg"],
		imgs: {
			path: "Masivo/02Cafe_19/0",
			nm: 1,
			format: "png"
		}
	}
},{
	grid: {
		bn: "Masivo/03Cuidado_con_el_perro/img_BNhome01.png",
		color: "Masivo/03Cuidado_con_el_perro/img_home01.png"},
	type: "M",
	info: {
		name: "Cuidado con el perro",
		description: "1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		photographer: "Panfilo Perenganito",
		camera: "0900-promax",
		relevant: "hola mundo",
		client: "pancho",
		logos: ["img/test_logos.jpg", "img/test_logos.jpg"],
		imgs: {
			path: "Masivo/03Cuidado_con_el_perro/0",
			nm: 6,
			format: "png"
		}
	}
},{
	grid: {
		bn: "Masivo/04Fashion_crystals/img_BNhome01.png",
		color: "Masivo/04Fashion_crystals/img_home01.png"},
	type: "M",
	info: {
		name: "Fashion crystals",
		description: "1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		photographer: "Panfilo Perenganito",
		camera: "0900-promax",
		relevant: "hola mundo",
		client: "pancho",
		logos: ["img/test_logos.jpg", "img/test_logos.jpg"],
		imgs: {
			path: "Masivo/04Fashion_crystals/0",
			nm: 6,
			format: "png"
		}
	}
},{
	grid: {
		bn: "Masivo/05Promotional/img_BNhome01.png",
		color: "Masivo/05Promotional/img_home01.png"},
	type: "M",
	info: {
		name: "Promotional",
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		photographer: "Pancracio",
		camera: "canon-pro2019",
		relevant: "no, sin comentarios",
		client: "extras",
		logos: ["img/test_logos.jpg", "img/test_logos.jpg"],
		imgs: {
			path: "Masivo/05Promotional/0",
			nm: 6,
			format: "png"
		}
	}
},{
	grid: {
		bn: "Masivo/06Lunamore/img_BNhome01.png",
		color: "Masivo/06Lunamore/img_home01.png"},
	type: "M",
	info: {
		name: "Lunamore",
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		photographer: "Pancracio",
		camera: "canon-pro2019",
		relevant: "no, sin comentarios",
		client: "extras",
		logos: ["img/test_logos.jpg", "img/test_logos.jpg"],
		imgs: {
			path: "Masivo/06Lunamore/0",
			nm: 6,
			format: "png"
		}
	}
},{
	grid: {
		bn: "Masivo/07Pajaro_de_cuerda/img_BNhome01.png",
		color: "Masivo/07Pajaro_de_cuerda/img_home01.png"},
	type: "M",
	info: {
		name: "Pajaro de cuerda",
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		photographer: "Pancracio",
		camera: "canon-pro2019",
		relevant: "no, sin comentarios",
		client: "extras",
		logos: ["img/test_logos.jpg", "img/test_logos.jpg"],
		imgs: {
			path: "Masivo/07Pajaro_de_cuerda/0",
			nm: 6,
			format: "png"
		}
	}
},{
	grid: {
		bn: "Masivo/08Pole_nord/img_BNhome01.png",
		color: "Masivo/08Pole_nord/img_home01.png"},
	type: "M",
	info: {
		name: "Pole nord",
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		photographer: "Pancracio",
		camera: "canon-pro2019",
		relevant: "no, sin comentarios",
		client: "extras",
		logos: ["img/test_logos.jpg", "img/test_logos.jpg"],
		imgs: {
			path: "Masivo/08Pole_nord/0",
			nm: 3,
			format: "png"
		}
	}
},{
	grid: {
		bn: "Masivo/09Rancho_san_cayetano/img_BNhome01.png",
		color: "Masivo/09Rancho_san_cayetano/img_home01.png"},
	type: "M",
	info: {
		name: "Rancho san cayetano",
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		photographer: "Pancracio",
		camera: "canon-pro2019",
		relevant: "no, sin comentarios",
		client: "extras",
		logos: ["img/test_logos.jpg", "img/test_logos.jpg"],
		imgs: {
			path: "Masivo/09Rancho_san_cayetano/0",
			nm: 1,
			format: "png"
		}
	}
},{
	grid: {
		bn: "Masivo/010Royal_flush/img_BNhome01.png",
		color: "Masivo/010Royal_flush/img_home01.png"},
	type: "M",
	info: {
		name: "Royal flush",
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		photographer: "Pancracio",
		camera: "canon-pro2019",
		relevant: "no, sin comentarios",
		client: "extras",
		logos: ["img/test_logos.jpg", "img/test_logos.jpg"],
		imgs: {
			path: "Masivo/010Royal_flush/0",
			nm: 6,
			format: "png"
		}
	}
},{
	grid: {
		bn: "Masivo/011UVM/img_BNhome01.png",
		color: "Masivo/011UVM/img_home01.png"},
	type: "M",
	info: {
		name: "UVM",
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		photographer: "Pancracio",
		camera: "canon-pro2019",
		relevant: "no, sin comentarios",
		client: "extras",
		logos: ["img/test_logos.jpg", "img/test_logos.jpg"],
		imgs: {
			path: "Masivo/011UVM/0",
			nm: 6,
			format: "png"
		}
	}
},{
	grid: {
		bn: "Foro13/foro13/img_BNhome01.png",
		color: "Foro13/foro13/img_home01.png"},
	type: "F",
	info: {
		name: "Foro 13",
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		photographer: "Pancracio",
		camera: "canon-pro2019",
		relevant: "no, sin comentarios",
		client: "extras",
		logos: ["img/test_logos.jpg", "img/test_logos.jpg"],
		imgs: {
			path: "Foro13/foro13/0",
			nm: 10,
			format: "png"
		}
	}
}],photographer = [{			//Arreglo de fotografos
	name: "Carla Gonzalez Vergara",
	info: {
		name: "Nombre del Proyecto prod",
		description: "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s",
		photographer: "Juanito Panfilo",
		camera: "x23-81",
		relevant: "sin comentarios",
		client: "panfilo",
		logos: ["img/test_logos.jpg", "img/test_logos.jpg"],
		imgs: ["img/test_brand.jpg", "img/test_brand.jpg", "img/test_brand.jpg", "img/test_brand.jpg"]
	}
},{
	name: "Coco",
	info: {
		name: "Nombre del Proyecto masivo",
		description: "1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		photographer: "Panfilo Perenganito",
		camera: "0900-promax",
		relevant: "hola mundo",
		client: "pancho",
		logos: ["img/test_logos.jpg", "img/test_logos.jpg"],
		imgs: ["img/test_brand.jpg", "img/test_brand.jpg", "img/test_brand.jpg", "img/test_brand.jpg"]
	}
},{
	name: "Cuauhtémoc García",
	info: {
		name: "Nombre del Proyecto foro",
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		photographer: "Pancracio",
		camera: "canon-pro2019",
		relevant: "no, sin comentarios",
		client: "extras",
		logos: ["img/test_logos.jpg", "img/test_logos.jpg"],
		imgs: ["img/test_brand.jpg", "img/test_brand.jpg", "img/test_brand.jpg", "img/test_brand.jpg"]
	}
},{
	name: "Daniella Feijoo",
	info: {
		name: "Nombre del Proyecto prod",
		description: "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s",
		photographer: "Juanito Panfilo",
		camera: "x23-81",
		relevant: "sin comentarios",
		client: "panfilo",
		logos: ["img/test_logos.jpg", "img/test_logos.jpg"],
		imgs: ["img/test_brand.jpg", "img/test_brand.jpg", "img/test_brand.jpg", "img/test_brand.jpg"]
	}
},{
	name: "David Franco",
	info: {
		name: "Nombre del Proyecto prod",
		description: "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s",
		photographer: "Juanito Panfilo",
		camera: "x23-81",
		relevant: "sin comentarios",
		client: "panfilo",
		logos: ["img/test_logos.jpg", "img/test_logos.jpg"],
		imgs: ["img/test_brand.jpg", "img/test_brand.jpg", "img/test_brand.jpg", "img/test_brand.jpg"]
	}
},{
	name: "Gerardo Maldonado",
	info: {
		name: "Nombre del Proyecto prod",
		description: "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s",
		photographer: "Juanito Panfilo",
		camera: "x23-81",
		relevant: "sin comentarios",
		client: "panfilo",
		logos: ["img/test_logos.jpg", "img/test_logos.jpg"],
		imgs: ["img/test_brand.jpg", "img/test_brand.jpg", "img/test_brand.jpg", "img/test_brand.jpg"]
	}
},{
	name: "Gustavo García Villa",
	info: {
		name: "Nombre del Proyecto prod",
		description: "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s",
		photographer: "Juanito Panfilo",
		camera: "x23-81",
		relevant: "sin comentarios",
		client: "panfilo",
		logos: ["img/test_logos.jpg", "img/test_logos.jpg"],
		imgs: ["img/test_brand.jpg", "img/test_brand.jpg", "img/test_brand.jpg", "img/test_brand.jpg"]
	}
},{
	name: "Jair Franco",
	info: {
		name: "Nombre del Proyecto prod",
		description: "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s",
		photographer: "Juanito Panfilo",
		camera: "x23-81",
		relevant: "sin comentarios",
		client: "panfilo",
		logos: ["img/test_logos.jpg", "img/test_logos.jpg"],
		imgs: ["img/test_brand.jpg", "img/test_brand.jpg", "img/test_brand.jpg", "img/test_brand.jpg"]
	}
},{
	name: "Jorge Dávalos",
	info: {
		name: "Nombre del Proyecto prod",
		description: "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s",
		photographer: "Juanito Panfilo",
		camera: "x23-81",
		relevant: "sin comentarios",
		client: "panfilo",
		logos: ["img/test_logos.jpg", "img/test_logos.jpg"],
		imgs: ["img/test_brand.jpg", "img/test_brand.jpg", "img/test_brand.jpg", "img/test_brand.jpg"]
	}
}]


// Genera el grid
function create_grid() {
	let grid = document.getElementById('grid');
	for (let i = 0; i < photos.length; i++) {
		let item = document.createElement("div");
		let img = document.createElement("div");
		let img_color = document.createElement("div");

		item.classList.add("item", photos[i].type + "_type");
		item.setAttribute("data-index", i);
		img.classList.add("backImg", "full");
		img_color.classList.add("backImg", "full");

		let url = 'url(img/grid/' + photos[i].grid.bn + ')';
		let url_color = 'url(img/grid/' + photos[i].grid.color + ')';
		img.style.backgroundImage = url;
		img_color.style.backgroundImage = url_color;
		img.append(img_color);
		item.append(img);

		if(photos[i].type != "P"){
			item.setAttribute("data-elem", "0");
			item.addEventListener("click", function(){
				open_slider_photos(this);
			});
		}else{
// define la información a mostrar al seleccionar una foto
			item.addEventListener("click", function(){ 
				let index = this.getAttribute("data-index");
				let content_about = document.getElementById("detail");
				content_about.querySelector(".info .name").innerText = photos[index].info.name;
				content_about.querySelector(".info .description").innerText = photos[index].info.description;
				// content_about.querySelector(".info .photographer").innerText = photos[index].info.photographer;
				// content_about.querySelector(".info .camera").innerText = photos[index].info.camera;
				// content_about.querySelector(".info .relevant").innerText = photos[index].info.relevant;
				// content_about.querySelector(".info .client").innerText = photos[index].info.client;
				// let clients_logo = content_about.querySelector(".info .clients_logo");
				// for (let i = 0; i < photos[index].info.logos.length; i++) {
				// 	let new_img = document.createElement("img");
				// 	new_img.src = photos[index].info.logos[i];
				// 	clients_logo.append(new_img);
				// }
				let images = content_about.querySelector(".gallery");
				let gallery = "";
				for (let i = 0; i < photos[index].info.imgs.nm; i++) {
					gallery +=  '<div class="backImg" style="background-image: url(img/grid/' + photos[index].info.imgs.path + (i + 1) + "." + photos[index].info.imgs.format + ');">'
												+ '<div class="zoom" data-elem="' + i + '" data-index="' + index + '">'
													+ '<img src="img/fullscreen.svg" class="cnt">'
												+ '</div>'
											+ '</div>'
				}
				images.innerHTML = gallery;
	// define las fotos que se mostrarán al seleccionarla
				content_about.querySelectorAll(".zoom").forEach(function(elem) { 
					elem.addEventListener("click", function(){
						open_slider_photos(this);
					});
				});

				open_modal("detail")
				content_about.querySelector(".content").scrollTop = 0
			});
		}
		grid.append(item);

		function open_slider_photos(elem){
			let slider = document.querySelector("#photos_slider .slider");
			let id_elem = parseInt(elem.getAttribute("data-index"));
			let id_slide = elem.getAttribute("data-elem");
			counter_slider = parseInt(id_slide);
			slider.innerHTML = "";
			for (let i = 0; i < photos[id_elem].info.imgs.nm; i++) {
				let new_img = document.createElement("div");
				// let new_img = document.createElement("img");
				new_img.classList.add("slide", "full", "cnt");
				// new_img.classList.add("slide", "cnt");
				if(id_slide == i){new_img.classList.add("active");}

				new_img.style.backgroundImage = 'url(img/grid/' + photos[id_elem].info.imgs.path + (i + 1) + "." + photos[id_elem].info.imgs.format +  ')'

				// new_img.src = 'img/grid/' + photos[id_elem].info.imgs.path + (i + 1) + "." + photos[id_elem].info.imgs.format;
				slider.append(new_img);
			}
			open_modal("photos_slider")
		}
	}
// Inicializa isotope
	$grid = new Isotope('#grid', {
	  itemSelector: '.item',
	  percentPosition: true,
	  masonry: {
	    columnWidth: '.item'
	  }
	});
// Inicializa los filtros del grid
	document.querySelectorAll("#nav .filter, #nav .logo").forEach(function(elem) {
		elem.addEventListener("click", function($e){
		 	let link_active = document.querySelector("#nav .active");
		  let filterValue = this.getAttribute('data-filter');
		  if(link_active.getAttribute('data-filter') === filterValue){ return; }
	  	document.querySelector(".myContentScroll").scrollTop = 0;
		  $grid.arrange({ filter: filterValue });
		  link_active.classList.remove("active");
		  this.classList.add("active");
		  document.querySelector("#nav select").value = filterValue;
		});
	});
	document.querySelector("#nav select").addEventListener("change", function($e){
	 	let link_active = document.querySelector("#nav .active");
	  let filterValue = this.value;
	  if((link_active ? link_active.getAttribute('data-filter') : "") === filterValue){ return; }
	  document.querySelector(".myContentScroll").scrollTop = 0;
	  $grid.arrange({ filter: filterValue });
	  if(link_active){ link_active.classList.remove("active"); }
	  if(filterValue !== ""){
	  	document.querySelector('.link.filter[data-filter="' + filterValue + '"]').classList.add("active");
	  }
	});
	setTimeout(function(){
		close_loader = true;
	}, 1000);
}
function create_photographer(){
	let content_photographer = document.getElementById('photographer');
	for (let i = 0; i < photographer.length; i++) {
		let item = document.createElement("p");
		// let img = document.createElement("div");
		// item.classList.add("item", photos[i].type + "_type");
		item.setAttribute("data-index", i);
		item.innerText = photographer[i].name;
		// img.classList.add("backImg", "full");
		// let url = 'url(img/grid/' + photos[i].name + ')';
		// img.style.backgroundImage = url;
		// item.append(img);
// define la información a mostrar al seleccionar una foto
		item.addEventListener("click", function(){ 
			let index = this.getAttribute("data-index");
			let content_about = document.getElementById("detail");
			content_about.querySelector(".info .name").innerText = photographer[index].info.name;
			content_about.querySelector(".info .description").innerText = photographer[index].info.description;
			content_about.querySelector(".info .photographer").innerText = photographer[index].info.photographer;
			content_about.querySelector(".info .camera").innerText = photographer[index].info.camera;
			content_about.querySelector(".info .relevant").innerText = photographer[index].info.relevant;
			content_about.querySelector(".info .client").innerText = photographer[index].info.client;
			let clients_logo = content_about.querySelector(".info .clients_logo");
			for (let i = 0; i < photographer[index].info.logos.length; i++) {
				let new_img = document.createElement("img");
				new_img.src = photographer[index].info.logos[i];
				clients_logo.append(new_img);
			}
			let images = content_about.querySelector(".gallery");
			let gallery = "";
			for (let i = 0; i < photographer[index].info.imgs.length; i++) {
				gallery +=  '<div class="backImg" style="background-image: url(' + photographer[index].info.imgs[i] + ');">'
											+ '<div class="zoom" data-index="' + i + '" data-elem="' + index + '">'
												+ '<img src="img/fullscreen.svg" class="cnt">'
											+ '</div>'
										+ '</div>'
			}
			images.innerHTML = gallery;
// define las fotos que se mostrarán al seleccionarla
			content_about.querySelectorAll(".zoom").forEach(function(elem) { 
				elem.addEventListener("click", function(){
					let slider = document.querySelector("#photos_slider .slider");
					let id_elem = this.getAttribute("data-elem");
					let id_slide = this.getAttribute("data-index");
					counter_slider = parseInt(id_slide);
					slider.innerHTML = "";
					for (let i = 0; i < photographer[index].info.imgs.length; i++) {
						let img = document.createElement("div");
						img.classList.add("slide", "backImg", "full");
						if(id_slide == i){img.classList.add("active");}
						img.style.backgroundImage = 'url(' + photographer[index].info.imgs[i] + ')'
						slider.append(img);
					}
					open_modal("photos_slider")
				});
			});

			open_modal("detail")
		});
		content_photographer.querySelector(".list").append(item);
	}
}

// abre el menu
var hm_flag = false;
document.getElementById('hm').addEventListener("click", function(){
	if(hm_flag){ return; }
	hm_flag = true;
	let menu = document.getElementById('menu');
	if(menu.classList.contains("open")){
		menu.classList.remove("open");
	}else{
		menu.classList.add("open");
	}
	setTimeout(function(){hm_flag = false;}, 450);
});
// cierra el menu
document.querySelectorAll(".close_menu, #menu .close").forEach(function(elem) {
	elem.addEventListener("click", function($e){
		document.getElementById('menu').classList.remove("open");
	});
});

// helper para abrir los modales
var animation_flag = false;
function open_modal(id){
	let elem = document.getElementById(id);
	if(animation_flag || !elem){ return; }
	animation_flag = true;
	elem.style.display = "flex";	
	setTimeout(function() {
		elem.classList.add("open");
		setTimeout(function() {
			animation_flag = false;
		}, 300);
	}, 200);
}
// helper generico para cerrar los modales
function close_modal(){
	let modal = document.querySelector(".lightbox.open");
	if(!modal || animation_flag){ return; }
	animation_flag = true;
	modal.classList.remove("open");
	setTimeout(function() {
		modal.style.display = "none";	
		animation_flag = false;
		if(modal.id == "video"){
			let video = modal.querySelector("video");
			if(!video.paused){
				video.pause();
				video.currentTime = 0;
			}
		}
	}, 300);
}

// abrir los modales, los botones se inicializan con la clase .modal y el atributo al que va "data-modal"
document.querySelectorAll(".modal").forEach(function(elem) {
	elem.addEventListener("click", function($e){
		let id = this.getAttribute("data-modal");
		open_modal(id);
		document.querySelector("#menu .close").click();
	});
});

// Salir de "descripción" desde "slider de fotos"
// document.querySelector("#photos_slider .close_modal").addEventListener("click", function (){
// 	setTimeout(function(){
// 		close_modal();
// 	}, 350);
// });

// Salir del modal "slider de fotos"
document.querySelectorAll(".close_modal, #photos_slider .return").forEach(function(elem) {
	elem.addEventListener("click", close_modal);
});

// auxiliar del slider
var counter_slider = 0;
function next_slider(pos){
	let slide_active = document.querySelector("#photos_slider .slide.active");
	let all_slides = document.querySelectorAll("#photos_slider .slide");
	counter_slider = counter_slider + pos < 0 ? all_slides.length - 1: (counter_slider + pos == all_slides.length ? 0 : counter_slider + pos);
	slide_active.classList.remove("active");
	all_slides[counter_slider].classList.add("active");;
}
// inicializa las flechas de siguiente y anterior del slider
document.querySelector("#photos_slider .arrow.prev").addEventListener("click", next_slider.bind(null, -1));
document.querySelector("#photos_slider .arrow.next").addEventListener("click", next_slider.bind(null, 1));

// inicializacion del evento swipe
var animationData = {
  start: 0,
  status: false,
  top: 0
};
var touchStartAnimation = function(e){
  if(animationData.status){ return; }
  animationData.status = true;
  animationData.start = e.touches[0].pageX;
  animationData.top = e.touches[0].pageY;
}
var touchEndAnimation = function(e){
  if(!animationData.status){ return; }
  let diffY = animationData.top - e.changedTouches[0].pageY;
  let diffX = animationData.start - e.changedTouches[0].pageX;
  diffY = diffY < 0 ? diffY * -1 : diffY
  if(diffX > -50 && diffX < 50 || diffY > 150){
    animationData.status = false;
    return;
  }
  if(diffX < 0){
  	next_slider(-1);
  }else{
  	next_slider(1);
  }
}

document.querySelector("#photos_slider .content").addEventListener("touchstart", touchStartAnimation.bind(animationData), false);
document.querySelector("#photos_slider .content").addEventListener("touchend", touchEndAnimation.bind(animationData), false);

var load_amination = function(){
	let loader = document.getElementById("loader");
	let counter = loader.querySelector(".counter");
	let image = loader.querySelector(".img .loader");
	let cnt = 0;

	increment = function() {
		if(cnt == 100){ 
			loader.classList.add("close");
			setTimeout(function(){
				loader.style.display = "none";
			}, 500);
			return; 
		}
		setTimeout(function(){
			cnt++;
			counter.innerText = cnt + "%";
			image.style.transform = "scaleY(" + (cnt * .01) + ")";
			image.style.webkitTransform = "scaleY(" + (cnt * .01) + ")";
			image.style.mozTransform = "scaleY(" + (cnt * .01) + ")";
			increment();
		}, (close_loader ? 5 : 75));	
	}
	
	increment();
}


load_amination();

// color_nav();
create_grid();
create_photographer();








