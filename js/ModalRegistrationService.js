import dataIds from './dataIds.js'

export function ModalRegistrationService() {
    const $modal = document.querySelector(
        `[data-id=${dataIds.modalRegistrationService}]`
    )

    return {
        open: () => {
            $modal.classList.remove('gone')
        },

        close: () => {
            $modal.classList.add('gone')
        },
    }
}
