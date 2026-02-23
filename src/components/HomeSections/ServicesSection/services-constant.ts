interface Service {
    title: string;
    id: string;
    description: string;
    image: string;
}
export const services: Service[] = [
    {
        id: '01',
        title: 'Web Development',
        description: 'Crafting dynamic and responsive websites that capture brand’s essence.',
        image: '/portfolio/choplife.png',
    },
    {
        id: '02',
        title: 'Mobile-App Development',
        description: 'Transforming ideas into user-friendly mobile applications.',
        image: '/portfolio/ontop.png',
    },
    {
        id: '03',
        title: 'Blockchain Development',
        description: 'Pioneering the future of decentralized web technologies.',
        image: '/portfolio/crypto.png',
    },
    {
        id: '04',
        title: 'Web Design & Branding',
        description: 'Designing captivating visuals and branding that resonates with audience',
        image: '/portfolio/ekklesia.png',
    },

]