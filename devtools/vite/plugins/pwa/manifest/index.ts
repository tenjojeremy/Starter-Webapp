export default function getManifest({ manifestJson }) {
  return {
    ...manifestJson,
    icons: [
      {
        src: '/images/logo/assets/sizes/192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/logo/assets/sizes/256x256.png',
        sizes: '256x256',
        type: 'image/png',
      },
      {
        src: '/images/logo/assets/sizes/384x384.png',
        sizes: '384x384',
        type: 'image/png',
      },
      {
        src: '/images/logo/assets/sizes/512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
