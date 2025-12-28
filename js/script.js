function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

if (isMobileDevice()) {
    if (!window.location.pathname.includes('/mobile')) {
        window.location.href = '/mobile/';
    }
} else {
    if (window.location.pathname.includes('/mobile')) {
        window.location.href = '/';
    }
}

const params = new URLSearchParams(window.location.search);
const setParam = params.get('set');

if (setParam) {
    try {
        const decoded = b64ToUtf8(decodeURIComponent(setParam));
        const setObj = JSON.parse(decoded);

        const localSets = JSON.parse(localStorage.getItem('localSets')) || [];
        localSets.push(setObj);
        localStorage.setItem('localSets', JSON.stringify(localSets));
        const cleanUrl = window.location.origin + window.location.pathname;
        window.history.replaceState(null, '', cleanUrl);
    } catch (e) {
        console.error('Ошибка парсинга JSON из URL:', e);
    }
}

const basePath = window.location.pathname.includes('/mobile/') ? '../' : './';

const upgrades = [
    {
        imageSrc: `${basePath}imgs/upgrades/infinityL.png`,
        slot: 'bootL',
        stats: { deff: 1, damage: 1, krit: 1 },
        ru_name: 'Левый ботинок Таноса'
    },
    {
        imageSrc: `${basePath}imgs/upgrades/infinityR.png`,
        slot: 'bootR',
        stats: { deff: 1, damage: 1, krit: 1 },
        ru_name: 'Правый ботинок Таноса'
    },
    {
        imageSrc: `${basePath}imgs/upgrades/spaceShoesL.png`,
        slot: 'bootL',
        stats: { deff: 1, damage: 1, krit: 1 },
        ru_name: 'Левая космическая обувь'
    },
    {
        imageSrc: `${basePath}imgs/upgrades/spaceShoesR.png`,
        slot: 'bootR',
        stats: { deff: 1, damage: 1, krit: 1 },
        ru_name: 'Правая космическая обувь'
    },
    {
        imageSrc: `${basePath}imgs/upgrades/spaceSneakersL.png`,
        slot: 'bootL',
        stats: { deff: 1, damage: 1, krit: 1 },
        ru_name: 'Левый космический кроссовок'
    },
    {
        imageSrc: `${basePath}imgs/upgrades/spaceSneakersR.png`,
        slot: 'bootR',
        stats: { deff: 1, damage: 1, krit: 1 },
        ru_name: 'Правый космический кроссовок'
    },
    {
        imageSrc: `${basePath}imgs/upgrades/scifi.png`,
        slot: 'knife',
        stats: { deff: 1, damage: 1, krit: 1 },
        ru_name: 'Sci-Fi Нож'
    },
    {
        imageSrc: `${basePath}imgs/upgrades/goldknife.png`,
        slot: 'knife',
        stats: { deff: 1, damage: 1, krit: 1 },
        ru_name: 'Золотой нож'
    },
]

const items = [
    {
        imageSrc: `${basePath}imgs/face/netri.png`,
        stats: { deff: 2, krit: 25 },
        upg: 'deff',
        yellow: {},
        ru_name: 'Анимированные очки Netrunner'
    },
    {
        imageSrc: `${basePath}imgs/face/cyberpunkvr.png`,
        stats: { deff: 2, krit: 25 },
        upg: 'deff',
        yellow: {},
        ru_name: 'Киберпанковские VR-очки'
    },
    {
        imageSrc: `${basePath}imgs/face/maskinvisible.png`,
        stats: { deff: 0, oglysh: 3 },
        upg: 'deff',
        yellow: {},
        ru_name: 'Маска-невидимка'
    },
    {
        imageSrc: `${basePath}imgs/shoulder/magshar2.png`,
        stats: { deff: 2, damage: 1, krit: 10, armourmax: 25 },
        upg: 'deff',
        yellow: {},
        ru_name: 'Магический воздушный шар #2'
    },
    {
        imageSrc: `${basePath}imgs/shoulder/energoshar.png`,
        stats: { deff: 4, damage: 4, krit: 24, hpmax: 5, armourmax: 27, neoglysh: 10 },
        upg: 'deff',
        yellow: {},
        ru_name: 'Энергетический воздушный шар'
    },
    {
        imageSrc: `${basePath}imgs/shoulder/kurashar.png`,
        stats: { deff: 4, damage: 4, krit: 24, hpmax: 5, armourmax: 27, neoglysh: 10 },
        upg: 'deff',
        yellow: {},
        ru_name: 'Энергетический КУРА шар'
    },
    {
        imageSrc: `${basePath}imgs/case/chem.png`,
        stats: { oglysh: 6 },
        upg: '',
        yellow: {},
        ru_name: 'Дьявольский чемодан'
    },
    {
        imageSrc: `${basePath}imgs/case/enegrochem.png`,
        stats: { damage: 3, oglysh: 13, neoglysh: 4 },
        upg: '',
        yellow: {},
        ru_name: 'Энергетический чемодан'
    },
    {
        imageSrc: `${basePath}imgs/armour/bronik.png`,
        stats: { deff: 2, krit: 1, armourmax: 0 },
        upg: 'armour',
        yellow: {},
        ru_name: 'Бронежилет «Игра в кальмара»'
    },
    {
        imageSrc: `${basePath}imgs/armour/genbronik.png`,
        stats: { deff: 2, damage: 2, krit: 1, armourmax: 35 },
        upg: 'armour',
        yellow: {},
        ru_name: 'Генеральский бронежилет'
    },
    {
        imageSrc: `${basePath}imgs/hand/spacehand.png`,
        stats: { damage: 4, armourmax: 10, otrazh: 1 },
        upg: 'damage',
        yellow: {},
        ru_name: 'Космическая рука'
    },
    {
        imageSrc: `${basePath}imgs/hand/duff.png`,
        stats: { damage: 4 },
        upg: 'damage',
        yellow: {},
        ru_name: 'Молот «Duff»'
    },
    {
        imageSrc: `${basePath}imgs/hand/prototype.png`,
        stats: { damage: 4 },
        upg: 'damage',
        yellow: {},
        ru_name: 'Прототип'
    },
    {
        imageSrc: `${basePath}imgs/hand/vay.png`,
        stats: { damage: 4 },
        upg: 'damage',
        yellow: {},
        ru_name: 'Перчатка Вай'
    },
    {
        imageSrc: `${basePath}imgs/hand/knuckles.png`,
        stats: { damage: 4 },
        upg: 'damage',
        yellow: {},
        ru_name: 'Перчатка Наклза'
    },
    {
        imageSrc: `${basePath}imgs/hand/magaxe.png`,
        stats: { damage: 4 },
        upg: 'damage',
        yellow: {},
        ru_name: 'Магический топор'
    },
    {
        imageSrc: `${basePath}imgs/hand/fraps.png`,
        stats: { deff: 2, damage: 2, krit: 2 },
        upg: 'damage',
        yellow: {},
        ru_name: 'Табличка «Фрапс пишется»'
    },
    {
        imageSrc: `${basePath}imgs/head/deadinside.png`,
        stats: { damage: 1, krit: 10, oglysh: 1 },
        upg: 'krit',
        yellow: {},
        ru_name: 'Маркер dead inside'
    },
    {
        imageSrc: `${basePath}imgs/head/endercube.png`,
        stats: { damage: 1, krit: 10, oglysh: 1 },
        upg: 'krit',
        yellow: {},
        ru_name: 'Эндер куб'
    },
    {
        imageSrc: `${basePath}imgs/head/starnimb.png`,
        stats: { damage: 1, krit: 10, oglysh: 1 },
        upg: 'krit',
        yellow: {},
        ru_name: 'Звездный нимб'
    },
    {
        imageSrc: `${basePath}imgs/spine/tor.png`,
        stats: { damage: 4 },
        upg: 'damage',
        yellow: {},
        ru_name: 'Молот Тора'
    },
    {
        imageSrc: `${basePath}imgs/spine/jasehummer.png`,
        stats: { damage: 4 },
        upg: 'damage',
        yellow: {},
        ru_name: 'Молот Джейса'
    },
    {
        imageSrc: `${basePath}imgs/spine/rbt.png`,
        stats: { deff: 4 },
        upg: 'deff',
        yellow: {},
        ru_name: 'Русский боевой топор'
    },
    {
        imageSrc: `${basePath}imgs/spine/ka.png`,
        stats: { deff: 4 },
        upg: 'deff',
        yellow: {},
        ru_name: 'Щит Капитана Америки'
    },
    {
        imageSrc: `${basePath}imgs/spine/magmaxe.png`,
        stats: { deff: 4 },
        upg: 'deff',
        yellow: {},
        ru_name: 'Магмовый топор'
    },
    {
        imageSrc: `${basePath}imgs/spine/icesword.png`,
        stats: { deff: 4 },
        upg: 'deff',
        yellow: {},
        ru_name: 'Ледяной меч'
    },
    {
        imageSrc: `${basePath}imgs/spine/energoshield.png`,
        stats: { deff: 4, hpmax: 10, opyan: 2 },
        upg: 'deff',
        yellow: {},
        ru_name: 'Энергетический щит'
    },
    {
        imageSrc: `${basePath}imgs/shoulder/delorean.png`,
        stats: { deff: 0, krit: 10, armourmax: 20, oglysh: 4 },
        upg: 'deff',
        yellow: {},
        ru_name: 'Игрушечный Delorean'
    },
    {
        imageSrc: `${basePath}imgs/shoulder/pexpress.png`,
        stats: { deff: 0, krit: 10, armourmax: 20, oglysh: 4 },
        upg: 'deff',
        yellow: {},
        ru_name: 'Planet Express'
    },
    {
        imageSrc: `${basePath}imgs/breast/mahi.png`,
        stats: { deff: 2, damage: 1, krit: 10, armourmax: 25 },
        upg: 'damage',
        yellow: {},
        ru_name: 'Цепь «Махинатор»'
    },
    {
        imageSrc: `${basePath}imgs/breast/energomahi.png`,
        stats: { deff: 4, damage: 2, krit: 12, armourmax: 25 },
        upg: 'damage',
        yellow: { damage: 2, hpmax: 5 },
        ru_name: 'Энергетический махинатор'
    },
    {
        imageSrc: `${basePath}imgs/head/bad.png`,
        stats: { krit: 10 },
        upg: 'krit',
        yellow: {},
        ru_name: 'Маркер «BAD»'
    },
    {
        imageSrc: `${basePath}imgs/head/bk.png`,
        stats: { krit: 10 },
        upg: 'krit',
        yellow: {},
        ru_name: 'Бойцовский клуб'
    },
    {
        imageSrc: `${basePath}imgs/head/ironman.png`,
        stats: { krit: 2 },
        upg: 'krit',
        yellow: {},
        ru_name: 'Шлем железного человека'
    },
    {
        imageSrc: `${basePath}imgs/head/pepe.png`,
        stats: { krit: 1 },
        upg: 'krit',
        yellow: {},
        ru_name: 'Веселый Пепе'
    },
    {
        imageSrc: `${basePath}imgs/head/tikva.png`,
        stats: { deff: 2, damage: 2, krit: 2 },
        upg: 'hpmin',
        yellow: {},
        ru_name: 'Голова Тыква'
    },
    {
        imageSrc: `${basePath}imgs/hand/azinot.png`,
        stats: { deff: 2, damage: 2, krit: 2 },
        upg: 'damage',
        yellow: {},
        ru_name: 'Клинки Аззинота'
    },
    {
        imageSrc: `${basePath}imgs/breast/magsphere.png`,
        stats: { deff: 2, krit: 1 },
        upg: 'damage',
        yellow: {},
        ru_name: 'Магические сфера'
    },
    {
        imageSrc: `${basePath}imgs/face/sphereoverhead.png`,
        stats: { deff: 2, damage: 2, krit: 2 },
        upg: 'deff',
        yellow: {},
        ru_name: 'Сфера над головой'
    },
    {
        imageSrc: `${basePath}imgs/head/jetpack.png`,
        stats: { deff: 2, damage: 2, krit: 2 },
        upg: 'hpmin',
        yellow: {},
        ru_name: 'Джетпак'
    },
    {
        imageSrc: `${basePath}imgs/breast/swag.png`,
        stats: { deff: 2, damage: 1, krit: 10, armourmax: 25 },
        upg: 'damage',
        yellow: {},
        ru_name: 'Цепь SWAG'
    },
    {
        imageSrc: `${basePath}imgs/breast/swaga.png`,
        stats: { deff: 2, damage: 1, krit: 10, armourmax: 25 },
        upg: 'damage',
        yellow: {},
        ru_name: 'Цепь СВАГА'
    },
    {
        imageSrc: `${basePath}imgs/spine/baseballbatcompton.png`,
        stats: { deff: 4, oglysh: 5 },
        upg: 'deff',
        yellow: {},
        ru_name: 'Бейсбольная бита Compton'
    },
    {
        imageSrc: `${basePath}imgs/spine/goldmount.png`,
        stats: { deff: 4, oglysh: 11 },
        upg: 'deff',
        yellow: {},
        ru_name: 'Золотая монтировка'
    },
    {
        imageSrc: `${basePath}imgs/shoulder/piratecompass.png`,
        stats: { deff: 4, damage: 4, krit: 24, hpmax: 5, armourmax: 27, neoglysh: 20 },
        upg: 'deff',
        yellow: {},
        ru_name: 'Пиратский компас'
    },
    {
        imageSrc: `${basePath}imgs/shoulder/flyingdutchman.png`,
        stats: { deff: 4, damage: 4, krit: 24, hpmax: 5, armourmax: 27, neoglysh: 20 },
        upg: 'deff',
        yellow: {},
        ru_name: 'Летучий голландец'
    },
    {
        imageSrc: `${basePath}imgs/head/spacejetpack.png`,
        stats: { deff: 2, damage: 2, krit: 2 },
        upg: 'hpmin',
        yellow: {},
        ru_name: 'Космический джетпак'
    },
];

const nashivki = [
    {
        imageSrc: `${basePath}imgs/nashivki/deff.png`,
        stats: { deff: 6 },
        ru_name: 'Нашивка на защиту',
        slot: 'all', slot_name: 'Все слоты'
    },
    {
        imageSrc: `${basePath}imgs/nashivki/damage.png`,
        stats: { damage: 3 },
        ru_name: 'Нашивка на урон',
        slot: 'all', slot_name: 'Все слоты'
    },
    {
        imageSrc: `${basePath}imgs/nashivki/hpmin.png`,
        stats: { hpmin: 3 },
        ru_name: 'Нашивка на регенерацию',
        slot: 'all', slot_name: 'Все слоты'
    },
    {
        imageSrc: `${basePath}imgs/nashivki/krit.png`,
        stats: { krit: 3 },
        ru_name: 'Нашивка на удачу',
        slot: 'all', slot_name: 'Все слоты'
    },
    {
        imageSrc: `${basePath}imgs/nashivki/hpmax.png`,
        stats: { hpmax: 8 },
        ru_name: 'Нашивка на макс. хп',
        slot: 'all', slot_name: 'Все слоты'
    },
    {
        imageSrc: `${basePath}imgs/nashivki/otrazh.png`,
        stats: { otrazh: 3 },
        ru_name: 'Нашивка на отражение урона',
        slot: 'all', slot_name: 'Все слоты'
    },
    {
        imageSrc: `${basePath}imgs/nashivki/darkness.png`,
        stats: { deff: 4, damage: 2 },
        ru_name: 'Легендарная нашивка тьмы',
        slot: 'head', slot_name: '1-ый слот'
    },
    {
        imageSrc: `${basePath}imgs/nashivki/monster.png`,
        stats: { deff: 4, damage: 2 },
        ru_name: 'Легендарная нашивка Монстра',
        slot: 'face', slot_name: '2-ой слот'
    },
    {
        imageSrc: `${basePath}imgs/nashivki/energy.png`,
        stats: { deff: 8, damage: 4, oglysh: 3 },
        ru_name: 'Легендарная нашивка Энергии',
        slot: 'hand', slot_name: '3-ий слот'
    },
]

function getNashivkaInfo(type) {
    url = `${basePath}imgs/nashivki/${type}.png`;
    let result = null;
    nashivki.forEach(nasvhivka => {
        if (nasvhivka.imageSrc === url) {
            result = nasvhivka;
        }
    });
    return result;
}

const skins = [
    {
        imageSrc: `${basePath}imgs/skins/spacefarmer.png`,
        yellow: { deff: 2, damage: 2, otrazh: 3, armourmax: 50 },
        ru_name: 'Космический Фермер'
    },
    {
        imageSrc: `${basePath}imgs/skins/sydney.png`,
        yellow: { deff: 2, damage: 2, otrazh: 3 },
        ru_name: 'Суидни Суини'
    },
    {
        imageSrc: `${basePath}imgs/skins/antman.png`,
        yellow: { deff: 2, damage: 2, otrazh: 3 },
        ru_name: 'Человек-муравей'
    },
    {
        imageSrc: `${basePath}imgs/skins/mary.png`,
        yellow: { deff: 2, damage: 2, otrazh: 3 },
        ru_name: 'Mary'
    },
    {
        imageSrc: `${basePath}imgs/skins/bloodyangel.png`,
        yellow: { deff: 2, damage: 2, otrazh: 3 },
        ru_name: 'Кровавый Ангел'
    },
    {
        imageSrc: `${basePath}imgs/skins/spacemarine.png`,
        yellow: { deff: 2, damage: 2, otrazh: 3 },
        ru_name: 'Космодесантник'
    },
    {
        imageSrc: `${basePath}imgs/skins/altushka.png`,
        yellow: { armourmax: 100 },
        ru_name: 'Альтушка'
    },
    {
        imageSrc: `${basePath}imgs/skins/ct.png`,
        yellow: { deff: 2, damage: 2, otrazh: 3 },
        ru_name: 'Спецназовец'
    },
    {
        imageSrc: `${basePath}imgs/skins/deadpool.png`,
        yellow: { damage: 2, krit: 2, otrazh: 3 },
        ru_name: 'Дэдпул'
    },
    {
        imageSrc: `${basePath}imgs/skins/denji.png`,
        yellow: { deff: 2, damage: 2, otrazh: 3 },
        ru_name: 'Дэнджи'
    },
    {
        imageSrc: `${basePath}imgs/skins/farmeristoka.png`,
        yellow: { deff: 2, damage: 2, otrazh: 3 },
        ru_name: 'Фермер Истока'
    },
    {
        imageSrc: `${basePath}imgs/skins/grib1.png`,
        yellow: { damage: 2, hpmax: 5, oglysh: 5 },
        ru_name: 'Грибы 1'
    },
    {
        imageSrc: `${basePath}imgs/skins/grib2.png`,
        yellow: { damage: 2, hpmax: 5, oglysh: 5 },
        ru_name: 'Грибы 2'
    },
    {
        imageSrc: `${basePath}imgs/skins/hikkiistoka.png`,
        yellow: { deff: 2, damage: 2, otrazh: 3 },
        ru_name: 'Хикки Истока'
    },
    {
        imageSrc: `${basePath}imgs/skins/invoker.png`,
        yellow: { deff: 2, damage: 2, otrazh: 3 },
        ru_name: 'Инвокер'
    },
    {
        imageSrc: `${basePath}imgs/skins/jackvorobey.png`,
        yellow: { deff: 2, damage: 2, otrazh: 3 },
        ru_name: 'Джек Воробей'
    },
    {
        imageSrc: `${basePath}imgs/skins/makima.png`,
        yellow: { deff: 2, damage: 2, otrazh: 3 },
        ru_name: 'Макима'
    },
    {
        imageSrc: `${basePath}imgs/skins/power.png`,
        yellow: { deff: 2, damage: 2, otrazh: 3 },
        ru_name: 'Пауэр'
    },
    {
        imageSrc: `${basePath}imgs/skins/rilay.png`,
        yellow: { damage: 2, hpmax: 5, oglysh: 5 },
        ru_name: 'Рилай'
    },
    {
        imageSrc: `${basePath}imgs/skins/slavik.png`,
        yellow: { damage: 2, hpmax: 5, oglysh: 5 },
        ru_name: 'Славик'
    },
    {
        imageSrc: `${basePath}imgs/skins/trump.png`,
        yellow: { damage: 2, hpmax: 5, oglysh: 5 },
        ru_name: 'Парадийный Трамп'
    },
    {
        imageSrc: `${basePath}imgs/skins/wolverine.png`,
        yellow: { deff: 2, krit: 1, otrazh: 2 },
        ru_name: 'Росомаха'
    },
    {
        imageSrc: `${basePath}imgs/skins/leorik.png`,
        yellow: { krit: 2 },
        ru_name: 'Леорик'
    },
    {
        imageSrc: `${basePath}imgs/skins/davyjones.png`,
        yellow: { deff: 2, damage: 2, otrazh: 3 },
        ru_name: 'Дейви Джонс'
    },
    {
        imageSrc: `${basePath}imgs/skins/thenotoriousbig.png`,
        yellow: { krit: 2 },
        ru_name: 'THE NOTORIOUS B.I.G'
    },
    {
        imageSrc: `${basePath}imgs/skins/lockdog.png`,
        yellow: { damage: 2, hpmax: 5, oglysh: 5 },
        ru_name: 'Лок Дог'
    },
    {
        imageSrc: `${basePath}imgs/skins/skuf.png`,
        yellow: { deff: 2, damage: 2, otrazh: 3 },
        ru_name: 'Скуф'
    },
    {
        imageSrc: `${basePath}imgs/skins/tron.png`,
        yellow: { deff: 2, damage: 2, hpmax: 25, armourmax: 25 },
        ru_name: 'Трон'
    },
    {
        imageSrc: `${basePath}imgs/skins/aragorn.png`,
        yellow: { krit: 2 },
        ru_name: 'Арагорн'
    },
    {
        imageSrc: `${basePath}imgs/skins/guts.png`,
        yellow: { deff: 2, damage: 2, otrazh: 3 },
        ru_name: 'Гатс'
    },
    {
        imageSrc: `${basePath}imgs/skins/werewolf.png`,
        yellow: { deff: 2, damage: 2, krit: 2, otrazh: 3, armourmax: 50 },
        ru_name: 'Оборотень-человек'
    },
    {
        imageSrc: `${basePath}imgs/skins/montgomery.png`,
        yellow: { deff: 2, damage: 2, krit: 2, otrazh: 3, armourmax: 50 },
        ru_name: 'Монтгомери'
    },
    {
        imageSrc: `${basePath}imgs/skins/sabrina.png`,
        yellow: { deff: 2, damage: 2, krit: 2, otrazh: 3, armourmax: 50 },
        ru_name: 'Сабрина'
    },
    {
        imageSrc: `${basePath}imgs/skins/glent.png`,
        yellow: { hpmax: 25, armourmax: 25 },
        ru_name: 'Глент'
    },
];

function getSkinInfoByRuName(ru_name) {
    let result = null;
    skins.forEach(skin => {
        if (skin.ru_name === ru_name) {
            result = skin;
        }
    });
    return result;
}

function getSkinInfoByImage(image) {
    let result = null;
    skins.forEach(skin => {
        if (skin.imageSrc.includes(image)) {
            result = skin;
        }
    });
    return result;
}

function getAccsInfoByRuName(ru_name) {
    let result = null;
    items.forEach(item => {
        if (item.ru_name === ru_name) {
            result = item;
        }
    });
    return result;
}

function getAccsInfoByImage(image) {
    let result = null;
    items.forEach(item => {
        if (item.imageSrc.includes(image)) {
            result = item;
        }
    });
    return result;
}

function getFullInfo(data) {
    var acsInfo = getAccsInfoByRuName(data.stats)
    var yellowInfo = getYellowInfoByRuName(data.yellow)
    var nashivkaInfo = getNashivkaInfo(data.nashivka)

    return [acsInfo, yellowInfo, nashivkaInfo, data.zatochka]
}

var selectedSkin = 'default';

var sets = [
    {
        name: 'Сет от сайта №1',
        skin: null,
        head: {
            main: 'Нимб 5 звезд',
            stats: 'Маркер dead inside',
            yellow: 'Нимб кольца всевластия',
            zatochka: 14,
            nashivka: 'darkness'
        },
        face: {
            main: null,
            stats: 'Анимированные очки Netrunner',
            yellow: 'Энерго маска Госта',
            zatochka: 14,
            nashivka: 'monster'
        },
        hand: {
            main: null,
            stats: 'Молот «Duff»',
            yellow: 'Энергетические часы',
            zatochka: 14,
            nashivka: 'energy'
        },
        breast: {
            main: null,
            stats: 'Энергетический махинатор',
            yellow: null,
            zatochka: 14,
            nashivka: 'damage'
        },
        shoulder: {
            main: null,
            stats: 'Энергетический воздушный шар',
            yellow: 'Аркана ИО',
            zatochka: 14,
            nashivka: 'damage'
        },
        spine: {
            main: null,
            stats: 'Молот Тора',
            yellow: 'Батлфьюри',
            zatochka: 14,
            nashivka: 'damage'
        },
        armour: {
            main: null,
            stats: 'Генеральский бронежилет',
            yellow: 'Бронежилет #3',
            zatochka: 13,
            nashivka: 'armour'
        },
        case: {
            main: null,
            stats: 'Энергетический чемодан',
            yellow: 'Чемодан криминала'
        },
    },
    {
        name: 'Сет от сайта №2',
        skin: 'Хикки Истока',
        head: {
            stats: 'Маркер dead inside',
            yellow: 'Нимб кольца всевластия',
            zatochka: 14,
            nashivka: 'damage'
        },
        face: {
            stats: 'Анимированные очки Netrunner',
            yellow: 'Энерго маска Госта',
            zatochka: 14,
            nashivka: 'damage'
        },
        hand: {
            stats: 'Молот «Duff»',
            yellow: 'Энергетические часы',
            zatochka: 14,
            nashivka: 'energy'
        },
        breast: {
            stats: 'Энергетический махинатор',
            yellow: null,
            zatochka: 14,
            nashivka: 'damage'
        },
        shoulder: {
            stats: 'Энергетический воздушный шар',
            yellow: 'Аркана ИО',
            zatochka: 14,
            nashivka: 'damage'
        },
        spine: {
            stats: 'Молот Тора',
            yellow: 'Батлфьюри',
            zatochka: 14,
            nashivka: 'damage'
        },
        armour: {
            stats: 'Генеральский бронежилет',
            yellow: 'Бронежилет #3',
            zatochka: 13,
            nashivka: 'armour'
        },
        case: {
            stats: 'Энергетический чемодан',
            yellow: 'Чемодан криминала'
        },
    },
    {
        name: 'Сет разработчика',
        skin: 'Оборотень-человек',
        head: {
            stats: 'Маркер dead inside',
            yellow: 'Нимб кольца всевластия',
            zatochka: 13,
            nashivka: 'damage'
        },
        face: {
            stats: 'Анимированные очки Netrunner',
            yellow: 'Энерго маска Госта',
            zatochka: 13,
            nashivka: 'damage'
        },
        hand: {
            stats: 'Магический топор',
            yellow: 'Оружие Бамбли Би',
            zatochka: 13,
            nashivka: 'deff'
        },
        breast: {
            stats: 'Энергетический махинатор',
            yellow: null,
            zatochka: 13,
            nashivka: 'damage'
        },
        shoulder: {
            stats: 'Энергетический воздушный шар',
            yellow: 'Аркана ИО',
            zatochka: 13,
            nashivka: 'deff'
        },
        spine: {
            stats: 'Молот Тора',
            yellow: 'Кровавые крылья',
            zatochka: 13,
            nashivka: 'deff'
        },
        armour: {
            stats: 'Генеральский бронежилет',
            yellow: null,
            zatochka: 7,
            nashivka: 'armour'
        },
        case: {
            stats: 'Энергетический чемодан',
            yellow: 'Чемодан Лабубу'
        },
    }
]

function getItemsBySlot(slot) {
    var items = []
    switch (slot) {
        case 'head':
            items = [
                {
                    name: 'nimbgearvlast',
                    ru_name: 'Нимб кольца всевластия',
                    yellow: { deff: 3, damage: 3, krit: 1, hpmax: 19 }
                },
                {
                    name: 'tango',
                    ru_name: 'Танго',
                    yellow: { deff: 2, damage: 1, krit: 1, hpmax: 10 }
                },
                {
                    name: 'dora',
                    ru_name: 'Нимб Доры',
                    yellow: { deff: 2, damage: 1, krit: 1, hpmax: 10 }
                },
                {
                    name: 'pmolly',
                    ru_name: 'Нимб Пошлой Молли',
                    yellow: { krit: 2, neoglysh: 8, otrazh: 2 }
                },
                {
                    name: 'shlyapa4',
                    ru_name: 'Эксклюзивная шляпа 4',
                    yellow: { damage: 1, hpmax: 5 }
                },
                {
                    name: 'shlyapa3',
                    ru_name: 'Эксклюзивная шляпа 3',
                    yellow: { deff: 1, hpmax: 5 }
                },
                {
                    name: 'shlyapa2',
                    ru_name: 'Эксклюзивная шляпа 2',
                    yellow: { krit: 1, hpmax: 5 }
                },
                {
                    name: 'shlyapa1',
                    ru_name: 'Эксклюзивная шляпа 1',
                    yellow: { damage: 1, hpmax: 5 }
                },
                {
                    name: 'tact',
                    ru_name: 'Тактический шлем',
                    yellow: { deff: 2, armourmax: 10 }
                },
                {
                    name: 'piratehat1',
                    ru_name: 'Пиратская шляпа №1',
                    yellow: { deff: 1, damage: 1, krit: 1, oglysh: 1 }
                },
                {
                    name: 'piratehat2',
                    ru_name: 'Пиратская шляпа №2',
                    yellow: { deff: 1, damage: 1, krit: 1, oglysh: 1 }
                },
                {
                    name: 'piratehat3',
                    ru_name: 'Пиратская шляпа №3',
                    yellow: { deff: 1, damage: 1, krit: 1, oglysh: 1 }
                },
                {
                    name: 'cherepandkosti',
                    ru_name: 'Череп и кости',
                    yellow: { deff: 1, damage: 1, krit: 1, oglysh: 1 }
                },
                {
                    name: 'crownofpatroni',
                    ru_name: 'Корона из патрон',
                    yellow: { krit: 2, neoglysh: 8, otrazh: 2 }
                },
            ]
            break;
        case 'face':
            items = [
                {
                    name: 'energymaskghost',
                    ru_name: 'Энерго маска Госта',
                    yellow: { deff: 5, damage: 5, hpmax: 20, opyan: 4, block: 4 }
                },
                {
                    name: 'respik',
                    ru_name: 'Респиратор',
                    yellow: { deff: 1, damage: 1 }
                },
                {
                    name: 'cherep',
                    ru_name: 'Маска череп',
                    yellow: { damage: 2, armourmax: 10 }
                },
                {
                    name: 'frontman',
                    ru_name: 'Маска распорядителя',
                    yellow: { damage: 1, hpmax: 5 }
                },
                {
                    name: 'kvadrat',
                    ru_name: 'Маска охранника 1',
                    yellow: { krit: 1, hpmax: 5 }
                },
                {
                    name: 'krug',
                    ru_name: 'Маска охранника 3',
                    yellow: { deff: 1, hpmax: 5 }
                },
                {
                    name: 'treugolnik',
                    ru_name: 'Маска охранника 2',
                    yellow: { damage: 1, hpmax: 5 }
                },
                {
                    name: 'loki',
                    ru_name: 'Маска Локи',
                    yellow: { damage: 1, hpmax: 5 }
                },
                {
                    name: 'wrench',
                    ru_name: 'Маска «Wrench»',
                    yellow: { deff: 1, hpmax: 5 }
                },
                {
                    name: 'glentmask',
                    ru_name: 'Маска Глента из Роблокса',
                    yellow: { hpmax: 15, armourmax: 15 }
                },
            ]
            break;
        case 'hand':
            items = [
                {
                    name: 'energowatch',
                    ru_name: 'Энергетические часы',
                    yellow: { deff: 2, damage: 2, hpmax: 5, armourmax: 5, otrazh: 6 }
                },
                {
                    name: 'bumblebee',
                    ru_name: 'Оружие Бамбли Би',
                    yellow: { deff: 1, damage: 1 }
                },
                {
                    name: 'pirateflashlight',
                    ru_name: 'Пиратский фонарь',
                    yellow: { deff: 1, damage: 1, krit: 1, oglysh: 1 }
                },
                {
                    name: 'banditarbalet',
                    ru_name: 'Бандитский арбалет',
                    yellow: { krit: 3, neoglysh: 4, otrazh: 1 }
                },
                {
                    name: 'watch1',
                    ru_name: 'Часы «Panthere de Cartier»',
                    yellow: { krit: 1, hpmax: 5 }
                },
                {
                    name: 'watch2',
                    ru_name: 'Часы «Relogios Casio»',
                    yellow: { deff: 1, hpmax: 5 }
                },
                {
                    name: 'watch3',
                    ru_name: 'Часы «Rolex Submariner»',
                    yellow: { deff: 1, hpmax: 5 }
                },
                {
                    name: 'watch4',
                    ru_name: 'Часы «Gucci»',
                    yellow: { damage: 1, hpmax: 5 }
                },
                {
                    name: 'watch5',
                    ru_name: 'Часы «Patek Philippe Nautilus»',
                    yellow: { krit: 1, hpmax: 5 }
                },
                {
                    name: 'watch6',
                    ru_name: 'Часы «Apple Watch»',
                    yellow: { deff: 1, hpmax: 5 }
                },
                {
                    name: 'watch7',
                    ru_name: 'Часы «Casio G-SHOCK»',
                    yellow: { damage: 1, hpmax: 5 }
                },

            ]
            break;
        case 'breast':
            items = [
                {
                    name: 'ilum',
                    ru_name: 'Цепь Иллюмината',
                    yellow: { deff: 1, damage: 1 }
                },
                {
                    name: 'glentchain',
                    ru_name: 'Цепь Глента',
                    yellow: { hpmax: 15, armourmax: 15 }
                },
            ]
            break;
        case 'shoulder':
            items = [
                {
                    name: 'arkanaio',
                    ru_name: 'Аркана ИО',
                    yellow: { deff: 2, damage: 1, krit: 1, hpmax: 10 }
                },
                {
                    name: 'tron',
                    ru_name: 'Кольцо Tron',
                    yellow: { deff: 1, damage: 1, krit: 2, hpmax: 15, armourmax: 15 }
                },
                {
                    name: 'silverbutton',
                    ru_name: 'Серебряная кнопка',
                    yellow: { hpmax: 5, armourmax: 5 }
                },
                {
                    name: 'goldenbutton',
                    ru_name: 'Золотая кнопка',
                    yellow: { hpmax: 10, armourmax: 10 }
                },
                {
                    name: 'diamondbutton',
                    ru_name: 'Бриллиантовая кнопка',
                    yellow: { hpmax: 25, armourmax: 25 }
                },
            ]
            break;
        case 'spine':
            items = [
                {
                    name: 'katananir',
                    ru_name: 'Катана Нир',
                    yellow: { deff: 3, damage: 3, hpmax: 20, armourmax: 20, otrazh: 2 }
                },
                {
                    name: 'bloodywings',
                    ru_name: 'Кровавые крылья',
                    yellow: { deff: 2, damage: 2 }
                },
                {
                    name: 'spiderlegs',
                    ru_name: 'Паучьи лапы',
                    yellow: { deff: 1, damage: 1 }
                },
                {
                    name: 'kosaredrose',
                    ru_name: 'Коса Красной Розы',
                    yellow: { damage: 2, hpmax: 8, armourmax: 8, otrazh: 1 }
                },
                {
                    name: 'poyasbalon',
                    ru_name: 'Пояс с баллончиками',
                    yellow: { armourmax: 50 }
                },
                {
                    name: 'piratesabers',
                    ru_name: 'Пиратские сабли',
                    yellow: { deff: 1, damage: 1, krit: 1, oglysh: 1 }
                },
                {
                    name: 'piratechest',
                    ru_name: 'Пиратский сундук',
                    yellow: { deff: 1, damage: 1, krit: 1, oglysh: 1 }
                },
                {
                    name: 'seaanchor',
                    ru_name: 'Морской якорь',
                    yellow: { deff: 1, damage: 1, krit: 1, oglysh: 1 }
                },
                {
                    name: 'deltik',
                    ru_name: 'Дельтаплан на спину',
                    yellow: { damage: 1, hpmax: 5 }
                },
                {
                    name: 'battlefury',
                    ru_name: 'Батлфьюри',
                    yellow: { deff: 5, krit: 5, hpmax: 5 }
                },
                {
                    name: 'desolator',
                    ru_name: 'Дезолятор',
                    yellow: { damage: 2, krit: 4, neoglysh: 3, otrazh: 1 }
                },
                {
                    name: 'reactranecwithwings',
                    ru_name: 'Реактивный ранец с крыльями',
                    yellow: { damage: 2, krit: 4, neoglysh: 3, otrazh: 1 }
                },
                {
                    name: 'firepickaxe',
                    ru_name: 'Огненная кирка',
                    yellow: { damage: 1, hpmax: 5 }
                },
                {
                    name: 'creeper',
                    ru_name: 'Рюкзак «Крипер»',
                    yellow: { deff: 1, hpmax: 5 }
                },
                {
                    name: 'aegis',
                    ru_name: 'Аегис',
                    yellow: { damage: 2, hpmax: 8, armourmax: 8, otrazh: 1 }
                },
                {
                    name: 'trax',
                    ru_name: 'Арбалет Траксы',
                    yellow: { damage: 2, hpmax: 7, armourmax: 7, otrazh: 1 }
                },
            ]
            break;
        case 'armour':
            items = [
                {
                    name: 'tactarmour',
                    ru_name: 'Тактический бронежилет',
                    yellow: { krit: 2, armourmax: 10 }
                },
                {
                    name: 'armourgraffiti',
                    ru_name: 'Бронежилет с граффити',
                    yellow: { armourmax: 50 }
                },
                {
                    name: 'firearmour',
                    ru_name: 'Огненный бронежилет',
                    yellow: { deff: 2, damage: 2 }
                },
                {
                    name: 'armour1',
                    ru_name: 'Бронежилет #1',
                    yellow: { krit: 1, hpmax: 5 }
                },
                {
                    name: 'armour2',
                    ru_name: 'Бронежилет #2',
                    yellow: { deff: 1, hpmax: 5 }
                },
                {
                    name: 'armour3',
                    ru_name: 'Бронежилет #3',
                    yellow: { damage: 1, hpmax: 5 }
                },
                {
                    name: 'armour4',
                    ru_name: 'Бронежилет #4',
                    yellow: { krit: 1, hpmax: 5 }
                },
                {
                    name: 'armour5',
                    ru_name: 'Бронежилет #5',
                    yellow: { deff: 1, hpmax: 5 }
                },
                {
                    name: 'armour6',
                    ru_name: 'Бронежилет #6',
                    yellow: { deff: 1, hpmax: 5 }
                },
                {
                    name: 'armour7',
                    ru_name: 'Бронежилет #7',
                    yellow: { damage: 1, hpmax: 5 }
                },
                {
                    name: 'armour8',
                    ru_name: 'Бронежилет #8',
                    yellow: { krit: 1, hpmax: 5 }
                },
            ]
            break;
        case 'case':
            items = [
                {
                    name: 'chemcriminal',
                    ru_name: 'Чемодан криминала',
                    yellow: { deff: 2, damage: 6, rof: 10, recoil: 10 },
                    buff: { hpmax: 15, armourmax: 15 }
                },
                {
                    name: 'labubu',
                    ru_name: 'Чемодан Лабубу',
                    yellow: { deff: 2, damage: 2 }
                },
            ]
        default:
            break;
    }
    return items;
}


function getYellowInfoByRuName(ru_name) {
    const slots = ['head', 'face', 'hand', 'breast', 'shoulder', 'spine', 'armour', 'case'];

    for (const slot of slots) {
        const items = getItemsBySlot(slot);
        const foundItem = items.find(item => item.ru_name === ru_name);

        if (foundItem) {
            const imageSrc = `${basePath}imgs/${slot}/${foundItem.name}.png`;
            return { ...foundItem, slot, imageSrc };
        }
    }

    return null;
}

var RuTypes = {
    deff: 'Защита',
    hpmin: 'HP в мин.',
    damage: 'Урон',
    krit: 'Удача',
    hpmax: 'Макс. HP',
    armourmax: 'Макс. Брони',
    oglysh: 'Шанс оглушения',
    opyan: 'Шанс опьянения',
    neoglysh: 'Шанс избежать оглушения',
    otrazh: 'Отражение урона',
    block: 'Блокировка урона',
    rof: 'Скорострельность',
    recoil: 'Отдача'
};

var RuDefault = {
    deff: 'увеличивает защиту',
    hpmin: 'восстанавливает здоровье (если сытость больше 50%)',
    damage: 'увеличивает урон',
    krit: 'увеличивает шанс критического урона',
    armour: 'увеличивает максимальное кол-во Брони',
}

var RuSlots = {
    head: 'Голова',
    face: 'Лицо',
    hand: 'Рука',
    breast: 'Грудь',
    shoulder: 'Плечо',
    spine: 'Спина',
    armour: 'Бронежилет',
    case: 'Чемодан',

    bootL: 'Левый ботинок',
    bootR: 'Правый ботинок',
    knife: 'Нож',
}

function getSlotNameFromItem(item) {
    const match = item.getAttribute('src').match(/\.\/imgs\/([^/]+)\//);
    return match ? match[1] : null;
}

function getSkinNameFromSrc(src) {
    const match = src.match(/\/skins\/([^/.]+)\.png$/);
    return match ? match[1] : null;
}

class ItemPlacer {
    constructor() {
        this.containers = document.querySelectorAll('.mini-container');
        this.createTooltip();
    }

    createTooltip() {
        this.tooltip = document.createElement('div');
        this.tooltip.className = 'item-tooltip';
        this.tooltip.style.position = 'absolute';
        this.tooltip.style.display = 'none';
        this.tooltip.style.pointerEvents = 'none';
        this.tooltip.style.padding = '6px 10px';
        this.tooltip.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        this.tooltip.style.color = 'white';
        this.tooltip.style.borderRadius = '5px';
        this.tooltip.style.fontSize = '12px';
        this.tooltip.style.zIndex = '9999';
        document.body.appendChild(this.tooltip);
    }

    getSlotNameFromSrc(src) {
        const match = src.match(/\.\/imgs\/([^/]+)\//);
        return match ? match[1] : null;
    }

    createItemElement(imageSrc, stats, upg, yellow, ru_name) {
        const img = document.createElement('img');
        img.src = imageSrc;
        img.draggable = true;
        img.className = 'main';
        img.setAttribute('data-stats', JSON.stringify(stats));
        img.setAttribute('data-upg', upg);
        img.setAttribute('data-ru_name', ru_name);
        img.setAttribute('data-yellow', JSON.stringify(yellow));

        if (!isMobileDevice()) {
            img.addEventListener('mouseenter', (e) => this.showTooltip(e, img));
            img.addEventListener('mousemove', (e) => this.moveTooltip(e));
            img.addEventListener('mouseleave', () => this.hideTooltip());
        }

        return img;
    }


    showTooltip(event, img) {
        const stats = JSON.parse(img.getAttribute('data-stats'));
        const yellowData = JSON.parse(img.getAttribute('data-yellow'));
        const ru_name = img.getAttribute('data-ru_name');
        const upg = img.getAttribute('data-upg');

        this.tooltip.innerHTML = '';

        if (isMobileDevice()) {
            this.tooltip.style.width = '100%'
        }

        const mainText = document.createElement('div');
        mainText.textContent = ru_name.replaceAll('"', '');
        mainText.style.marginBottom = '10px';
        mainText.style.fontWeight = 'bold';
        mainText.style.whiteSpace = 'nowrap';
        this.tooltip.appendChild(mainText);

        const spacer = document.createElement('div');
        spacer.style.marginBottom = '10px';
        this.tooltip.appendChild(spacer);

        const defstats = document.createElement('div');
        defstats.textContent = 'Данный предмет имеет следующие характеристики по-умолчанию:';
        defstats.style.color = '#ff6666';
        defstats.style.marginBottom = '10px';
        if (!isMobileDevice()) {
            defstats.style.whiteSpace = 'nowrap';
        }
        this.tooltip.appendChild(defstats);

        if (stats && typeof stats === 'object') {
            for (let key in stats) {
                if (RuTypes[key]) {
                    const buffElement = document.createElement('div');
                    switch (key) {
                        case 'deff':
                            if (stats[key] > 0) {
                                buffElement.textContent = `— ${RuTypes[key]}: -${stats[key]}% урона`;
                            }
                            break;

                        case 'damage':
                            buffElement.textContent = `— ${RuTypes[key]}: +${stats[key]} урона`;
                            break;

                        case 'krit':
                            buffElement.textContent = `— ${RuTypes[key]}: шанс ${stats[key]}% крит.урона`;
                            break;

                        case 'hpmax':
                            buffElement.textContent = `— ${RuTypes[key]}: +${stats[key]} макс. HP`;
                            break;

                        case 'armourmax':
                            if (stats[key] > 0) {
                                buffElement.textContent = `— ${RuTypes[key]}: +${stats[key]}`;
                            }
                            break;

                        case 'oglysh':
                            buffElement.textContent = `— ${RuTypes[key]}: ${stats[key]}%`;
                            break;

                        case 'neoglysh':
                            buffElement.textContent = `— ${RuTypes[key]}: ${stats[key]}%`;
                            break;

                        case 'opyan':
                            buffElement.textContent = `— ${RuTypes[key]}: ${stats[key]}%`;
                            break;

                        default:
                            buffElement.textContent = `— ${RuTypes[key]}: ${stats[key]}`;
                            break;
                    }
                    buffElement.style.color = 'white';
                    if (!isMobileDevice()) {
                        buffElement.style.whiteSpace = 'nowrap';
                    }
                    this.tooltip.appendChild(buffElement);
                }
            }
            this.tooltip.appendChild(document.createElement('br'));
        }

        if (Object.keys(yellowData).length !== 0 && typeof yellowData === 'object') {
            for (let key in yellowData) {
                if (RuTypes[key]) {
                    const yellowElement = document.createElement('div');
                    yellowElement.textContent = `— ${RuTypes[key]}: +${yellowData[key]}`;
                    yellowElement.style.color = 'yellow';
                    yellowElement.style.whiteSpace = 'nowrap';
                    this.tooltip.appendChild(yellowElement);
                }
            }
            this.tooltip.appendChild(document.createElement('br'));
        }
        if (upg) {
            const upgText = document.createElement('div');
            upgText.textContent = `* При улучшении ${RuDefault[upg] || upg}`;
            upgText.style.whiteSpace = 'nowrap';
            this.tooltip.appendChild(upgText);
        } else {
            const brs = this.tooltip.querySelectorAll('br');
            if (brs.length > 0) {
                const lastBr = brs[brs.length - 1];
                lastBr.remove();
            }
        }

        this.tooltip.style.display = 'block';
        this.tooltip.style.marginLeft = '10px';
        if (!isMobileDevice()) {
            this.moveTooltip(event);
        }
    }

    moveTooltip(event) {
        const tooltip = this.tooltip;
        const padding = 10;
        const boundaryBuffer = 10;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        tooltip.style.left = '0px';
        tooltip.style.top = '0px';
        tooltip.style.display = 'block';
        const tooltipRect = tooltip.getBoundingClientRect();

        let left = event.pageX + padding;
        let top = event.pageY + padding;

        if (left + tooltipRect.width + boundaryBuffer >= window.pageXOffset + windowWidth) {
            left = event.pageX - tooltipRect.width - padding;
        }

        if (top + tooltipRect.height + boundaryBuffer >= window.pageYOffset + windowHeight) {
            top = event.pageY - tooltipRect.height - padding;
        }

        tooltip.style.left = `${left}px`;
        tooltip.style.top = `${top}px`;
    }

    hideTooltip() {
        this.tooltip.style.display = 'none';
    }

    placeItem(imageSrc, stats, upg, yellow, ru_name) {

        const slotName = this.getSlotNameFromSrc(imageSrc);
        if (!slotName) {
            return;
        }


        const container = Array.from(this.containers).find(
            (el) => el.getAttribute('slot-name') === slotName
        );

        if (container) {

            const img = this.createItemElement(imageSrc, stats, upg, yellow, ru_name);
            container.appendChild(img);
        }
    }
}


const placer = new ItemPlacer();

items.forEach(item => {
    placer.placeItem(item.imageSrc, item.stats, item.upg, item.yellow, item.ru_name);
});

function getMultiplier(type) {
    switch (type) {
        case 'deff':
            return 2;
        case 'armour':
            return 5;
        default:
            return 1;
    }
}

function updateStats() {
    console.log('update?');
    const gridItems = document.querySelectorAll('.grid-item');
    var deff = 0;
    var hpmin = 0;
    var damage = 0;
    var krit = 0;
    var hpmax = 0;
    var armourmax = 0;
    var oglysh = 0;
    var opyan = 0;
    var neoglysh = 0;
    var otrazh = 0;
    var block = 0;
    var rof = 0;
    var recoil = 0;

    if (selectedSkin) {
        deff += 8;
        hpmin += 4;
        damage += 4;
        krit += 4;
        hpmax += 12;
        armourmax += 12;
        if (selectedSkin != 'default') {
            var yellow_skin = selectedSkin.yellow;
            deff += yellow_skin.deff || 0;
            hpmin += yellow_skin.hpmin || 0;
            damage += yellow_skin.damage || 0;
            krit += yellow_skin.krit || 0;
            hpmax += yellow_skin.hpmax || 0;
            armourmax += yellow_skin.armourmax || 0;
            oglysh += yellow_skin.oglysh || 0;
            opyan += yellow_skin.opyan || 0;
            neoglysh += yellow_skin.neoglysh || 0;
            otrazh += yellow_skin.otrazh || 0;
            block += yellow_skin.block || 0;
            rof += yellow_skin.rof || 0;
            recoil += yellow_skin.recoil || 0;
        }
    }

    gridItems.forEach(item => {
        const img = item.querySelector('img.default-accs');
        if (img) {
            const stats = JSON.parse(img.dataset.stats);
            const type = img.dataset.upg;
            const yellow_stats = JSON.parse(img.dataset.yellow);
            const yellow_name = img.dataset.yellow_name
            const ru_name = img.dataset.ru_name;
            let nashivka = {};
            if (img.dataset.nashivka == undefined) {
                nashivka = {}
            } else {
                nashivka = JSON.parse(img.dataset.nashivka);
            }

            const upgrader = getMultiplier(type)
            if (type != '' && type != 'upgrade') {
                const zatochkaElement = item.querySelector('span');
                const zatochka = parseInt(zatochkaElement.textContent.trim(), 10);

                if (type == 'armour') {
                    stats.armourmax += zatochka * upgrader;
                } else {
                    if (zatochka >= 4) {
                        if (stats[type] == undefined) {
                            stats[type] = 0;
                        }
                        stats[type] += (zatochka - 3) * upgrader;
                        if (zatochka >= 13) {
                            if (stats.armourmax == undefined) {
                                stats.armourmax = 0;
                            }
                            if (stats.hpmax == undefined) {
                                stats.hpmax = 0;
                            }
                            stats.armourmax += 9;
                            stats.hpmax += 4;
                        }
                        if (zatochka == 14) {
                            if (stats.otrazh == undefined) {
                                stats.otrazh = 0
                            }
                            if (stats.opyan == undefined) {
                                stats.opyan = 0
                            }
                            stats.armourmax += 5;
                            stats.opyan += 2;
                            stats.otrazh += 1;
                        }
                    }
                }
            }

            deff += nashivka.deff || 0;
            hpmin += nashivka.hpmin || 0;
            damage += nashivka.damage || 0;
            krit += nashivka.krit || 0;
            hpmax += nashivka.hpmax || 0;
            otrazh += nashivka.otrazh || 0;
            oglysh += nashivka.oglysh || 0;
            neoglysh += nashivka.neoglysh || 0;

            deff += yellow_stats.deff || 0;
            hpmin += yellow_stats.hpmin || 0;
            damage += yellow_stats.damage || 0;
            krit += yellow_stats.krit || 0;
            hpmax += yellow_stats.hpmax || 0;
            armourmax += yellow_stats.armourmax || 0;
            oglysh += yellow_stats.oglysh || 0;
            opyan += yellow_stats.opyan || 0;
            neoglysh += yellow_stats.neoglysh || 0;
            otrazh += yellow_stats.otrazh || 0;
            block += yellow_stats.block || 0;
            rof += yellow_stats.rof || 0;
            recoil += yellow_stats.recoil || 0;

            deff += stats.deff || 0;
            hpmin += stats.hpmin || 0;
            damage += stats.damage || 0;
            krit += stats.krit || 0;
            hpmax += stats.hpmax || 0;
            armourmax += stats.armourmax || 0;
            oglysh += stats.oglysh || 0;
            opyan += stats.opyan || 0;
            neoglysh += stats.neoglysh || 0;
            otrazh += stats.otrazh || 0;
            block += stats.block || 0;
            rof += stats.rof || 0;
            recoil += stats.recoil || 0;

            if (yellow_name == 'Чемодан криминала') {
                hpmax = Math.round(hpmax * 1.15);
                armourmax = Math.round(armourmax * 1.15);
            }

            if (deff >= 90) {
                deff = 90;
            }
        }
    });
    $('span#deff').text(`[-${deff}% урона]`);
    $('span#hpmin').text(`[${hpmin} HP в мин.]`);
    $('span#damage').text(`[+${damage} урона]`);
    $('span#krit').text(`[шанс ${krit}% крит.урона]`);
    $('span#hpmax').text(`[+${hpmax} макс. HP]`);
    $('span#armourmax').text(`[+${armourmax} макс. Брони]`);
    $('span#oglysh').text(`[+${oglysh}%]`);
    $('span#opyan').text(`[+${opyan}%]`);
    $('span#neoglysh').text(`[+${neoglysh}%]`);
    $('span#otrazh').text(`[-${otrazh}%]`);
    $('span#block').text(`[${block} раз]`);
    $('span#rof').text(`[+${rof}% скорострельности]`);
    $('span#recoil').text(`[-${recoil}% отдачи]`);
}

const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach(item => {
    const tooltip = item.querySelector('.tooltip');
    const ruName = item.getAttribute('ru-name');
    if (tooltip) {
        tooltip.innerHTML = ruName;

        item.addEventListener('mouseover', () => {
            tooltip.style.display = 'block';
        });

        item.addEventListener('mouseout', () => {
            tooltip.style.display = 'none';
        });
    }
});


document.querySelectorAll('.mini-container img').forEach(img => {
    if (!isMobileDevice()) {
        img.setAttribute('draggable', true);
        img.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('slot-name', img.parentElement.getAttribute('slot-name'));
            e.dataTransfer.setData('img-html', img.outerHTML);
            img.classList.add('dragging');
        });

        img.addEventListener('dragend', () => {
            img.classList.remove('dragging');
        });
    } else {
        img.addEventListener('click', function () {
            addAccs(img.parentElement.getAttribute('slot-name'), img.outerHTML)
        })
    }
});

var current_item;
var itemForNashivka;

function addAccs(slot_name, imgHtml) {
    var item = $(`.grid-item#${slot_name}`).get(0);
    if (imgHtml) {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = imgHtml.trim();
        const imgElement = tempDiv.querySelector('img.main');
        if (slot_name == item.getAttribute("id")) {
            if (imgElement) {
                const existingImg = item.querySelector('img.main');
                if (existingImg) {
                    existingImg.outerHTML = imgHtml;
                    $(item).find('img.default-accs').remove();
                } else {
                    item.appendChild(imgElement);
                }
                current_item = $(item).find('img')[0]
                current_item.className = 'main'
                $(item).find('.tooltip').text($(item).attr('ru-name'))
                const slot = getSlotNameFromItem(current_item)
                showPereshiv(slot)
            }
        }
        updateStats();
    }

    const img = item.querySelector('img');
    if (img) {
        img.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('img-html', img.outerHTML);
            e.dataTransfer.effectAllowed = "move";
        });
    }
}

var temp_info = {};

const input = document.getElementById('promptMainAcsInput');
let itemsData = null;

// (async () => {
//     try {
//         const res = await fetch(`${basePath}items/itemsBySlots.json`);
//         itemsData = await res.json();
//         addImages();
//     } catch (err) {
//         console.error('Ошибка загрузки items:', err);
//     }
// })();

input.addEventListener('input', () => {
    const value = input.value;
    // addImages(value);
});

let temp_item = {
    main: {
        id: null,
        name: null
    },
    default: {
        name: null,
        stats: null,
        yellow_name: null,
        yellow_stats: null
    }
};

function getUpgradesBySlot(slotName) {
    return upgrades.filter(upgrade => {
        return upgrade.slot == slotName;
    });
}

function addUpgrades(slotName) {
    $('#closeUpgradeModal').attr('data-slotName', slotName);

    var modalUpgrades = document.querySelector('.modal-upgrades');
    while (modalUpgrades.firstChild) {
        modalUpgrades.removeChild(modalUpgrades.firstChild);
    }

    const upgrade_items = getUpgradesBySlot(slotName)

    upgrade_items.forEach(upgrade => {
        let statsHtml = document.createElement('div');
        var mainText = document.createElement('div');
        mainText.textContent = `${upgrade.ru_name.replaceAll('"', '')}`;
        mainText.style.marginBottom = '10px';
        mainText.style.fontWeight = 'bold';
        statsHtml.appendChild(mainText);

        var spacer = document.createElement('div');
        spacer.style.marginBottom = '10px';
        statsHtml.appendChild(spacer);

        for (var key in upgrade.stats) {
            if (RuTypes[key]) {
                var statsElement = document.createElement('div');
                statsElement.textContent = `${RuTypes[key]}: ${upgrade.stats[key]}`;
                statsElement.style.color = 'yellow';
                statsElement.style.fontSize = '14px';
                statsHtml.appendChild(statsElement);
            }
        }

        var img = document.createElement('img');
        img.src = upgrade.imageSrc;
        img.style.position = 'relative';

        var item_Upgrade = document.createElement('div')
        item_Upgrade.className = 'mainAcs_stats';
        item_Upgrade.style.width = '250px';
        item_Upgrade.appendChild(img)
        item_Upgrade.appendChild(statsHtml)

        item_Upgrade.addEventListener('click', function () {
            var img_temp = document.createElement('img');
            img_temp.src = upgrade.imageSrc;
            img_temp.className = "default-accs"
            img_temp.dataset.main_name = upgrade.ru_name;
            $(`.grid-item#${slotName}`).append(img_temp)
            img_temp.dataset.stats = JSON.stringify(upgrade.stats);
            img_temp.dataset.yellow = JSON.stringify({});
            img_temp.dataset.ru_name = upgrade.ru_name;
            img_temp.dataset.yellow_name = '';
            img_temp.dataset.upg = 'upgrade';
            $('#modalUpgradeOverlay').css('display', 'none');
            updateStats();
        });

        modalUpgrades.appendChild(item_Upgrade);
    })
}

function addImages(text) {
    if (!itemsData) {
        console.warn('Данные ещё не загружены!');
        return;
    }

    const slotName = input.dataset.slotName;
    const itemsForSlot = itemsData[slotName];

    if (!itemsForSlot) {
        console.warn(`Нет данных для слота "${slotName}"`);
        return;
    }

    const filtered = itemsForSlot.filter(obj =>
        obj.item_name.toLowerCase().includes(text.toLowerCase())
    );

    var modalMainAccs = document.querySelector('.modal-main-accs');
    while (modalMainAccs.firstChild) {
        modalMainAccs.removeChild(modalMainAccs.firstChild);
    }
    filtered.forEach(item => {
        let statsHtml = document.createElement('div');
        var mainText = document.createElement('div');
        mainText.textContent = `${item.item_name.replaceAll('"', '')} (${item.id})`;
        mainText.style.marginBottom = '10px';
        mainText.style.fontWeight = 'bold';
        statsHtml.appendChild(mainText);

        var img = document.createElement('img');
        img.src = `${basePath}items/${slotName}/${item.eng_name}_${item.id}.png`;
        img.style.position = 'relative';

        var item_mainAcs = document.createElement('div')
        item_mainAcs.className = 'mainAcs_stats';
        item_mainAcs.appendChild(img)
        item_mainAcs.appendChild(statsHtml)

        item_mainAcs.addEventListener('click', function () {
            temp_item.id = item.id;
            temp_item.name = item.item_name.replaceAll('"', '');
            var img_temp = document.createElement('img');
            img_temp.src = `${basePath}items/${slotName}/${item.eng_name}_${item.id}.png`;
            img_temp.className = "main-accs"
            img_temp.dataset.main_name = item.item_name;
            $(`.grid-item#${slotName}`).append(img_temp)
            $('#modalMainAcsOverlay').css('display', 'none');
            const item_ = getAccsInfoByRuName(item.item_name)
            if (item_) {
                img_temp.dataset.stats = JSON.stringify(item_.stats);
                img_temp.dataset.ru_name = `${item_.ru_name.replaceAll('"', '')}`;
                img_temp.dataset.yellow = JSON.stringify(item_.yellow);
                img_temp.dataset.yellow_name = '';
                img_temp.dataset.upg = item_.upg;
                $('#closeModal').css('display', 'inline-block')
            } else {
                const item_yellow_ = getYellowInfoByRuName(item.item_name)
                if (item_yellow_) {
                    img_temp.dataset.stats = JSON.stringify({});
                    img_temp.dataset.ru_name = `${item_yellow_.ru_name.replaceAll('"', '')}`;
                    img_temp.dataset.yellow = JSON.stringify(item_yellow_.yellow);
                    img_temp.dataset.yellow_name = `${item_yellow_.ru_name.replaceAll('"', '')}`;
                    img_temp.dataset.upg = '';
                }
                $('#closeModal').css('display', 'none')
            }
            addDefImages(slotName);
        });

        modalMainAccs.appendChild(item_mainAcs);
    });
}

function getItemsBySlots(items, slotName) {
    return items.filter(item => {
        const match = item.imageSrc.match(/\.\/imgs\/([^/]+)\//);
        return match && match[1] === slotName;
    });
}

function addDefImages(slotName) {
    const itemsForSlot = getItemsBySlots(items, slotName);
    $('#closeModal').attr('data-slotName', slotName);

    var modalAccs = document.querySelector('.modal-accs');
    while (modalAccs.firstChild) {
        modalAccs.removeChild(modalAccs.firstChild);
    }

    itemsForSlot.forEach(item => {
        let statsHtml = document.createElement('div');
        var mainText = document.createElement('div');
        mainText.textContent = `${item.ru_name.replaceAll('"', '')}`;
        mainText.style.marginBottom = '10px';
        mainText.style.fontWeight = 'bold';
        statsHtml.appendChild(mainText);

        var spacer = document.createElement('div');
        spacer.style.marginBottom = '10px';
        statsHtml.appendChild(spacer);

        const defstats = document.createElement('div');
        defstats.textContent = 'Характеристики по-умолчанию:';
        defstats.style.color = '#ff6666';
        defstats.style.fontSize = '14px';
        defstats.style.marginBottom = '10px';
        statsHtml.appendChild(defstats);

        const stats = item.stats;
        const yellowData = item.yellow;
        const upg = item.upg;

        if (stats && typeof stats === 'object') {
            for (let key in stats) {
                if (RuTypes[key]) {
                    const buffElement = document.createElement('div');
                    switch (key) {
                        case 'deff':
                            if (stats[key] > 0) {
                                buffElement.textContent = `— ${RuTypes[key]}: -${stats[key]}% урона`;
                            }
                            break;

                        case 'damage':
                            buffElement.textContent = `— ${RuTypes[key]}: +${stats[key]} урона`;
                            break;

                        case 'krit':
                            buffElement.textContent = `— ${RuTypes[key]}: шанс ${stats[key]}% крит.урона`;
                            break;

                        case 'hpmax':
                            buffElement.textContent = `— ${RuTypes[key]}: +${stats[key]} макс. HP`;
                            break;

                        case 'armourmax':
                            if (stats[key] > 0) {
                                buffElement.textContent = `— ${RuTypes[key]}: +${stats[key]}`;
                            }
                            break;

                        case 'oglysh':
                            buffElement.textContent = `— ${RuTypes[key]}: ${stats[key]}%`;
                            break;

                        case 'neoglysh':
                            buffElement.textContent = `— ${RuTypes[key]}: ${stats[key]}%`;
                            break;

                        case 'opyan':
                            buffElement.textContent = `— ${RuTypes[key]}: ${stats[key]}%`;
                            break;

                        default:
                            buffElement.textContent = `— ${RuTypes[key]}: ${stats[key]}`;
                            break;
                    }
                    buffElement.style.color = 'white';
                    buffElement.style.fontSize = '14px';
                    buffElement.style.textAlign = 'left';
                    if (!isMobileDevice()) {
                        buffElement.style.whiteSpace = 'nowrap';
                    }
                    statsHtml.appendChild(buffElement);
                }
            }
            statsHtml.appendChild(document.createElement('br'));
        }
        if (yellowData) {
            if (Object.keys(yellowData).length !== 0 && typeof yellowData === 'object') {
                for (let key in yellowData) {
                    if (RuTypes[key]) {
                        const yellowElement = document.createElement('div');
                        yellowElement.textContent = `— ${RuTypes[key]}: +${yellowData[key]}`;
                        yellowElement.style.color = 'yellow';
                        yellowElement.style.whiteSpace = 'nowrap';
                        yellowElement.style.fontSize = '14px';
                        yellowElement.style.textAlign = 'left';
                        statsHtml.appendChild(yellowElement);
                    }
                }
                statsHtml.appendChild(document.createElement('br'));
            }
        }

        var img = document.createElement('img');
        img.src = item.imageSrc;
        img.style.position = 'relative';

        var item_Acs = document.createElement('div')
        item_Acs.style.width = '220px';
        item_Acs.className = 'mainAcs_stats';
        item_Acs.appendChild(img)
        item_Acs.appendChild(statsHtml)

        item_Acs.addEventListener('click', function () {
            temp_item.default.name = `${item.ru_name.replaceAll('"', '')}`;
            temp_item.default.stats = item.stats;
            var img_temp = document.createElement('img');
            const mainAcc = document.querySelector(`.grid-item#${slotName} img.main-accs`);
            // if (mainAcc.dataset.main_name != item.ru_name) {
            // if (mainAcc) {
            img_temp.dataset.stats = JSON.stringify(item.stats);
            img_temp.dataset.ru_name = `${item.ru_name.replaceAll('"', '')}`;
            if (item.yellow && Object.keys(item.yellow).length > 0) {
                img_temp.dataset.yellow = JSON.stringify(item.yellow);
                img_temp.dataset.yellow_name = '';
            }
            if (!img_temp.dataset.yellow) {
                img_temp.dataset.yellow = JSON.stringify(item.yellow);
                img_temp.dataset.yellow_name = '';
            }
            img_temp.dataset.upg = item.upg;
            // }
            img_temp.src = item.imageSrc;
            img_temp.className = "default-accs"
            $(`.grid-item#${slotName}`).append(img_temp)
            // }
            $('#modalOverlay').css('display', 'none');
            $('#modalYellowOverlay').css('display', 'flex').hide().fadeIn(200);
            updateStats();
            addYellowImages(slotName)
        });

        modalAccs.appendChild(item_Acs);
    });
}

function addYellowImages(slotName) {
    const itemsForSlot = getItemsBySlot(slotName);

    var modalYellowAccs = document.querySelector('.modal-yellow-accs');
    while (modalYellowAccs.firstChild) {
        modalYellowAccs.removeChild(modalYellowAccs.firstChild);
    }

    itemsForSlot.forEach(item => {
        let statsHtml = document.createElement('div');
        var mainText = document.createElement('div');
        mainText.textContent = `${item.ru_name.replaceAll('"', '')}`;
        mainText.style.marginBottom = '10px';
        mainText.style.fontWeight = 'bold';
        statsHtml.appendChild(mainText);

        var spacer = document.createElement('div');
        spacer.style.marginBottom = '10px';
        statsHtml.appendChild(spacer);

        if (item.buff) {
            for (var key in item.buff) {
                if (RuTypes[key]) {
                    var yellowElement = document.createElement('div');
                    yellowElement.textContent = `Предмет даёт +${item.buff[key]}% к ${RuTypes[key]}`;
                    yellowElement.style.color = 'yellow';
                    yellowElement.style.fontSize = '14px';
                    statsHtml.appendChild(yellowElement);
                }
            }
            statsHtml.appendChild(document.createElement('br'))
        }

        for (var key in item.yellow) {
            if (RuTypes[key]) {
                var yellowElement = document.createElement('div');
                yellowElement.textContent = `${RuTypes[key]}: ${item.yellow[key]}`;
                yellowElement.style.color = 'yellow';
                yellowElement.style.fontSize = '14px';
                statsHtml.appendChild(yellowElement);
            }
        }

        var img = document.createElement('img');
        img.src = `${basePath}imgs/${slotName}/${item.name}.png`;
        img.style.position = 'relative';

        var item_YellowAcs = document.createElement('div')
        item_YellowAcs.className = 'mainAcs_stats';
        item_YellowAcs.style.width = '250px';
        item_YellowAcs.appendChild(img)
        item_YellowAcs.appendChild(statsHtml)

        item_YellowAcs.addEventListener('click', function () {
            temp_item.default.name = `${item.ru_name.replaceAll('"', '')}`;
            temp_item.default.stats = item.stats;
            var img_temp = document.createElement('img');
            const mainAcc = document.querySelector(`.grid-item#${slotName} img.default-accs`);
            // if (mainAcc.dataset.yellow != JSON.stringify(item.yellow)) {
            if (mainAcc) {
                mainAcc.dataset.yellow = JSON.stringify(item.yellow);
                mainAcc.dataset.yellow_name = item.ru_name;
            }
            img_temp.src = `${basePath}imgs/${slotName}/${item.name}.png`;
            img_temp.className = "yellow-accs"
            $(`.grid-item#${slotName}`).append(img_temp)
            // }
            $('#modalYellowOverlay').css('display', 'none');
            updateStats();
        });

        modalYellowAccs.appendChild(item_YellowAcs);
    });
}

document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('click', (e) => {
        const img = item.querySelector('img:not(#icons img)');
        if (img) {
            if (img.outerHTML) {
                temp_info.html = img.outerHTML
                temp_info.dom = img
                youWannaDelete()
            }
        } else {
            e.preventDefault();

            if (['bootL', 'bootR', 'knife'].includes(item.id)) {
                var modalUpgrades = document.querySelector('.modal-upgrades');
                while (modalUpgrades.firstChild) {
                    modalUpgrades.removeChild(modalUpgrades.firstChild);
                }
                addUpgrades(item.id);

                $('#modalUpgradeOverlay .modal h2').text(`Выберите основной аксессуар на доп. слот "${RuSlots[item.id]}"`)
                $('#modalUpgradeOverlay').css('display', 'flex').hide().fadeIn(200);
            } else {
                const input = document.getElementById('promptMainAcsInput');
                var modalMainAccs = document.querySelector('.modal-accs');
                modalMainAccs.innerHTML = '';
                // while (modalMainAccs.firstChild) {
                //     modalMainAccs.removeChild(modalMainAccs.firstChild);
                // }
                input.dataset.slotName = item.id;
                input.value = '';
                addDefImages(item.id);

                $('#modalOverlay .modal h2').text(`Выберите аксессуар на слот "${RuSlots[item.id]}"`)
                $('#modalOverlay').css('display', 'flex').hide().fadeIn(200);
            }
        }
    })
    item.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    item.addEventListener('drop', (e) => {
        e.preventDefault();
        const imgHtml = e.dataTransfer.getData('img-html');
        const slot_name = e.dataTransfer.getData('slot-name');
        if (imgHtml) {

            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = imgHtml.trim();
            const imgElement = tempDiv.querySelector('img.main');
            if (slot_name == item.getAttribute("id")) {
                if (imgElement) {
                    const existingImg = item.querySelector('img.main');
                    if (existingImg) {
                        existingImg.outerHTML = imgHtml;
                        $(item).find('img.default-accs').remove();
                        $(item).find('img.nashivka').remove();
                    } else {
                        item.appendChild(imgElement);
                    }
                    current_item = $(item).find('img')[0]
                    current_item.className = 'main'
                    $(item).find('.tooltip').text($(item).attr('ru-name'))
                    const slot = getSlotNameFromItem(current_item)
                    showPereshiv(slot)
                }
            }
            updateStats();
        }

        const img = item.querySelector('img');
        if (img) {
            img.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('img-html', img.outerHTML);
                e.dataTransfer.effectAllowed = "move";
            });
        }
    });
});

function showPereshiv(slot) {
    var items = getItemsBySlot(slot);

    if (items.length != 0) {
        var modalAccs = document.querySelector('.modal-accs');

        var tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        modalAccs.appendChild(tooltip);
        items.forEach(item => {
            let statsHtml = document.createElement('div');
            var mainText = document.createElement('div');
            mainText.textContent = item.ru_name.replaceAll('"', '');
            mainText.style.marginBottom = '10px';
            statsHtml.appendChild(mainText);

            var spacer = document.createElement('div');
            spacer.style.marginBottom = '10px';
            statsHtml.appendChild(spacer);

            if (item.buff) {
                for (var key in item.buff) {
                    if (RuTypes[key]) {
                        var yellowElement = document.createElement('div');
                        yellowElement.textContent = `Предмет даёт +${item.buff[key]}% к ${RuTypes[key]}`;
                        yellowElement.className = 'yellow';
                        statsHtml.appendChild(yellowElement);
                    }
                }
                statsHtml.appendChild(document.createElement('br'))
            }

            for (var key in item.yellow) {
                if (RuTypes[key]) {
                    var yellowElement = document.createElement('div');
                    yellowElement.textContent = `${RuTypes[key]}: ${item.yellow[key]}`;
                    yellowElement.className = 'yellow';
                    statsHtml.appendChild(yellowElement);
                }
            }
            var img = document.createElement('img');
            img.src = `${basePath}imgs/${slot}/${item.name}.png`;
            img.style.position = 'relative';

            var item_yellow = document.createElement('div')
            item_yellow.className = 'yellow_stats';
            item_yellow.setAttribute('data-yellow', JSON.stringify(item.yellow));
            if (item.buff) {
                item_yellow.setAttribute('data-buff', JSON.stringify(item.buff));
            }
            item_yellow.setAttribute('data-runame', JSON.stringify(item.ru_name));
            item_yellow.appendChild(img)
            item_yellow.appendChild(statsHtml)

            item_yellow.addEventListener('click', function () {
                current_item.dataset.yellow = this.getAttribute('data-yellow');
                current_item.dataset.buff = this.getAttribute('data-buff');
                current_item.dataset.yellow_name = this.getAttribute('data-runame').replaceAll('"', '');
                var img_temp = document.createElement('img');
                img_temp.src = current_item.src;
                img_temp.className = "default-accs"
                current_item.src = `${basePath}imgs/${slot}/${item.name}.png`;
                $(current_item).closest('.grid-item').append(img_temp)
                modalOverlay.style.display = 'none';
                tooltip.style.display = 'none';
                updateStats();

                while (modalAccs.firstChild) {
                    modalAccs.removeChild(modalAccs.firstChild);
                }
            });

            modalAccs.appendChild(item_yellow);
        });
        modalOverlay.style.display = 'flex';
    }
}

function youWannaDelete() {
    const modalDelete = document.getElementById('modalDelete');
    modalDelete.style.display = 'block'
    const img = temp_info.dom
    const gridItem = $(img).closest('.grid-item')
    $('#modalDelete .modal h2').text(`Вы уверены что хотите удалить аксессуар из слота "${RuSlots[gridItem.attr('id')]}"?`)
}

function reallyDelete(imgHtml) {
    if (imgHtml) {
        document.querySelectorAll('.grid-item img').forEach(img => {
            if (img.outerHTML === imgHtml) {
                var gridItem = $(img).closest('.grid-item');
                $(gridItem).find('img').remove();
                $(gridItem).find('.tooltip').text($(gridItem).attr('ru-name'));
                $(gridItem).find('.tooltip').css('display', 'none');
            }
        });
    }
    updateStats()
}

function getRandomElement(arr) {
    if (arr.length === 0) {
        throw new Error("Array cannot be empty");
    }
    const randomIndex = window.crypto.getRandomValues(new Uint32Array(1))[0] % arr.length;

    return arr[randomIndex];
}

const myArray = [
    'fenny',
    'pudge',
    'osel',
    'bbt',
    'hitok',
    'aura',
    'lego',
    'woozie',
    'yoda'
]

const renderImage = (imgObj, id) => {
    return imgObj ? (id == 'nashivka' ? `<img src="${imgObj}" id="${id}">` : `<img src="${imgObj.imageSrc}" id="${id}">`) : '';
};

function showToast(message, duration = 3000) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;

    toast.style.cssText = `
    min-width: 200px;
    background-color: #333;
    color: #fff;
    text-align: center;
    border-radius: 4px;
    padding: 12px 24px;
    position: fixed;
    z-index: 9999;
    left: 50%;
    bottom: 30px;
    transform: translateX(-50%);
    font-weight: 600;
    opacity: 0;
    transition: opacity 0.4s ease;
  `;

    document.body.appendChild(toast);

    requestAnimationFrame(() => {
        toast.style.opacity = '1';
    });

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.addEventListener('transitionend', () => toast.remove());
    }, duration);
}

function createAndAppendImages(dataArray, containerSelector) {
    const container = document.querySelector(containerSelector);
    if (!container) return;
    if (!dataArray) return;

    const mainImg = document.createElement('img');
    mainImg.draggable = true;
    mainImg.classList.add('default-accs');

    const mainData = dataArray[0];
    console.log(dataArray);
    if (!mainData) return;

    const yellowStats = dataArray[1] ? dataArray[1].yellow : dataArray[0].yellow;

    mainImg.src = mainData.imageSrc;
    mainImg.dataset.ru_name = dataArray[0].ru_name.replaceAll('"', '');
    mainImg.dataset.yellow = JSON.stringify(yellowStats);
    mainImg.dataset.stats = JSON.stringify(dataArray[0].stats);
    mainImg.dataset.upg = dataArray[0].upg;

    mainImg.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('img-html', mainImg.outerHTML);
        e.dataTransfer.effectAllowed = "move";
    });

    container.appendChild(mainImg);
    if (dataArray[3]) {
        container.querySelector('.grid-text').children[1].innerText = `+${dataArray[3]}`;
    }

    if (dataArray[1] != null) {
        if (dataArray[1].buff != null) {
            mainImg.dataset.buff = JSON.stringify(dataArray[1].buff)
        }
        mainImg.dataset.yellow_name = dataArray[1].ru_name.replaceAll('"', '')
        const secondImg = document.createElement('img');
        secondImg.src = dataArray[1].imageSrc;
        secondImg.classList.add('yellow-accs');
        container.appendChild(secondImg);
    }

    if (dataArray[2] != null) {
        mainImg.dataset.nashivka = JSON.stringify(dataArray[2].stats);
        const nashivkaImg = document.createElement('img');
        nashivkaImg.src = dataArray[2].imageSrc;
        nashivkaImg.classList.add('nashivka');
        container.appendChild(nashivkaImg);

        const tooltip = container.querySelector('.tooltip');

        tooltip.innerHTML = $(containerSelector).attr('ru-name')

        if (tooltip) {
            tooltip.innerHTML += `<br>${dataArray[2].ru_name.replaceAll('"', '')}`;
        }
    }
}

function showCustomPrompt(defaultValue = '', defaultTitle = null, placeholder = null) {
    return new Promise((resolve) => {
        const overlay = document.getElementById('customPrompt');
        const input = document.getElementById('promptInput');
        const okBtn = document.getElementById('promptOk');
        const title = document.getElementById('promptTitle');
        const cancelBtn = document.getElementById('promptCancel');

        if (defaultTitle) {
            title.innerText = defaultTitle
        }

        if (placeholder) {
            input.placeholder = placeholder
        }

        input.value = defaultValue;
        overlay.style.display = 'flex';
        input.focus();

        const cleanup = () => {
            overlay.style.display = 'none';
            okBtn.onclick = null;
            cancelBtn.onclick = null;
        };

        okBtn.onclick = () => {
            const val = input.value.trim();
            cleanup();
            resolve(val);
        };

        cancelBtn.onclick = () => {
            cleanup();
            resolve(null);
        };
    });
}

function showCustomConfirm(defaultTitle = 'Вы точно хотите удалить сет?') {
    return new Promise((resolve) => {
        const overlay = document.getElementById('customConfirm');
        const title = document.getElementById('confirmTitle');
        const yesBtn = document.getElementById('confirmYes');
        const cancelBtn = document.getElementById('confirmCancel');

        title.innerText = defaultTitle;
        overlay.style.display = 'flex';

        const cleanup = () => {
            overlay.style.display = 'none';
            yesBtn.onclick = null;
            cancelBtn.onclick = null;
        };

        yesBtn.onclick = () => {
            cleanup();
            resolve(true);
        };

        cancelBtn.onclick = () => {
            cleanup();
            resolve(false);
        };
    });
}



$(document).ready(function () {
    let previousElement = null;
    var local_set_ = localStorage.getItem("localSets");

    if (local_set_ == null) {
        localStorage.setItem("localSets", "[]")
    }

    $('#save-set').on('click', function () {
        var local_set = localStorage.getItem("localSets");

        local_set = JSON.parse(local_set)

        const ids = [
            'head',
            'face',
            'hand',
            'breast',
            'shoulder',
            'spine',
            'armour',
            'case'
        ];

        const buildSetFromDOM = () => {
            const result = {};

            ids.forEach(id => {
                const item = document.querySelector(`.grid-item#${id}`);
                if (!item) return;

                const mainImg = item.querySelector('img.default-accs');
                const ruName = mainImg?.dataset?.ru_name || null;
                const yellowName = mainImg?.dataset?.yellow_name || null;

                const nashivkaImg = item.querySelector('img.nashivka');
                const nashivkaName = nashivkaImg
                    ? nashivkaImg.getAttribute('src').split('/').pop().replace('.png', '')
                    : null;

                let zatochka = null;
                const span = item.querySelector('.grid-text span');
                if (span) {
                    const value = parseInt(span.textContent.replace(/\D/g, ''), 10);
                    if (!isNaN(value) && value !== 9) {
                        zatochka = value;
                    }
                }

                const entry = {
                    stats: ruName,
                    yellow: yellowName,
                };

                if (zatochka !== null) {
                    entry.zatochka = zatochka;
                }

                if (nashivkaName !== null) {
                    entry.nashivka = nashivkaName;
                }

                result[id] = entry;
            });

            return result;
        };

        (async () => {
            let setName = null;

            while (true) {
                setName = await showCustomPrompt('');

                if (!setName) {
                    showToast('Создание сета отменено.');
                    return;
                }

                const nameExists = local_set.some(set => set.name === setName);
                if (nameExists) {
                    showToast('Сет с таким названием уже существует. Введите другое имя.');
                } else {
                    break;
                }
            }

            const skin = typeof selectedSkin === 'string' ? selectedSkin : selectedSkin?.ru_name || null;

            const newSet = {
                id: crypto.randomUUID(),
                name: setName,
                skin: skin,
                ...buildSetFromDOM()
            };

            local_set.push(newSet);

            localStorage.setItem("localSets", JSON.stringify(local_set))
            renderSets(local_set);
        })();
    });

    function renderSets(new_sets) {
        const container = $('.modal-sets');
        container.empty();

        let local_sets = JSON.parse(localStorage.getItem("localSets")) || [];

        if (new_sets) {
            local_sets = new_sets;
        }

        const combined = [...sets, ...local_sets.map(set => ({ ...set, custom: true }))];

        const assets_sets = [];
        const seenIds = new Set();

        for (const set of combined) {
            if (!set.id || !seenIds.has(set.id)) {
                if (set.id) seenIds.add(set.id);
                assets_sets.push(set);
            }
        }

        assets_sets.forEach((set, i) => {
            var skin = getSkinInfoByRuName(set.skin);
            var image = `${basePath}imgs/characters/mafia.png`;
            if (skin) {
                image = skin.imageSrc
            }
            if (set.skin == 'default') {
                skin = 'default';
                let randomElement;

                do {
                    randomElement = getRandomElement(myArray);
                } while (randomElement === previousElement);

                previousElement = randomElement;
                image = `${basePath}imgs/characters/yoda.png`
            }
            var head = set.head
            var face = set.face
            var hand = set.hand
            var breast = set.breast
            var shoulder = set.shoulder
            var spine = set.spine
            var armour = set.armour
            var case_ = set.case

            var head_main = getAccsInfoByRuName(head.stats);
            var head_yellow = getYellowInfoByRuName(head.yellow);
            var head_nashivka = getNashivkaInfo(head.nashivka);

            var face_main = getAccsInfoByRuName(face.stats);
            var face_yellow = getYellowInfoByRuName(face.yellow);
            var face_nashivka = getNashivkaInfo(face.nashivka);

            var hand_main = getAccsInfoByRuName(hand.stats);
            var hand_yellow = getYellowInfoByRuName(hand.yellow);
            var hand_nashivka = getNashivkaInfo(hand.nashivka);

            var breast_main = getAccsInfoByRuName(breast.stats);
            var breast_yellow = getYellowInfoByRuName(breast.yellow);
            var breast_nashivka = getNashivkaInfo(breast.nashivka);

            var shoulder_main = getAccsInfoByRuName(shoulder.stats);
            var shoulder_yellow = getYellowInfoByRuName(shoulder.yellow);
            var shoulder_nashivka = getNashivkaInfo(shoulder.nashivka);

            var spine_main = getAccsInfoByRuName(spine.stats);
            var spine_yellow = getYellowInfoByRuName(spine.yellow);
            var spine_nashivka = getNashivkaInfo(spine.nashivka);

            var armour_main = getAccsInfoByRuName(armour.stats);
            var armour_yellow = getYellowInfoByRuName(armour.yellow);

            var case_main = getAccsInfoByRuName(case_.stats);
            var case_yellow = getYellowInfoByRuName(case_.yellow);
            const setsHtml = `
                <div class="modal-set"
                    ${set.id ? `data-id="${set.id}"` : ''}
                    data-index="${i}" 
                    data-skin='${JSON.stringify(skin)}'
                    data-head='${JSON.stringify(head)}'
                    data-face='${JSON.stringify(face)}'
                    data-hand='${JSON.stringify(hand)}'
                    data-breast='${JSON.stringify(breast)}'
                    data-shoulder='${JSON.stringify(shoulder)}'
                    data-spine='${JSON.stringify(spine)}'
                    data-armour='${JSON.stringify(armour)}'
                    data-case='${JSON.stringify(case_)}'
                >
                    ${set.custom ? `<div class="delete-set-btn" data-index="${i}" style="z-index: 1000;">✖</div>` : ''}
                    <div class="skin-name">${set.name}</div>
                    <div class="bottom-row">
                        <div class="main-info">
                        <img src="${image}" alt="Скин №${i}" />
                        </div>
                        <div class="accs">
                        ${[
                    { type: 'head', main: head_main, yellow: head_yellow, nashivka: head_nashivka, zatochka: head.zatochka },
                    { type: 'face', main: face_main, yellow: face_yellow, nashivka: face_nashivka, zatochka: face.zatochka },
                    { type: 'hand', main: hand_main, yellow: hand_yellow, nashivka: hand_nashivka, zatochka: hand.zatochka },
                    { type: 'breast', main: breast_main, yellow: breast_yellow, nashivka: breast_nashivka, zatochka: breast.zatochka },
                    { type: 'shoulder', main: shoulder_main, yellow: shoulder_yellow, nashivka: shoulder_nashivka, zatochka: shoulder.zatochka },
                    { type: 'spine', main: spine_main, yellow: spine_yellow, nashivka: spine_nashivka, zatochka: spine.zatochka },
                    { type: 'armour', main: armour_main, yellow: armour_yellow, zatochka: armour.zatochka },
                    { type: 'case', main: case_main, yellow: case_yellow }
                ].map(slot => `
                            <div class="acs-icons ${slot.type}">
                            ${renderImage(slot.yellow, 'main')}
                            ${renderImage(slot.main, 'dop')}
                            ${slot.nashivka ? renderImage(slot.nashivka.imageSrc, 'nashivka') : ''}
                            ${slot.zatochka ? `<p id="zatochka">+${slot.zatochka}</p>` : ''}
                            </div>
                        `).join('')}
                        </div>
                    </div>
                </div>
                `;

            container.append(setsHtml);
        });
        container.find('.modal-set').each(function () {
            const $modalSet = $(this);

            $modalSet.find('.delete-set-btn').on('click', function (e) {
                e.stopPropagation();

                const setName = $modalSet.find('.skin-name').text().trim();
                const setId = $modalSet.data('id')

                showCustomConfirm(`Удалить сет "${setName}"?`).then(confirmed => {
                    if (confirmed) {
                        let localSets = JSON.parse(localStorage.getItem('localSets')) || [];
                        localSets = localSets.filter(set => set.id !== setId);
                        localStorage.setItem('localSets', JSON.stringify(localSets));
                        $modalSet.remove();
                        showToast("Вы успешно удалили сет!");
                    }
                });
            });

            $modalSet.on('click', function () {
                selectedSkin = null
                $("#character-image").attr('src', `${basePath}imgs/characters/mafia.png`)
                $('.grid-item img').remove();
                const index = $(this).data('index');
                const parts = {
                    head: getFullInfo($(this).data('head')),
                    face: getFullInfo($(this).data('face')),
                    hand: getFullInfo($(this).data('hand')),
                    breast: getFullInfo($(this).data('breast')),
                    shoulder: getFullInfo($(this).data('shoulder')),
                    spine: getFullInfo($(this).data('spine')),
                    armour: getFullInfo($(this).data('armour')),
                    case: getFullInfo($(this).data('case')),
                };


                for (const part in parts) {
                    createAndAppendImages(parts[part], `.grid-item#${part}`);
                }
                const skin = $(this).data('skin')
                if (skin) {
                    if (skin == '"default"') {
                        selectedSkin = 'default'
                        let randomElement;

                        do {
                            randomElement = getRandomElement(myArray);
                        } while (randomElement === previousElement);

                        previousElement = randomElement;
                        $("#character-image").attr('src', `${basePath}imgs/characters/yoda.png`)
                    } else {
                        selectedSkin = $(this).data('skin')
                        $("#character-image").attr('src', skin.imageSrc)
                    }
                }

                updateStats();
                $('#modalSetsOverlay').fadeOut(200, function () {
                    $(this).css('display', 'none');
                    updateStats();
                });

            });
        });
    }

    renderSets();

    var sets_button = $('#sets')

    sets_button.on('click', function () {
        $('#modalSetsOverlay').css('display', 'flex').hide().fadeIn(200);
    });

    $('#closeSetsModal').on('click', function () {
        $('#modalSetsOverlay').fadeOut(200, function () {
            $(this).css('display', 'none');
            updateStats();
        });
    });

    $('#closeXModalSets').on('click', function () {
        $('#modalSetsOverlay').fadeOut(200, function () {
            $(this).css('display', 'none');
            updateStats();
        });
    });

    $('#closeYellowModal').on('click', function () {
        $('#modalYellowOverlay').fadeOut(200, function () {
            $(this).css('display', 'none');
            updateStats();
        });
    })

    $('#closeModal').on('click', function () {
        const slotName = $(this).data('slotname');
        if (slotName) {
            $('#modalOverlay').css('display', 'none'); $('#modalYellowOverlay').css('display', 'flex').hide().fadeIn(200);
            updateStats();
            addYellowImages(slotName);
        }
    });

    $('#closeXYellowModal').on('click', function () {
        $('#modalSetsOverlay').fadeOut(200, function () {
            $(this).css('display', 'none');
            updateStats();
        });
    });

    $('#closeXMainAcsModal').on('click', function () {
        $('#modalMainAcsOverlay').fadeOut(200, function () {
            $(this).css('display', 'none');
            updateStats();
        });
    });

    $('#closeMainAcsModal').on('click', function () {
        $('#modalMainAcsOverlay').fadeOut(200, function () {
            $(this).css('display', 'none');
            updateStats();
        });
    });

    $('#closeXUpgradeModal').on('click', function () {
        $('#modalUpgradeOverlay').fadeOut(200, function () {
            $(this).css('display', 'none');
            updateStats();
        });
    });

    $('#closeUpgradeModal').on('click', function () {
        $('#modalUpgradeOverlay').fadeOut(200, function () {
            $(this).css('display', 'none');
            updateStats();
        });
    });

    function renderSkins() {
        const container = $('.modal-skins');
        container.empty();

        skins.forEach((skin, i) => {
            let statsHtml = '';
            for (const stat in skin.yellow) {
                if (RuTypes[stat]) {
                    statsHtml += `<span>${RuTypes[stat]}: ${skin.yellow[stat]}</span>`;
                }
            }

            const skinHtml = `
            <div class="modal-skin" data-index="${i}">
                <img src="${skin.imageSrc}" alt="${skin.ru_name}" />
                <div class="skin-name">${skin.ru_name}</div>
                <div class="skin-stats">${statsHtml}</div>
            </div>
        `;

            container.append(skinHtml);
        });
    }

    renderSkins();

    var character = $('#character')
    var tooltip = character.find('.tooltip');

    character.on('click', function () {
        $('#modalSkinsOverlay').css('display', 'flex').hide().fadeIn(200);
    });
    if (!isMobileDevice()) {
        character.on('mouseover', function () {
            tooltip.show();
        });

        character.on('mouseout', function () {
            tooltip.hide();
        });
    }

    $('#closeSkinModal').on('click', function () {
        $('#modalSkinsOverlay').fadeOut(200, function () {
            $(this).css('display', 'none');
            selectedSkin = 'default';
            let randomElement;

            do {
                randomElement = getRandomElement(myArray);
            } while (randomElement === previousElement);

            previousElement = randomElement;
            $('#character-image').attr('src', `${basePath}imgs/characters/yoda.png`);
            updateStats();
        });
    });

    function firstSkin() {
        let randomElement;

        do {
            randomElement = getRandomElement(myArray);
        } while (randomElement === previousElement);

        previousElement = randomElement;
        $('#character-image').attr('src', `${basePath}imgs/characters/yoda.png`);
        updateStats();
    }

    firstSkin();

    $('#closeNoneSkinModal').on('click', function () {
        $('#modalSkinsOverlay').fadeOut(200, function () {
            $(this).css('display', 'none');
            selectedSkin = null;
            $('#character-image').attr('src', `${basePath}imgs/characters/mafia.png`);
            updateStats();
        });
    });

    $('#closeXModalSkin').on('click', function () {
        $('#modalSkinsOverlay').fadeOut(200, function () {
            $(this).css('display', 'none');
            updateStats();
        });
    });


    $('.modal-skin').on('click', function () {
        const index = $(this).data('index');
        const skin = skins[index];
        $('#character-image').attr('src', skin.imageSrc);
        selectedSkin = skin;
        updateStats();
        $('#modalSkinsOverlay').fadeOut(200, function () {
            $(this).css('display', 'none');
        });
    });

    $('.btn.plus').on('click', function (e) {
        e.stopPropagation();

        let span = $(this).closest('.grid-text').find('span');
        let currentValue = parseInt(span.text().replace('+', ''));
        if (currentValue < 14) {
            span.text(`+${currentValue + 1}`);
            updateStats();
        }
    });


    $('.btn.minus').on('click', function (e) {
        e.stopPropagation();

        let span = $(this).closest('.grid-text').find('span');
        let currentValue = parseInt(span.text().replace('+', ''));
        if (currentValue > 0) {
            span.text(`+${currentValue - 1}`);
            updateStats();
        }
    });

    $('.btn.nashivkabronik').on('click', function (e) {
        e.stopPropagation();

        var $gridItem = $(this).closest('.grid-item');
        var item = $gridItem.find('img.main')[0]
        var tooltip = $gridItem.find('.tooltip')[0]
        $($gridItem).find('.tooltip').text($($gridItem).attr('ru-name'))
        if (item != undefined) {
            item.dataset.nashivka = `{"neoglysh": 20}`

            if (item.dataset.nashivka != undefined) {
                tooltip.innerHTML = `${tooltip.innerHTML}<br>Нашивка: Есть`;
            }
            updateStats()
        }
    });

    const modalDelete = document.getElementById('modalDelete');

    const yesDeleteButton = document.getElementById('yesDelete');
    const noDeleteButton = document.getElementById('noDelete');

    yesDeleteButton.addEventListener('click', () => {
        modalDelete.style.display = 'none';
        reallyDelete(temp_info.html)
    });

    noDeleteButton.addEventListener('click', () => {
        modalDelete.style.display = 'none';
    });

    const closeNashivkaModalButton = document.getElementById('closeNashivkaModal');
    const closeNashivkaModalXButton = document.getElementById('closeXModalNashivka');

    const modalNashivkaOverlay = document.getElementById('modalNashivkaOverlay');

    closeNashivkaModalButton.addEventListener('click', () => {
        modalNashivkaOverlay.style.display = 'none';

        var modalNashivki = document.querySelector('.modal-nashivki');
        while (modalNashivki.firstChild) {
            modalNashivki.removeChild(modalNashivki.firstChild);
        }
    });

    closeNashivkaModalXButton.addEventListener('click', () => {
        modalNashivkaOverlay.style.display = 'none';

        var modalNashivki = document.querySelector('.modal-nashivki');
        while (modalNashivki.firstChild) {
            modalNashivki.removeChild(modalNashivki.firstChild);
        }
    });

    $('.btn.nashivka').on('click', function (e) {
        e.stopPropagation();
        const container = $('.modal-nashivki');
        container.empty();
        var gridItem = $(this).closest('.grid-item');
        var item_slot = gridItem.attr('id');
        var item_ = gridItem.find('img.default-accs')[0];

        nashivki.forEach((nashivka, i) => {
            if (nashivka.slot == item_slot || nashivka.slot == 'all') {
                let statsHtml = '';
                for (const stat in nashivka.stats) {
                    if (RuTypes[stat]) {
                        statsHtml += `<span>${RuTypes[stat]}: ${nashivka.stats[stat]}</span>`;
                    }
                }

                const nashivkaHtml = `
                    <div class="modal-nashivka" data-index="${i}" data-slot="${item_slot}" data-image="${nashivka.imageSrc}">
                        <img src="${nashivka.imageSrc}" alt="${nashivka.ru_name}" />
                        <div class="nashivka-name">${nashivka.ru_name}</div>
                        <div class="nashivka-name" style="font-size: 12px; color: pink;">${nashivka.slot_name}</div>
                        <div class="nashivka-stats">${statsHtml}</div>
                    </div>
                `;

                container.append(nashivkaHtml);
            }
        });

        container.on('click', '.modal-nashivka', function (e) {
            if (isMobileDevice()) {
                e.stopPropagation();
            }

            container.off('click', '.modal-nashivka');

            const index = $(this).data('index');
            const slot = $(this).data('slot');
            const $gridItem = $(`.grid-item#${slot}`);
            var item = $gridItem.find('img.default-accs')[0];
            var tooltip = $gridItem.find('.tooltip')[0];
            var nashivka = nashivki[index];

            $($gridItem).find('.tooltip').text($($gridItem).attr('ru-name'));
            if (item != undefined) {
                item.dataset.nashivka = JSON.stringify(nashivka.stats);
                if (item.dataset.nashivka != undefined) {
                    var ruName = nashivka.ru_name;
                    if (ruName) {
                        tooltip.innerHTML = `${tooltip.innerHTML}<br>${ruName}`;
                    }
                    $gridItem.find('img.nashivka').remove();
                    item.insertAdjacentHTML('afterend', `<img src="${nashivka.imageSrc}" class="nashivka">`);
                }
                updateStats();
            }
            $('#modalNashivkaOverlay').css('display', 'none').hide().fadeOut(200);
        });
        if (item_ != undefined) {
            $('#modalNashivkaOverlay').css('display', 'flex').hide().fadeIn(200);
        }
    });

    document.querySelectorAll('.mini-container').forEach(container => {
        container.addEventListener('wheel', function (e) {
            e.preventDefault();
            container.scrollLeft += e.deltaY;
        });
        function updateJustify() {
            if (container.scrollWidth > container.clientWidth) {
                container.style.justifyContent = 'flex-start';
            } else {
                container.style.justifyContent = 'center';
            }
        }

        updateJustify();

        window.addEventListener('resize', updateJustify);
    });
});
