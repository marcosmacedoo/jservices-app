import { Api } from './Api.js'
import dataIds from './dataIds.js'

export function FormRegistrationService() {
    const $form = document.querySelector(
        `[data-id=${dataIds.formResgistrationService.form}]`
    )
    const $inputTitle = document.querySelector(
        `[data-id=${dataIds.formResgistrationService.inputTitle}]`
    )
    const $inputDescription = document.querySelector(
        `[data-id=${dataIds.formResgistrationService.inputDescription}]`
    )
    const $inputBudget = document.querySelector(
        `[data-id=${dataIds.formResgistrationService.inputBudget}]`
    )
    const $inputDeadline = document.querySelector(
        `[data-id=${dataIds.formResgistrationService.inputDeadline}]`
    )

    function listeningFormOnSubmit() {
        $form.addEventListener('submit', async (event) => {
            event.preventDefault()

            // Array.from(event.target.elements).forEach((element) =>
            //     console.log(element.value)
            // )

            // Colocar a data atual no input deadline
            // Fazer validações dos dados antes de enviar para API
            const service = {
                title: $inputTitle.value,
                description: $inputDescription.value,
                budget: Number($inputBudget.value),
                deadline: new Date($inputDeadline.value),
            }

            const response = await Api().makeApiRequest(
                'http://localhost:3000/services',
                'POST',
                service
            )

            console.log(response)
        })
    }
    return {
        run: () => {
            listeningFormOnSubmit()
        },
    }
}
