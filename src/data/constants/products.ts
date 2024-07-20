import Product from '@/data/model/Product'

const produtos: Product[] = [
    {
      id: 1,
      name: 'Smartphone XYZ',
      price: 2999.99,
      description: 'Smartphone XYZ com tela de 6.5 polegadas, 128GB de armazenamento e câmera de 48MP.',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHNtYXJ0cGhvbmV8ZW58MHx8fHwxNjA2NTQ2NjUx&ixlib=rb-1.2.1&q=80&w=400',
    },
    {
      id: 2,
      name: 'Notebook ABC',
      price: 4999.99,
      description: 'Notebook ABC com processador Intel i7, 16GB de RAM e SSD de 512GB.',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGxhcHRvcHxlbnwwfHx8fDE2MDY1NDY2NTE&ixlib=rb-1.2.1&q=80&w=400',
    },
    {
      id: 3,
      name: 'Smart TV 4K',
      price: 2599.99,
      description: 'Smart TV 4K de 55 polegadas com HDR e integração com assistentes de voz.',
      image: 'https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/a36950f5-a2e8-4ec5-94f0-35faff2f7f30._CR855%2C0%2C2000%2C2000_SX640_SY640_.jpg'
    },
    {
      id: 4,
      name: 'Tablet DEF',
      price: 1999.99,
      description: 'Tablet DEF com tela de 10.1 polegadas, 64GB de armazenamento e suporte para caneta stylus.',
      image: 'https://images.unsplash.com/photo-1640622841908-3a691b7b7ac9?q=80&w=1488&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 5,
      name: 'Fone de Ouvido Bluetooth',
      price: 399.99,
      description: 'Fone de ouvido Bluetooth com cancelamento de ruído e até 20 horas de bateria.',
      image: 'https://images.unsplash.com/photo-1618414074972-723c8314d3db?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 6,
      name: 'Câmera Digital GHI',
      price: 3499.99,
      description: 'Câmera Digital GHI com 24MP, lente intercambiável e gravação em 4K.',
      image: 'https://images.unsplash.com/photo-1590292339438-5fc3be7fca9d?q=80&w=1960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 7,
      name: 'Console de Videogame JKL',
      price: 2999.99,
      description: 'Console de Videogame JKL com 1TB de armazenamento e gráficos em 4K.',
      image: 'https://images.unsplash.com/photo-1507457379470-08b800bebc67?q=80&w=1509&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 8,
      name: 'Caixa de Som Bluetooth MNO',
      price: 599.99,
      description: 'Caixa de Som Bluetooth MNO com som estéreo e 12 horas de autonomia.',
      image: 'https://images.unsplash.com/photo-1518671678551-911467efe539?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 9,
      name: 'Relógio Inteligente PQR',
      price: 899.99,
      description: 'Relógio Inteligente PQR com monitoramento de atividades físicas e notificações.',
      image: 'https://images.unsplash.com/photo-1461141346587-763ab02bced9?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 10,
      name: 'Leitor de E-books STU',
      price: 699.99,
      description: 'Leitor de E-books STU com tela de 6 polegadas e iluminação ajustável.',
      image: 'https://images.unsplash.com/38/zEk8RJdmQrqja2XwbjgJ_DSC_2368.jpg?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 11,
      name: 'Câmera de Segurança VWX',
      price: 499.99,
      description: 'Câmera de Segurança VWX com visão noturna e detecção de movimento.',
      image: 'https://images.unsplash.com/photo-1705147293087-9e183bf149ef?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 12,
      name: 'Impressora Multifuncional YZA',
      price: 899.99,
      description: 'Impressora Multifuncional YZA com impressão, cópia e digitalização.',
      image: 'https://images.unsplash.com/photo-1708793699492-5fa208f52dcb?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 13,
      name: 'Monitor UltraWide BCD',
      price: 1999.99,
      description: 'Monitor UltraWide BCD de 34 polegadas com resolução QHD.',
      image: 'https://images.unsplash.com/photo-1585362028211-dee1aba5fdd3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 14,
      name: 'Headset Gamer EFG',
      price: 499.99,
      description: 'Headset Gamer EFG com som surround e microfone ajustável.',
      image: 'https://images.unsplash.com/photo-1660391532247-4a8ad1060817?q=80&w=1481&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 15,
      name: 'Teclado Mecânico HIJ',
      price: 299.99,
      description: 'Teclado Mecânico HIJ com switches rápidos e iluminação RGB.',
      image: 'https://images.unsplash.com/photo-1602025882379-e01cf08baa51?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 16,
      name: 'Mouse Sem Fio KLM',
      price: 199.99,
      description: 'Mouse Sem Fio KLM com sensor óptico de alta precisão e bateria recarregável.',
      image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=1328&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 17,
      name: 'Caixa de Som Portátil NOP',
      price: 299.99,
      description: 'Caixa de Som Portátil NOP com conexão Bluetooth e resistência à água.',
      image: 'https://images.unsplash.com/photo-1683813180163-92958d2a719a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 18,
      name: 'Roteador Wi-Fi QRS',
      price: 399.99,
      description: 'Roteador Wi-Fi QRS com tecnologia dual-band e alta velocidade.',
      image: 'https://images.unsplash.com/photo-1525004351186-bdc426f3efaa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 19,
      name: 'Câmera de Ação TUV',
      price: 799.99,
      description: 'Câmera de Ação TUV com gravação em 4K e estabilização de imagem.',
      image: 'https://images.unsplash.com/photo-1677172954692-90cf8bdc91e6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 20,
      name: 'Webcam DEF',
      price: 299.99,
      description: 'Webcam DEF com resolução Full HD e microfone embutido.',
      image: 'https://images.unsplash.com/photo-1670278458254-0df3f72ab093?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 21,
      name: 'Smart Speaker GHI',
      price: 399.99,
      description: 'Smart Speaker GHI com assistente virtual e som de alta qualidade.',
      image: 'https://images.unsplash.com/photo-1511842745775-b366af36db2a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 22,
      name: 'Smartwatch JKL',
      price: 1299.99,
      description: 'Smartwatch JKL com monitoramento de saúde e GPS integrado.',
      image: 'https://images.unsplash.com/photo-1542541864-4abf21a55761?q=80&w=1303&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 23,
      name: 'Drone MNO',
      price: 3499.99,
      description: 'Drone MNO com câmera 4K e controle remoto de longo alcance.',
      image: 'https://images.unsplash.com/photo-1504890001746-a9a68eda46e2?q=80&w=1387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 24,
      name: 'Mousepad PQR',
      price: 99.99,
      description: 'Mousepad PQR com iluminação personalizada e superfície antiderrapante.',
      image: 'https://images.unsplash.com/photo-1596347909354-377bb4b50297?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 25,
      name:'Carregador Portátil STU',
      price: 199.99,
      description: 'Carregador Portátil STU com 10000mAh e múltiplas portas USB.',
      image: 'https://images.unsplash.com/photo-1619489646924-b4fce76b1db5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 26,
      name: 'Adaptador USB Tipo-C VWX',
      price: 49.99,
      description: 'Adaptador USB Tipo-C VWX com múltiplas saídas para diferentes dispositivos.',
      image: 'https://images.unsplash.com/photo-1616578781650-cd818fa41e57?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 27,
      name: 'Controle Remoto Universal YZA',
      price: 149.99,
      description: 'Controle Remoto Universal YZA compatível com diversos aparelhos eletrônicos.',
      image: 'https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 28,
      name: 'Switch HDMI BCD',
      price: 89.99,
      description: 'Switch HDMI BCD com 3 entradas e 1 saída, suportando 4K.',
      image: 'https://cabletimetech.com/cdn/shop/files/CT-HS4K3-PB_13.jpg?v=1690528340&width=800'
    },
    {
      id: 29,
      name: 'Hub USB 3.0 EFG',
      price: 129.99,
      description: 'Hub USB 3.0 EFG com 4 portas de alta velocidade e design compacto.',
      image: 'https://images.unsplash.com/photo-1616578273577-5d54546f4dec?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 30,
      name: 'Cadeira de Escritório Ergonomica',
      price: 199.99,
      description: 'Cadeira de escritório com design ergonômico, ajuste de altura e apoio lombar para maior conforto e produtividade.',
      image: 'https://images.unsplash.com/photo-1683836809851-9e3aad661ffd?q=80&w=1461&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
]

export default produtos