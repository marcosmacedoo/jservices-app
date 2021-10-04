import dataIds from './dataIds.js'
import { ModalRegistrationService } from './ModalRegistrationService.js'

function App() {
    const $buttonOpenModalRegistrationService = document.querySelector(
        `[data-id=${dataIds.buttonOpenModalRegistrationService}]`
    )
    const $buttonCloseModalRegistrationService = document.querySelector(
        `[data-id=${dataIds.buttonCloseModalRegistrationService}]`
    )
    const modalRegistrationService = ModalRegistrationService()

    function listeningClickButtonOpenModalRegistrationService() {
        $buttonOpenModalRegistrationService.addEventListener('click', () =>
            modalRegistrationService.open()
        )
    }

    function listeningCloseButtonModalRegistrationService() {
        $buttonCloseModalRegistrationService.addEventListener('click', () =>
            modalRegistrationService.close()
        )
    }

    return {
        run: () => {
            listeningClickButtonOpenModalRegistrationService()
            listeningCloseButtonModalRegistrationService()
        },
    }
}

const app = App()

app.run()
