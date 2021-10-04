import dataIds from './dataIds.js'

export function ModalRegistrationService() {
    const $modal = document.querySelector(
        `[data-id=${dataIds.modalRegistrationService}]`
    )
    const $buttonOpenModalRegistrationService = document.querySelector(
        `[data-id=${dataIds.buttonOpenModalRegistrationService}]`
    )
    const $buttonCloseModalRegistrationService = document.querySelector(
        `[data-id=${dataIds.buttonCloseModalRegistrationService}]`
    )

    const open = () => $modal.classList.remove('gone')

    const close = () => $modal.classList.add('gone')

    function listeningClickButtonOpenModalRegistrationService() {
        $buttonOpenModalRegistrationService.addEventListener('click', () =>
            open()
        )
    }

    function listeningCloseButtonModalRegistrationService() {
        $buttonCloseModalRegistrationService.addEventListener('click', () =>
            close()
        )
    }

    return {
        listeningEventsClicks: () => {
            listeningClickButtonOpenModalRegistrationService()

            listeningCloseButtonModalRegistrationService()
        },
    }
}
