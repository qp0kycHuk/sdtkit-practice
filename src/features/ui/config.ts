export const colors = {
  // white: '#fff',
  // black: '#222',
  // transparent: 'rgba(0,0,0,0)',
  // green: '#009432',
  // yellow: '#f79f1f',
  // primary: '#6C5BAF',
  // red: '#d63031',
  // gray: '#333',

  primary: withOpacity('--primary-rgb'),
  sec: withOpacity('--sec-rgb'),
  blue: withOpacity('--blue-rgb'),
  red: withOpacity('--red-rgb'),
  green: withOpacity('--green-rgb'),
  yellow: withOpacity('--yellow-rgb'),
  white: withOpacity('--white-rgb'),
  black: withOpacity('--black-rgb'),
  l1: withOpacity('--bg1-rgb'),
  l2: withOpacity('--bg2-rgb'),
  l3: withOpacity('--bg3-rgb'),
  default: withOpacity('--default-rgb'),
}

export const elementsSizes = {
  xs: '32px',
  sm: '42px',
  base: '52px',
  lg: '64px',
}

export const screens = {
  xs: 420 + 29.98 + 'px',
  sm: 580 + 29.98 + 'px',
  md: 720 + 29.98 + 'px',
  lg: 1170 + 29.98 + 'px',
}

export const container = {
  xs: 420 + 'px',
  sm: 580 + 'px',
  md: 720 + 'px',
  lg: 1366 + 'px',
}

export const ui = {
  colors,
  elementsSizes,
  btnSize: elementsSizes,
  inputSize: elementsSizes,
  screens,
  container,
}

function withOpacity(variableName: string) {
  return ({ opacityValue }: any) => {
    if (opacityValue !== undefined) {
      return 'rgba(var(' + variableName + '), ' + opacityValue + ')'
    }

    return 'rgba(var(' + variableName + '), 1)'
  }
}
