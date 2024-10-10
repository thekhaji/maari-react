import React from "react";


import ProductCard from "./ProductCard";
import { Container } from "@mui/material";
let productsArr = [
    {
      id:1,
      productName: 'ANUA Heartleaf Pore Control Cleansing Oil 200ml',
      productBrend: 'ANUA',
      productCategory: 'cleanisers',
      productStatus: '',
      productReviews: 1,
      productPrice: '190 000 сумов',
      productImages:['https://kokosplus.uz/uploads/products/467853e63a873236dcae175b07b321e4.jpeg','https://kokosplus.uz/uploads/products/86631722863198.png'],
      productDesc: `Гидрофильное масло для глубокого очищения пор помогает в борьбе с чёрными точками, эффективно растворяет жировые пробки и сокращает выраженность сальных нитей. Абсорбирует излишки кожного себума. удаляет все виды загрязнений, стойкий макияж, тональные и солнцезащитные средства.
  
                    Продукт помогает нормализовать работу сальных желёз и восстановить оптимальный гидролипидный барьер.
  
                    Основные действующие компоненты:
                    Экстракт хауттюйнии сердцевидной ускоряет заживление ранок и микроповреждений, обладает противовоспалительными свойствами, снижает чувствительность к внешним раздражителям.
  
                    Масло виноградной косточки — мощнейший природный антиоксидант, блокатор свободных радикалов. Клинически доказано, что использование этого компонента помогает стабилизировать выработку коллагена и эластина, отвечающих за молодость и упругость кожи.
  
                    Масло жожоба увлажняет и питает кожу. Большая концентрация витамина Е в масле обеспечивает антиоксидантные свойства.
  
                    Масло макадамии смягчает и интенсивно питает, мгновенно впитывается, легко распределяясь по коже. Способствует восстановлению кожных покровов, является антиоксидантом. Незаменим для сухой, обезвоженной и зрелой кожи.
  
                    Подходит для нормальной, комбинированной и склонной к жирности кожи.
                    Объем: 200 мл`,
      productCompound: `Ethylhexyl Palmitate, Sorbeth-30 Tetraoleate, Sorbitan Sesquioleate, Caprylic/Capric Triglyceride, Butyl Avocadate, Fragrance, Helianthus Annuus (Sunflower) Seed Oil, Macadamia Ternifolia Seed Oil, Olea Europaea (Olive) Fruit Oil, Simmondsia Chinensis (Jojoba) Seed Oil, Vitis Vinifera (Grape) Seed Oil, Caprylyl Glycol, Ethylhexylglycerin, Curcuma Longa (Turmeric) Root Extract, Melia Azadirachta Flower Extract, Tocopherol, Melia Azadirachta Leaf Extract, Houttuynia Cordata Extract, Corallina Officinalis Extract, Melia Azadirachta Bark Extract, Moringa Oleifera Seed Oil, Ocimum Sanctum Leaf Extract`
    },
    {
      id:2,
      productName: "A'PIEU PURE BLOCK AQUA SUN GEL SPF50+/PA+++",
      productBrend: "A'PIEU",
      productCategory: 'spf',
      productStatus: '',
      productReviews: 3,
      productPrice: '90 000 сумов',
      productImages:['https://kokosplus.uz/uploads/products/ef4447ce2fe3405ae97edf63cb1f6077.jpeg',],
      productDesc: `Увлажняющий солнцезащитный гель поможет сохранить кожу от преждевременного увядания и на отдыхе, и в городских условиях. Средство имеет легкую текстуру и подходит всем типам кожи. Санскрин впитывается в течение нескольких секунд, не оставляя на коже белых следов и ощущения пленки.
  Фактор защиты: SPF50+/PA+++
  Объем 50 мл`,
      productCompound: `Water, Ethylhexyl Methoxycinnamate, Acrylates Copolymer, Alcohol Denat, Butyloctyl Salicylate, Octocrylene, Ethylhexyl Salicylate, Butylene Glycol, Butyl Methoxydibenzoylmethane, Methyl Methacrylate Crosspolymer, Dipropylene Glycol, Bis-Ethylhexyloxyphenol Methoxyphenyl Triazine, Dimethicone, Cyclopentasiloxane, Sodium Acrylate/​Sodium Acryloyldimethyl Taurate Copolymer, Caprylyl Glycol, Cetyl PEG/​PPG-10/​1 Dimethicone, Adansonia Digitata Seed Extract, Isohexadecane, Ethylhexylglycerin, Polysorbate 60, Acrylates/​C10-30 Alkyl Acrylate Crosspolymer, Polysorbate 80, Fragrance, Potassium Hydroxide, 1,2-Hexanediol, BHT, Disodium EDTA, Glycerin, Citrullus Lanatus (Watermelon) Fruit Extract, Hydrolyzed Hyaluronic Acid, Limonene, Linalool`
    },
    {
      id:3,
      productName: 'Dr.Jart+ BB Beauty Balm Silver Label+ SPF35 PA++',
      productBrend: 'Dr.Jart+',
      productCategory: 'facemakeup',
      productStatus: '',
      productReviews: 2,
      productPrice: '240 000 сумов',
      productImages:['https://kokosplus.uz/uploads/products/6211e3888ea964b613bfc66fbfd650e3.jpeg','https://kokosplus.uz/uploads/products/6211e3888ea964b613bfc66fbfd650e3.jpeg'],
      productDesc: `Омолаживающий BB Крем с SPF35/PA++ защищает кожу от воздействия солнечного излучения и выравнивает тон кожи. Натуральный защитный комплекс в составе формулы, состоящий из 5 растительных экстрактов заботится о Вашей коже, делает ее гладкой, маскирует несовершенства и выравнивает тон. Средство отлично скрывает покраснения и тусклость, придает лицу здоровый цвет и естественный матовый финиш.
  
  BB-крем мягко ложится на кожу, не перегружая и не создавая ощущения маски.
  
  Подходит для всех типов кожи.
  Объём 40 мл`,
      productCompound: `Water/Aqua, Cyclopentasiloxane, Titanium Dioxide, Butylene Glycol, Octinoxate, Cetyl PEG/PPG-10/1 Dimethicone, Cycloheptasiloxane, Glycerin, Silica, 4-Methylbenzylidene Camphor, Diphenylsiloxy Phenyl Trimethicone, Sodium Chloride, Arbutin, Dimethicone, Ozokerite, Hexyl Laurate, Disteardimonium Hectorite, Dimethicone/Vinyl Dimethicone Crosspolymer, Beeswax Acid, Sorbitan Olivate, Sorbitan Isostearate, Butylene Glycol Dicaprylate/Dicaprate, Polyglyceryl-4 Isostearate, Tocopheryl Acetate, Propylene Carbonate, Quaternium-18 Bentonite, Calcium Stearate, Panthenol, Mica, Triethoxycaprylylsilane, Sodium Hyaluronate, Nelumbo Nucifera (Sacred Lotus) Flower Extract, Spilanthes Acmella Flower Extract, Rhodiola Rosea Root Extract, Psidium Guajava Leaf Extract, Aloe Barbadensis (Aloe Vera) Leaf Extract, Abronia Villosa Leaf Extract, Cinchona Succirubra (Quinine) Bark Extract, Caprylhydroxamic Acid, Disodium EDTA, Caprylyl Glycol, Ethylhexylglycerin, 1,2-Hexanediol, CI 77491, CI 77492, CI 77499.`
    },
    {
      id:4,
      productName: 'COSRX Clear Fit Master Patch+',
      productBrend: 'COSRX',
      productCategory: 'masks',
      productStatus: '',
      productReviews: 6,
      productPrice: '25 000 сумов',
      productImages:['https://kokosplus.uz/uploads/products/99dbae127625cfc46a7bdea4656862fe.jpeg'],
      productDesc: `Наклейки от прыщей помогут в кратчайшие сроки, в зависимости от стадии развития акне, устранить воспаления или поспособствуют быстрому созреванию гнойничка. Патчи оказывают антимикробное и противовоспалительное действие, успокаивают, уменьшают зуд и покраснения. Очень тонкие и невесомые наклейки практически не заметны на коже, не вызывают дискомфорт во время носки и позволяют скрыть их под тональной основой.
  
  Комплектация: 18 наклеек`,
      productCompound: `Polyurethane Film, Cellulose Gum, Styrene Isoprene Styrene Block Copolymer, Polyisobutylene, Petroleum Resin, Liquid Paraffin, Tetrakis Methane.`
    },
    {
      id:5,
      productName: 'COSRX AHA BHA Vitamin C Daily Toner [150ml]',
      productBrend: 'COSRX',
      productCategory: 'toners',
      productStatus: '',
      productReviews: 2,
      productPrice: '180 000 сумов',
      productImages:['https://kokosplus.uz/uploads/products/cc7ff3982c5803cc76e58d9db90488c8.jpeg'],
      productDesc: `ОТонер-эксфолиант с витамином С и AHA/BHA кислотами мягко отшелушивает ороговевшие клетки и готовит кожу к последующему нанесению уходовых средств. Регулирует выработку кожного себума, предупреждает появление воспалений и акне, выравнивает тон и рельеф кожи, борется с тусклостью и придает коже здоровый, отдохнувший вид.
  Объем 150мл`,
      productCompound: `Actinidia Chinensis (Kiwi) Fruit Extract, Hylocereus Undatus Fruit Extract, Salix Alba (Willow) Bark Water, Pyrus Malus (Apple) Fruit Water, Butylene Glycol, Niacinamide, 1,2-Hexanediol, Ethyl Hexanediol, Sodium Lactate, Water, Glycolic Acid, Allantoin, Panthenol, Adenosine, Betaine Salicylate, Ascorbyl Glucoside`
    },
    {
      id:6,
      productName: 'Holika Holika Aloe 99% Soothing Gel [55ml]',
      productBrend: 'Holika Holika',
      productCategory: 'showergel',
      productStatus: '',
      productReviews: 3,
      productPrice: '40 000 сумов',
      productImages:['https://kokosplus.uz/uploads/products/cf1d013f4ed920cebc4dcdd2f48faffe.jpeg'],
      productDesc: `Универсальный гель с 99% содержанием экстракта сока алоэ вера интенсивно увлажняет кожу, помогает сохранить влагу, снимает воспаления и раздражения, убирает шелушения, обладает бактерицидным свойством.
  
  Стимулирует регенерацию клеток, смягчает и тонизирует кожу, улучшает ее кровообращение. Подходит для любого типа кожи. Гель успокаивает кожу, снимает воспаления, повышает упругость и эластичность кожи. Возможно применение средства в качестве основы под макияж, как увлажняющую маску или лосьона после бритья или как средства после ожогов кожи. Средство не содержит парабенов, минеральных масел, искусственных красителей и отдушек.
  
  Объем: 55 мл`,
      productCompound: `Aloe Barbadensis Leaf Juice, Nelumbium Speciosum Flower Extract, Centella Asiatica Extract, Bambusa Vulgaris Extract, Cucumis Sativus (Cucumber) Fruit Extract, Zea Mays (Corn) Leaf Extract, Brassica Oleracea Capitata (Cabbage) Leaf Extract, Citrullus Lanatus (Watermelon) Fruit Extract, PEG-60 Hydrogenated Castor Oil, Sodium Polyacrylate, Carbomer, Triethanolamine, Fragrance, Phenoxyethanol`
    },
    {
      id:7,
      productName: 'Etude House Dear Darling Water Tint [03 Orange]',
      productBrend: 'Etude House',
      productCategory: 'lipbalm',
      productStatus: '',
      productReviews: 4,
      productPrice: '36 000 сумов',
      productImages:['https://kokosplus.uz/uploads/products/52cae5ae69d2ecdbe45e70ffc37fcaa2.jpeg'],
      productDesc: `Тинт на водной основе с нежным фруктовым ароматом подарит губам не бывало стойкий цвет. Натуральные пигменты впитываются в кожу губ и остаются на ней долгое время. Тинт быстро высыхает, не оставляя липкости или какого-либо еще чувства дискомфорта. Его легкая текстура вообще не ощущается на губах. Чтобы получить более насыщенные оттенки, можно наносить несколько слоев.
  Оттенок №3 Апельсин`,
      productCompound: ``
    },
    {
      id:8,
      productName: 'ISNTREE ALOE SOOTHING TONER',
      productBrend: 'ISNTREE',
      productCategory: 'toners',
      productStatus: '',
      productReviews: 3,
      productPrice: '127 500 сумов',
      productImages:['https://kokosplus.uz/uploads/products/b7138e59395b7327e8ad9ea23925e8cf.jpeg'],
      productDesc: `Успокаивающий тонер для лица с экстрактом алоэ главный помощник в устранении сухости и стянутости после очищения. Эффективно нормализует водный баланс, успокаивает, устраняет покраснение, понижает температуру кожи, оставляет бархатистый финиш. 80% экстракт алоэ вера с курортного острова Чеджу - базовый компонент тонера. Он является источником полисахаридов, аминокислот, витаминов, протеинов и минералов, которые необходимы для здоровья кожи. Также в составе множество растительных экстрактов для увлажнения, питания, регенерации и противовоспалительного действия. Легкая, освежающая текстура тоника прекрасно впитывается кожей, подготавливая ее к последующим ступеням ухода.
  Объём 200 мл`,
      productCompound: `Aloe Barbadensis Leaf Extract, Water, Methylpropanediol, Propanediol, Sodium Hyaluronate, Centella Asiatica Extract, Polygonum Cuspidatum Root Extract, Scutellaria Baicalensis Root Extract, Camellia Sinensis Leaf Extract, Glycyrrhiza Glabra (Licorice) Root Extract, Chamomilla Recutita (Matricaria) Flower Extract, Rosmarinus Officinalis (Rosemary) Leaf Extract, Polyglutamic Acid, Allantoin, Dipotassium Glycyrrhizate, Trehalose, Betaine, Panthenol, Tromethamine, Acrylates/​C10-30 Alkyl Acrylate Crosspolymer, Disodium EDTA, Hydroxyacetophenone`
    },

  ]

function Products(){
  

  return (
    <div className={"container"}>
      <h2 className={"products-headline"}>Наши продукты</h2>
          <div className={"products-wrapper"}>
      {
        productsArr.map((item)=>
          <ProductCard item={item}/>
        )
      }
    </div>
    </div>
  
  )
} 

export default Products;