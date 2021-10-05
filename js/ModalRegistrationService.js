import dataIds from './dataIds.js'

export function ModalRegistrationService() {
    const $modal = document.querySelector(
        `[data-id=${dataIds.modalResgistrationService.modal}]`
    )
    const $buttonOpenModalRegistrationService = document.querySelector(
        `[data-id=${dataIds.modalResgistrationService.buttonOpenModalRegistrationService}]`
    )
    const $buttonCloseModalRegistrationService = document.querySelector(
        `[data-id=${dataIds.modalResgistrationService.buttonCloseModalRegistrationService}]`
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
