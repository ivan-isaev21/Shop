export default {
    state: {
        shopList: [
            {
                id: 1,
                title: 'Nike Red',
                descr: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. ',
                img: require('../assets/img/1.png'),
                gallery: [
                    { name: 'Nike boots First', img: require('../assets/img/1.png') },
                    { name: 'Nike boots Second', img: require('../assets/img/2.png') },
                    { name: 'Nike boots Third', img: require('../assets/img/3.png') }
                ]
            },
            {
                id: 2,
                title: 'Nike Default',
                descr: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. ',
                img: require('../assets/img/4.png'),
                gallery: [
                    { name: 'Nike boots First', img: require('../assets/img/4.png') },
                    { name: 'Nike boots Second', img: require('../assets/img/5.png') },
                    { name: 'Nike boots Third', img: require('../assets/img/6.png') }
                ]
            },
            {
                id: 3,
                title: 'Nike Green',
                descr: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. ',
                img: require('../assets/img/7.png'),
                gallery: [
                    { name: 'Nike boots First', img: require('../assets/img/7.png') },
                    { name: 'Nike boots Second', img: require('../assets/img/8.png') },
                    { name: 'Nike boots Third', img: require('../assets/img/9.png') }
                ]
            },
            {
                id: 4,
                title: 'Nike Street',
                descr: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. ',
                img: require('../assets/img/10.png'),
                gallery: [
                    { name: 'Nike boots First', img: require('../assets/img/10.png') },
                    { name: 'Nike boots Second', img: require('../assets/img/11.png') },
                    { name: 'Nike boots Third', img: require('../assets/img/12.png') }
                ]
            }
        ]
    },
    mutations: {

    },
    actions: {

    },
    getters: {
        getShopList(state) {
            return state.shopList
        },
        getProduct: (state) => (id) => {
            return state.shopList.find(product => product.id == id)
        }
    }
}
