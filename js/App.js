import { Api } from './Api.js'
import { FormRegistrationService } from './FormRegistrationService.js'
import { ModalRegistrationService } from './ModalRegistrationService.js'

function App() {
    const modalRegistrationService = ModalRegistrationService()
    const formRegistrationService = FormRegistrationService()

    return {
        run: () => {
            modalRegistrationService.listeningEventsClicks()
            formRegistrationService.run()
        },
    }
}

const app = App()

app.run()
