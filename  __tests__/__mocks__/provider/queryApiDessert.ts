export const useCounter = () => ({
    dessert: [
      { id: 1, name: 'Tarte aux pommes', price: 3.5, category: 'Tarte', image: { desktop: '/apple.jpg' } }
    ],
    tab: [],
    modifyCartItem: jest.fn(),
    isScrolled: false,
    warning: '',
    isOpen: false,
  })