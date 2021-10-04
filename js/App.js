import { ModalRegistrationService } from './ModalRegistrationService.js'

function App() {
    const modalRegistrationService = ModalRegistrationService()

    return {
        run: () => {
            modalRegistrationService.listeningEventsClicks()
        },
    }
}

const app = App()

app.run()
