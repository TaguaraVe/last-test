export interface Country {
  code: string;
  name: string;
  states: State[];
}

export interface State {
  code: string;
  name: string;
  cities: string[];
}

export const countries: Country[] = [
  {
    code: 'VE',
    name: 'Venezuela',
    states: [
      {
        code: 'AM',
        name: 'Amazonas',
        cities: [
          'Puerto Ayacucho',
          'La Esmeralda',
          'Maroa',
          'San Carlos de Río Negro',
        ],
      },
      {
        code: 'AN',
        name: 'Anzoátegui',
        cities: [
          'Barcelona',
          'Puerto La Cruz',
          'El Tigre',
          'Anaco',
          'Cantaura',
        ],
      },
      {
        code: 'AP',
        name: 'Apure',
        cities: ['San Fernando de Apure', 'Biruaca', 'Achaguas', 'Guasdualito'],
      },
      {
        code: 'AR',
        name: 'Aragua',
        cities: ['Maracay', 'Turmero', 'Villa de Cura', 'La Victoria', 'Cagua'],
      },
      {
        code: 'BA',
        name: 'Barinas',
        cities: ['Barinas', 'Barinitas', 'Socopó', 'Ciudad Bolivia'],
      },
      {
        code: 'BO',
        name: 'Bolívar',
        cities: ['Ciudad Bolívar', 'Puerto Ordaz', 'Upata', 'Ciudad Guayana'],
      },
      {
        code: 'CA',
        name: 'Carabobo',
        cities: [
          'Valencia',
          'Puerto Cabello',
          'Guacara',
          'San Diego',
          'Naguanagua',
        ],
      },
      {
        code: 'CO',
        name: 'Cojedes',
        cities: ['San Carlos', 'Tinaquillo', 'El Baúl', 'Tinaco'],
      },
      {
        code: 'DA',
        name: 'Delta Amacuro',
        cities: ['Tucupita', 'Pedernales', 'Curiapo'],
      },
      {
        code: 'DC',
        name: 'Distrito Capital',
        cities: ['Caracas'],
      },
      {
        code: 'FA',
        name: 'Falcón',
        cities: ['Coro', 'Punto Fijo', 'Tucacas', 'Chichiriviche'],
      },
      {
        code: 'GU',
        name: 'Guárico',
        cities: [
          'San Juan de los Morros',
          'Calabozo',
          'Valle de la Pascua',
          'Zaraza',
        ],
      },
      {
        code: 'LA',
        name: 'Lara',
        cities: ['Barquisimeto', 'Carora', 'El Tocuyo', 'Quíbor'],
      },
      {
        code: 'ME',
        name: 'Mérida',
        cities: ['Mérida', 'El Vigía', 'Tovar', 'Mucuchíes'],
      },
      {
        code: 'MI',
        name: 'Miranda',
        cities: ['Los Teques', 'Guarenas', 'Guatire', 'Charallave', 'Petare'],
      },
      {
        code: 'MO',
        name: 'Monagas',
        cities: ['Maturín', 'Temblador', 'Barrancas', 'Caripe'],
      },
      {
        code: 'NE',
        name: 'Nueva Esparta',
        cities: ['La Asunción', 'Porlamar', 'Juan Griego', 'Pampatar'],
      },
      {
        code: 'PO',
        name: 'Portuguesa',
        cities: ['Guanare', 'Acarigua', 'Araure', 'Turén'],
      },
      {
        code: 'SU',
        name: 'Sucre',
        cities: ['Cumaná', 'Carúpano', 'Güiria', 'Araya'],
      },
      {
        code: 'TA',
        name: 'Táchira',
        cities: ['San Cristóbal', 'Táriba', 'Rubio', 'San Antonio del Táchira'],
      },
      {
        code: 'TR',
        name: 'Trujillo',
        cities: ['Trujillo', 'Valera', 'Boconó', 'Santa Ana'],
      },
      {
        code: 'VA',
        name: 'Vargas',
        cities: ['La Guaira', 'Maiquetía', 'Catia La Mar', 'Naiguatá'],
      },
      {
        code: 'YA',
        name: 'Yaracuy',
        cities: ['San Felipe', 'Yaritagua', 'Chivacoa', 'Nirgua'],
      },
      {
        code: 'ZU',
        name: 'Zulia',
        cities: [
          'Maracaibo',
          'Cabimas',
          'Ciudad Ojeda',
          'Machiques',
          'Santa Bárbara',
        ],
      },
    ],
  },
  {
    code: 'CO',
    name: 'Colombia',
    states: [
      {
        code: 'AMA',
        name: 'Amazonas',
        cities: ['Leticia', 'Puerto Nariño', 'El Encanto', 'La Chorrera'],
      },
      {
        code: 'ANT',
        name: 'Antioquia',
        cities: ['Medellín', 'Bello', 'Itagüí', 'Envigado', 'Rionegro'],
      },
      {
        code: 'ARA',
        name: 'Arauca',
        cities: ['Arauca', 'Arauquita', 'Saravena', 'Fortul'],
      },
      {
        code: 'ATL',
        name: 'Atlántico',
        cities: ['Barranquilla', 'Soledad', 'Malambo', 'Sabanalarga'],
      },
      {
        code: 'BOL',
        name: 'Bolívar',
        cities: ['Cartagena', 'Magangué', 'Turbaco', 'El Carmen de Bolívar'],
      },
      {
        code: 'BOY',
        name: 'Boyacá',
        cities: ['Tunja', 'Duitama', 'Sogamoso', 'Chiquinquirá'],
      },
      {
        code: 'CAL',
        name: 'Caldas',
        cities: ['Manizales', 'La Dorada', 'Chinchiná', 'Villamaría'],
      },
      {
        code: 'CAQ',
        name: 'Caquetá',
        cities: [
          'Florencia',
          'San Vicente del Caguán',
          'Puerto Rico',
          'El Doncello',
        ],
      },
      {
        code: 'CAS',
        name: 'Casanare',
        cities: ['Yopal', 'Aguazul', 'Villanueva', 'Tauramena'],
      },
      {
        code: 'CAU',
        name: 'Cauca',
        cities: ['Popayán', 'Santander de Quilichao', 'Puerto Tejada', 'Guapi'],
      },
      {
        code: 'CES',
        name: 'Cesar',
        cities: ['Valledupar', 'Aguachica', 'Bosconia', 'Codazzi'],
      },
      {
        code: 'CHO',
        name: 'Chocó',
        cities: ['Quibdó', 'Istmina', 'Condoto', 'Riosucio'],
      },
      {
        code: 'COR',
        name: 'Córdoba',
        cities: ['Montería', 'Lorica', 'Cereté', 'Sahagún'],
      },
      {
        code: 'CUN',
        name: 'Cundinamarca',
        cities: ['Bogotá', 'Soacha', 'Girardot', 'Zipaquirá', 'Facatativá'],
      },
      {
        code: 'GUA',
        name: 'Guainía',
        cities: [
          'Puerto Inírida',
          'Barranco Minas',
          'Mapiripana',
          'San Felipe',
        ],
      },
      {
        code: 'GUV',
        name: 'Guaviare',
        cities: [
          'San José del Guaviare',
          'Calamar',
          'El Retorno',
          'Miraflores',
        ],
      },
      {
        code: 'HUI',
        name: 'Huila',
        cities: ['Neiva', 'Pitalito', 'Garzón', 'La Plata'],
      },
      {
        code: 'LAG',
        name: 'La Guajira',
        cities: ['Riohacha', 'Maicao', 'Uribia', 'Manaure'],
      },
      {
        code: 'MAG',
        name: 'Magdalena',
        cities: ['Santa Marta', 'Ciénaga', 'El Banco', 'Fundación'],
      },
      {
        code: 'MET',
        name: 'Meta',
        cities: ['Villavicencio', 'Acacías', 'Granada', 'Puerto López'],
      },
      {
        code: 'NAR',
        name: 'Nariño',
        cities: ['Pasto', 'Tumaco', 'Ipiales', 'Tuquerres'],
      },
      {
        code: 'NSA',
        name: 'Norte de Santander',
        cities: ['Cúcuta', 'Ocaña', 'Pamplona', 'Villa del Rosario'],
      },
      {
        code: 'PUT',
        name: 'Putumayo',
        cities: ['Mocoa', 'Puerto Asís', 'Orito', 'Villa Garzón'],
      },
      {
        code: 'QUI',
        name: 'Quindío',
        cities: ['Armenia', 'Calarcá', 'La Tebaida', 'Montenegro'],
      },
      {
        code: 'RIS',
        name: 'Risaralda',
        cities: [
          'Pereira',
          'Dosquebradas',
          'Santa Rosa de Cabal',
          'La Virginia',
        ],
      },
      {
        code: 'SAN',
        name: 'Santander',
        cities: [
          'Bucaramanga',
          'Floridablanca',
          'Girón',
          'Piedecuesta',
          'Barrancabermeja',
        ],
      },
      {
        code: 'SUC',
        name: 'Sucre',
        cities: ['Sincelejo', 'Corozal', 'Sampués', 'San Marcos'],
      },
      {
        code: 'TOL',
        name: 'Tolima',
        cities: ['Ibagué', 'Espinal', 'Melgar', 'Honda'],
      },
      {
        code: 'VAL',
        name: 'Valle del Cauca',
        cities: ['Cali', 'Palmira', 'Buenaventura', 'Tuluá', 'Cartago'],
      },
      {
        code: 'VAU',
        name: 'Vaupés',
        cities: ['Mitú', 'Carurú', 'Taraira'],
      },
      {
        code: 'VIC',
        name: 'Vichada',
        cities: ['Puerto Carreño', 'La Primavera', 'Santa Rosalía', 'Cumaribo'],
      },
    ],
  },
  {
    code: 'SV',
    name: 'El Salvador',
    states: [
      {
        code: 'AH',
        name: 'Ahuachapán',
        cities: ['Ahuachapán', 'Atiquizaya', 'Concepción de Ataco', 'Jujutla'],
      },
      {
        code: 'CA',
        name: 'Cabañas',
        cities: ['Sensuntepeque', 'Ilobasco', 'Victoria', 'Jutiapa'],
      },
      {
        code: 'CH',
        name: 'Chalatenango',
        cities: ['Chalatenango', 'El Carrizal', 'La Palma', 'Tejutla'],
      },
      {
        code: 'CU',
        name: 'Cuscatlán',
        cities: [
          'Cojutepeque',
          'Suchitoto',
          'San Pedro Perulapán',
          'Candelaria',
        ],
      },
      {
        code: 'LI',
        name: 'La Libertad',
        cities: ['Santa Tecla', 'Antiguo Cuscatlán', 'Quezaltepeque', 'Colón'],
      },
      {
        code: 'LP',
        name: 'La Paz',
        cities: [
          'Zacatecoluca',
          'El Rosario',
          'Olocuilta',
          'San Pedro Masahuat',
        ],
      },
      {
        code: 'LU',
        name: 'La Unión',
        cities: ['La Unión', 'Santa Rosa de Lima', 'Conchagua', 'El Carmen'],
      },
      {
        code: 'MO',
        name: 'Morazán',
        cities: ['San Francisco Gotera', 'Jocoro', 'Arambala', 'El Rosario'],
      },
      {
        code: 'SM',
        name: 'San Miguel',
        cities: ['San Miguel', 'Chinameca', 'Ciudad Barrios', 'Sesori'],
      },
      {
        code: 'SS',
        name: 'San Salvador',
        cities: ['San Salvador', 'Mejicanos', 'Soyapango', 'Apopa', 'Ilopango'],
      },
      {
        code: 'SV',
        name: 'San Vicente',
        cities: ['San Vicente', 'Tecoluca', 'Apastepeque', 'Santa Clara'],
      },
      {
        code: 'SA',
        name: 'Santa Ana',
        cities: ['Santa Ana', 'Metapán', 'Chalchuapa', 'Coatepeque'],
      },
      {
        code: 'SO',
        name: 'Sonsonate',
        cities: ['Sonsonate', 'Acajutla', 'Izalco', 'Nahuizalco'],
      },
      {
        code: 'US',
        name: 'Usulután',
        cities: ['Usulután', 'Jiquilisco', 'Santiago de María', 'Ozatlán'],
      },
    ],
  },
];
