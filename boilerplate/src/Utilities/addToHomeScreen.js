const addToHomeScreen = () =>
  window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault()

    // Stash the event so it can be triggered later.
    window.addToHomeScreen = e
  })

export default addToHomeScreen
