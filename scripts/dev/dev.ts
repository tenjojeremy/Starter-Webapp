import shellDashboard from '../../devtools/utils/terminal/shellDashboard.js'
import getAppConfig from '../../app.config.js'
import type { CommandProps } from '../../devtools/utils/terminal/shellDashboard.js'
import firebaseJson from '../../firebase.json'

type Props = {
  onReady?: () => any
}

export default async function dev({ onReady }: Props = { onReady: undefined }) {
  const appConfig = await getAppConfig()

  const commands: CommandProps[] = [
    {
      label: 'Vite',
      command: 'npm run app:dev',
      ports: [appConfig.server.local.port],
      color: '#01BF81',
      enableQRCode: true,
    },
    {
      label: `Storybook`,
      command: `npm run storybook:dev`,
      ports: [6007],
      color: '#FF4785',
      enableQRCode: true,
    },
  ]

  if (firebaseJson.emulators) {
    const command = firebaseJson.emulators.functions.port
      ? 'npm run functions:dev'
      : 'npm run emulators:start'

    const emulatorPorts: number[] = []

    for (const [, value] of Object.entries(firebaseJson.emulators)) {
      emulatorPorts.push(value.port)
    }

    if (!emulatorPorts.length) {
      throw new Error('Missing emulator ports in firebase.json')
    }

    commands.push({
      label: `Firebase Emulators`,
      command,
      ports: emulatorPorts,
      color: '#FFCB2E',
      onCommandRunning: async () => {
        const addEmulatorData = await import(
          '../../src/services/firebase/emulator/addEmulatorData/addEmulatorData.js'
        )
        addEmulatorData.default()
      },
    })
  }

  shellDashboard({ commands, onCommandsRunning: onReady })
}
