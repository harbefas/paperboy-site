interface InstallContent {
  variantLabel?: string
  code?: string
  linkHref?: string
  linkLabel?: string
}

interface InstallTab {
  id: string
  label: string
  content: InstallContent[]
}

export const installTabs: InstallTab[] = [
  {
    id: 'cli',
    label: 'CLI',
    content: [
      {
        code: 'git clone https://github.com/harbefas/paperboy\ncd paperboy/cli && bash install.sh',
      },
      {
        variantLabel: 'Initialize storage',
        code: 'paperboy init',
      },
    ],
  },
  {
    id: 'firefox',
    label: 'Firefox',
    content: [
      {
        variantLabel: 'Load temporary extension',
        linkHref: 'about:debugging',
        linkLabel: 'about:debugging → This Firefox → Load Temporary Add-on',
      },
      {
        variantLabel: 'Select manifest.json in the repo root',
        linkHref: 'https://github.com/harbefas/paperboy',
        linkLabel: 'View on GitHub',
      },
    ],
  },
  {
    id: 'chrome',
    label: 'Chrome',
    content: [
      {
        variantLabel: 'Enable developer mode',
        linkHref: 'chrome://extensions',
        linkLabel: 'chrome://extensions',
      },
      {
        variantLabel: 'Load unpacked and select the repo root',
        linkHref: 'https://github.com/harbefas/paperboy',
        linkLabel: 'View on GitHub',
      },
    ],
  },
]

export type { InstallContent }