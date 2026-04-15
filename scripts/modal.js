document.addEventListener('DOMContentLoaded', () => {
    const inscreverModalBtn = document.getElementById('inscreverModalBtn')
    const inscreverModal = document.getElementById('inscreverModal')

    inscreverModalBtn.addEventListener('click', () => {
        const inscreverModalBootstrap = bootstrap.Modal.getOrCreateInstance(inscreverModal)
        inscreverModalBootstrap.show()
    })
})