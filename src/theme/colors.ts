export interface ThemeColors {
  name: string
  label: string
  bg: string
  fg: string
  bg1: string
  bg2: string
  accent: string
  muted: string
  link: string
  green: string
  red: string
  orange: string
}

export const paperDay: ThemeColors = {
  name: 'paper-day',
  label: 'Paper Day',
  bg: '#fbf1c7',
  fg: '#3c3836',
  bg1: '#ebdfb0',
  bg2: '#ddd2a0',
  accent: '#c88010',
  muted: '#7c6f64',
  link: '#79740e',
  green: '#79740e',
  red: '#9d0006',
  orange: '#c88010',
}

export const paperNight: ThemeColors = {
  name: 'paper-night',
  label: 'Paper Night',
  bg: '#282d1c',
  fg: '#dce0d9',
  bg1: '#363c26',
  bg2: '#404834',
  accent: '#d4a033',
  muted: '#666e60',
  link: '#7a9e38',
  green: '#7a9e38',
  red: '#c25d44',
  orange: '#c09060',
}

export const themes = [paperDay, paperNight]