document.addEventListener('DOMContentLoaded', () => {
    const toastTrigger = document.getElementById('liveToastBtn')
    const toast = document.getElementById('liveToast')

    if(toastTrigger){
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toast)
        toastTrigger.addEventListener('click', () => {
            toastBootstrap.show()
        })
    }
})