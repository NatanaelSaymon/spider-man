//addEventListener fique observando quando todo o conteudo do pagina estiver carregado(DOMContentLoaded) e execute uma funcao(arrow function)
document.addEventListener("DOMContentLoaded", () => {
    let timeLine = new TimelineMax();

    timeLine.fromTo(
        '.js-loading', // target
        2 , // Tempo de transicao
        { width: '100%' }, // from
        { width: '0%', delay: 5, ease: Expo.easeInOut} // to
    )

    .fromTo(
        '.js-bg-video', // target
        2 , // Tempo de transicao
        { width: '0%', opacity: 0 }, // from
        { width: '100%', opacity: 1, ease: Expo.easeInOut}, // to
        '-=1' // Adiantamento para comecar antes do tempo de transicao
    )

    .fromTo(
        '.js-navbar-logo', // target
        0.7 , // Tempo de transicao
        { y: -50, opacity: 0 }, // from
        { y: 0, opacity: 1, ease: Expo.easeInOut}, // to
        '-=0.5' // Adiantamento para comecar antes do tempo de transicao
    )

    .fromTo(
        '.js-navbar-mobile', // target
        0.7 , // Tempo de transicao
        { y: -50, opacity: 0 }, // from
        { y: 0, opacity: 1, ease: Expo.easeInOut}, // to
        '-=0.5' // Adiantamento para comecar antes do tempo de transicao
    )

    .fromTo(
        '.js-navbar-list', // target
        0.7 , // Tempo de transicao
        { y: -50, opacity: 0 }, // from
        { y: 0, opacity: 1, ease: Expo.easeInOut}, // to
        '-=0.5' // Adiantamento para comecar antes do tempo de transicao
    )

    .fromTo(
        '.js-navbar-social-list', // target
        0.7 , // Tempo de transicao
        { y: -50, opacity: 0 }, // from
        { y: 0, opacity: 1, ease: Expo.easeInOut}, // to
        '-=0.5' // Adiantamento para comecar antes do tempo de transicao
    )

    .fromTo(
        '.js-container-item-img', // target
        0.7 , // Tempo de transicao
        { y: -50, opacity: 0 }, // from
        { y: 0, opacity: 1, ease: Expo.easeInOut}, // to
        '-=0.5' // Adiantamento para comecar antes do tempo de transicao
    )

    .fromTo(
        '.js-container-item-desc', // target
        0.7 , // Tempo de transicao
        { y: -50, opacity: 0 }, // from
        { y: 0, opacity: 1, ease: Expo.easeInOut}, // to
        '-=0.5' // Adiantamento para comecar antes do tempo de transicao
    )

    .fromTo(
        '.js-container-item-btn', // target
        0.7 , // Tempo de transicao
        { y: -50, opacity: 0 }, // from
        { y: 0, opacity: 1, ease: Expo.easeInOut}, // to
        '-=0.5' // Adiantamento para comecar antes do tempo de transicao
    )

    .fromTo(
        '.js-container-item-logos', // target
        0.7 , // Tempo de transicao
        { y: -50, opacity: 0 }, // from
        { y: 0, opacity: 1, ease: Expo.easeInOut}, // to
        '-=0.5' // Adiantamento para comecar antes do tempo de transicao
    )

    .fromTo(
        '.js-container-item-destaque', // target
        0.7 , // Tempo de transicao
        { y: -50, opacity: 0 }, // from
        { y: 0, opacity: 1, ease: Expo.easeInOut}, // to
        '-=0.5' // Adiantamento para comecar antes do tempo de transicao
    )
})